/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.9.6 authoritarian-betty
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface ActivityEvent { 
    event?: string;
    time?: string;
    collectionId?: string;
    deviceId?: string;
    gatewayId?: string;
    data?: { [key: string]: string; };
}
