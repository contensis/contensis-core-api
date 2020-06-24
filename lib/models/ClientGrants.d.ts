import { ClientCredentialsGrant } from './ClientCredentialsGrant';
import { ClientClassicGrant } from './ClientClassicGrant';
export declare type ClientGrantType = 'client_credentials' | 'classic' | 'none';
export declare type ClientGrants = ClientCredentialsGrant | ClientClassicGrant;
