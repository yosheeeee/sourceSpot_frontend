export interface IAuthor {
	nickname: string;
	avatarSrc?: string;
}

export interface IProjectProps {
	id: number;
	name: string;
	imageSrc?: string;
	description?: string;
	author: IAuthor;
	tags: string[];
}
