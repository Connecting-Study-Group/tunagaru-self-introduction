#!/bin/sh
set -ex

# ドキュメントを生成
npx redoc-cli bundle ./specs/openapi.yaml -o ./outputs/document.html

# サーバーを生成
npx openapi-generator-cli generate -i ./specs/openapi.yaml -g go-server -o ./outputs/server

# クライアントを生成
npx openapi-generator-cli generate -i ./specs/openapi.yaml -g typescript-fetch -o ./outputs/openapi_client/ts --additional-properties=npmName=tsunagaru,modelPropertyNaming=camelCase,supportsES6=true,withInterfaces=true,typescriptThreePlus=true
cd ./outputs/openapi_client/ts && npm install && npm run build