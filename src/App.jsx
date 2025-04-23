import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './layout/Header';
import HomePage from './pages/HomePage';
import FemaleProductsPage from './pages/FemaleProductsPage';
import MaleProductsPage from './pages/MaleProductsPage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AboutUsPage from './pages/AboutUsPage';
import SignUpPage from './pages/SignUpPage';
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
          <Route path="/shop" >
            <ShopPage />
          </Route>
          <Route path="/puppi">
            <FemaleProductsPage />
          </Route>
          <Route path="/pucci">
            <MaleProductsPage />
          </Route>
          <Route path="/product/:productId">
            <ProductDetailPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/team">
            <TeamPage />
          </Route>
          <Route path="/about">
            <AboutUsPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
        </Switch>
      </PageContent>
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
