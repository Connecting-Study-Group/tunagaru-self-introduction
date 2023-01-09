#!/bin/sh
set -ex

OPENAPI_YAML=../openapi/specs/openapi.yaml

# OpenAPIのGoコードを生成
oapi-codegen -package "api" -generate server -o ./document/openapi.gen.server.go $OPENAPI_YAML
oapi-codegen -package "api" -generate spec -o ./document/openapi.gen.spec.go $OPENAPI_YAML
oapi-codegen -package "api" -generate types -o ./document/openapi.gen.types.go $OPENAPI_YAML


