/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.7.0 actionable-aryanna
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { DeviceStats } from './deviceStats';
import { FirmwareStats } from './firmwareStats';
import { OutputStats } from './outputStats';
import { GatewayStats } from './gatewayStats';
import { BlobStats } from './blobStats';


/**
 * This is statistics for an collection.
 */
export interface CollectionStats { 
    deviceCount?: number;
    outputCount?: number;
    firmwareCount?: number;
    blobCount?: number;
    gatewayCount?: number;
    devices?: DeviceStats;
    outputs?: OutputStats;
    firmware?: FirmwareStats;
    blobs?: BlobStats;
    gateways?: GatewayStats;
}

