import { VersionStatus } from './VersionStatus';
import { ResponseHandler } from './ResponseHandler';
export interface ClientParams {
    rootUrl: string;
    projectId: string;
    accessToken?: string;
    clientId?: string;
    clientSecret?: string;
    language?: string;
    versionStatus?: VersionStatus;
    pageIndex?: number;
    pageSize?: number;
    responseHandler?: ResponseHandler;
}
