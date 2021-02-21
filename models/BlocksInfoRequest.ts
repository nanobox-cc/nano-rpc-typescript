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

import { ModelBoolean } from './ModelBoolean';
import { HttpFile } from '../http/http';

export class BlocksInfoRequest {
    'action': BlocksInfoRequestActionEnum;
    /**
    * Defaults to `\"false\"`. If `\"true\"`, `\"block\"` contains a JSON subtree instead of a JSON string.
    */
    'jsonBlock'?: ModelBoolean;
    'hashes'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "BlocksInfoRequestActionEnum",
            "format": ""
        },
        {
            "name": "jsonBlock",
            "baseName": "json_block",
            "type": "ModelBoolean",
            "format": ""
        },
        {
            "name": "hashes",
            "baseName": "hashes",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BlocksInfoRequest.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type BlocksInfoRequestActionEnum = "blocks_info" ;
