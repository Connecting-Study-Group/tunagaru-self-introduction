package api

import (
	"database/sql"
	"fmt"
	"time"

	"github.com/go-sql-driver/mysql"
	"github.com/labstack/echo/v4"
)

type Server struct{}

var Db *sql.DB

const (
	UserStatusAI       UserStatus = "AI"
	UserStatusBackend  UserStatus = "Backend"
	UserStatusFrontend UserStatus = "Frontend"
	UserStatusInfra    UserStatus = "Infra"
	UserStatusMobile   UserStatus = "Mobile"
	UserStatusOther    UserStatus = "Other"
)

// User defines model for User.
type User struct {
	Email        *string     `json:"email,omitempty"`
	Bio          *string     `json:"bio,omitempty"`
	CreatedAt    *time.Time  `json:"created_at,omitempty"`
	GithubUrl    *string     `json:"github_url,omitempty"`
	IconImageUrl string      `json:"icon_image_url"`
	Id           string      `json:"id"`
	InstagramUrl *string     `json:"instagram_url,omitempty"`
	Name         string      `json:"name"`
	QiitaUrl     *string     `json:"qiita_url,omitempty"`
	Status       *UserStatus `json:"status,omitempty"`
	TwitterUrl   *string     `json:"twitter_url,omitempty"`
	UpdatedAt    *time.Time  `json:"updated_at,omitempty"`
	WebUrl       *string     `json:"web_url,omitempty"`
	ZennUrl      *string     `json:"zenn_url,omitempty"`
}

type UserStatus string

type UpdateUserRequest struct {
	Email        *string `json:"email,omitempty"`
	Bio          *string `json:"bio,omitempty"`
	Company      *string `json:"company,omitempty"`
	GithubUrl    *string `json:"github_url,omitempty"`
	IconImageUrl *string `json:"icon_image_url,omitempty"`
	InstagramUrl *string `json:"instagram_url,omitempty"`
	Job          *string `json:"job,omitempty"`
	Name         *string `json:"name,omitempty"`
	QiitaUrl     *string `json:"qiita_url,omitempty"`
	Status       *string `json:"status,omitempty"`
	TwitterUrl   *string `json:"twitter_url,omitempty"`
	WebUrl       *string `json:"web_url,omitempty"`
	ZennUrl      *string `json:"zenn_url,omitempty"`
}

func db() *sql.DB {
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

	return db
}

/*
	// CreateUserRequestがrequest bodyに含まれることを示す
	func (w *Server) CreateUser(ctx echo.Context) error {

		// CreateUserRequestParamsを定義
		var params CreateUserRequestParams

		// ctxからrequest bodyを取得
		if err := ctx.Bind(&params); err != nil {
			fmt.Println(err)
			return err
		}

		// dbにinsertする処理を書く
		cmd := `insert into users (
			name,
			email,
			created_at,
			updated_at
		) values (?, ?, ?, ?)`

		_, err := db().Exec(cmd, params.Name, params.Email, time.Now(), time.Now())
		if err != nil {
			fmt.Println(err)
			return err
		}

		// responseを返す
		return ctx.JSON(200, cmd)

	}
*/

func (w *Server) UpdateUser(ctx echo.Context, uid string) error {
	// CreateUserRequestParamsを定義
	var params UpdateUserRequest

	// ctxからrequest bodyを取得
	if err := ctx.Bind(&params); err != nil {
		fmt.Println(err)
		return err
	}

	// INSERT … ON DUPLICATE KEY UPDATEを使って、対象のemailがすでに存在する場合は更新、存在しない場合は新規作成する
	cmd := `INSERT INTO users (
		uid,
		name,
		email,
		icon_image_url,
		status,
		bio,
		company,
		job,
		github_url,
		instagram_url,
		qiita_url,
		zenn_url,
		twitter_url,
		web_url,
		updated_at
	) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
	ON DUPLICATE KEY UPDATE
		uid = VALUES(uid),
		name = VALUES(name),
		email = VALUES(email),
		icon_image_url = VALUES(icon_image_url),
		status = VALUES(status),
		bio = VALUES(bio),
		company = VALUES(company),
		job = VALUES(job),
		github_url = VALUES(github_url),
		instagram_url = VALUES(instagram_url),
		qiita_url = VALUES(qiita_url),
		zenn_url = VALUES(zenn_url),
		twitter_url = VALUES(twitter_url),
		web_url = VALUES(web_url),
		updated_at = VALUES(updated_at)`

	res, err := db().Exec(cmd,
		uid,
		params.Name,
		params.Email,
		params.IconImageUrl,
		params.Status,
		params.Bio,
		params.Company,
		params.Job,
		params.GithubUrl,
		params.InstagramUrl,
		params.QiitaUrl,
		params.ZennUrl,
		params.TwitterUrl,
		params.WebUrl,
		time.Now())

	if err != nil {
		fmt.Println(err)
		return err
	}

	return ctx.JSON(200, res)
}

func NewServer() *Server {
	return &Server{}
}
