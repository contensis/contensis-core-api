import { VersionStatus } from './VersionStatus';
import { ResponseHandler } from './ResponseHandler';
import { ClientGrantType, ClientGrants } from './ClientGrants';
export interface ClientParams {
	rootUrl: string;
	projectId: string;
	accessToken?: string;
	clientDetails?: ClientGrants;
	clientType?: ClientGrantType;
	defaultHeaders?: { [key: string]: string };
	language?: string;
	versionStatus?: VersionStatus;
	pageIndex?: number;
	pageSize?: number;
	responseHandler?: ResponseHandler;
}
