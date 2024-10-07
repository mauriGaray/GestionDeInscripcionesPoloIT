import { Login } from "../../components/forms/login/Login";
import "./inicio.css";

export const Inicio = () => {
  return (
    <div className="inicio-main__bg flex justify-center items-center w-full min-h-screen bg-center bg-no-repeat bg-cover bg-fixed">
      <div className="flex justify-center items-center gap-16">
        <Login />
        <div className="sm:hidden">
          <img className="w-100" src="/inicio-il.png" alt="" />
        </div>
      </div>
    </div>
  );
};
