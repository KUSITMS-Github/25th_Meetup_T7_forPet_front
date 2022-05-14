import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  LoginTerms,
  Signup,
  ChooseMaps,
  OnlineMap,
  OfflineMap,
  ForpetPedia,
  PediaDetail,
  MyPage,
  PostDetail,
  NotFound,
} from "./pages";
import {
  Board,
  PreBoard,
  BoardFour,
  BoardAll,
  BoardMeet,
  BoardBoast,
  BoardShare,
} from "./pages/Community"
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
            <Route path="/preboard" element={<PreBoard />} />
            <Route path="/board" element={<Board />} />
            <Route path="/menu" element={<BoardFour />} />
            <Route path="/share" element={<BoardShare />} />
            <Route path="/meet" element={<BoardMeet />} />
            <Route path="/boast" element={<BoardBoast />} />
            <Route path="/all" element={<BoardAll />} />
            <Route path="/forpetPedia" element={<ForpetPedia />} />
            <Route path="/pedia/:id" element={<PediaDetail />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
    </div>
  );
}

export default App;
