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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec, HttpContext 
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { ClearFirmwareErrorResponse } from '../model/clearFirmwareErrorResponse';
// @ts-ignore
import { CreateFirmwareRequest } from '../model/createFirmwareRequest';
// @ts-ignore
import { Firmware } from '../model/firmware';
// @ts-ignore
import { FirmwareStats } from '../model/firmwareStats';
// @ts-ignore
import { FirmwareUsageResponse } from '../model/firmwareUsageResponse';
// @ts-ignore
import { ListFirmwareResponse } from '../model/listFirmwareResponse';
// @ts-ignore
import { Status } from '../model/status';
// @ts-ignore
import { UpdateFirmwareRequest } from '../model/updateFirmwareRequest';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


export interface ClearFirmwareErrorRequestParams {
    collectionId: string;
    deviceId: string;
}

export interface CreateFirmwareRequestParams {
    collectionId: string;
    body: CreateFirmwareRequest;
}

export interface DeleteFirmwareRequestParams {
    collectionId: string;
    imageId: string;
}

export interface FirmwareUsageRequestParams {
    collectionId: string;
    imageId: string;
}

export interface ListFirmwareRequestParams {
    collectionId: string;
}

export interface RetrieveFirmwareRequestParams {
    collectionId: string;
    imageId: string;
}

export interface RetrieveFirmwareStatsRequestParams {
    collectionId: string;
    imageId: string;
}

export interface UpdateFirmwareRequestParams {
    existingCollectionId: string;
    imageId: string;
    body: UpdateFirmwareRequest;
}


@Injectable({
  providedIn: 'root'
})
export class FotaService {

    protected basePath = 'https://api.lab5e.com';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string|string[], @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (Array.isArray(basePath) && basePath.length > 0) {
                basePath = basePath[0];
            }

            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    // @ts-ignore
    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Clear FOTA error
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public clearFirmwareError(requestParameters: ClearFirmwareErrorRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<ClearFirmwareErrorResponse>;
    public clearFirmwareError(requestParameters: ClearFirmwareErrorRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<ClearFirmwareErrorResponse>>;
    public clearFirmwareError(requestParameters: ClearFirmwareErrorRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<ClearFirmwareErrorResponse>>;
    public clearFirmwareError(requestParameters: ClearFirmwareErrorRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        const collectionId = requestParameters.collectionId;
        if (collectionId === null || collectionId === undefined) {
            throw new Error('Required parameter collectionId was null or undefined when calling clearFirmwareError.');
        }
        const deviceId = requestParameters.deviceId;
        if (deviceId === null || deviceId === undefined) {
            throw new Error('Required parameter deviceId was null or undefined when calling clearFirmwareError.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (APIToken) required
        localVarCredential = this.configuration.lookupCredential('APIToken');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('X-API-Token', localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/span/collections/${this.configuration.encodeParam({name: "collectionId", value: collectionId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/devices/${this.configuration.encodeParam({name: "deviceId", value: deviceId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/fwerror`;
        return this.httpClient.request<ClearFirmwareErrorResponse>('delete', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Create firmware
     * Firmware images must have unique version numbers and have an unique checksum. The checksum is calculated when the firmware image is uploaded.
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createFirmware(requestParameters: CreateFirmwareRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<Firmware>;
    public createFirmware(requestParameters: CreateFirmwareRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<Firmware>>;
    public createFirmware(requestParameters: CreateFirmwareRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<Firmware>>;
    public createFirmware(requestParameters: CreateFirmwareRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        const collectionId = requestParameters.collectionId;
        if (collectionId === null || collectionId === undefined) {
            throw new Error('Required parameter collectionId was null or undefined when calling createFirmware.');
        }
        const body = requestParameters.body;
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createFirmware.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (APIToken) required
        localVarCredential = this.configuration.lookupCredential('APIToken');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('X-API-Token', localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/span/collections/${this.configuration.encodeParam({name: "collectionId", value: collectionId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/firmware`;
        return this.httpClient.request<Firmware>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: body,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete firmware
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteFirmware(requestParameters: DeleteFirmwareRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<Firmware>;
    public deleteFirmware(requestParameters: DeleteFirmwareRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<Firmware>>;
    public deleteFirmware(requestParameters: DeleteFirmwareRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<Firmware>>;
    public deleteFirmware(requestParameters: DeleteFirmwareRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        const collectionId = requestParameters.collectionId;
        if (collectionId === null || collectionId === undefined) {
            throw new Error('Required parameter collectionId was null or undefined when calling deleteFirmware.');
        }
        const imageId = requestParameters.imageId;
        if (imageId === null || imageId === undefined) {
            throw new Error('Required parameter imageId was null or undefined when calling deleteFirmware.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (APIToken) required
        localVarCredential = this.configuration.lookupCredential('APIToken');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('X-API-Token', localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/span/collections/${this.configuration.encodeParam({name: "collectionId", value: collectionId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/firmware/${this.configuration.encodeParam({name: "imageId", value: imageId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<Firmware>('delete', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Firmware usage
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public firmwareUsage(requestParameters: FirmwareUsageRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<FirmwareUsageResponse>;
    public firmwareUsage(requestParameters: FirmwareUsageRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<FirmwareUsageResponse>>;
    public firmwareUsage(requestParameters: FirmwareUsageRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<FirmwareUsageResponse>>;
    public firmwareUsage(requestParameters: FirmwareUsageRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        const collectionId = requestParameters.collectionId;
        if (collectionId === null || collectionId === undefined) {
            throw new Error('Required parameter collectionId was null or undefined when calling firmwareUsage.');
        }
        const imageId = requestParameters.imageId;
        if (imageId === null || imageId === undefined) {
            throw new Error('Required parameter imageId was null or undefined when calling firmwareUsage.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (APIToken) required
        localVarCredential = this.configuration.lookupCredential('APIToken');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('X-API-Token', localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/span/collections/${this.configuration.encodeParam({name: "collectionId", value: collectionId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/firmware/${this.configuration.encodeParam({name: "imageId", value: imageId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/usage`;
        return this.httpClient.request<FirmwareUsageResponse>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List firmware
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listFirmware(requestParameters: ListFirmwareRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<ListFirmwareResponse>;
    public listFirmware(requestParameters: ListFirmwareRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<ListFirmwareResponse>>;
    public listFirmware(requestParameters: ListFirmwareRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<ListFirmwareResponse>>;
    public listFirmware(requestParameters: ListFirmwareRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        const collectionId = requestParameters.collectionId;
        if (collectionId === null || collectionId === undefined) {
            throw new Error('Required parameter collectionId was null or undefined when calling listFirmware.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (APIToken) required
        localVarCredential = this.configuration.lookupCredential('APIToken');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('X-API-Token', localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/span/collections/${this.configuration.encodeParam({name: "collectionId", value: collectionId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/firmware`;
        return this.httpClient.request<ListFirmwareResponse>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieve firmware
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public retrieveFirmware(requestParameters: RetrieveFirmwareRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<Firmware>;
    public retrieveFirmware(requestParameters: RetrieveFirmwareRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<Firmware>>;
    public retrieveFirmware(requestParameters: RetrieveFirmwareRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<Firmware>>;
    public retrieveFirmware(requestParameters: RetrieveFirmwareRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        const collectionId = requestParameters.collectionId;
        if (collectionId === null || collectionId === undefined) {
            throw new Error('Required parameter collectionId was null or undefined when calling retrieveFirmware.');
        }
        const imageId = requestParameters.imageId;
        if (imageId === null || imageId === undefined) {
            throw new Error('Required parameter imageId was null or undefined when calling retrieveFirmware.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (APIToken) required
        localVarCredential = this.configuration.lookupCredential('APIToken');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('X-API-Token', localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/span/collections/${this.configuration.encodeParam({name: "collectionId", value: collectionId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/firmware/${this.configuration.encodeParam({name: "imageId", value: imageId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<Firmware>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieve firmware statistics
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public retrieveFirmwareStats(requestParameters: RetrieveFirmwareStatsRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<FirmwareStats>;
    public retrieveFirmwareStats(requestParameters: RetrieveFirmwareStatsRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<FirmwareStats>>;
    public retrieveFirmwareStats(requestParameters: RetrieveFirmwareStatsRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<FirmwareStats>>;
    public retrieveFirmwareStats(requestParameters: RetrieveFirmwareStatsRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        const collectionId = requestParameters.collectionId;
        if (collectionId === null || collectionId === undefined) {
            throw new Error('Required parameter collectionId was null or undefined when calling retrieveFirmwareStats.');
        }
        const imageId = requestParameters.imageId;
        if (imageId === null || imageId === undefined) {
            throw new Error('Required parameter imageId was null or undefined when calling retrieveFirmwareStats.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (APIToken) required
        localVarCredential = this.configuration.lookupCredential('APIToken');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('X-API-Token', localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/span/collections/${this.configuration.encodeParam({name: "collectionId", value: collectionId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/firmware/${this.configuration.encodeParam({name: "imageId", value: imageId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/stats`;
        return this.httpClient.request<FirmwareStats>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update firmware
     * Only the version and tags fields can be updated. The other fields will be ignored.
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateFirmware(requestParameters: UpdateFirmwareRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<Firmware>;
    public updateFirmware(requestParameters: UpdateFirmwareRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<Firmware>>;
    public updateFirmware(requestParameters: UpdateFirmwareRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<Firmware>>;
    public updateFirmware(requestParameters: UpdateFirmwareRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        const existingCollectionId = requestParameters.existingCollectionId;
        if (existingCollectionId === null || existingCollectionId === undefined) {
            throw new Error('Required parameter existingCollectionId was null or undefined when calling updateFirmware.');
        }
        const imageId = requestParameters.imageId;
        if (imageId === null || imageId === undefined) {
            throw new Error('Required parameter imageId was null or undefined when calling updateFirmware.');
        }
        const body = requestParameters.body;
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateFirmware.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (APIToken) required
        localVarCredential = this.configuration.lookupCredential('APIToken');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('X-API-Token', localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/span/collections/${this.configuration.encodeParam({name: "existingCollectionId", value: existingCollectionId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/firmware/${this.configuration.encodeParam({name: "imageId", value: imageId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<Firmware>('patch', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: body,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
