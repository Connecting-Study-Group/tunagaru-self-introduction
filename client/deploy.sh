set -eux

# /../openapi/outputs/openapi_client/tsのプロジェクトをコピー
cp -r ../openapi/outputs/openapi_client/ts/* .

# ビルド
pnpm build