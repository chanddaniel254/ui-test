import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { clearToken } from "storage";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const logoutUser = () => {
      clearToken();
      navigate("/presentation");
    };
    logoutUser();
  }, []);
  return <></>;
};

export default Logout;
