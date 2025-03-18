export interface IProjectProps {
	name: string;
	imageSrc?: string;
	description?: string;
	author: {
		nickname: string;
		avatarSrc?: string;
	};
	tags: string[];
}
