/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.1.11 evasive-governor
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface CreateFirmwareRequest { 
    collectionId?: string;
    image?: string;
    version?: string;
    filename?: string;
    tags?: { [key: string]: string; };
}

