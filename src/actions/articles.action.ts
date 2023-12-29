import { AxiosError } from "axios";
import { getArticlesApi } from "../api/article.api";
import { IApiError } from "../types/app.types";
import { IArticle } from "../types/article.types";

export const getArticles = async (): Promise<IArticle[] | Error> => {
  try {
    const result = await getArticlesApi();
    return result.articles;
  } catch (error) {
    let errorMessage;
    if ((error as AxiosError).response) {
      const data = (error as AxiosError).response?.data;
      errorMessage = (data as IApiError).error;
    } else if ((error as AxiosError).request) {
      errorMessage = (error as AxiosError).request;
    } else {
      errorMessage = (error as AxiosError).message;
    }

    return Promise.reject(errorMessage);
  }
}