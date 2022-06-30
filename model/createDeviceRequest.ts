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
import { NetworkMetadata } from './networkMetadata';
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
    /**
     * The IMSI is the unique ID for the (e|nu|whatever)SIM card on your device. This is the primary identifier for your device on the network.  Deprecated: The IMSI is replaced by CellularIoTMetadata
     */
    imsi?: string;
    /**
     * The IMEI number is the unique ID for your hardware as seen by the network. Obviously you might have a completely different view on things.  Deprecated: The IMEI is replaced by CellularIoTMetadata
     */
    imei?: string;
    network?: NetworkMetadata;
}

