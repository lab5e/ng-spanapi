/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.8.0 indecipherable-ferman
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CoAPMetadata } from './coAPMetadata';
import { MQTTMetadata } from './mQTTMetadata';
import { Device } from './device';
import { OutputMessageType } from './outputMessageType';
import { UDPMetadata } from './uDPMetadata';
import { GatewayMetadata } from './gatewayMetadata';


/**
 * The output data message contains payload plus metadata for a payload received from a device.
 */
export interface OutputDataMessage { 
    type?: OutputMessageType;
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
    mqttMetaData?: MQTTMetadata;
    gatewayMetaData?: GatewayMetadata;
    gatewayId?: string;
}
export namespace OutputDataMessage {
}


