import { Button, Stack } from "@mui/material";
import { useEffect } from "react"
import { Controller, FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { IArticle, IArticleInput } from "../../types/article.types"
import TextField from "../../components/form/fields/TextField";

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
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(_onSubmit)}>
        <Stack spacing={2}>
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

          <Button type="submit" variant="contained">
            {loading ? "...loading" : "Save"}
          </Button>
        </Stack>
      </form>
    </FormProvider>

  )
}

export default ArticleForm