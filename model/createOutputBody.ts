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
import { OutputConfig } from './outputConfig';
import { OutputType } from './outputType';


/**
 * Request type when creating new outputs
 */
export interface CreateOutputBody { 
    type?: OutputType;
    config?: OutputConfig;
    enabled?: boolean;
    tags?: { [key: string]: string; };
}
export namespace CreateOutputBody {
}

