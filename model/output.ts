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
import { OutputConfig } from './outputConfig';
import { OutputType } from './outputType';


/**
 * Output resource. The configuration depends on the kind of output type. There are five outputs: Webhooks, UDP forwarding, IFTTT events, MQTT client and MQTT broker. The MQTT broker output is just used to configure the built-in MQTT broker in Span.
 */
export interface Output { 
    outputId?: string;
    collectionId?: string;
    type?: OutputType;
    config?: OutputConfig;
    enabled?: boolean;
    tags?: { [key: string]: string; };
}
export namespace Output {
}


