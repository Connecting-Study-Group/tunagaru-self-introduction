set -eux

OPENAPI_PATH="../openapi/outputs/openapi_client/ts"
PRODUCTION_OPENAPI_PATH="./openapi_client/ts"

rm -rf $PRODUCTION_OPENAPI_PATH
mkdir -p $PRODUCTION_OPENAPI_PATH
# openapiのファイルをプロジェクト内にコピー
cp -r $OPENAPI_PATH/* $PRODUCTION_OPENAPI_PATH

# package.jsonで読み込んでるmio-openapi-server-interfaceのパスを書き換える
if [[ "$OSTYPE" == "darwin"* ]]; then
  sed -i '' -e "s|$OPENAPI_PATH|$PRODUCTION_OPENAPI_PATH|g" package.json
else
  sed -i -e "s|$OPENAPI_PATH|$PRODUCTION_OPENAPI_PATH|g" package.json
fi

# ビルド
pnpm build