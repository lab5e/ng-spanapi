/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 5.0.1 humorous-jaron
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { MessageTransport } from './messageTransport';


/**
 * This is the messages sent from the device to the backend service
 */
export interface MessageUpstream { 
    messageId?: string;
    collectionId?: string;
    deviceId?: string;
    gatewayId?: string;
    transport?: MessageTransport;
    received?: string;
    payload?: string;
}
export namespace MessageUpstream {
}


