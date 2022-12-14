import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <h2 className="text-center mt-60 font-light">
      Sorry this page does not exist.{" "}
      <Link to="/">
        <span className="text-sky-500">Click here</span>
      </Link>{" "}
      to back to the home page.
    </h2>
  );
};

export default PageNotFound;
