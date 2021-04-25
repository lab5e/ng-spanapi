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
import { OutputConfig } from './outputConfig';
import { OutputType } from './outputType';


export interface Output { 
    outputId?: string;
    collectionId?: string;
    type?: OutputType;
    config?: OutputConfig;
    enabled?: boolean;
    tags?: { [key: string]: string; };
}

