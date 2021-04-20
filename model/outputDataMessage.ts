/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.1.8 adopted-kali
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CoAPMetadata } from './coAPMetadata';
import { OutputDataMessageOutputMessageType } from './outputDataMessageOutputMessageType';
import { Device } from './device';
import { UDPMetadata } from './uDPMetadata';


/**
 * The output data message contains payload plus metadata for a payload received from a device.
 */
export interface OutputDataMessage { 
    type?: OutputDataMessageOutputMessageType;
    device?: Device;
    payload?: string;
    /**
     * Received time for message. Value is ms since epoch.
     */
    received?: string;
    transport?: string;
    udpMetaData?: UDPMetadata;
    coapMetaData?: CoAPMetadata;
    messageId?: string;
}

