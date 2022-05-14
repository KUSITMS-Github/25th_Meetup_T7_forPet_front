import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Signup,
  ChooseMaps,
  OnlineMap,
  OfflineMap,
  Board,
  ForpetPedia,
  PediaDetail,
  MyPage,
  PostDetail,
  NotFound,
} from "./pages";
import {
  Header,
} from "./components"

import './App.css';
import './styles/fonts/fonts.css';

function App() {
  return (
    <div className="App">
      <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/maps" element={<ChooseMaps />} />
            <Route path="/onlinemap" element={<OnlineMap />} />
            <Route path="/offlinemap" element={<OfflineMap />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/board" element={<Board />} />
            <Route path="/forpetPedia" element={<ForpetPedia />} />
            <Route path="/pedia/:id" element={<PediaDetail />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
    </div>
  );
}

export default App;
