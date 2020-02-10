import React from "react";
import { Switch, Route } from "react-router-dom";
import "./scss/App.scss";
import { Layout, AllListing, TopListing, Cart } from "./components";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" component={AllListing} exact />
          <Route path="/top-5" component={TopListing} />
          <Route path="/cart" component={Cart} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
