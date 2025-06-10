import { VersionInfoBase } from "./VersionInfoBase";

/** Complete VersionInfo object for resources that support
 * publishing, recycling and archiving */
export interface VersionInfo extends VersionInfoBase {
	publishedBy: string;
	published: string;
	deleted?: string;
	deletedBy?: string;
	archived?: string;
	archivedBy?: string;
}
