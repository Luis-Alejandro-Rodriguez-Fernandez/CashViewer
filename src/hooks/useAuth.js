import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import clienteAxios from "../config/axios";
import useApp from "./useApp";

export const useAuth = ({ middleware, url }) => {
  const token = localStorage.getItem("AUTH_TOKEN");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const navigate = useNavigate();
  const [userSession, setUserSession] = useState(user ?? {});

  useEffect(() => {
    validateRoute();
  }, [userSession]);

  const login = async (datos, setErrores) => {
    try {
      let { authOK, data } = await auth(datos, setErrores, "/api/login");

      if (authOK && data.user !== null) {
        sessionStorage.setItem("user", JSON.stringify(data.user));
      }
    } catch (error) {
      setErrores(Object.values(error));
    }
  };

  const registro = async (data, setErrores) => {
    try {
      let { authOK } = await auth(data, setErrores, "/api/registro");

      if (authOK) {
        navigate("/auth/login");
      }
    } catch (error) {
      setErrores(Object.values(error.response.data.errors));
    }
  };

  const logout = async () => {
    try {
      await clienteAxios.post("/api/logout", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem("AUTH_TOKEN");
      sessionStorage.removeItem("user");

      navigate("/auth/login");
    } catch (error) {
      setErrores(Object.values(error.response.data.errors));
    }
  };

  const auth = async (datos, setErrores, route) => {
    let authOK = false;
    const { data } = await clienteAxios.post(route, datos);

    if (data.token !== undefined) {
      localStorage.setItem("AUTH_TOKEN", data.token);
    }

    if (data.error && data.error.length > 0) {
      setErrores(data.error);
    } else {
      setErrores([]);
      authOK = true;
    }

    return {
      authOK,
      data,
    };
  };

  const validateUser = async () => {
    if (token !== null && token !== undefined) {
      const {user} = await clienteAxios.get("/api/user", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(user)
    }
  };

  const validateRoute = () => {
    validateUser()

    if (middleware === "guest" && url && Object.keys(userSession).length > 0) {
      navigate(url);
    }

    if (middleware === "auth" && Object.keys(userSession).length == 0) {
      navigate("/auth/login");
    }
  };

  return {
    login,
    registro,
    logout,
    user,
  };
};
