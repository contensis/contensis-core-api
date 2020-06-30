import { ClientCredentialsGrant } from './ClientCredentialsGrant';
import { ContensisClassicGrant } from './ContensisClassicGrant';
import { ContensisClassicResfreshTokenGrant } from './ContensisClassicResfreshTokenGrant';
export declare type ClientGrantType = 'client_credentials' | 'contensis_classic' | 'contensis_classic_refresh_token' | 'none';
export declare type ClientGrants = ClientCredentialsGrant | ContensisClassicGrant | ContensisClassicResfreshTokenGrant;
