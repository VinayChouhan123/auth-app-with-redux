import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div className="text-center">
        <h1 className="mt-3">Welcome to Home Page.</h1>
        <button className="btn btn-danger mt-4" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
}
