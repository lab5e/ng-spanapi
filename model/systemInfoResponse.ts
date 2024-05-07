/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.9.6 authoritarian-betty
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Response object for system information. This contains system-level information.
 */
export interface SystemInfoResponse { 
    /**
     * This is the system version
     */
    version?: string;
    /**
     * The build time for this version.
     */
    buildDate?: string;
    /**
     * Human-readable code name for this release. This can be easier to remember than the version number.
     */
    releaseName?: string;
}

