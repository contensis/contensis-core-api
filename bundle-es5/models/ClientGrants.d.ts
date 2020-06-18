import { ClientCredentialsGrant } from './ClientCredentialsGrant';
import { ClientPasswordGrant } from './ClientPasswordGrant';
import { ClientTokenGrant } from './ClientTokenGrant';
export declare type ClientGrantType = 'client_credentials' | 'password' | 'token' | 'none';
export declare type ClientGrants = ClientCredentialsGrant | ClientPasswordGrant | ClientTokenGrant;
