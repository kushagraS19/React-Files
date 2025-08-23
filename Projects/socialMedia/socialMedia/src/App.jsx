import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import "./App.css";
import CreatePost from "./components/createPost";
import PostList from "./components/postList";
import { useState } from "react";
import PostListProvider from "./store/postsListStore";

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
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
