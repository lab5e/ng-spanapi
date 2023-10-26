/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.8.0 indecipherable-ferman
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { DeviceConfig } from './deviceConfig';
import { DeviceMetadata } from './deviceMetadata';
import { FirmwareMetadata } from './firmwareMetadata';


/**
 * Request object to create new devices
 */
export interface CreateDeviceRequest { 
    /**
     * Tags are metadata for the device that you can set. These are just strings.
     */
    tags?: { [key: string]: string; };
    firmware?: FirmwareMetadata;
    config?: DeviceConfig;
    metadata?: DeviceMetadata;
}

