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

export class AccountsFrontiersRequest {
    'action'?: AccountsFrontiersRequest.ActionEnum;
    'accounts'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "AccountsFrontiersRequest.ActionEnum"
        },
        {
            "name": "accounts",
            "baseName": "accounts",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return AccountsFrontiersRequest.attributeTypeMap;
    }
}

export namespace AccountsFrontiersRequest {
    export enum ActionEnum {
        AccountsFrontiers = <any> 'accounts_frontiers'
    }
}
