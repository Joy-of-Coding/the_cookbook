import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";

import Header from "./components/composites/Header";
import Footer from "./components/Footer";

import RecipeList from "./pages/RecipeList";
import Home from "./pages/Home";
import Help from "./pages/Help";
import TestingArea from "./pages/TestingArea";
import LogIn from "./pages/LogIn";
import RecipeCRUD from "./pages/RecipeCRUD";

import { AuthContext } from "./hooks/AuthContext";
import { isAuthenticated } from "./services/Auth";

export default function App() {
  const { user, token } = useContext(AuthContext);
  const [userData, setUserData] = user;

  const fetchUserData = () => {
    isAuthenticated().then((data) => {
      if (data.error) {
        console.error("Error", data.error);
      } else {
        setUserData({
          username: data.username,
          email: data.email,
          fname: data.firstName,
          lname: data.lastName,
        });
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <BrowserRouter>
      <Header userData={userData} />
      <div style={{ minHeight: "70vh", padding: "22px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/recipes/crud" element={<RecipeCRUD />} />
          <Route path="/testing" element={<TestingArea />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
