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
import { CollectionFirmwareFirmwareManagement } from './collectionFirmwareFirmwareManagement';


export interface CollectionFirmware { 
    /**
     * The current firmware is the firmware that the devices are currently using.
     */
    currentFirmwareId?: string;
    /**
     * The target firmware is set to the desired firmware image for the devices in this collection. If the management is set to \"device\" this will only be used if the target firmware isn\'t set on the device itself.
     */
    targetFirmwareId?: string;
    management?: CollectionFirmwareFirmwareManagement;
}

