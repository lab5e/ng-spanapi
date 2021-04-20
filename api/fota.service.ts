/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 4.1.7 only-deshaun
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { CreateFirmwareRequest } from '../model/models';
import { Firmware } from '../model/models';
import { FirmwareUsageResponse } from '../model/models';
import { ListFirmwareResponse } from '../model/models';
import { RpcStatus } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


export interface SpanClearFirmwareErrorRequestParams {
    collectionId: string;
    deviceId: string;
}

export interface SpanCreateFirmwareRequestParams {
    collectionId: string;
    body: CreateFirmwareRequest;
}

export interface SpanDeleteFirmwareRequestParams {
    collectionId: string;
    imageId: string;
}

export interface SpanFirmwareUsageRequestParams {
    collectionId: string;
    imageId: string;
}

export interface SpanListFirmwareRequestParams {
    collectionId: string;
}

export interface SpanRetrieveFirmwareRequestParams {
    collectionId: string;
    imageId: string;
}

export interface SpanUpdateFirmwareRequestParams {
    /** Collection ID  Collection ID for the collection owning the firmware image. */
    collectionId: string;
    /** Firmware image ID */
    imageId: string;
    body: Firmware;
}


@Injectable({
  providedIn: 'root'
})
export class FotaService {

    protected basePath = 'https://api.lab5e.com/span';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


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
                    httpParams = httpParams.append(key,
                        (value as Date).toISOString().substr(0, 10));
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
    public spanClearFirmwareError(requestParameters: SpanClearFirmwareErrorRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<object>;
    public spanClearFirmwareError(requestParameters: SpanClearFirmwareErrorRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<object>>;
    public spanClearFirmwareError(requestParameters: SpanClearFirmwareErrorRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<object>>;
    public spanClearFirmwareError(requestParameters: SpanClearFirmwareErrorRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        const collectionId = requestParameters.collectionId;
        if (collectionId === null || collectionId === undefined) {
            throw new Error('Required parameter collectionId was null or undefined when calling spanClearFirmwareError.');
        }
        const deviceId = requestParameters.deviceId;
        if (deviceId === null || deviceId === undefined) {
            throw new Error('Required parameter deviceId was null or undefined when calling spanClearFirmwareError.');
        }

        let headers = this.defaultHeaders;

        let credential: string | undefined;
        // authentication (APIToken) required
        credential = this.configuration.lookupCredential('APIToken');
        if (credential) {
            headers = headers.set('X-API-Token', credential);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.delete<object>(`${this.configuration.basePath}/collections/${encodeURIComponent(String(collectionId))}/devices/${encodeURIComponent(String(deviceId))}/fwerror`,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Create firmware
     * Create a new firmware image. This is also invoked by the custom HTTP uploader if the POST uses multipart/formdata for the request.
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public spanCreateFirmware(requestParameters: SpanCreateFirmwareRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Firmware>;
    public spanCreateFirmware(requestParameters: SpanCreateFirmwareRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Firmware>>;
    public spanCreateFirmware(requestParameters: SpanCreateFirmwareRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Firmware>>;
    public spanCreateFirmware(requestParameters: SpanCreateFirmwareRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        const collectionId = requestParameters.collectionId;
        if (collectionId === null || collectionId === undefined) {
            throw new Error('Required parameter collectionId was null or undefined when calling spanCreateFirmware.');
        }
        const body = requestParameters.body;
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling spanCreateFirmware.');
        }

        let headers = this.defaultHeaders;

        let credential: string | undefined;
        // authentication (APIToken) required
        credential = this.configuration.lookupCredential('APIToken');
        if (credential) {
            headers = headers.set('X-API-Token', credential);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.post<Firmware>(`${this.configuration.basePath}/collections/${encodeURIComponent(String(collectionId))}/firmware`,
            body,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
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
    public spanDeleteFirmware(requestParameters: SpanDeleteFirmwareRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Firmware>;
    public spanDeleteFirmware(requestParameters: SpanDeleteFirmwareRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Firmware>>;
    public spanDeleteFirmware(requestParameters: SpanDeleteFirmwareRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Firmware>>;
    public spanDeleteFirmware(requestParameters: SpanDeleteFirmwareRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        const collectionId = requestParameters.collectionId;
        if (collectionId === null || collectionId === undefined) {
            throw new Error('Required parameter collectionId was null or undefined when calling spanDeleteFirmware.');
        }
        const imageId = requestParameters.imageId;
        if (imageId === null || imageId === undefined) {
            throw new Error('Required parameter imageId was null or undefined when calling spanDeleteFirmware.');
        }

        let headers = this.defaultHeaders;

        let credential: string | undefined;
        // authentication (APIToken) required
        credential = this.configuration.lookupCredential('APIToken');
        if (credential) {
            headers = headers.set('X-API-Token', credential);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.delete<Firmware>(`${this.configuration.basePath}/collections/${encodeURIComponent(String(collectionId))}/firmware/${encodeURIComponent(String(imageId))}`,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Firmware usage
     * Shows the firmware usage for devices in the collection
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public spanFirmwareUsage(requestParameters: SpanFirmwareUsageRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<FirmwareUsageResponse>;
    public spanFirmwareUsage(requestParameters: SpanFirmwareUsageRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<FirmwareUsageResponse>>;
    public spanFirmwareUsage(requestParameters: SpanFirmwareUsageRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<FirmwareUsageResponse>>;
    public spanFirmwareUsage(requestParameters: SpanFirmwareUsageRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        const collectionId = requestParameters.collectionId;
        if (collectionId === null || collectionId === undefined) {
            throw new Error('Required parameter collectionId was null or undefined when calling spanFirmwareUsage.');
        }
        const imageId = requestParameters.imageId;
        if (imageId === null || imageId === undefined) {
            throw new Error('Required parameter imageId was null or undefined when calling spanFirmwareUsage.');
        }

        let headers = this.defaultHeaders;

        let credential: string | undefined;
        // authentication (APIToken) required
        credential = this.configuration.lookupCredential('APIToken');
        if (credential) {
            headers = headers.set('X-API-Token', credential);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.patch<FirmwareUsageResponse>(`${this.configuration.basePath}/collections/${encodeURIComponent(String(collectionId))}/firmware/${encodeURIComponent(String(imageId))}/usage`,
            null,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List firmware
     * Lists available firmware images in collection
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public spanListFirmware(requestParameters: SpanListFirmwareRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<ListFirmwareResponse>;
    public spanListFirmware(requestParameters: SpanListFirmwareRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<ListFirmwareResponse>>;
    public spanListFirmware(requestParameters: SpanListFirmwareRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<ListFirmwareResponse>>;
    public spanListFirmware(requestParameters: SpanListFirmwareRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        const collectionId = requestParameters.collectionId;
        if (collectionId === null || collectionId === undefined) {
            throw new Error('Required parameter collectionId was null or undefined when calling spanListFirmware.');
        }

        let headers = this.defaultHeaders;

        let credential: string | undefined;
        // authentication (APIToken) required
        credential = this.configuration.lookupCredential('APIToken');
        if (credential) {
            headers = headers.set('X-API-Token', credential);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.get<ListFirmwareResponse>(`${this.configuration.basePath}/collections/${encodeURIComponent(String(collectionId))}/firmware`,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieve firmware
     * Retrieve information on a firmware image
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public spanRetrieveFirmware(requestParameters: SpanRetrieveFirmwareRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Firmware>;
    public spanRetrieveFirmware(requestParameters: SpanRetrieveFirmwareRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Firmware>>;
    public spanRetrieveFirmware(requestParameters: SpanRetrieveFirmwareRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Firmware>>;
    public spanRetrieveFirmware(requestParameters: SpanRetrieveFirmwareRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        const collectionId = requestParameters.collectionId;
        if (collectionId === null || collectionId === undefined) {
            throw new Error('Required parameter collectionId was null or undefined when calling spanRetrieveFirmware.');
        }
        const imageId = requestParameters.imageId;
        if (imageId === null || imageId === undefined) {
            throw new Error('Required parameter imageId was null or undefined when calling spanRetrieveFirmware.');
        }

        let headers = this.defaultHeaders;

        let credential: string | undefined;
        // authentication (APIToken) required
        credential = this.configuration.lookupCredential('APIToken');
        if (credential) {
            headers = headers.set('X-API-Token', credential);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.get<Firmware>(`${this.configuration.basePath}/collections/${encodeURIComponent(String(collectionId))}/firmware/${encodeURIComponent(String(imageId))}`,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update firmware
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public spanUpdateFirmware(requestParameters: SpanUpdateFirmwareRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Firmware>;
    public spanUpdateFirmware(requestParameters: SpanUpdateFirmwareRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Firmware>>;
    public spanUpdateFirmware(requestParameters: SpanUpdateFirmwareRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Firmware>>;
    public spanUpdateFirmware(requestParameters: SpanUpdateFirmwareRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        const collectionId = requestParameters.collectionId;
        if (collectionId === null || collectionId === undefined) {
            throw new Error('Required parameter collectionId was null or undefined when calling spanUpdateFirmware.');
        }
        const imageId = requestParameters.imageId;
        if (imageId === null || imageId === undefined) {
            throw new Error('Required parameter imageId was null or undefined when calling spanUpdateFirmware.');
        }
        const body = requestParameters.body;
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling spanUpdateFirmware.');
        }

        let headers = this.defaultHeaders;

        let credential: string | undefined;
        // authentication (APIToken) required
        credential = this.configuration.lookupCredential('APIToken');
        if (credential) {
            headers = headers.set('X-API-Token', credential);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.patch<Firmware>(`${this.configuration.basePath}/collections/${encodeURIComponent(String(collectionId))}/firmware/${encodeURIComponent(String(imageId))}`,
            body,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
