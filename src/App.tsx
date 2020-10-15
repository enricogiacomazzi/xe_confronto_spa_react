import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {LoginPage} from './Pages/Login/Login.page';
import {PostsPage} from './Pages/Posts/Posts.page';
import {DetailPage} from './Pages/Detail/Detail.page';
import {Navbar} from './Shared/Navbar/Navbar';
import { AuthContext } from './Shared/AuthContext';
import {LoggedRoute} from './Shared/LoggedRoute/LoggedRoute';

const App: React.FC = () => {
  const [token, setToken] = useState<string | undefined>(undefined);
  return (
      <AuthContext.Provider value={{token, setToken}}>
          <BrowserRouter>
              <Navbar/>
              <Switch>
                  <Route exact path="/login" component={LoginPage} />
                  <Route exact path="/posts" component={PostsPage} />
                  <LoggedRoute exact path="/posts/:id" component={DetailPage}/>
                  <Route path="*">
                      <Redirect to="/posts"/>
                  </Route>
              </Switch>
          </BrowserRouter>
      </AuthContext.Provider>
  )
}

export default App;
