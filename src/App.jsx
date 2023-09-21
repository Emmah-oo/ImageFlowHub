import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Footer from "./components/Footer";
import { AppProvider } from "./Context/AppContext";

function App() {
  return (
    <>
      <AppProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </AppProvider>
    </>
  );
}

export default App;
