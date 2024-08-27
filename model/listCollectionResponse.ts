/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 5.0.0 convulsive-launa
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Collection } from './collection';


/**
 * Collection list. The list contains all the collections you have access to.
 */
export interface ListCollectionResponse { 
    collections?: Array<Collection>;
}

