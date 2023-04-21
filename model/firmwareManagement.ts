/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.5.0 overwrought-dorla
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * The firmware management settings for a collection can either be \"disabled\", ie there is no firmware management for this collection, \"collection\"; devices are managed through the settings on the collection or \"device\" where each device is configured individual.
 */
export type FirmwareManagement = 'unspecified' | 'disabled' | 'collection' | 'device';

export const FirmwareManagement = {
    Unspecified: 'unspecified' as FirmwareManagement,
    Disabled: 'disabled' as FirmwareManagement,
    Collection: 'collection' as FirmwareManagement,
    Device: 'device' as FirmwareManagement
};

