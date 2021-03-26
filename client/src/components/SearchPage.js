import { Card, TextField, Grid, Typography, Button, CircularProgress } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useEffect, useRef, useState } from 'react';
import BookEntry from './BookEntry';
import { useStoreContext } from './GlobalData';

function SearchPage() {

  const [results, setResults] = useStoreContext();
  const [displayResults, setDisplay] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchBar = useRef(null);
  const searchArea = useRef(null);
  const resultsArea = useRef(null);

  useEffect(() => {
    if (results.length > 1) setDisplay(true);
  }, [results])

  function handleEnterKey(e) {
    if (e.key === "Enter") performSearch();
  }

  async function performSearch() {
    console.log("Searching for", searchBar.current.value);
    setLoading(true);
    // perform API search
    let res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchBar.current.value}&orderBy=newest&langRestrict=en&maxResults=9`).then(r => r.json());
    setLoading(false);
    if (res.error) {
      console.log("ERROR CODE:", res.error.code, res.error.message);
      setResults( {type:"POST", data:[]} );
    }
    else if (res.totalItems < 9) setResults( {type:"POST", data:[]} )
    else setResults({type:"POST", data:res.items});
  }

  function renderResults(loading) {
    if (loading) return <CircularProgress />;
    if (results.length < 1) {
      return <Typography variant="body1">No results found. Try a different search term.</Typography>;
    }
    return results.map(result => <BookEntry bookid={result.id} book={result.volumeInfo} />)
  }

  return(
    <>
      <Card className="search-area" ref={searchArea}>
        <Typography variant="h6">Search</Typography>
        <Grid container spacing={1} justify="center" alignItems="flex-end">
          <Grid item>
            <Search />
          </Grid>
          <Grid item xs={8} sm={9} md={10}>
            <TextField placeholder="Enter keywords here" fullWidth inputRef={searchBar} onKeyUp={e => handleEnterKey(e)} />
          </Grid>
          <Grid item>
            <Button color="primary" onClick={performSearch}>Search</Button>
          </Grid>
        </Grid>
      </Card>
      {/* RESULTS DISPLAY */}
      <Card className="search-results" ref={resultsArea}>
        <Typography variant="h6" style={{marginBottom:"0.5rem"}}>Results</Typography>
        <Grid container spacing={1} justify="center" >
          {displayResults ? renderResults(loading) : <Typography variant="body1">Nothing to display</Typography>}
        </Grid>
      </Card>
    </>
  )
}

export default SearchPage;