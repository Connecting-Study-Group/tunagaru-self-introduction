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

type UpdateUserRequest struct {

	Name string `json:"name,omitempty"`

	Company string `json:"company,omitempty"`

	Job string `json:"job,omitempty"`

	Status string `json:"status,omitempty"`

	Bio string `json:"bio,omitempty"`

	IconImageUrl string `json:"icon_image_url,omitempty"`

	TwitterUrl string `json:"twitter_url,omitempty"`

	GithubUrl string `json:"github_url,omitempty"`

	InstagramUrl string `json:"instagram_url,omitempty"`

	WebUrl string `json:"web_url,omitempty"`

	ZennUrl string `json:"zenn_url,omitempty"`

	QiitaUrl string `json:"qiita_url,omitempty"`
}

// AssertUpdateUserRequestRequired checks if the required fields are not zero-ed
func AssertUpdateUserRequestRequired(obj UpdateUserRequest) error {
	return nil
}

// AssertRecurseUpdateUserRequestRequired recursively checks if required fields are not zero-ed in a nested slice.
// Accepts only nested slice of UpdateUserRequest (e.g. [][]UpdateUserRequest), otherwise ErrTypeAssertionError is thrown.
func AssertRecurseUpdateUserRequestRequired(objSlice interface{}) error {
	return AssertRecurseInterfaceRequired(objSlice, func(obj interface{}) error {
		aUpdateUserRequest, ok := obj.(UpdateUserRequest)
		if !ok {
			return ErrTypeAssertionError
		}
		return AssertUpdateUserRequestRequired(aUpdateUserRequest)
	})
}
