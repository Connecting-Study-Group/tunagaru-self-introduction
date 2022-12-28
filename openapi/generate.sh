#!/bin/sh
set -ex

# ドキュメントを生成
npx redoc-cli bundle ./specs/openapi.yaml -o ./outputs/document.html

# クライアントを生成
npx openapi-generator-cli generate -i ./specs/openapi.yaml -g typescript-fetch -o ./outputs/client

# サーバーを生成
npx openapi-generator-cli generate -i ./specs/openapi.yaml -g go-server -o ./outputs/server