import { TextField } from "@mui/material"
import { useState } from "react"
import { IArticleInput } from "../../types/article.types"

const ArticleForm = () => {
  const [values, setValues] = useState<IArticleInput>({
    title: '',
    content: '',
  });
  
  return (
    <form>
      <TextField label="Title" variant="outlined" name="title" value={values.title} />
    </form>
  )
}

export default ArticleForm