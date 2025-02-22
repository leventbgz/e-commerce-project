import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import HomePage from './pages/HomePage';
import FemaleProductsPage from './pages/FemaleProductsPage';
import MaleProductsPage from './pages/MaleProductsPage';
import Footer from './layout/Footer';
import PageContent from './layout/PageContent';

function App() {
  return (
    <Router>
      <Header />
      <PageContent>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/puppi">
            <FemaleProductsPage />
          </Route>
          <Route path="/pucci">
            <MaleProductsPage />
          </Route>
        </Switch>
      </PageContent>
      <Footer />
    </Router>
  );
}

export default App;
