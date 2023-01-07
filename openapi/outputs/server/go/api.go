/*
 * tsunagaru
 *
 * tsunagaru
 *
 * API version: 1.0
 * Contact: codeyy021@gmail.com
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi

import (
	"context"
	"net/http"
)



// HealthcheckApiRouter defines the required methods for binding the api requests to a responses for the HealthcheckApi
// The HealthcheckApiRouter implementation should parse necessary information from the http request,
// pass the data to a HealthcheckApiServicer to perform the required actions, then write the service results to the http response.
type HealthcheckApiRouter interface { 
	GetHealthcheck(http.ResponseWriter, *http.Request)
}
// UserApiRouter defines the required methods for binding the api requests to a responses for the UserApi
// The UserApiRouter implementation should parse necessary information from the http request,
// pass the data to a UserApiServicer to perform the required actions, then write the service results to the http response.
type UserApiRouter interface { 
	CreateUser(http.ResponseWriter, *http.Request)
	UpdateUser(http.ResponseWriter, *http.Request)
}


// HealthcheckApiServicer defines the api actions for the HealthcheckApi service
// This interface intended to stay up to date with the openapi yaml used to generate it,
// while the service implementation can be ignored with the .openapi-generator-ignore file
// and updated with the logic required for the API.
type HealthcheckApiServicer interface { 
	GetHealthcheck(context.Context) (ImplResponse, error)
}


// UserApiServicer defines the api actions for the UserApi service
// This interface intended to stay up to date with the openapi yaml used to generate it,
// while the service implementation can be ignored with the .openapi-generator-ignore file
// and updated with the logic required for the API.
type UserApiServicer interface { 
	CreateUser(context.Context, CreateUserRequest) (ImplResponse, error)
	UpdateUser(context.Context, UpdateUserRequest) (ImplResponse, error)
}
