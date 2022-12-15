import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// TODO: Need to make them not allowed to enter this page when they didn't enter password.

const SuccessfullyDeleted = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.sessionStorage.getItem("admin")) {
      navigate("/home");
      setTimeout(() => {
        alert("You are not an Admin user.");
      }, 1000);
    }
  }, [navigate]);

  return (
    <div>
      <p>Successfully Deleted</p>
      <Link to="/admin">View</Link>
    </div>
  );
};

export default SuccessfullyDeleted;
