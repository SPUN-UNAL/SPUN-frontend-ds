import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div>
        <Link
          to="/auth/login"
          className="inline-flex items-center font-bold text-emerald-500 hover:text-emerald-700 text-xs text-center"
        >
          Login
        </Link>
        <Link
          to="/auth/register"
          className="inline-flex items-center font-bold text-emerald-500 hover:text-emerald-700 text-xs text-center"
        >
          Register
        </Link>
      </div>
    </>
  );
}

export default HomePage;
