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
import { GatewayStatus } from './gatewayStatus';
import { GatewayType } from './gatewayType';
import { GatewayConfig } from './gatewayConfig';


/**
 * A gateway is a connection between devices and Span
 */
export interface Gateway { 
    gatewayId?: string;
    collectionId?: string;
    name?: string;
    builtIn?: boolean;
    type?: GatewayType;
    config?: GatewayConfig;
    tags?: { [key: string]: string; };
    status?: GatewayStatus;
}
export namespace Gateway {
}


