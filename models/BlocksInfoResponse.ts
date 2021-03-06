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

import { BlockInfo } from './BlockInfo';
import { HttpFile } from '../http/http';

export class BlocksInfoResponse {
    'blocks'?: { [key: string]: BlockInfo; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "blocks",
            "baseName": "blocks",
            "type": "{ [key: string]: BlockInfo; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BlocksInfoResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}

