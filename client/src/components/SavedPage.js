import { Card, Typography, Grid } from '@material-ui/core';
import { useState, useEffect } from 'react';

import SavedEntry from './BookEntry';

function SavedPage() {

  const [savedData, setSavedData] = useState([]);

  useEffect(() => {
    // on page load, fetch DB data
    async function fetchData() {
      console.log("fetching saved data");
      const res = await fetch("./api/saved").then(r => r.json());
      console.log(res);
      // save to state
      setSavedData([]);
    }
    fetchData();
  },[])

  function renderSaved() {
    if (savedData.length < 1) return <Typography>There's nothing here right now</Typography>;
    return savedData.map(result => <SavedEntry bookid={result._id} book={result.volumeInfo} />)
  }

  return(
    <>
      <Card className="saved-area">
        <Typography variant="h6"  style={{marginBottom:"0.5rem"}}>Saved</Typography>
        <Grid container spacing={1} justify="center">
          {renderSaved()}
        </Grid>
      </Card>
    </>
  )
}

export default SavedPage;