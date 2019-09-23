import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import CohortForm from './components/CohortForm';
import CohortsListView from './components/CohortsListView';
import CohortView from './components/CohortView';
import DrawerMenu from './components/DrawerMenu';
import SackForm from './components/SackForm';
import SackView from './components/SackView';
import SacksListView from './components/SacksListView';
import TitleBar from './components/common/TitleBar';
import './App.css';
import { SackFormActions, ValidSacksFilters } from './routing/sacks';
import { ValidEntriesFilters } from './routing/entries';
import { CohortFormActions, ValidCohortsFilters } from './routing/cohorts';
import "@sandstreamdev/react-swipeable-list/dist/react-swipeable-list.cjs.css";

function App() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <Router>
      <div className="canvas">
        <div className="screen">
          <DrawerMenu open={menuActive} onHide={() => setMenuActive(false)} />
          <TitleBar notificationsCount={1} onMenuClick={() => setMenuActive(true)} />
          <Switch>
            <Route exact path="/" component={() => <Redirect to="/sacks" />}/>

            <Route component={SackForm} path={`/sacks/:action(${SackFormActions.NEW})/:cohortId?`} exact />
            <Route component={SackForm} path={`/sacks/:sackId/:action(${SackFormActions.EDIT})`} exact />
            <Route component={SacksListView} path={`/sacks/:filter(${ValidSacksFilters})?`} exact />
            <Route component={SackView} path={`/sacks/:sackId/:filter(${ValidEntriesFilters})?`} />

            <Route component={CohortForm} path={`/cohorts/:action(${CohortFormActions.NEW})`} exact />
            <Route component={CohortForm} path={`/cohorts/:cohortId/:action(${CohortFormActions.EDIT})`} exact />
            <Route component={CohortsListView} path={`/cohorts/:filter(${ValidCohortsFilters})?`} exact />
            <Route component={CohortView} path={`/cohorts/:cohortId/:filter(${ValidSacksFilters})?`} />

            {/* <Route component={EntryView} path="/entries/:entryId" exact />
            <Route component={EntryForm} path="/entries/new/:sackId" exact />
            <Route component={EntryForm} path="/entries/:entryId/edit" exact />
            
            <Route component={MembersView} path="/members" />
            <Route component={SettingsView} path="/settings" /> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
