import { ClientCredentialsGrant } from './ClientCredentialsGrant';
import { ContensisClassicGrant } from './ContensisClassicGrant';
import { ContensisClassicResfreshTokenGrant } from './ContensisClassicResfreshTokenGrant';

export type ClientGrantType = 'client_credentials' | 'contensis_classic' | 'contensis_classic_refresh_token' | 'none';

export type ClientGrants = ClientCredentialsGrant | ContensisClassicGrant | ContensisClassicResfreshTokenGrant;
