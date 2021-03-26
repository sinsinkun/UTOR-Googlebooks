import { Grid, Typography, Button } from '@material-ui/core';

function BookEntry(props) {
  return(
    <Grid item xs={12} sm={6} md={4}>
      <div className="book-card">
        <Typography variant="h6">{props.title}</Typography>
        <img src={props.image} alt={props.title} />
        <Typography variant="subtitle2">Author(s): {props.authors + ""}</Typography>
        <Typography variant="body2">{props.description}</Typography>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Button color="primary">Read</Button>
          </Grid>
          <Grid item xs={6}>
            <Button color="primary">Save</Button>
          </Grid>
        </Grid>
      </div>
    </Grid>
  )
}

export default BookEntry;