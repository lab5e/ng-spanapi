/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.1.16 spooky-devante
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CollectionFirmware } from './collectionFirmware';
import { FieldMask } from './fieldMask';


export interface Collection { 
    /**
     * The ID of the collection. This is assigned by the backend.
     */
    collectionId?: string;
    /**
     * The team ID that owns the collection. This field is required. When you create new collections the default is to use your private team ID.
     */
    teamId?: string;
    fieldMask?: FieldMask;
    firmware?: CollectionFirmware;
    /**
     * Tags for the collection. Tags are metadata fields that you can assign to the collection.
     */
    tags?: { [key: string]: string; };
}

