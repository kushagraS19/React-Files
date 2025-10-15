import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import "./App.css";
import PostListProvider from "../store/postsListStore";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></SideBar>
        <div className="content">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
