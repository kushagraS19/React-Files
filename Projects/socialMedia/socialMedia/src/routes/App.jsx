import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import "./App.css";
import CreatePost from "../components/createPost";
import PostList from "../components/postList";
import { useContext, useState } from "react";
import PostListProvider from "../store/postsListStore";
import { PostList as listData } from "../store/postsListStore";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const { postList } = useContext(listData);

  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></SideBar>
        <div className="content">
          <Header></Header>
          <Outlet/>
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
