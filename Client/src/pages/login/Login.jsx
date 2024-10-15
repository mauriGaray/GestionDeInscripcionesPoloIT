import { FormLogin } from "../../components/forms/FormLogin";

export const Login = () => {
  return (
    <div className="bg-[url('./public/bg-image.png')] flex justify-center items-center w-full min-h-screen bg-center bg-no-repeat bg-cover bg-fixed">
      <div className="flex justify-center items-center p-8 gap-16">
        <FormLogin />
        <div className="hidden sm:block">
          <img className="w-100" src="./public/inicio-il.png" alt="" />
        </div>
      </div>
    </div>
  );
};
