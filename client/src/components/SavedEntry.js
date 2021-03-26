import { Grid, Typography, Button, Paper, ButtonGroup } from '@material-ui/core';

function SavedEntry(props) {

  function renderImage() {
    if (props.book.imageLinks) return <img src={props.book.imageLinks.thumbnail} alt={props.book.title} />
    return <Typography variant="subtitle2">(No thumbnail)</Typography>
  }

  function renderAuthors() {
    if (props.book.authors) {
      let authors = '';
      props.book.authors.map((author,idx) => {
        if (idx<props.book.authors.length-1) authors += author + ", ";
        else authors += author;
        return null;
      })
      return authors;
    }
    else return "(Unknown)"
  }

  function renderDescription() {
    if (!props.book.description) return "(No description)";
    else if (props.book.description.length > 180) return props.book.description.slice(0,177) + "...";
    else return props.description;
  }

  async function deleteBook() {
    console.log("trying to remove entry", props.bookid);
    const res = await fetch(`/api/saved/${props.bookid}`, { method: "DELETE" }).then(r => r.text());
    props.setRerender(prev => !prev);
    console.log(res);
  }

  return(
    <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={3} className="book-card">
        <Typography variant="h6">{props.book.title}</Typography>
        <Grid container justify="center" >{renderImage()}</Grid>
        <Typography variant="subtitle2">
          Author(s): {renderAuthors()}
        </Typography>
        <Typography variant="body2">{renderDescription()}</Typography>
        <ButtonGroup variant="text" fullWidth>
          <Button href={props.book.previewLink}>Read</Button>
          <Button onClick={deleteBook}>Delete</Button>
        </ButtonGroup>
      </Paper>
    </Grid>
  )
}

export default SavedEntry;