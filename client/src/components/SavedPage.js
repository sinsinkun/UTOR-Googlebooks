import { Card, Typography, Grid } from '@material-ui/core';

function SavedPage() {
  return(
    <>
      <Card className="saved-area">
        <Typography variant="h6"  style={{marginBottom:"0.5rem"}}>Saved</Typography>
        <Grid container spacing={1} justify="center">
          <Typography>There's nothing here right now</Typography>
        </Grid>
      </Card>
    </>
  )
}

export default SavedPage;