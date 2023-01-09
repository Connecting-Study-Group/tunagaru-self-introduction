// Package api provides primitives to interact with the openapi HTTP API.
//
// Code generated by github.com/deepmap/oapi-codegen version v1.8.2 DO NOT EDIT.
package api

import (
	"time"
)

// Defines values for UserStatus.
const (
	UserStatusAI UserStatus = "AI"

	UserStatusBackend UserStatus = "Backend"

	UserStatusFrontend UserStatus = "Frontend"

	UserStatusInfra UserStatus = "Infra"

	UserStatusMobile UserStatus = "Mobile"

	UserStatusOther UserStatus = "Other"
)

// User defines model for User.
type User struct {
	Bio          *string    `json:"bio,omitempty"`
	Company      *string    `json:"company,omitempty"`
	CreatedAt    *time.Time `json:"created_at,omitempty"`
	Email        string     `json:"email"`
	GithubUrl    *string    `json:"github_url,omitempty"`
	IconImageUrl *string    `json:"icon_image_url,omitempty"`
	Id           string     `json:"id"`
	InstagramUrl *string    `json:"instagram_url,omitempty"`
	Name         string     `json:"name"`
	QiitaUrl     *string    `json:"qiita_url,omitempty"`

	// フロントエンドエンジニアなどのエンジニアとして詳細情報
	Status     *UserStatus `json:"status,omitempty"`
	TwitterUrl *string     `json:"twitter_url,omitempty"`

	// Discordログインした際に取得できるIDを、UUIDとして登録する
	Uid       string     `json:"uid"`
	UpdatedAt *time.Time `json:"updated_at,omitempty"`
	WebUrl    *string    `json:"web_url,omitempty"`
	ZennUrl   *string    `json:"zenn_url,omitempty"`
}

// フロントエンドエンジニアなどのエンジニアとして詳細情報
type UserStatus string

// UpdateUserResponse defines model for UpdateUserResponse.
type UpdateUserResponse User

// UpdateUserRequest defines model for UpdateUserRequest.
type UpdateUserRequest struct {
	Bio          *string `json:"bio,omitempty"`
	Company      *string `json:"company,omitempty"`
	Email        *string `json:"email,omitempty"`
	GithubUrl    *string `json:"github_url,omitempty"`
	IconImageUrl *string `json:"icon_image_url,omitempty"`
	InstagramUrl *string `json:"instagram_url,omitempty"`
	Job          *string `json:"job,omitempty"`
	Name         *string `json:"name,omitempty"`
	QiitaUrl     *string `json:"qiita_url,omitempty"`

	// フロントエンドエンジニアなどのエンジニアとして詳細情報
	Status     *string `json:"status,omitempty"`
	TwitterUrl *string `json:"twitter_url,omitempty"`
	WebUrl     *string `json:"web_url,omitempty"`
	ZennUrl    *string `json:"zenn_url,omitempty"`
}

// UpdateUserJSONRequestBody defines body for UpdateUser for application/json ContentType.
type UpdateUserJSONRequestBody UpdateUserRequest
