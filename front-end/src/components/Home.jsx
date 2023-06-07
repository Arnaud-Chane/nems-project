import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Link to="/movies/" >Movies</Link>
      <Link to="/users/">Users</Link>
    </div>
  );
}

export default Home;
