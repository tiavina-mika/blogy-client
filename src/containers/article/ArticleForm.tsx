import { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form";

import { IArticle, IArticleInput } from "../../types/article.types"
import TextField from "../../components/form/fields/TextField";
import Form from "../../components/form/Form";

const initialValues = {
  title: '',
  content: '',
};

type Props = {
  onSubmit: (values: IArticleInput) => void;
  article: IArticle | null;
  loading?: boolean;
}
const ArticleForm = ({ onSubmit, article, loading }: Props) => {
  const form = useForm({
    defaultValues: initialValues
  });

  const { handleSubmit, reset } = form;

  useEffect(() => {
    if (!article) return;
    reset({
      title: article.title,
      content: article.content,
    })
  }, [article, reset])

  const _onSubmit: SubmitHandler<IArticleInput> = (values) => {
    onSubmit(values);
    reset(initialValues);
  }

  return (
    <Form form={form} onSubmit={handleSubmit(_onSubmit)} loading={loading}>
      <TextField
        label="Title"
        name="title"
      />

      <TextField
        label="Content"
        name="content"
        multiline
        maxRows={4}
      />
    </Form>
  )
}

export default ArticleForm