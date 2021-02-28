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
import { SubType } from './SubType';
import { HttpFile } from '../http/http';

export class BlockInfo {
    'block_account'?: string;
    /**
    * 1 raw is the smallest possible division and NANO/Nano (Mnano) is the current standard division used in most wallets, on exchanges, etc.
    */
    'amount'?: string;
    /**
    * 1 raw is the smallest possible division and NANO/Nano (Mnano) is the current standard division used in most wallets, on exchanges, etc.
    */
    'balance'?: string;
    'height'?: string;
    'local_timestamp'?: string;
    'confirmed'?: ModelBoolean;
    'contents'?: string;
    'subtype'?: SubType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "block_account",
            "baseName": "block_account",
            "type": "string",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "balance",
            "baseName": "balance",
            "type": "string",
            "format": ""
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "string",
            "format": ""
        },
        {
            "name": "local_timestamp",
            "baseName": "local_timestamp",
            "type": "string",
            "format": ""
        },
        {
            "name": "confirmed",
            "baseName": "confirmed",
            "type": "ModelBoolean",
            "format": ""
        },
        {
            "name": "contents",
            "baseName": "contents",
            "type": "string",
            "format": ""
        },
        {
            "name": "subtype",
            "baseName": "subtype",
            "type": "SubType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BlockInfo.attributeTypeMap;
    }
    
    public constructor() {
    }
}

