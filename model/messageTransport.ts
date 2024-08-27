/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 5.0.0 convulsive-launa
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * The message transport can be UDP or CoAP.
 */
export type MessageTransport = 'unspecified' | 'udp' | 'coap' | 'mqtt' | 'gateway' | 'coaps' | 'dtls';

export const MessageTransport = {
    Unspecified: 'unspecified' as MessageTransport,
    Udp: 'udp' as MessageTransport,
    Coap: 'coap' as MessageTransport,
    Mqtt: 'mqtt' as MessageTransport,
    Gateway: 'gateway' as MessageTransport,
    Coaps: 'coaps' as MessageTransport,
    Dtls: 'dtls' as MessageTransport
};

