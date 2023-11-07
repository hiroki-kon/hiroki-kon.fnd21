import { Routes, Route } from "react-router-dom";
import { StartPage } from "@/pages/StartPage";
import { PlayPage } from "@/pages/PlayPage";
import { ResultPage } from "@/pages/ResultPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/quiz/:difficulty" element={<PlayPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
}

export default App;
