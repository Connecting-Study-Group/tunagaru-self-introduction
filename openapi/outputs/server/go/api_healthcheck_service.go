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
	"errors"
)

// HealthcheckApiService is a service that implements the logic for the HealthcheckApiServicer
// This service should implement the business logic for every endpoint for the HealthcheckApi API.
// Include any external packages or services that will be required by this service.
type HealthcheckApiService struct {
}

// NewHealthcheckApiService creates a default api service
func NewHealthcheckApiService() HealthcheckApiServicer {
	return &HealthcheckApiService{}
}

// GetHealthcheck - healthcheck
func (s *HealthcheckApiService) GetHealthcheck(ctx context.Context) (ImplResponse, error) {
	// TODO - update GetHealthcheck with the required logic for this service method.
	// Add api_healthcheck_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.

	//TODO: Uncomment the next line to return response Response(200, string{}) or use other options such as http.Ok ...
	//return Response(200, string{}), nil

	return Response(http.StatusNotImplemented, nil), errors.New("GetHealthcheck method not implemented")
}
