import { ClientCredentialsGrant } from './ClientCredentialsGrant';
import { ContensisClassicGrant } from './ContensisClassicGrant';

export type ClientGrantType = 'client_credentials' | 'contensis_classic' | 'none';

export type ClientGrants = ClientCredentialsGrant | ContensisClassicGrant;
