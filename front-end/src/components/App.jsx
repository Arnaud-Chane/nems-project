import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";
import DescribeMovie from "./DescribeMovie";
import Users from "./Users";
import DescribeUser from "./DescribeUser";



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
        <Route path="/movies/" element={<Movies />} />
        <Route path="/movies/:id" element={<DescribeMovie />} />
        <Route path="/users/" element={<Users />} />
        <Route path="/users/:id" element={<DescribeUser />} />
      </Routes>
    </div>
  );
};

export default App;
