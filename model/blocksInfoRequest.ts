/**
 * nano-rpc-api
 * API specification for the [Nano Node RPC API](https://docs.nano.org/commands/rpc-protocol) 
 *
 * The version of the OpenAPI document: 19.0.0-alpha
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { ModelBoolean } from './modelBoolean';

export class BlocksInfoRequest {
    'action': BlocksInfoRequest.ActionEnum;
    /**
    * Defaults to `\"false\"`. If `\"true\"`, `\"block\"` contains a JSON subtree instead of a JSON string.
    */
    'jsonBlock'?: ModelBoolean;
    'hashes'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "BlocksInfoRequest.ActionEnum"
        },
        {
            "name": "jsonBlock",
            "baseName": "json_block",
            "type": "ModelBoolean"
        },
        {
            "name": "hashes",
            "baseName": "hashes",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return BlocksInfoRequest.attributeTypeMap;
    }
}

export namespace BlocksInfoRequest {
    export enum ActionEnum {
        BlocksInfo = <any> 'blocks_info'
    }
}
