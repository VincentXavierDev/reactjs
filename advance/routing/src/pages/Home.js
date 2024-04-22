import { Link, useNavigate } from "react-router-dom";
function HomePage() {
  const nav = useNavigate();
  const navigateHandle = () => {
    nav("/product");
  };
  return (
    <>
      <h1>This homepage</h1>
      <p>
        Go to <Link to="/product">the list of products</Link>
      </p>
      <p>
        <button onClick={navigateHandle}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
