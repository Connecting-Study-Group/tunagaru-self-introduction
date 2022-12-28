#!/bin/sh
set -ex

# OpenAPIのGoコードを生成
oapi-codegen -package "api" ../openapi/specs/openapi.yaml > ./api/api.gen.go

