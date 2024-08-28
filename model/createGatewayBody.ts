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
import { GatewayType } from './gatewayType';
import { GatewayConfig } from './gatewayConfig';


export interface CreateGatewayBody { 
    name?: string;
    type?: GatewayType;
    config?: GatewayConfig;
    tags?: { [key: string]: string; };
}
export namespace CreateGatewayBody {
}


