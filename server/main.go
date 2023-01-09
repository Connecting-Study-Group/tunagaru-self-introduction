// CHECK: https://github.com/code-yy/oapi-codegen/blob/master/examples/petstore-expanded/echo/petstore.go

package main

import (
	"database/sql"
	"flag"
	"fmt"
	"os"
	"time"

	api "tunagaru-self-introduction-server/api"
	openapi "tunagaru-self-introduction-server/document"

	"github.com/deepmap/oapi-codegen/pkg/middleware"
	"github.com/go-sql-driver/mysql"
	"github.com/labstack/echo/v4"
	echomiddleware "github.com/labstack/echo/v4/middleware"
)

func main() {
	api.ConnectDB()
	var port = flag.Int("port", 8080, "Port for test HTTP server")
	flag.Parse()

	// NOTE: APIスキーマ定義を取得
	swagger, err := openapi.GetSwagger()
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
	e.Use(echomiddleware.CORSWithConfig(echomiddleware.CORSConfig{
		AllowOrigins: []string{"http://localhost:3000"},
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
	}))

	/*
		NOTE:
		バリデーションミドルウェアを使用して、すべてのリクエストをチェックします。OpenAPI スキーマに照らしてチェックします。
	*/
	e.Use(middleware.OapiRequestValidator(swagger))

	/*
		NOTE: CORSの設定
	https://qiita.com/sola-msr/items/828e2eb45cf05b1a2ad4 */
	e.Use(echomiddleware.CORS())

	// NOTE: 上記の NewServer をインターフェースのハンドラとして登録します。
	openapi.RegisterHandlers(e, server)

	// NOTE: そして、世界が終わるまで、HTTPに仕えるのです。(Deepelの翻訳)
	e.Logger.Fatal(e.Start(fmt.Sprintf("0.0.0.0:%d", *port)))
}

const (
	tableNameUser = "users"
)

// TODO: ファイル分けする
func init() {
	jst, err := time.LoadLocation("Asia/Tokyo")
	if err != nil {
		fmt.Println(err)
	}

	c := mysql.Config{
		DBName:               "tsunagaru",
		User:                 "root",
		Passwd:               "$Yuto1124",
		Addr:                 "localhost:3306",
		Net:                  "tcp",
		ParseTime:            true,
		Loc:                  jst,
		AllowNativePasswords: true,
	}

	db, err := sql.Open("mysql", c.FormatDSN())
	if err != nil {
		fmt.Println(err)
	}

	cmdU := fmt.Sprintf(`CREATE TABLE IF NOT EXISTS %s(
		id int NOT NULL AUTO_INCREMENT UNIQUE KEY,
		uid varchar(255) NOT NULL PRIMARY KEY,
		name varchar(255) NOT NULL,
		email varchar(255) NOT NULL,
		icon_image_url varchar(255),
		status varchar(255),
		bio varchar(255),
		company varchar(255),
		Job varchar(255),
		twitter_url varchar(255),
		github_url varchar(255),
		instagram_url varchar(255),
		qiita_url varchar(255),
		zenn_url varchar(255),
		web_url varchar(255),
		created_at datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
		updated_at datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6))`, tableNameUser)

	_, err = db.Exec(cmdU)
	if err != nil {
		fmt.Println(err)
	}

	fmt.Println("Create table")
}
