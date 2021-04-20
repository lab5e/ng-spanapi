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

import { ListOutputResponse } from '../model/models';
import { Output } from '../model/models';
import { OutputLogResponse } from '../model/models';
import { OutputStatusResponse } from '../model/models';
import { RpcStatus } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


export interface SpanCreateOutputRequestParams {
    collectionId: string;
    body: Output;
}

export interface SpanDeleteOutputRequestParams {
    collectionId: string;
    outputId: string;
}

export interface SpanListOutputsRequestParams {
    collectionId: string;
}

export interface SpanLogsRequestParams {
    collectionId: string;
    outputId: string;
}

export interface SpanRetrieveOutputRequestParams {
    collectionId: string;
    outputId: string;
}

export interface SpanStatusRequestParams {
    collectionId: string;
    outputId: string;
}

export interface SpanUpdateOutputRequestParams {
    collectionId: string;
    outputId: string;
    body: Output;
}


@Injectable({
  providedIn: 'root'
})
export class OutputsService {

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
     * Create output
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public spanCreateOutput(requestParameters: SpanCreateOutputRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Output>;
    public spanCreateOutput(requestParameters: SpanCreateOutputRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Output>>;
    public spanCreateOutput(requestParameters: SpanCreateOutputRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Output>>;
    public spanCreateOutput(requestParameters: SpanCreateOutputRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        const collectionId = requestParameters.collectionId;
        if (collectionId === null || collectionId === undefined) {
            throw new Error('Required parameter collectionId was null or undefined when calling spanCreateOutput.');
        }
        const body = requestParameters.body;
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling spanCreateOutput.');
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

        return this.httpClient.post<Output>(`${this.configuration.basePath}/collections/${encodeURIComponent(String(collectionId))}/outputs`,
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
     * Delete output
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public spanDeleteOutput(requestParameters: SpanDeleteOutputRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Output>;
    public spanDeleteOutput(requestParameters: SpanDeleteOutputRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Output>>;
    public spanDeleteOutput(requestParameters: SpanDeleteOutputRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Output>>;
    public spanDeleteOutput(requestParameters: SpanDeleteOutputRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        const collectionId = requestParameters.collectionId;
        if (collectionId === null || collectionId === undefined) {
            throw new Error('Required parameter collectionId was null or undefined when calling spanDeleteOutput.');
        }
        const outputId = requestParameters.outputId;
        if (outputId === null || outputId === undefined) {
            throw new Error('Required parameter outputId was null or undefined when calling spanDeleteOutput.');
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

        return this.httpClient.delete<Output>(`${this.configuration.basePath}/collections/${encodeURIComponent(String(collectionId))}/outputs/${encodeURIComponent(String(outputId))}`,
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
     * List outputs
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public spanListOutputs(requestParameters: SpanListOutputsRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<ListOutputResponse>;
    public spanListOutputs(requestParameters: SpanListOutputsRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<ListOutputResponse>>;
    public spanListOutputs(requestParameters: SpanListOutputsRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<ListOutputResponse>>;
    public spanListOutputs(requestParameters: SpanListOutputsRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        const collectionId = requestParameters.collectionId;
        if (collectionId === null || collectionId === undefined) {
            throw new Error('Required parameter collectionId was null or undefined when calling spanListOutputs.');
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

        return this.httpClient.get<ListOutputResponse>(`${this.configuration.basePath}/collections/${encodeURIComponent(String(collectionId))}/outputs`,
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
     * Output logs
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public spanLogs(requestParameters: SpanLogsRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<OutputLogResponse>;
    public spanLogs(requestParameters: SpanLogsRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<OutputLogResponse>>;
    public spanLogs(requestParameters: SpanLogsRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<OutputLogResponse>>;
    public spanLogs(requestParameters: SpanLogsRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        const collectionId = requestParameters.collectionId;
        if (collectionId === null || collectionId === undefined) {
            throw new Error('Required parameter collectionId was null or undefined when calling spanLogs.');
        }
        const outputId = requestParameters.outputId;
        if (outputId === null || outputId === undefined) {
            throw new Error('Required parameter outputId was null or undefined when calling spanLogs.');
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

        return this.httpClient.get<OutputLogResponse>(`${this.configuration.basePath}/collections/${encodeURIComponent(String(collectionId))}/outputs/${encodeURIComponent(String(outputId))}/logs`,
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
     * Retrieve output
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public spanRetrieveOutput(requestParameters: SpanRetrieveOutputRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Output>;
    public spanRetrieveOutput(requestParameters: SpanRetrieveOutputRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Output>>;
    public spanRetrieveOutput(requestParameters: SpanRetrieveOutputRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Output>>;
    public spanRetrieveOutput(requestParameters: SpanRetrieveOutputRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        const collectionId = requestParameters.collectionId;
        if (collectionId === null || collectionId === undefined) {
            throw new Error('Required parameter collectionId was null or undefined when calling spanRetrieveOutput.');
        }
        const outputId = requestParameters.outputId;
        if (outputId === null || outputId === undefined) {
            throw new Error('Required parameter outputId was null or undefined when calling spanRetrieveOutput.');
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

        return this.httpClient.get<Output>(`${this.configuration.basePath}/collections/${encodeURIComponent(String(collectionId))}/outputs/${encodeURIComponent(String(outputId))}`,
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
     * Output status
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public spanStatus(requestParameters: SpanStatusRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<OutputStatusResponse>;
    public spanStatus(requestParameters: SpanStatusRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<OutputStatusResponse>>;
    public spanStatus(requestParameters: SpanStatusRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<OutputStatusResponse>>;
    public spanStatus(requestParameters: SpanStatusRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        const collectionId = requestParameters.collectionId;
        if (collectionId === null || collectionId === undefined) {
            throw new Error('Required parameter collectionId was null or undefined when calling spanStatus.');
        }
        const outputId = requestParameters.outputId;
        if (outputId === null || outputId === undefined) {
            throw new Error('Required parameter outputId was null or undefined when calling spanStatus.');
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

        return this.httpClient.get<OutputStatusResponse>(`${this.configuration.basePath}/collections/${encodeURIComponent(String(collectionId))}/outputs/${encodeURIComponent(String(outputId))}/status`,
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
     * Update output
     * Running outputs will be restarted if required. Note that the collection ID can\&#39;t be changed on an existing output.
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public spanUpdateOutput(requestParameters: SpanUpdateOutputRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Output>;
    public spanUpdateOutput(requestParameters: SpanUpdateOutputRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Output>>;
    public spanUpdateOutput(requestParameters: SpanUpdateOutputRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Output>>;
    public spanUpdateOutput(requestParameters: SpanUpdateOutputRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        const collectionId = requestParameters.collectionId;
        if (collectionId === null || collectionId === undefined) {
            throw new Error('Required parameter collectionId was null or undefined when calling spanUpdateOutput.');
        }
        const outputId = requestParameters.outputId;
        if (outputId === null || outputId === undefined) {
            throw new Error('Required parameter outputId was null or undefined when calling spanUpdateOutput.');
        }
        const body = requestParameters.body;
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling spanUpdateOutput.');
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

        return this.httpClient.patch<Output>(`${this.configuration.basePath}/collections/${encodeURIComponent(String(collectionId))}/outputs/${encodeURIComponent(String(outputId))}`,
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
