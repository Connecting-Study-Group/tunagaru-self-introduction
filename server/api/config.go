package api

import (
	"database/sql"
	"fmt"
	"time"

	"github.com/go-sql-driver/mysql"
)

func ConnectDB() error {
	jst, err := time.LoadLocation("Asia/Tokyo")
	if err != nil {
		return err
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
		return err
	}

	if err := db.Ping(); err != nil {
		fmt.Println(err)
		return err
	}

	fmt.Println("DB connected")

	return nil
}
