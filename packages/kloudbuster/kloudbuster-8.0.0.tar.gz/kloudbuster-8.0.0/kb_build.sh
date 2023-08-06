#!/bin/bash

# This script will build the kloudbuster VM image and the container image under the ./build directory

# canned user/password for direct login
export DIB_DEV_USER_USERNAME=kb
export DIB_DEV_USER_PASSWORD=kb
export DIB_DEV_USER_PWDLESS_SUDO=Y

# Set the data sources to have ConfigDrive only
export DIB_CLOUD_INIT_DATASOURCES="ConfigDrive"

function cleanup_qcow2 {
  echo
  echo "Error: found unrelated qcow2 files that would make the container image too large."
  echo "Cleanup qcow2 files before re-running:"
  ls -l *.qcow2
  exit 3
}

# build the VM image first
function build_vm {
  kb_image_name=kloudbuster-$KB_TAG
  qcow_count=$(find . -name '*qcow2' | wc -l)
  if [ ! -f $kb_image_name.qcow2 ]; then
    if [ $qcow_count -gt 0 ]; then
      cleanup_qcow2
    fi
    echo "Building $kb_image_name.qcow2..."

    pip3 install "diskimage-builder>=2.15"

    cd ./kb_dib
    # Add the kloudbuster elements directory to the DIB elements path
    export ELEMENTS_PATH=./elements

    # Install Ubuntu 18.04
    export DIB_RELEASE=bionic

    time disk-image-create -o $kb_image_name block-device-mbr ubuntu kloudbuster
    rm -rf venv $kb_image_name.d
    mv $kb_image_name.qcow2 ..
    cd ..
  else
    if [ $qcow_count -gt 1 ]; then
      cleanup_qcow2
    fi
    echo "Reusing $kb_image_name.qcow2"
  fi

  ls -l $kb_image_name.qcow2
}

# Build container
function build_container {
  # Create a wheel package
  # ./dist/kloudbuster-$KB_TAG-py3-none-any.whl
  python setup.py build bdist_wheel || { echo "Error building package"; exit 5; }
  wheel_pkg="kloudbuster-$KB_TAG-py3-none-any.whl"
  if [ -f  ./dist/$wheel_pkg ]; then
    echo "Created package: ./dist/$wheel_pkg"
  else
    echo "Error: Cannot find created package: ./dist/$wheel_pkg"
    exit 4
  fi
  build_args="--build-arg WHEEL_PKG=$wheel_pkg --build-arg VM_IMAGE=$kb_image_name.qcow2"
  echo "docker build $build_args --tag=berrypatch/kloudbuster:$KB_TAG ."
  sudo docker build $build_args --tag=berrypatch/kloudbuster:$KB_TAG .
  echo "sudo docker build $build_args --tag=berrypatch/kloudbuster:latest ."
  sudo docker build $build_args --tag=berrypatch/kloudbuster:latest .
}

function help {
   echo
   echo "Usage: bash build.sh <options>"
   echo "   --vm-only to only build the KloudBuster VM qcow2 image"
   echo
   echo "Builds the KloudBuster VM and Docker container images"
   echo "The Docker container image will include the VM image for easier upload"
   echo
   echo "Kloudbuster must be installed for this script to run (typically would run from a virtual environment)"
   exit 1
}

build_vm_only=0
while [[ $# -gt 0 ]]; do
    key="$1"
    case "$key" in
        --vm-only)
        build_vm_only=1
        ;;
        -h|--help|*)
        help
        ;;
    esac
    # Shift after checking all the cases to get the next option
    shift
done

# check that we have python3/pip3 enabled
python -c 'print 0' >/dev/null 2>/dev/null
if [ $? -eq 0 ]; then
   echo "Error: python 3 is required as default python version"
   exit 3
fi
# check that we are in a virtual environment
INVENV=$(python -c 'import sys;print(hasattr(sys, "real_prefix") or (hasattr(sys, "base_prefix") and sys.base_prefix != sys.prefix))')
if [ $INVENV != "True" ]; then
   echo "Error: must run inside a venv as many packages will be installed"
   exit 4
fi

# check that kloudbuster binary is installed
# Get the kloudbuster version (must be retrieved from stderr)
KB_TAG=$(kloudbuster --version 2>&1)
if [ $? != 0 ]; then
    echo "Installing kloudbuster..."
    # Install kloudbuster in the virtual env in editable mode
    pip3 install -q -e .
    KB_TAG=$(kloudbuster --version 2>&1)
    if [ $? != 0 ]; then
      echo "Error: cannot retrieve version from kloudbuster..."
      echo
      kloudbuster --version
      exit 2
    fi
fi

# check that docker is installed
if [ $build_vm_only = 0 ]; then
  docker --version >/dev/null 2>/dev/null
  if [ $? -ne 0 ]; then
     echo "Error: docker is not installed"
     exit 4
  fi
fi

# check we're at the root of the kloudbuster repo
if [ ! -d kloudbuster -o ! -f Dockerfile ]; then
  echo "Error: Must be called from the root of the kloudbuster repository to run!"
  exit 2
fi

echo
echo "Building KloudBuster with tag $KB_TAG"

build_vm
if [ $build_vm_only = 0 ]; then
  build_container
fi
