import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import SackView from './components/SackView';
import SacksListView from './components/SacksListView';
import TitleBar from './components/TitleBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="canvas">
        <div className="screen">
          <TitleBar notificationsCount={1} />
          <Switch>
            <Route exact path="/" component={() => <Redirect to="/sacks" />}/>

            {/* <Route component={SackForm} path="/sacks/new/:cohortId?" exact />
            <Route component={SackForm} path="/sacks/:sackId/edit" exact /> */}
            <Route component={SacksListView} path="/sacks/:filter(archived|favorities)?" exact />
            <Route component={SackView} path="/sacks/:sackId/:filter?" />

            {/* <Route component={EntryView} path="/entries/:entryId" exact />
            <Route component={EntryForm} path="/entries/new/:sackId" exact />
            <Route component={EntryForm} path="/entries/:entryId/edit" exact />

            <Route component={CohortForm} path="/cohorts/new" exact />
            <Route component={CohortForm} path="/cohorts/:cohortId/edit" exact />
            <Route component={CohortView} path="/cohorts/:cohortId/:filter?" />
            <Route component={CohortsListView} path="/cohorts/:filter?" />

            <Route component={MembersView} path="/members" />
            <Route component={SettingsView} path="/settings" /> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
