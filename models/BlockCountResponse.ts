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

export class BlockCountResponse {
    'count': string;
    'unchecked': string;
    'cemented'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "string",
            "format": ""
        },
        {
            "name": "unchecked",
            "baseName": "unchecked",
            "type": "string",
            "format": ""
        },
        {
            "name": "cemented",
            "baseName": "cemented",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BlockCountResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}
