import { useEffect, useState } from "react";

import ArticleForm from "./article/ArticleForm"
import Articles from "./article/Articles"
import { createArticle, deleteArticle, editArticle, getArticles } from "../actions/articles.action";
import { IArticle, IArticleInput } from "../types/article.types";
import Notification from "../components/Notification";

const Home = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<IArticle | null>(null);
  const [error, setError] = useState<string>('');

  // load initial article list
  useEffect(() => {
      const init = async () => {
        try {
          const articles = await getArticles();
          setArticles(articles as IArticle[]);
        } catch (error) {
          setError(error as string);
        }
      }
    
      init();
  }, [])

  const handleDeleteArticle = async (id: string) => {
    try {
      const deletedArticle = await deleteArticle(id);
      const newArticles = articles.filter((article: IArticle) => article._id !== (deletedArticle as IArticle)._id);
      setArticles(newArticles)
    } catch (error) {
      setError(error as string);
    }
  }

  const handleSubmitArticle = async (values: IArticleInput) => {
    try {
      // -------- edition -------- //
      if (selectedArticle) {
        const updatedArticle = await editArticle(selectedArticle._id, values);
        // empty form
        setSelectedArticle(null);
        // update article list
        setArticles((prev: IArticle[]): IArticle[] => {
          return prev.map((article: IArticle) => {
            // current updated article
            if (article._id === (updatedArticle as IArticle)._id) {
              return updatedArticle as IArticle;
            }
  
            // non updated article
            return article;
          })
        })

        return;
      }

      // -------- creation -------- //
      const article = await createArticle(values);
      setArticles((prev: IArticle[]): IArticle[] => [article as IArticle, ...prev]);
    } catch (error) {
      setError(error as string);
    }
  }

  const handleSelectArticle = (article: IArticle) => {
    setSelectedArticle(article);
  }

  return (
    <div css={{ minHeight: "100vh" }} className="flexColumn">
      <h1>Home</h1>
      <ArticleForm
        onSubmit={handleSubmitArticle}
        article={selectedArticle}
      />
      <Articles
        articles={articles}
        onDelete={handleDeleteArticle}
        onEdit={handleSelectArticle}
      />
      <Notification message={error} show={!!error} severity="error" />
    </div>
  )
}

export default Home