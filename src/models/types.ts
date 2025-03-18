export interface IAuthor {
  nickname: string;
  avatarSrc?: string;
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
