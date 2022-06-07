import { IZenqlQuery } from '..';


export class ZenqlQuery implements IZenqlQuery {
    zenql: string = '';
    pageIndex: number = 0;
    pageSize: number = 20;
    fields?: string[] = [];

    constructor(zenql: string) {
        this.zenql = zenql;
    }

    toJSON() {
        let result: any = {};
        result.pageIndex = this.pageIndex;
        result.pageSize = this.pageSize;
        result.zenql = this.zenql;

        if (this.fields && this.fields.length > 0) {
            result.fields = this.fields;
        }

        return result;
    }
}
