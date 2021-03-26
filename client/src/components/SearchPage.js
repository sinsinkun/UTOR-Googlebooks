import { Card, TextField, Grid, Typography, Button, CircularProgress } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useRef, useState } from 'react';
import BookEntry from './BookEntry';

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
    if (searchTerm === "") 
    // reset search variables
    setSearchTerm("");
    setReceived(false);
    // play animations if necessary
    if (searchArea.current.classList.contains("search-area-init")) {
      searchArea.current.classList.remove("search-area-init");
      searchArea.current.classList.add("search-area");
    }
    if (resultsArea.current.classList.contains("hidden")) {
      resultsArea.current.classList.remove("hidden")
    }
    // perform API search
    let data = [
      {
        authors: ["Suzanne Collins"],
        description: "Set in a dark vision of the near future, a terrifying reality...",
        image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
        title: "The Hunger Games"
      },
      {
        authors: ["Test 1", "Test 2"],
        description: "Description of test",
        image: "url",
        link: "url2",
        title: "The Test"
      },
      {
        authors: ["Test 1", "Test 2"],
        description: "Description of test",
        image: "url",
        link: "url2",
        title: "The Test"
      },
      {
        authors: ["Test 1", "Test 2"],
        description: "Description of test",
        image: "url",
        link: "url2",
        title: "The Test"
      }
    ];
    setResults(data);
    setTimeout(() => setReceived(true), 1500);
  }

  function displayResults() {

    if (results.length < 1) {
      return <Typography variant="body1">No results found. Try searching for something else.</Typography>;
    }

    return (
      results.map(r => <BookEntry title={r.title} image={r.image} authors={r.authors} description={r.description} />)
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