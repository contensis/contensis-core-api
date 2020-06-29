import { ClientCredentialsGrant } from './ClientCredentialsGrant';
import { ContensisClassicGrant } from './ContensisClassicGrant';
export declare type ClientGrantType = 'client_credentials' | 'contensis_classic' | 'none';
export declare type ClientGrants = ClientCredentialsGrant | ContensisClassicGrant;
