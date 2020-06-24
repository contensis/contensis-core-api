import { ClientCredentialsGrant } from './ClientCredentialsGrant';
import { ClientClassicGrant } from './ClientClassicGrant';

export type ClientGrantType = 'client_credentials' | 'classic' | 'none';

export type ClientGrants = ClientCredentialsGrant | ClientClassicGrant;
