import { ClientCredentialsGrant } from './ClientCredentialsGrant';
import { ClientPasswordGrant } from './ClientPasswordGrant';
import { ClientTokenGrant } from './ClientTokenGrant';

export type ClientGrantType = 'client_credentials' | 'password' | 'token' | 'none';

export type ClientGrants = ClientCredentialsGrant | ClientPasswordGrant | ClientTokenGrant;
