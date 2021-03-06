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

import { SubType } from './SubType';
import { HttpFile } from '../http/http';

export class BlockDataJson {
    'type': BlockDataJsonTypeEnum;
    'account': string;
    'previous': string;
    'representative': string;
    /**
    * 1 raw is the smallest possible division and NANO/Nano (Mnano) is the current standard division used in most wallets, on exchanges, etc.
    */
    'balance': string;
    'link': string;
    'link_as_account'?: string;
    'signature': string;
    'work': string;
    'subtype'?: SubType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "BlockDataJsonTypeEnum",
            "format": ""
        },
        {
            "name": "account",
            "baseName": "account",
            "type": "string",
            "format": ""
        },
        {
            "name": "previous",
            "baseName": "previous",
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
            "name": "balance",
            "baseName": "balance",
            "type": "string",
            "format": ""
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "string",
            "format": ""
        },
        {
            "name": "link_as_account",
            "baseName": "link_as_account",
            "type": "string",
            "format": ""
        },
        {
            "name": "signature",
            "baseName": "signature",
            "type": "string",
            "format": ""
        },
        {
            "name": "work",
            "baseName": "work",
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
        return BlockDataJson.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type BlockDataJsonTypeEnum = "state" ;

