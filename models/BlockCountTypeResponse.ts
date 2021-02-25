/**
 * nano-rpc-api
 * API specification for the [Nano Node RPC API](https://docs.nano.org/commands/rpc-protocol) 
 *
 * OpenAPI spec version: 19.0.0-alpha
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class BlockCountTypeResponse {
    'send': string;
    'receive': string;
    'open': string;
    'change': string;
    'state_v0': string;
    'state_v1': string;
    'state': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "send",
            "baseName": "send",
            "type": "string",
            "format": ""
        },
        {
            "name": "receive",
            "baseName": "receive",
            "type": "string",
            "format": ""
        },
        {
            "name": "open",
            "baseName": "open",
            "type": "string",
            "format": ""
        },
        {
            "name": "change",
            "baseName": "change",
            "type": "string",
            "format": ""
        },
        {
            "name": "state_v0",
            "baseName": "state_v0",
            "type": "string",
            "format": ""
        },
        {
            "name": "state_v1",
            "baseName": "state_v1",
            "type": "string",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BlockCountTypeResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}

