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
import { MessageState } from './messageState';
import { MessageTransport } from './messageTransport';


/**
 * Downstream messages are sent from the backend to the devices.
 */
export interface MessageDownstream { 
    messageId?: string;
    collectionId?: string;
    deviceId?: string;
    gatewayId?: string;
    createdTime?: string;
    sentTime?: string;
    transport?: MessageTransport;
    state?: MessageState;
    payload?: string;
}
export namespace MessageDownstream {
}


