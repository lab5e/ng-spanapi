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
import { GatewayDeviceMetadata } from './gatewayDeviceMetadata';
import { InetMetadata } from './inetMetadata';
import { CellularIoTMetadata } from './cellularIoTMetadata';


/**
 * This is the metadata for devices.
 */
export interface DeviceMetadata { 
    ciot?: CellularIoTMetadata;
    inet?: InetMetadata;
    gateway?: GatewayDeviceMetadata;
}

