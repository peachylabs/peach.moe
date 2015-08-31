import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, DefaultRoute} from 'react-router';
import finalStore from '../store/configureStore';
import App from './App';
import UserPage from './UserPage';
import RepoPage from './RepoPage';
import AnimePage from './AnimePage';
import HomePage from './HomePage';
import DirectoryPage from './DirectoryPage';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

// const store = configureStore();
const store = finalStore;

export default class Root extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() =>
            <Router history={this.props.history}>
              <Route component={App}>
                <Route path="/"
                       component={HomePage} />
                <Route path="/directory"
                       component={DirectoryPage} />
                <Route path="/anime/:anime_name"
                       component={AnimePage} />
                {/*<Route path="/:login/:name"
                       component={RepoPage} />
                <Route path="/:login"
                       component={UserPage} />*/}
              </Route>
            </Router>
          }
        </Provider>
        {/* DEVTOOLS */}
        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      </div>
    );
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
};
