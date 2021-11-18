import React from "react";
import {　BrowserRouter as Router,　Switch,　Route} from "react-router-dom";
import Home from "./components/Home";
import Congrats from "./components/Congrats";
import Again from "./components/Again";
import Nomatch from "./components/Nomatch";
import ScrollToTop from "./components/ScrollToTop"
import './App.scss';

function App(props) {

  return (
    <>
      <Router>
        <ScrollToTop>
          <div>
            <Switch>
              <Route exact path="/congrats">
                <Congrats titlename="正解！" />
              </Route>
              <Route exact path="/again" component={Again}>
                <Again titlename="残念！" />
              </Route>
              <Route exact path="/">
                <Home titlename="ホーム" />
              </Route>
              <Route path="*">
                <Nomatch titlename="404" />
              </Route>
            </Switch>
          </div>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
