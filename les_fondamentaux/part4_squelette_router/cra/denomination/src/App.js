import { Component } from "react";
import Denomination from "./components/Denomination";

import GlobalStyle from "./Styles/GlobalStyle";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";

const tokens = [1, 5, 10, 20, 50, 100, 200];

class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/denomination">Dénomination</Link>
            </li>
            <li>
              <Link to="/result/1">Result 1</Link>
            </li>
            <li>
              <Link to="/result/2">Result 2</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <h1>Dénomination</h1>
            <p>Cliquer sur dénomination pour commencer vos calculs.</p>
          </Route>
          <Route
            exact
            path="/denomination"
            component={({ location }) => (
              <Denomination location={location} tokens={tokens} />
            )}
          />

          <Route
            exact
            path="/result/:id"
            component={(props) => {
              console.log(props);

              // const { match : {params : { id } } } = props ;

              const { params } = props.match;

              if (parseInt(params.id) === 5) {
                return (
                  <Redirect
                    to={{
                      pathname: "/login",
                      state: {
                        from: "/result/5",
                        post: "Interdit sans connexion",
                      },
                    }}
                  />
                );
              }

              return <p>Post {params.id}</p>;
            }}
          />
          <Route exact path="/login" component={(props) => {

            console.log(props);

            return (
              <p>Page de login !</p>
            )
          }} />
           <Route path="*" >
             <p>Page 404</p>
           </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
