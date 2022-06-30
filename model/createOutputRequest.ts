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
import { OutputConfig } from './outputConfig';
import { OutputType } from './outputType';


/**
 * Request type when creating new outputs
 */
export interface CreateOutputRequest { 
    type?: OutputType;
    config?: OutputConfig;
    enabled?: boolean;
    tags?: { [key: string]: string; };
}

