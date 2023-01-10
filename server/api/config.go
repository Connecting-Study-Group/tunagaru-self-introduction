package api

import (
	"database/sql"
	"fmt"
	"os"
	"time"

	"github.com/go-sql-driver/mysql"
	"golang.org/x/text/cases"
	"golang.org/x/text/language"
)

func ConnectDB() error {
	jst, err := time.LoadLocation("Asia/Tokyo")
	if err != nil {
		return err
	}

	// os.Getenv("MYSQLHOST"):os.Getenv("MYSQLHOST")を変数化

	c := mysql.Config{
		DBName: os.Getenv("MYSQLDATABASE"),
		User:   os.Getenv("MYSQLUSER"),
		// $YのようにするとYが消えてしまい、環境変数が読み込まれないので、yを小文字で環境変数に登録をし、ここで大文字に変換している
		Passwd:               cases.Title(language.Und).String(os.Getenv("MYSQLPASSWORD")),
		Addr:                 os.Getenv("MYSQLHOST"),
		Net:                  "tcp",
		ParseTime:            true,
		Loc:                  jst,
		AllowNativePasswords: true,
	}

	db, err := sql.Open("mysql", c.FormatDSN())
	if err != nil {
		fmt.Println(err)
		return err
	}

	if err := db.Ping(); err != nil {
		fmt.Println(err)
		return err
	}

	fmt.Println("DB connected")

	return nil
}
