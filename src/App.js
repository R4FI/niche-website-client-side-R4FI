import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Products from './Pages/Products/Products';
import LogIn from './Pages/LogIn/LogIn';
import SignIn from './Pages/SignIn/SignIn';
// import ManageAllOrder from './Pages/ManageAllOrder/ManageAllOrder';
import Contact from './Pages/Contact/Contact';
import Header from './Pages/Header/Header';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/LogIn/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
// import MyOrders from './Pages/MyOrders/MyOrders';
function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
            <Home></Home>
        </Route>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route path="/product">
            <Products></Products>
        </Route>
        <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
             </PrivateRoute>
        {/* <PrivateRoute path="/myorder">
              <MyOrders></MyOrders>
             </PrivateRoute> */}
        <PrivateRoute path="/placeOrder/:bookingId">
              <PlaceOrder></PlaceOrder>
             </PrivateRoute>
        {/* <Route path="/manageOrders">
            <ManageAllOrder></ManageAllOrder>
           </Route> */}
        <Route path="/login">
          <LogIn></LogIn>
        </Route>
        <Route path="/signIn">
          <SignIn></SignIn>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="*">
        </Route>
      </Switch>  
     </Router>
     </AuthProvider>
      
    </div>
  );
}

export default App;
