import { http } from "../config/https"
import { IArticleInput, IArticleResponse, IArticlesResponse } from "../types/article.types";

export const getArticlesApi = async (): Promise<IArticlesResponse> => {
  const response = await http.get<IArticlesResponse>('articles');
  return response.data;
}

export const createArticleApi = async (body: IArticleInput): Promise<IArticleResponse> => {
  const response = await http.post<IArticleResponse>('articles', body);
  return response.data;
}

export const deleteArticleApi = async (id: string): Promise<IArticleResponse> => {
  const response = await http.delete<IArticleResponse>('articles/' + id);
  return response.data;
}

export const editArticleApi = async (id: string, body: IArticleInput): Promise<IArticleResponse> => {
  const response = await http.put<IArticleResponse>('articles/' + id, body);
  return response.data;
}