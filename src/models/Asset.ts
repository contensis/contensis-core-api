import { Entry } from './Entry';
import { AssetSys } from './AssetSys';

export interface Asset extends Entry {
	sysAssetFile: AssetSys;
}
