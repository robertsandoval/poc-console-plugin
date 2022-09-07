oc process -f template.yaml \
  -p PLUGIN_NAME=poc-console-plugin \
  -p NAMESPACE=console-plugins \
  -p IMAGE=quay.io/robertsandoval/poc-console-plugin:dev \
  | oc create -f -
