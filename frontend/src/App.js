import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Navbar from "./components/navbar.component";
import OfficesList from "./components/offices_list.component";
import EditOffice from "./components/edit_office.component";
import CreateOffice from "./components/create_office.component";
import CreateUser from "./components/create_user.component";
import NotFound from "./components/not_found.component";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Switch>
        <Route path="/" exact component={OfficesList} />
        <Route path="/office/edit/:id" component={EditOffice} />
        <Route path="/office/create" component={CreateOffice} />
        <Route path="/user/create" component={CreateUser} />
        <Route component={NotFound} />
        </Switch>
      </div>
    </Router >
  );
  //<Route path="/*" component={NotFound} />
}

export default App;
