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

export class ActiveDifficultyRequest {
    'action': ActiveDifficultyRequestActionEnum;
    /**
    * Boolean, false by default. Also returns the trend of difficulty seen on the network as a list of multipliers. Sampling occurs every 16 to 36 seconds. The list is ordered such that the first value is the most recent sample. 
    */
    'include_trend'?: ModelBoolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "ActiveDifficultyRequestActionEnum",
            "format": ""
        },
        {
            "name": "include_trend",
            "baseName": "include_trend",
            "type": "ModelBoolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ActiveDifficultyRequest.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type ActiveDifficultyRequestActionEnum = "active_difficulty" ;

