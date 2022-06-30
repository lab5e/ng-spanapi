/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.2.4 curable-andres
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * This is the network metadata for a device.
 */
export interface NetworkMetadata { 
    /**
     * Allocated IP address.
     */
    allocatedIp?: string;
    allocatedAt?: string;
    /**
     * Cell ID for device. This might not be set, depending on the provider in use.
     */
    cellId?: string;
}

