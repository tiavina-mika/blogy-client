import { z } from "zod";
import { articleSchema } from "../validations/article.validations";

export interface IArticle {
  _id: string;
  title: string;
  content: string;
  __v: number;
}

export type IArticleInput = z.infer<typeof articleSchema>;

export interface IArticlesResponse {
  success: boolean;
  articles: IArticle[];
}

export interface IArticleResponse {
  success: boolean;
  article: IArticle;
}
