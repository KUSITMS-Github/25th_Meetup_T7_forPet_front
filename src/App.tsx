import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  LoginTerms,
  Signup,
  ChooseMaps,
  OnlineMap,
  OfflineMap,
  Board,
  BoardMenu,
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
            <Route path="/loginterms" element={<LoginTerms />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/maps" element={<ChooseMaps />} />
            <Route path="/onlinemap" element={<OnlineMap />} />
            <Route path="/offlinemap" element={<OfflineMap />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/board" element={<Board />} />
            <Route path="/menu" element={<BoardMenu />} />
            <Route path="/forpetPedia" element={<ForpetPedia />} />
            <Route path="/pedia/:id" element={<PediaDetail />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
    </div>
  );
}

export default App;
