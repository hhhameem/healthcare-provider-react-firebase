import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import AllServices from "./Components/AllServices/AllServices";
import AboutUs from "./Components/AboutUs/AboutUs";
import OurTeam from "./Components/OurTeam/OurTeam";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";
import ServiceDetails from "./Components/ServiceDetails/ServiceDetails";
import ServiceProvider from "./ContextProvider/ServiceProvider";
import initFirebase from "./Firebase/Firebase.init";
import Registration from "./Components/Registration/Registration";
import AuthProvider from "./ContextProvider/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import NotFound from "./Components/NotFound/NotFound";

initFirebase();
function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <ServiceProvider>
            <Switch>
              <Route path='/home'>
                <Home></Home>
              </Route>
              <PrivateRoute path='/services/:serviceId'>
                <ServiceDetails></ServiceDetails>
              </PrivateRoute>
              <Route path='/services'>
                <AllServices></AllServices>
              </Route>
              <PrivateRoute path='/about-us'>
                <AboutUs></AboutUs>
              </PrivateRoute>
              <PrivateRoute path='/our-team'>
                <OurTeam></OurTeam>
              </PrivateRoute>
              <Route path='/login'>
                <Login></Login>
              </Route>
              <Route path='/registration'>
                <Registration></Registration>
              </Route>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route path='*'>
                <NotFound></NotFound>
              </Route>
            </Switch>
          </ServiceProvider>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
