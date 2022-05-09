/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.2.3 lower-elian
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * This is the request object when updating the firmware image
 */
export interface UpdateFirmwareRequest { 
    collectionId?: string;
    version?: string;
    tags?: { [key: string]: string; };
}

