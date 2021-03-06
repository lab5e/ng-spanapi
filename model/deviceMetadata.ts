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
import { InetMetadata } from './inetMetadata';
import { NetworkOperator } from './networkOperator';
import { CellularIoTMetadata } from './cellularIoTMetadata';


/**
 * This is the metadata for devices.
 */
export interface DeviceMetadata { 
    simOperator?: NetworkOperator;
    ciot?: CellularIoTMetadata;
    inet?: InetMetadata;
}

