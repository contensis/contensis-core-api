export interface Project {
	id: string;
	name: string;
	description: string;
	primaryLanguage: string;
	supportedLanguages: string[];
	color: string; // Probably uncessary, like a: 'a' | 'b';
	deliverySysExclusions: string[];
}
