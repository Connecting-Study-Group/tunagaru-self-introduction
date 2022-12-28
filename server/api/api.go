package api

import (
	"fmt"

	"github.com/labstack/echo/v4"
)

type Server struct{}

func (w *Server) GetHealthcheck(ctx echo.Context) error {
	fmt.Println("healthcheck")
	return nil
}

func NewServer() *Server {
	return &Server{}
}
