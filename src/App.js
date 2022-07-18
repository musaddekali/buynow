import {
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css'
import './style/app-global.css';
// Pages 
import NoPage from "./components/no-page/NoPage";
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import Details from "./pages/details/Details";
import Cart from "./pages/cart/Cart";
import Payment from "./pages/payment/Payment";
import Profile from "./pages/profile/Profile";
import UpdateProfile from "./pages/updateProfile/UpdateProfile";
import Orders from "./pages/orders/Orders";
import Wishlist from "./pages/wishlist/Wishlist";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import PrivateRoute from "./components/privateRoute/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={`/details/:productId`} element={<Details />} />
        <Route path="cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path="payment" element={<PrivateRoute><Payment /></PrivateRoute>} />
        <Route path="profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="update-profile" element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
        <Route path="orders" element={<PrivateRoute><Orders /></PrivateRoute>} />
        <Route path="wishlist" element={<PrivateRoute><Wishlist /></PrivateRoute>} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
