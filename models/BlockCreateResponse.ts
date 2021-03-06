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

import { BlockDataJson } from './BlockDataJson';
import { HttpFile } from '../http/http';

export class BlockCreateResponse {
    'hash'?: string;
    'block'?: BlockDataJson;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "hash",
            "baseName": "hash",
            "type": "string",
            "format": ""
        },
        {
            "name": "block",
            "baseName": "block",
            "type": "BlockDataJson",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BlockCreateResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}

