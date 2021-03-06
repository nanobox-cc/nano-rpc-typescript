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

export class AccountInfoResponse {
    'frontier': string;
    'open_block': string;
    'representative_block': string;
    /**
    * 1 raw is the smallest possible division and NANO/Nano (Mnano) is the current standard division used in most wallets, on exchanges, etc.
    */
    'balance': string;
    'modified_timestamp': string;
    'block_count': string;
    'confirmation_height': string;
    'account_version': string;
    'representative'?: string;
    /**
    * 1 raw is the smallest possible division and NANO/Nano (Mnano) is the current standard division used in most wallets, on exchanges, etc.
    */
    'weight'?: string;
    /**
    * 1 raw is the smallest possible division and NANO/Nano (Mnano) is the current standard division used in most wallets, on exchanges, etc.
    */
    'pending'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "frontier",
            "baseName": "frontier",
            "type": "string",
            "format": ""
        },
        {
            "name": "open_block",
            "baseName": "open_block",
            "type": "string",
            "format": ""
        },
        {
            "name": "representative_block",
            "baseName": "representative_block",
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
            "name": "modified_timestamp",
            "baseName": "modified_timestamp",
            "type": "string",
            "format": ""
        },
        {
            "name": "block_count",
            "baseName": "block_count",
            "type": "string",
            "format": ""
        },
        {
            "name": "confirmation_height",
            "baseName": "confirmation_height",
            "type": "string",
            "format": ""
        },
        {
            "name": "account_version",
            "baseName": "account_version",
            "type": "string",
            "format": ""
        },
        {
            "name": "representative",
            "baseName": "representative",
            "type": "string",
            "format": ""
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "string",
            "format": ""
        },
        {
            "name": "pending",
            "baseName": "pending",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AccountInfoResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}

