// CHECK: https://github.com/code-yy/oapi-codegen/blob/master/examples/petstore-expanded/echo/petstore.go

package main

import (
	"flag"
	"fmt"
	"os"

	"tunagaru-self-introduction-server/api"

	"github.com/deepmap/oapi-codegen/pkg/middleware"
	"github.com/labstack/echo/v4"
	echomiddleware "github.com/labstack/echo/v4/middleware"
)

func main() {
	var port = flag.Int("port", 8080, "Port for test HTTP server")
	flag.Parse()

	// NOTE: APIスキーマ定義を取得
	swagger, err := api.GetSwagger()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error loading swagger spec\n: %s", err)
		os.Exit(1)
	}

	// NOTE:
	// swagger の仕様にある servers 配列を消去し、サーバ名が一致するかどうかの検証を省略する。
	// サーバ名が一致するかどうかの検証は省略されます。これがどのように実行されるかはわからない。
	swagger.Servers = nil

	// NOTE: 生成されたインターフェイスを満たすハンドラのインスタンスを生成する．
	server := api.NewServer()

	// NOTE: これが基本的なEchoルーターの設定方法です。
	e := echo.New()

	// NOTE: すべてのリクエストをログに記録する
	e.Use(echomiddleware.Logger())

	// NOTE:
	// バリデーションミドルウェアを使用して、すべてのリクエストをチェックします。
	// OpenAPI スキーマに照らしてチェックします。
	e.Use(middleware.OapiRequestValidator(swagger))

	// NOTE: 上記の NewServer をインターフェースのハンドラとして登録します。
	api.RegisterHandlers(e, server)

	// NOTE: そして、世界が終わるまで、HTTPに仕えるのです。(Deepelの翻訳)
	e.Logger.Fatal(e.Start(fmt.Sprintf("0.0.0.0:%d", *port)))
}
