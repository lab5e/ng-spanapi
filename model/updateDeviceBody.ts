/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 5.0.2 subversive-jamila
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { DeviceConfig } from './deviceConfig';
import { FirmwareMetadata } from './firmwareMetadata';


/**
 * Updating the device
 */
export interface UpdateDeviceBody { 
    /**
     * The collection id for the device. This field is optional and can be omitted if the collection id isn\'t changed. When changing to a new collection you must be an owner of the other collection, ie an administrator of the team that owns the new collection.
     */
    collectionId?: string;
    /**
     * Tags are metadata for the device that you can set. These are just strings.
     */
    tags?: { [key: string]: string; };
    firmware?: FirmwareMetadata;
    config?: DeviceConfig;
    enabled?: boolean;
}

