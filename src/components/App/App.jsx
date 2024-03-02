import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "../../redux/auth/operationAuth";
import { useAuth } from "../hooks";
import { RestrictedRoute } from "../RestrictedRoute";
import { Layout } from "../Layout";
import { PrivateRoute } from "../PrivateRoute";
import { MyLoader } from "../Loader/Loader";

const Home = lazy(() => import("../../pages/Home/Home"));
const Register = lazy(() => import("../../pages/Register/Register"));
const Login = lazy(() => import("../../pages/Login/Login"));
const ContactPage = lazy(() => import("../../pages/ContactPage/ContactPage"));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <MyLoader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/tasks"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactPage />} />
            }
          />
        </Route>
      </Routes>
      {/* <Toaster /> */}
    </>
  );
}

export default App;
