export interface IAuthor {
	nickname: string;
	avatarSrc?: string;
}

export interface IProjectProps {
	name: string;
	imageSrc?: string;
	description?: string;
	author: IAuthor;
	tags: string[];
}
