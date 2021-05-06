/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.1.14 oversensitive-deante
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Firmware images aren\'t served back out through the API, only the metadata.
 */
export interface Firmware { 
    imageId?: string;
    /**
     * Make sure that the firmware image reports this version. If the version reported by this image is different the FOTA process won\'t be reported as successful since the device will report a version different from this.
     */
    version?: string;
    /**
     * This is just for internal house keeping, making it potentially easier to identify the firmware image.
     */
    filename?: string;
    /**
     * To ensure each image is unique the SHA-256 hash for all images in a collection must be unqique
     */
    sha256?: string;
    length?: number;
    /**
     * Collection ID for the collection owning the firmware image.
     */
    collectionId?: string;
    created?: string;
    /**
     * Tags for firmware image.
     */
    tags?: { [key: string]: string; };
}

