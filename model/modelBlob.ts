/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 5.0.0 convulsive-launa
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * This is a blob (binary large object) that the devices might upload to the service. This is messages that are typically too large to handle like regular status and sensor values, typically media files. The content type might be derived from the first few bytes of the blob and could possibly be incorrect.  Download the blob by accessing the blob URL field. This will work like a regular HTTP request for your client. Authentication is required as always.
 */
export interface ModelBlob { 
    blobId?: string;
    blobPath?: string;
    contentType?: string;
    size?: string;
    created?: string;
    collectionId?: string;
    deviceId?: string;
    gatewayId?: string;
    properties?: { [key: string]: string; };
}

