import { AxiosError } from "axios";
import { createArticleApi, deleteArticleApi, editArticleApi, getArticlesApi } from "../api/article.api";
import { IApiError } from "../types/app.types";
import { IArticle, IArticleInput } from "../types/article.types";

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

export const createArticle = async (values: IArticleInput): Promise<IArticle | Error> => {
  try {
    const result = await createArticleApi(values);
    return result.article;
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

export const editArticle = async (id: string, values: IArticleInput): Promise<IArticle | Error> => {
  try {
    const result = await editArticleApi(id, values);
    return result.article;
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


export const deleteArticle = async (id: string): Promise<IArticle | Error> => {
  try {
    const result = await deleteArticleApi(id);
    return result.article;
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