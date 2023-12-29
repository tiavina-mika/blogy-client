export interface IArticle {
  _id: string;
  title: string;
  content: string;
  __v: number;
}

export interface IArticleInput extends Pick<IArticle, 'title' | 'content'> {}

export interface IArticlesResponse {
  success: boolean;
  articles: IArticle[];
}
