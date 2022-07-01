import {
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
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
import { useGlobalContext } from "./context/context";

function App() {
  const { useruid } = useGlobalContext();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="details/:productId" element={<Details />} />
        <Route path="cart" element={<Cart />} />
        <Route path={`payment/${useruid}`} element={<Payment />} />
        <Route path="profile" element={<Profile />} />
        <Route path="update-profile" element={<UpdateProfile />} />
        <Route path="orders" element={<Orders />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
