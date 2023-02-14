import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Index from "../Components/Pages/Index/Index.jsx";

const SystemRoutes = () => {
  let HtmlRoutes = (
    <Router>
      <Routes>
        <Route path="/" element={<Index></Index>}></Route>
      </Routes>
    </Router>
  );

  return HtmlRoutes;
};

export default SystemRoutes;
