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


/**
 * Configuration parameters for a device in a user-managed gateway. The configuration parameters depends on the type of gateway.
 */
export interface GatewayDeviceConfig { 
    /**
     * This is the ID of the gateway this configuration applies to.
     */
    gatewayId?: string;
    params?: { [key: string]: string; };
}

