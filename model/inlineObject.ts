/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.4.2 nonviolent-adelbert
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { GatewayType } from './gatewayType';
import { GatewayConfig } from './gatewayConfig';


export interface InlineObject { 
    name?: string;
    type?: GatewayType;
    config?: GatewayConfig;
    tags?: { [key: string]: string; };
}

