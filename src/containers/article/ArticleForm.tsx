import { Button, Stack, TextField } from "@mui/material"
import { useEffect } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { IArticle, IArticleInput } from "../../types/article.types"

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
  const { control, handleSubmit, reset } = useForm({
    defaultValues: initialValues
  });

  useEffect(() => {
    if (!article) return;
    reset({
      title: article.title,
      content: article.content,
    })
  }, [article, reset])

  const _onSubmit: SubmitHandler<IArticleInput> = (values) => {
    onSubmit(values);
  }

  return (
    <form onSubmit={handleSubmit(_onSubmit)}>
      <Stack spacing={2}>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <TextField
              label="Title"
              variant="outlined"
              {...field}
            />
          )}
        />
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <TextField
              label="Content"
              multiline
              maxRows={4}
              variant="outlined"
              {...field}
          />
          )}
        />
 
        <Button type="submit" variant="contained">
          {loading ? "...loading" : "Save"}
        </Button>
      </Stack>
    </form>
  )
}

export default ArticleForm