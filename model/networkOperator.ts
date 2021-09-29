/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.1.18 disgruntled-jerald
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Operator holds information on the network operator. There might be several operators involved; one operator is running the network your devices are connected to and the SIM card in your device belongs to a different operator.
 */
export interface NetworkOperator { 
    /**
     * The Mobil Country Code for the operator.
     */
    mcc?: number;
    mnc?: number;
    country?: string;
    network?: string;
    countryCode?: string;
}

