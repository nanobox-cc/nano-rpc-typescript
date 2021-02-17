import localVarRequest from 'request';

export * from './accountBalanceRequest';
export * from './accountBalanceResponse';
export * from './accountBlockCountRequest';
export * from './accountBlockCountResponse';
export * from './accountGetRequest';
export * from './accountGetResponse';
export * from './accountHistoryRequest';
export * from './accountHistoryResponse';
export * from './accountInfoRequest';
export * from './accountInfoResponse';
export * from './accountKeyRequest';
export * from './accountKeyResponse';
export * from './accountRepresentativeRequest';
export * from './accountRepresentativeResponse';
export * from './accountWeightRequest';
export * from './accountWeightResponse';
export * from './accountsBalancesRequest';
export * from './accountsBalancesResponse';
export * from './accountsCreateRequest';
export * from './accountsCreateResponse';
export * from './accountsFrontiersRequest';
export * from './accountsFrontiersResponse';
export * from './accountsPendingRequest';
export * from './accountsPendingResponse';
export * from './activeDifficultyRequest';
export * from './activeDifficultyResponse';
export * from './availableSupplyRequest';
export * from './availableSupplyResponse';
export * from './block';
export * from './blockAccountRequest';
export * from './blockAccountResponse';
export * from './blockConfirmRequest';
export * from './blockConfirmResponse';
export * from './blockCountRequest';
export * from './blockCountResponse';
export * from './blockCountTypeRequest';
export * from './blockCountTypeResponse';
export * from './blockCreateRequest';
export * from './blockCreateResponse';
export * from './blockDataJson';
export * from './blockHashRequest';
export * from './blockHashResponse';
export * from './blockInfo';
export * from './blockInfoRequest';
export * from './blockInfoResponse';
export * from './blockState';
export * from './blocksInfoRequest';
export * from './blocksInfoResponse';
export * from './blocksRequest';
export * from './blocksResponse';
export * from './bootstrapAnyRequest';
export * from './bootstrapAnyResponse';
export * from './bootstrapLazyRequest';
export * from './bootstrapLazyResponse';
export * from './bootstrapRequest';
export * from './bootstrapResponse';
export * from './chainRequest';
export * from './chainResponse';
export * from './confirmation';
export * from './confirmationActiveRequest';
export * from './confirmationActiveResponse';
export * from './confirmationHeightCurrentlyProcessingRequest';
export * from './confirmationHeightCurrentlyProcessingResponse';
export * from './confirmationHistoryRequest';
export * from './confirmationHistoryResponse';
export * from './confirmationHistoryResponseConfirmationStats';
export * from './confirmationInfo';
export * from './confirmationInfoRequest';
export * from './confirmationInfoResponse';
export * from './keyCreateRequest';
export * from './keyCreateResponse';
export * from './keyExpandRequest';
export * from './keyExpandResponse';
export * from './modelBoolean';
export * from './pendingBlock';
export * from './pendingRequest';
export * from './pendingResponse';
export * from './processRequest';
export * from './processResponse';
export * from './receiveRequest';
export * from './receiveResponse';
export * from './subType';
export * from './walletCreateRequest';
export * from './walletCreateResponse';
export * from './workGenerateRequest';
export * from './workGenerateResponse';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AccountBalanceRequest } from './accountBalanceRequest';
import { AccountBalanceResponse } from './accountBalanceResponse';
import { AccountBlockCountRequest } from './accountBlockCountRequest';
import { AccountBlockCountResponse } from './accountBlockCountResponse';
import { AccountGetRequest } from './accountGetRequest';
import { AccountGetResponse } from './accountGetResponse';
import { AccountHistoryRequest } from './accountHistoryRequest';
import { AccountHistoryResponse } from './accountHistoryResponse';
import { AccountInfoRequest } from './accountInfoRequest';
import { AccountInfoResponse } from './accountInfoResponse';
import { AccountKeyRequest } from './accountKeyRequest';
import { AccountKeyResponse } from './accountKeyResponse';
import { AccountRepresentativeRequest } from './accountRepresentativeRequest';
import { AccountRepresentativeResponse } from './accountRepresentativeResponse';
import { AccountWeightRequest } from './accountWeightRequest';
import { AccountWeightResponse } from './accountWeightResponse';
import { AccountsBalancesRequest } from './accountsBalancesRequest';
import { AccountsBalancesResponse } from './accountsBalancesResponse';
import { AccountsCreateRequest } from './accountsCreateRequest';
import { AccountsCreateResponse } from './accountsCreateResponse';
import { AccountsFrontiersRequest } from './accountsFrontiersRequest';
import { AccountsFrontiersResponse } from './accountsFrontiersResponse';
import { AccountsPendingRequest } from './accountsPendingRequest';
import { AccountsPendingResponse } from './accountsPendingResponse';
import { ActiveDifficultyRequest } from './activeDifficultyRequest';
import { ActiveDifficultyResponse } from './activeDifficultyResponse';
import { AvailableSupplyRequest } from './availableSupplyRequest';
import { AvailableSupplyResponse } from './availableSupplyResponse';
import { Block } from './block';
import { BlockAccountRequest } from './blockAccountRequest';
import { BlockAccountResponse } from './blockAccountResponse';
import { BlockConfirmRequest } from './blockConfirmRequest';
import { BlockConfirmResponse } from './blockConfirmResponse';
import { BlockCountRequest } from './blockCountRequest';
import { BlockCountResponse } from './blockCountResponse';
import { BlockCountTypeRequest } from './blockCountTypeRequest';
import { BlockCountTypeResponse } from './blockCountTypeResponse';
import { BlockCreateRequest } from './blockCreateRequest';
import { BlockCreateResponse } from './blockCreateResponse';
import { BlockDataJson } from './blockDataJson';
import { BlockHashRequest } from './blockHashRequest';
import { BlockHashResponse } from './blockHashResponse';
import { BlockInfo } from './blockInfo';
import { BlockInfoRequest } from './blockInfoRequest';
import { BlockInfoResponse } from './blockInfoResponse';
import { BlockState } from './blockState';
import { BlocksInfoRequest } from './blocksInfoRequest';
import { BlocksInfoResponse } from './blocksInfoResponse';
import { BlocksRequest } from './blocksRequest';
import { BlocksResponse } from './blocksResponse';
import { BootstrapAnyRequest } from './bootstrapAnyRequest';
import { BootstrapAnyResponse } from './bootstrapAnyResponse';
import { BootstrapLazyRequest } from './bootstrapLazyRequest';
import { BootstrapLazyResponse } from './bootstrapLazyResponse';
import { BootstrapRequest } from './bootstrapRequest';
import { BootstrapResponse } from './bootstrapResponse';
import { ChainRequest } from './chainRequest';
import { ChainResponse } from './chainResponse';
import { Confirmation } from './confirmation';
import { ConfirmationActiveRequest } from './confirmationActiveRequest';
import { ConfirmationActiveResponse } from './confirmationActiveResponse';
import { ConfirmationHeightCurrentlyProcessingRequest } from './confirmationHeightCurrentlyProcessingRequest';
import { ConfirmationHeightCurrentlyProcessingResponse } from './confirmationHeightCurrentlyProcessingResponse';
import { ConfirmationHistoryRequest } from './confirmationHistoryRequest';
import { ConfirmationHistoryResponse } from './confirmationHistoryResponse';
import { ConfirmationHistoryResponseConfirmationStats } from './confirmationHistoryResponseConfirmationStats';
import { ConfirmationInfo } from './confirmationInfo';
import { ConfirmationInfoRequest } from './confirmationInfoRequest';
import { ConfirmationInfoResponse } from './confirmationInfoResponse';
import { KeyCreateRequest } from './keyCreateRequest';
import { KeyCreateResponse } from './keyCreateResponse';
import { KeyExpandRequest } from './keyExpandRequest';
import { KeyExpandResponse } from './keyExpandResponse';
import { ModelBoolean } from './modelBoolean';
import { PendingBlock } from './pendingBlock';
import { PendingRequest } from './pendingRequest';
import { PendingResponse } from './pendingResponse';
import { ProcessRequest } from './processRequest';
import { ProcessResponse } from './processResponse';
import { ReceiveRequest } from './receiveRequest';
import { ReceiveResponse } from './receiveResponse';
import { SubType } from './subType';
import { WalletCreateRequest } from './walletCreateRequest';
import { WalletCreateResponse } from './walletCreateResponse';
import { WorkGenerateRequest } from './workGenerateRequest';
import { WorkGenerateResponse } from './workGenerateResponse';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AccountBalanceRequest.ActionEnum": AccountBalanceRequest.ActionEnum,
        "AccountBlockCountRequest.ActionEnum": AccountBlockCountRequest.ActionEnum,
        "AccountGetRequest.ActionEnum": AccountGetRequest.ActionEnum,
        "AccountHistoryRequest.ActionEnum": AccountHistoryRequest.ActionEnum,
        "AccountInfoRequest.ActionEnum": AccountInfoRequest.ActionEnum,
        "AccountKeyRequest.ActionEnum": AccountKeyRequest.ActionEnum,
        "AccountRepresentativeRequest.ActionEnum": AccountRepresentativeRequest.ActionEnum,
        "AccountWeightRequest.ActionEnum": AccountWeightRequest.ActionEnum,
        "AccountsBalancesRequest.ActionEnum": AccountsBalancesRequest.ActionEnum,
        "AccountsCreateRequest.ActionEnum": AccountsCreateRequest.ActionEnum,
        "AccountsFrontiersRequest.ActionEnum": AccountsFrontiersRequest.ActionEnum,
        "AccountsPendingRequest.ActionEnum": AccountsPendingRequest.ActionEnum,
        "ActiveDifficultyRequest.ActionEnum": ActiveDifficultyRequest.ActionEnum,
        "AvailableSupplyRequest.ActionEnum": AvailableSupplyRequest.ActionEnum,
        "BlockAccountRequest.ActionEnum": BlockAccountRequest.ActionEnum,
        "BlockConfirmRequest.ActionEnum": BlockConfirmRequest.ActionEnum,
        "BlockCountRequest.ActionEnum": BlockCountRequest.ActionEnum,
        "BlockCountTypeRequest.ActionEnum": BlockCountTypeRequest.ActionEnum,
        "BlockCreateRequest.ActionEnum": BlockCreateRequest.ActionEnum,
        "BlockCreateRequest.TypeEnum": BlockCreateRequest.TypeEnum,
        "BlockDataJson.TypeEnum": BlockDataJson.TypeEnum,
        "BlockHashRequest.ActionEnum": BlockHashRequest.ActionEnum,
        "BlockInfoRequest.ActionEnum": BlockInfoRequest.ActionEnum,
        "BlockState": BlockState,
        "BlocksInfoRequest.ActionEnum": BlocksInfoRequest.ActionEnum,
        "BlocksRequest.ActionEnum": BlocksRequest.ActionEnum,
        "BootstrapAnyRequest.ActionEnum": BootstrapAnyRequest.ActionEnum,
        "BootstrapLazyRequest.ActionEnum": BootstrapLazyRequest.ActionEnum,
        "BootstrapRequest.ActionEnum": BootstrapRequest.ActionEnum,
        "ChainRequest.ActionEnum": ChainRequest.ActionEnum,
        "ConfirmationActiveRequest.ActionEnum": ConfirmationActiveRequest.ActionEnum,
        "ConfirmationHeightCurrentlyProcessingRequest.ActionEnum": ConfirmationHeightCurrentlyProcessingRequest.ActionEnum,
        "ConfirmationHistoryRequest.ActionEnum": ConfirmationHistoryRequest.ActionEnum,
        "ConfirmationInfoRequest.ActionEnum": ConfirmationInfoRequest.ActionEnum,
        "KeyCreateRequest.ActionEnum": KeyCreateRequest.ActionEnum,
        "KeyExpandRequest.ActionEnum": KeyExpandRequest.ActionEnum,
        "ModelBoolean": ModelBoolean,
        "PendingRequest.ActionEnum": PendingRequest.ActionEnum,
        "ProcessRequest.ActionEnum": ProcessRequest.ActionEnum,
        "ReceiveRequest.ActionEnum": ReceiveRequest.ActionEnum,
        "SubType": SubType,
        "WalletCreateRequest.ActionEnum": WalletCreateRequest.ActionEnum,
        "WorkGenerateRequest.ActionEnum": WorkGenerateRequest.ActionEnum,
}

let typeMap: {[index: string]: any} = {
    "AccountBalanceRequest": AccountBalanceRequest,
    "AccountBalanceResponse": AccountBalanceResponse,
    "AccountBlockCountRequest": AccountBlockCountRequest,
    "AccountBlockCountResponse": AccountBlockCountResponse,
    "AccountGetRequest": AccountGetRequest,
    "AccountGetResponse": AccountGetResponse,
    "AccountHistoryRequest": AccountHistoryRequest,
    "AccountHistoryResponse": AccountHistoryResponse,
    "AccountInfoRequest": AccountInfoRequest,
    "AccountInfoResponse": AccountInfoResponse,
    "AccountKeyRequest": AccountKeyRequest,
    "AccountKeyResponse": AccountKeyResponse,
    "AccountRepresentativeRequest": AccountRepresentativeRequest,
    "AccountRepresentativeResponse": AccountRepresentativeResponse,
    "AccountWeightRequest": AccountWeightRequest,
    "AccountWeightResponse": AccountWeightResponse,
    "AccountsBalancesRequest": AccountsBalancesRequest,
    "AccountsBalancesResponse": AccountsBalancesResponse,
    "AccountsCreateRequest": AccountsCreateRequest,
    "AccountsCreateResponse": AccountsCreateResponse,
    "AccountsFrontiersRequest": AccountsFrontiersRequest,
    "AccountsFrontiersResponse": AccountsFrontiersResponse,
    "AccountsPendingRequest": AccountsPendingRequest,
    "AccountsPendingResponse": AccountsPendingResponse,
    "ActiveDifficultyRequest": ActiveDifficultyRequest,
    "ActiveDifficultyResponse": ActiveDifficultyResponse,
    "AvailableSupplyRequest": AvailableSupplyRequest,
    "AvailableSupplyResponse": AvailableSupplyResponse,
    "Block": Block,
    "BlockAccountRequest": BlockAccountRequest,
    "BlockAccountResponse": BlockAccountResponse,
    "BlockConfirmRequest": BlockConfirmRequest,
    "BlockConfirmResponse": BlockConfirmResponse,
    "BlockCountRequest": BlockCountRequest,
    "BlockCountResponse": BlockCountResponse,
    "BlockCountTypeRequest": BlockCountTypeRequest,
    "BlockCountTypeResponse": BlockCountTypeResponse,
    "BlockCreateRequest": BlockCreateRequest,
    "BlockCreateResponse": BlockCreateResponse,
    "BlockDataJson": BlockDataJson,
    "BlockHashRequest": BlockHashRequest,
    "BlockHashResponse": BlockHashResponse,
    "BlockInfo": BlockInfo,
    "BlockInfoRequest": BlockInfoRequest,
    "BlockInfoResponse": BlockInfoResponse,
    "BlocksInfoRequest": BlocksInfoRequest,
    "BlocksInfoResponse": BlocksInfoResponse,
    "BlocksRequest": BlocksRequest,
    "BlocksResponse": BlocksResponse,
    "BootstrapAnyRequest": BootstrapAnyRequest,
    "BootstrapAnyResponse": BootstrapAnyResponse,
    "BootstrapLazyRequest": BootstrapLazyRequest,
    "BootstrapLazyResponse": BootstrapLazyResponse,
    "BootstrapRequest": BootstrapRequest,
    "BootstrapResponse": BootstrapResponse,
    "ChainRequest": ChainRequest,
    "ChainResponse": ChainResponse,
    "Confirmation": Confirmation,
    "ConfirmationActiveRequest": ConfirmationActiveRequest,
    "ConfirmationActiveResponse": ConfirmationActiveResponse,
    "ConfirmationHeightCurrentlyProcessingRequest": ConfirmationHeightCurrentlyProcessingRequest,
    "ConfirmationHeightCurrentlyProcessingResponse": ConfirmationHeightCurrentlyProcessingResponse,
    "ConfirmationHistoryRequest": ConfirmationHistoryRequest,
    "ConfirmationHistoryResponse": ConfirmationHistoryResponse,
    "ConfirmationHistoryResponseConfirmationStats": ConfirmationHistoryResponseConfirmationStats,
    "ConfirmationInfo": ConfirmationInfo,
    "ConfirmationInfoRequest": ConfirmationInfoRequest,
    "ConfirmationInfoResponse": ConfirmationInfoResponse,
    "KeyCreateRequest": KeyCreateRequest,
    "KeyCreateResponse": KeyCreateResponse,
    "KeyExpandRequest": KeyExpandRequest,
    "KeyExpandResponse": KeyExpandResponse,
    "PendingBlock": PendingBlock,
    "PendingRequest": PendingRequest,
    "PendingResponse": PendingResponse,
    "ProcessRequest": ProcessRequest,
    "ProcessResponse": ProcessResponse,
    "ReceiveRequest": ReceiveRequest,
    "ReceiveResponse": ReceiveResponse,
    "WalletCreateRequest": WalletCreateRequest,
    "WalletCreateResponse": WalletCreateResponse,
    "WorkGenerateRequest": WorkGenerateRequest,
    "WorkGenerateResponse": WorkGenerateResponse,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
