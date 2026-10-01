import { IExpression } from './IExpression';
export interface ILogicalExpression extends IExpression {
	getItem(index: number): IExpression;
	setItem(index: number, item: IExpression): this;
	add(item: IExpression): this;
	addRange(items: IExpression[]): this;
	indexOf(item: IExpression): number;
	insert(index: number, item: IExpression): this;
	remove(item: IExpression): boolean;
	removeAt(index: number): this;
	clear(): this;
	contains(item: IExpression): boolean;
	count(): number;
}
