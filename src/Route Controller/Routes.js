// Routes.js
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../Pages/About'

const Home = () => <div>Home Page</div>;

const Services = () => <div>Services Page</div>;
const Contact = () => <div>Contact Page</div>;
const Blog = () => <div>Blog Page</div>;

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
    </Switch>
  );
}

export default Routes;
