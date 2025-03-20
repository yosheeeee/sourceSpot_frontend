export interface IAuthor {
	name: string;
	username: string;
	avatarSrc: string;
	description: string;
	email: string;
	github: string;
	city: string;
	timezone: string;
	likes: number;
	githubStars: number;
}

export interface IComment {
	author: IAuthor;
	content: string;
}

export interface IProjectProps {
	id: number;
	name: string;
	imageSrc?: string;
	description?: string;
	author: IAuthor;
	tags: string[];
	comments?: IComment[];
	gitHubUrl?: string;
	likes: number;
	views: number;
}
