import { VersionInfo } from './VersionInfo';
import { Field } from './Field';
export interface Component {
    id: string;
    projectId: string;
    name: {
        [key: string]: string;
    };
    description: {
        [key: string]: string;
    };
    fields: Field[];
    enabled: boolean;
    dataFormat: string;
    previewUrl: string;
    version: VersionInfo;
}
