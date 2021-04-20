/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.1.7 only-deshaun
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { NetworkMetadata } from './networkMetadata';
import { FirmwareMetadata } from './firmwareMetadata';


export interface Device { 
    /**
     * The device ID is assigned by the backend.
     */
    deviceId?: string;
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
    network?: NetworkMetadata;
    firmware?: FirmwareMetadata;
}

