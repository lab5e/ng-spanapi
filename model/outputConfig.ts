/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.1.7 prized-adelbert
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Output configuration.
 */
export interface OutputConfig { 
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
}

