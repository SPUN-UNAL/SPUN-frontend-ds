import React from "react";
import { useAuth } from "context/AuthContext";
import { Link } from "react-router-dom";
function NotFound() {
  const { user } = useAuth();
  return (
    <main className="h-full">
      {/* Main Content */}
      <div className="mainCard">
        <div className="text-center">
          <h1 className="font-extrabold text-transparent text-7xl lg:text-9xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 ">Error 404</h1>
          <p className="my-8 text-4xl md:text-5xl font-bold">Pagina no encontrada</p>
          <Link to={user ? "/dashboard/" : "/"}>
            <p className="text-3xl text-blue-950 hover:text-blue-600">Llevame a casa!</p>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
