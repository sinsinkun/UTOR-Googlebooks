import { Card, TextField, Grid, Typography, Button } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useState } from 'react';

function SearchPage() {

  const [searchTerm, setSearchTerm] = useState("");

  function handleEnterKey(e) {
    if (e.key === "Enter") performSearch();
  }

  function performSearch() {
    console.log("Searching for", searchTerm);
    setSearchTerm("");
  }

  return(
    <>
      <Card className="search-area">
        <Typography>Search</Typography>
        <Grid container spacing={1} justify="center" alignItems="flex-end">
          <Grid item>
            <Search />
          </Grid>
          <Grid item xs={8} sm={9} md={10}>
            <TextField placeholder="Enter keywords here" fullWidth 
              value={searchTerm} onChange={e => setSearchTerm(e.target.value)} onKeyUp={e => handleEnterKey(e)}/>
          </Grid>
          <Grid item>
            <Button color="primary" onClick={performSearch}>Search</Button>
          </Grid>
        </Grid>
      </Card>

      <Card className="search-results">
        <Typography>Results</Typography>
      </Card>
    </>
  )
}

export default SearchPage;