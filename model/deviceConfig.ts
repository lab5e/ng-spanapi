/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.6.1 squirming-codi
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { GatewayDeviceConfig } from './gatewayDeviceConfig';
import { CellularIoTConfig } from './cellularIoTConfig';


/**
 * This is the configuration for the device via the various gateways.
 */
export interface DeviceConfig { 
    ciot?: CellularIoTConfig;
    /**
     * This is the configuration for an internet-connected device. There are currently no configuration options for internet devices; the device is identified via the clientcertificate.  This is empty since there\'s no configuration required for the internet  gateway
     */
    inet?: object;
    gateway?: { [key: string]: GatewayDeviceConfig; };
}

