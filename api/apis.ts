export * from './debugApi';
import { DebugApi } from './debugApi';
export * from './nodeRPCsApi';
import { NodeRPCsApi } from './nodeRPCsApi';
export * from './walletApi';
import { WalletApi } from './walletApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [DebugApi, NodeRPCsApi, WalletApi];
