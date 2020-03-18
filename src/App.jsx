import React from 'react';
import {
  Switch, Route, Redirect, withRouter,
} from "react-router-dom";

import General from "./containers/general/general.container";
// import Auth from "./components/auth/auth.component";
import Layout from "./hoc/layout/layout.component";

import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    //user token & id should be checked in local store
    //filter setting from local store as well
  };

  render() {
    let routes = ( //thos routes would be available without authorization
      <Switch>
        {/* <Route path='/auth' component={Auth} /> */}
        <Route exact path='/' component={General} />
        <Redirect to='/' />
      </Switch>
    );

    // if (this.props.isAuth) {
    //   routes = ( //thos routes would be available with authorization
    //     <Switch>
    //       <Route path='/recipe' component={Information} />
    //       <Route exact path='/' component={General} />
    //       <Redirect to='/' />
    //     </Switch>
    //   );
    // };

    return (
      <div className="App">
        <Layout>
          {routes}
        </Layout>
     </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    isAuth: state.general.user.token !== null
  };
};

export default withRouter(connect(mapStateToProps)(App));
