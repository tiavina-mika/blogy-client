import { Button, TextField } from "@mui/material"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { IArticle, IArticleInput } from "../../types/article.types"

const initialValues = {
  title: '',
  content: '',
};

type Props = {
  onSubmit: (values: IArticleInput) => void;
  article: IArticle | null;
}
const ArticleForm = ({ onSubmit, article }: Props) => {
  const [values, setValues] = useState<IArticleInput>(initialValues);

  // set initial form values, mainly for edition
  useEffect(() => {
    if (!article) return;

    // the form values is the article values
    setValues({
      title: article.title,
      content: article.content,
    })
  }, [article])

  // change each input field
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  // when clicking the submit button
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(values);
    setValues(initialValues)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Title"
        variant="outlined"
        name="title"
        value={values.title}
        onChange={handleChange}
      />
      <TextField
          label="Content"
          multiline
          maxRows={4}
          variant="outlined"
          name="content"
          value={values.content}
          onChange={handleChange}
      />
      <Button type="submit">
        Save
      </Button>
    </form>
  )
}

export default ArticleForm