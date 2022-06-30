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


/**
 * Configuration for outputs.
 */
export interface OutputConfig { 
    /**
     * URL for the webhook.
     */
    url?: string;
    basicAuthUser?: string;
    basicAuthPass?: string;
    customHeaderName?: string;
    customHeaderValue?: string;
    host?: string;
    port?: number;
    key?: string;
    eventName?: string;
    asIsPayload?: boolean;
    endpoint?: string;
    /**
     * MQTT configuration: Disable certificate checks. Default is off.
     */
    disableCertCheck?: boolean;
    username?: string;
    password?: string;
    clientId?: string;
    topicName?: string;
    topicTemplate?: string;
    payloadFormat?: string;
    payloadTemplate?: string;
}

