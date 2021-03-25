import { Card, TextField, Grid, Typography, Button, CircularProgress } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useRef, useState } from 'react';

function SearchPage() {

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [receivedResults, setReceived] = useState(false);
  const searchArea = useRef(null);
  const resultsArea = useRef(null);

  function handleEnterKey(e) {
    if (e.key === "Enter") performSearch();
  }

  async function performSearch() {
    console.log("Searching for", searchTerm);
    setSearchTerm("");
    if (searchArea.current.classList.contains("search-area-init")) {
      searchArea.current.classList.remove("search-area-init");
      searchArea.current.classList.add("search-area");
    }
    if (resultsArea.current.classList.contains("hidden")) {
      resultsArea.current.classList.remove("hidden")
    }
    // perform API search
    setTimeout(() => setReceived(true), 1500);
  }

  function displayResults() {

    if (results.length < 1) {
      return <Typography variant="body1">No results found. Try searching for something else.</Typography>;
    }

    return(
      results.map(result => 
        <Grid item xs={12} sm={6} md={3}>{result}</Grid>
      )
    )

  }

  return(
    <>
      <Card className="search-area-init" ref={searchArea}>
        <Typography variant="h6">Search</Typography>
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

      <Card className="search-results hidden" ref={resultsArea}>
        <Typography variant="h6" style={{marginBottom:"0.5rem"}}>Results</Typography>
        <Grid container spacing={1} justify="center" >
          { receivedResults ? displayResults() : <CircularProgress />}
        </Grid>
      </Card>
    </>
  )
}

export default SearchPage;