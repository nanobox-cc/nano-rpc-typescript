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
import { ModelBoolean } from './ModelBoolean';
import { SubType } from './SubType';
import { HttpFile } from '../http/http';

export class ProcessRequest {
    'action': ProcessRequestActionEnum;
    /**
    * Defaults to `\"false\"`. If `\"true\"`, `\"block\"` contains a JSON subtree instead of a JSON string.
    */
    'jsonBlock'?: ModelBoolean;
    'block': BlockDataJson;
    'subtype'?: SubType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "ProcessRequestActionEnum",
            "format": ""
        },
        {
            "name": "jsonBlock",
            "baseName": "json_block",
            "type": "ModelBoolean",
            "format": ""
        },
        {
            "name": "block",
            "baseName": "block",
            "type": "BlockDataJson",
            "format": ""
        },
        {
            "name": "subtype",
            "baseName": "subtype",
            "type": "SubType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProcessRequest.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type ProcessRequestActionEnum = "process" ;
