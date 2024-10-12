// Routes.js
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../Pages/About'
import Services1 from '../Pages/Services'

const Home = () => <div>Home Page</div>;


const Contact = () => <div>Contact Page</div>;
const Blog = () => <div>Blog Page</div>;

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services1} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
    </Switch>
  );
}

export default Routes;
