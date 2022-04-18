import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Signup,
  OnlineMap,
  OfflineMap,
  Board,
  QnaBoard,
  MyPage,
  PostDetail,
  PostWrite,
  NotFound,
} from "./pages";
import {
  Header,
} from "./components"

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/onlinemap" element={<OnlineMap />} />
            <Route path="/offlinemap" element={<OfflineMap />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/board" element={<Board />} />
            <Route path="/qnaboard" element={<QnaBoard />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/write" element={<PostWrite />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
    </div>
  );
}

export default App;
