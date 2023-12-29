import { http } from "../config/https"
import { IArticlesResponse } from "../types/article.types";

export const getArticlesApi = async (): Promise<IArticlesResponse> => {
  const response = await http.get<IArticlesResponse>('articles');
  return response.data;
}