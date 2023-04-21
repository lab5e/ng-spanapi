/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.5.0 overwrought-dorla
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Metadata about firmware on devices.
 */
export interface FirmwareMetadata { 
    currentFirmwareId?: string;
    targetFirmwareId?: string;
    /**
     * Last reported firmware version.
     */
    firmwareVersion?: string;
    serialNumber?: string;
    modelNumber?: string;
    manufacturer?: string;
    state?: string;
    stateMessage?: string;
}

