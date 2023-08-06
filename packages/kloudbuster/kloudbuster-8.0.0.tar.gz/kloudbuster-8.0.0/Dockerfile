# docker file for creating a container that has kloudbuster installed and ready to use
# this will build from uptreams master latest

FROM ubuntu:20.04

# Simpler would be to clone direct from upstream (latest)
# but the content might differ from the curent repo
# So we'd rather copy the current kloudbuster directory
# along with the pre-built qcow2 image

# The name of the kloudbuster wheel package
# must be placed under ./dist directory before calling docker build
# example: ./dist/kloudbuster-8.0.0-py3-none-any.whl
ARG WHEEL_PKG

# The name of the kloudbuster VM qcow2 image
# must be placed in the current directory
# example: ./kloudbuster-8.0.0.qcow2
ARG VM_IMAGE

# copy the wheel package so it can be installed inside the container
COPY ./dist/$WHEEL_PKG /

# copy the VM image under /
COPY $VM_IMAGE /

# copy the VM Image

# Install KloudBuster script and dependencies
RUN apt-get update \
    && apt-get install -y python3 python3-pip python-is-python3 \
    && pip3 install /$WHEEL_PKG \
    && rm -f /$WHEEL_PKG
