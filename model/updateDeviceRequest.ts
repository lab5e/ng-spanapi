/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.1.13 interdependent-karson
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { FirmwareMetadata } from './firmwareMetadata';


export interface UpdateDeviceRequest { 
    existingCollectionId?: string;
    deviceId?: string;
    /**
     * The collection id for the device. This field is optional and can be omitted if the collection id isn\'t changed. When changing to a new collection you must be an owner of the other collection, ie an administrator of the team that owns the new collection.
     */
    collectionId?: string;
    /**
     * The IMSI is the unique ID for the (e|nu|whatever)SIM card on your device. This is the primary identifier for your device on the network.
     */
    imsi?: string;
    /**
     * The IMEI number is the unique ID for your hardware as seen by the network. Obviously you might have a completely different view on things.
     */
    imei?: string;
    /**
     * Tags are metadata for the device that you can set. These are just strings.
     */
    tags?: { [key: string]: string; };
    firmware?: FirmwareMetadata;
}

