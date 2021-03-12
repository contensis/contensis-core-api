export type LocalisedValue<T> = { [key: string]: T };

export type LocalisedString = LocalisedValue<string>;

export type LocalisedIdAndValue = { id: string, name: LocalisedString };
