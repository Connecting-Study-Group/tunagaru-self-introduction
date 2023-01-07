/* tslint:disable */
/* eslint-disable */
/**
 * tsunagaru
 * tsunagaru
 *
 * The version of the OpenAPI document: 1.0
 * Contact: codeyy021@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CreateUserRequest
 */
export interface CreateUserRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateUserRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserRequest
     */
    iconImageUrl: string;
}

/**
 * Check if a given object implements the CreateUserRequest interface.
 */
export function instanceOfCreateUserRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "iconImageUrl" in value;

    return isInstance;
}

export function CreateUserRequestFromJSON(json: any): CreateUserRequest {
    return CreateUserRequestFromJSONTyped(json, false);
}

export function CreateUserRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateUserRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'iconImageUrl': json['icon_image_url'],
    };
}

export function CreateUserRequestToJSON(value?: CreateUserRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'icon_image_url': value.iconImageUrl,
    };
}
