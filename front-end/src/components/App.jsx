import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import DescribeMovie from "./DescribeMovie";

const App = () => {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<DescribeMovie />} />
      </Routes>
    </div>
  );
};

export default App;
