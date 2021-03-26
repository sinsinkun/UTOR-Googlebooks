import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import "./style.css";
import Navbar from './components/Navbar';
import SearchPage from './components/SearchPage';
import SavedPage from './components/SavedPage';
import { StoreProvider } from './components/GlobalData';

function App() {
  return (
    <Router>
      <Navbar />
      <StoreProvider>
        <Container  maxWidth="md" className="main-body">
          <Switch>
            <Route exact path="/"><SearchPage /></Route>
            <Route path="/saved"><SavedPage /></Route>
          </Switch>
        </Container>
      </StoreProvider>
    </Router>
  );
}

export default App;