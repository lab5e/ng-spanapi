/**
 * The Span API
 * API for device, collection, output and firmware management
 *
 * The version of the OpenAPI document: 5.0.2 subversive-jamila
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
import { CreateGatewayBody } from '../model/createGatewayBody';
// @ts-ignore
import { Gateway } from '../model/gateway';
// @ts-ignore
import { GatewayCertificateResponse } from '../model/gatewayCertificateResponse';
// @ts-ignore
import { GatewayStats } from '../model/gatewayStats';
// @ts-ignore
import { ListGatewayResponse } from '../model/listGatewayResponse';
// @ts-ignore
import { RpcStatus } from '../model/rpcStatus';
// @ts-ignore
import { UpdateGatewayBody } from '../model/updateGatewayBody';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


export interface CreateGatewayRequestParams {
    collectionId: string;
    body: CreateGatewayBody;
}

export interface DeleteGatewayRequestParams {
    collectionId: string;
    gatewayId: string;
}

export interface GatewayCertificatesRequestParams {
    collectionId: string;
    gatewayId: string;
}

export interface ListGatewaysRequestParams {
    collectionId: string;
}

export interface RetrieveGatewayRequestParams {
    collectionId: string;
    gatewayId: string;
}

export interface RetrieveGatewayStatsRequestParams {
    collectionId: string;
    gatewayId: string;
}

export interface UpdateGatewayRequestParams {
    existingCollectionId: string;
    gatewayId: string;
    body: UpdateGatewayBody;
}


@Injectable({
  providedIn: 'root'
})
export class GatewaysService {

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
     * Create gateway
     * Create a new gateway.
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createGateway(requestParameters: CreateGatewayRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<Gateway>;
    public createGateway(requestParameters: CreateGatewayRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<Gateway>>;
    public createGateway(requestParameters: CreateGatewayRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<Gateway>>;
    public createGateway(requestParameters: CreateGatewayRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        const collectionId = requestParameters.collectionId;
        if (collectionId === null || collectionId === undefined) {
            throw new Error('Required parameter collectionId was null or undefined when calling createGateway.');
        }
        const body = requestParameters.body;
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createGateway.');
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

        let localVarPath = `/span/collections/${this.configuration.encodeParam({name: "collectionId", value: collectionId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/gateways`;
        return this.httpClient.request<Gateway>('post', `${this.configuration.basePath}${localVarPath}`,
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
     * Delete gateway
     * Remove a gateway from Span.
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteGateway(requestParameters: DeleteGatewayRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<Gateway>;
    public deleteGateway(requestParameters: DeleteGatewayRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<Gateway>>;
    public deleteGateway(requestParameters: DeleteGatewayRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<Gateway>>;
    public deleteGateway(requestParameters: DeleteGatewayRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        const collectionId = requestParameters.collectionId;
        if (collectionId === null || collectionId === undefined) {
            throw new Error('Required parameter collectionId was null or undefined when calling deleteGateway.');
        }
        const gatewayId = requestParameters.gatewayId;
        if (gatewayId === null || gatewayId === undefined) {
            throw new Error('Required parameter gatewayId was null or undefined when calling deleteGateway.');
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

        let localVarPath = `/span/collections/${this.configuration.encodeParam({name: "collectionId", value: collectionId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/gateways/${this.configuration.encodeParam({name: "gatewayId", value: gatewayId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<Gateway>('delete', `${this.configuration.basePath}${localVarPath}`,
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
     * Get issued certificate(s) for gateway
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public gatewayCertificates(requestParameters: GatewayCertificatesRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<GatewayCertificateResponse>;
    public gatewayCertificates(requestParameters: GatewayCertificatesRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<GatewayCertificateResponse>>;
    public gatewayCertificates(requestParameters: GatewayCertificatesRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<GatewayCertificateResponse>>;
    public gatewayCertificates(requestParameters: GatewayCertificatesRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        const collectionId = requestParameters.collectionId;
        if (collectionId === null || collectionId === undefined) {
            throw new Error('Required parameter collectionId was null or undefined when calling gatewayCertificates.');
        }
        const gatewayId = requestParameters.gatewayId;
        if (gatewayId === null || gatewayId === undefined) {
            throw new Error('Required parameter gatewayId was null or undefined when calling gatewayCertificates.');
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

        let localVarPath = `/span/collections/${this.configuration.encodeParam({name: "collectionId", value: collectionId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/gateways/${this.configuration.encodeParam({name: "gatewayId", value: gatewayId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/certs`;
        return this.httpClient.request<GatewayCertificateResponse>('get', `${this.configuration.basePath}${localVarPath}`,
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
     * List gateways
     * List the user\&#39;s gatways, including built-in gateways.
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listGateways(requestParameters: ListGatewaysRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<ListGatewayResponse>;
    public listGateways(requestParameters: ListGatewaysRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<ListGatewayResponse>>;
    public listGateways(requestParameters: ListGatewaysRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<ListGatewayResponse>>;
    public listGateways(requestParameters: ListGatewaysRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        const collectionId = requestParameters.collectionId;
        if (collectionId === null || collectionId === undefined) {
            throw new Error('Required parameter collectionId was null or undefined when calling listGateways.');
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

        let localVarPath = `/span/collections/${this.configuration.encodeParam({name: "collectionId", value: collectionId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/gateways`;
        return this.httpClient.request<ListGatewayResponse>('get', `${this.configuration.basePath}${localVarPath}`,
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
     * Retrieve gateway
     * Get gateway information
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public retrieveGateway(requestParameters: RetrieveGatewayRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<Gateway>;
    public retrieveGateway(requestParameters: RetrieveGatewayRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<Gateway>>;
    public retrieveGateway(requestParameters: RetrieveGatewayRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<Gateway>>;
    public retrieveGateway(requestParameters: RetrieveGatewayRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        const collectionId = requestParameters.collectionId;
        if (collectionId === null || collectionId === undefined) {
            throw new Error('Required parameter collectionId was null or undefined when calling retrieveGateway.');
        }
        const gatewayId = requestParameters.gatewayId;
        if (gatewayId === null || gatewayId === undefined) {
            throw new Error('Required parameter gatewayId was null or undefined when calling retrieveGateway.');
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

        let localVarPath = `/span/collections/${this.configuration.encodeParam({name: "collectionId", value: collectionId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/gateways/${this.configuration.encodeParam({name: "gatewayId", value: gatewayId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<Gateway>('get', `${this.configuration.basePath}${localVarPath}`,
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
     * Retrieve gateway statistics
     * Get statistics for gateway
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public retrieveGatewayStats(requestParameters: RetrieveGatewayStatsRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<GatewayStats>;
    public retrieveGatewayStats(requestParameters: RetrieveGatewayStatsRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<GatewayStats>>;
    public retrieveGatewayStats(requestParameters: RetrieveGatewayStatsRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<GatewayStats>>;
    public retrieveGatewayStats(requestParameters: RetrieveGatewayStatsRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        const collectionId = requestParameters.collectionId;
        if (collectionId === null || collectionId === undefined) {
            throw new Error('Required parameter collectionId was null or undefined when calling retrieveGatewayStats.');
        }
        const gatewayId = requestParameters.gatewayId;
        if (gatewayId === null || gatewayId === undefined) {
            throw new Error('Required parameter gatewayId was null or undefined when calling retrieveGatewayStats.');
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

        let localVarPath = `/span/collections/${this.configuration.encodeParam({name: "collectionId", value: collectionId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/gateways/${this.configuration.encodeParam({name: "gatewayId", value: gatewayId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/stats`;
        return this.httpClient.request<GatewayStats>('get', `${this.configuration.basePath}${localVarPath}`,
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
     * Update gateway
     * Update configuration for a gateway. If you want to remove or move a gateway from the collection the devices in the collection must not have any gateway configuration. The certificates for the gateway are unchanged when the gateway is moved.
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateGateway(requestParameters: UpdateGatewayRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<Gateway>;
    public updateGateway(requestParameters: UpdateGatewayRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<Gateway>>;
    public updateGateway(requestParameters: UpdateGatewayRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<Gateway>>;
    public updateGateway(requestParameters: UpdateGatewayRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        const existingCollectionId = requestParameters.existingCollectionId;
        if (existingCollectionId === null || existingCollectionId === undefined) {
            throw new Error('Required parameter existingCollectionId was null or undefined when calling updateGateway.');
        }
        const gatewayId = requestParameters.gatewayId;
        if (gatewayId === null || gatewayId === undefined) {
            throw new Error('Required parameter gatewayId was null or undefined when calling updateGateway.');
        }
        const body = requestParameters.body;
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateGateway.');
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

        let localVarPath = `/span/collections/${this.configuration.encodeParam({name: "existingCollectionId", value: existingCollectionId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/gateways/${this.configuration.encodeParam({name: "gatewayId", value: gatewayId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<Gateway>('patch', `${this.configuration.basePath}${localVarPath}`,
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
