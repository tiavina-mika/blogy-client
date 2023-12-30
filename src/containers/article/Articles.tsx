import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { IArticle } from '../../types/article.types';
import { Button } from '@mui/material';

type Props = {
  articles: IArticle[];
  onDelete: (id: string) => void;
  onEdit: (article: IArticle) => void;
};

const Articles = ({ articles, onDelete, onEdit }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {articles.map((article: IArticle, index: number) => (
            <TableRow
              key={article._id + index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {article._id}
              </TableCell>
              <TableCell align="right">{article.title}</TableCell>
              <TableCell align="right">
                <Button color="info" onClick={() => onEdit(article)}>Edit</Button>
                <Button color="error" onClick={() => onDelete(article._id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Articles;
