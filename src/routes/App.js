import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import "./App.css";

import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
 

  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <Sidebar />
          <div className="content">
            <Header />
            {/* {selectedTab === "Home" ? <PostList /> : <CreatePost />}*/}
            <Outlet />
            <Footer />
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
