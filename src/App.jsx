// React Dependecies
import React from "react";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";

// Components
import Header from './components/Header';
import Home from './components/Home';
import ROUTES from "./routes";
import HttpError from "./components/404";
import Footer from "./components/Footer";
import PostDetail from './components/_PostDetails';
import Post from './components/_Post';

import Try from "./components/Try";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        currentRoute: ROUTES.home,
        userId: 0,
        userName: "",
        userEmail: ""
      
    }
  }

  renderRoute() {

    switch (this.state.currentRoute) {
      case ROUTES.home : return <Home />
      case ROUTES.candidat.details : return <PostDetail />
      default: return <HttpError />
    }
  }
  checkSession = () => {
    let hasToken = false

    try {
      let userState = localStorage.getItem('stock-app-userState')
      
        if(userState === "loggedIn"){
          let userData = localStorage.getItem('stock-app-userData')
          userData = userData.split(",")
          console.log("UserInfo : " + userData[0] + " " + userData[1] + "" + userData[2])

          hasToken = true
        }

    } catch (error) {
      console.log("Error from Checking Session " + error)
        hasToken = false
    }
    return hasToken
  }

  componentDidMount(){
  }

  render(){

    return (
      
      <BrowserRouter>
              <div class="container">
                <Header />
                
                  <Routes>
                      <Route path="/" element={ <Home /> } />
                      <Route path="/post-details/:appId/:candidatId/:candidatName/:videoContent" element={  <PostDetail /> } />
                      <Route path="/try/:id" element={ <Try/> }></Route>
                      <Route path="*" element={  <HttpError /> } />
                  </Routes>
                
                <Footer />  
              </div>
      </BrowserRouter>
    );

  }
}

export default App;
