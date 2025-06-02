/** Contains base members for a VersionInfo object that
 * might not support publishing, archiving or recycling */
export interface VersionInfoBase {
    createdBy: string;
    created: string;
    modifiedBy: string;
    modified: string;
    versionNo: string;
}
