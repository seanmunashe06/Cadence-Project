#!/bin/bash

kubectl delete -f k8s/dev/
kubectl delete -f k8s/uat/
kubectl delete -f k8s/prod/d