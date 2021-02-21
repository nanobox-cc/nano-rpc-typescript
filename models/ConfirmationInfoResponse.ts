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

import { ConfirmationInfo } from './ConfirmationInfo';
import { HttpFile } from '../http/http';

export class ConfirmationInfoResponse {
    'announcements'?: string;
    'lastWinner'?: string;
    /**
    * 1 raw is the smallest possible division and NANO/Nano (Mnano) is the current standard division used in most wallets, on exchanges, etc.
    */
    'totalTally'?: number;
    'blocks'?: { [key: string]: ConfirmationInfo; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "announcements",
            "baseName": "announcements",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastWinner",
            "baseName": "last_winner",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalTally",
            "baseName": "total_tally",
            "type": "number",
            "format": ""
        },
        {
            "name": "blocks",
            "baseName": "blocks",
            "type": "{ [key: string]: ConfirmationInfo; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConfirmationInfoResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}
