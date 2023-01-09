set -eux

# /../openapi/outputs/openapi_client/tsのプロジェクトをコピー
"`dirname $0`"/setup_production_openapi.sh

# ビルド
pnpm build