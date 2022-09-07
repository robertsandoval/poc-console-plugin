#!/bin/bash


podman build -t quay.io/robertsandoval/poc-console-plugin:$1 .

podman push quay.io/robertsandoval/poc-console-plugin:$1

oc import-image poc-console-plugin --all

