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

export class ReceiveRequest {
    'action'?: ReceiveRequest.ActionEnum;
    'wallet'?: string;
    'account'?: string;
    'block'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "ReceiveRequest.ActionEnum"
        },
        {
            "name": "wallet",
            "baseName": "wallet",
            "type": "string"
        },
        {
            "name": "account",
            "baseName": "account",
            "type": "string"
        },
        {
            "name": "block",
            "baseName": "block",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ReceiveRequest.attributeTypeMap;
    }
}

export namespace ReceiveRequest {
    export enum ActionEnum {
        Receive = <any> 'receive'
    }
}
