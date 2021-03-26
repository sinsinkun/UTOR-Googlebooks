import { Grid, Typography, Button, Paper, ButtonGroup } from '@material-ui/core';

function BookEntry(props) {

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

  async function saveBook() {
    console.log("trying to save book", props.bookid);
    const res = await fetch("/api/saved", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(props.book)
    }).then(r => r.text());
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
          <Button onClick={saveBook}>Save</Button>
        </ButtonGroup>
      </Paper>
    </Grid>
  )
}

export default BookEntry;