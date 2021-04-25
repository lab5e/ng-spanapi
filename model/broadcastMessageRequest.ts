/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.1.10 hulking-betty
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface BroadcastMessageRequest { 
    collectionId?: string;
    port?: number;
    payload?: string;
    /**
     * Valid transports are \"udp\", \"coap\", \"coap-pull\", \"udp-pull\", \"coap-push\", \"udp-push\". \"udp\" is equivalent to \"udp-push\" and \"coap\" is equivalent to \"coap-push\". Push messages are sent unsolicited to the device wheil pull messages are sent whenever the device wither sends data upstream (for UDP) or does a CoAP request to the CoAP service in span.
     */
    transport?: string;
    coapPath?: string;
}

