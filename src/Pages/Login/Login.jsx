import React, { useContext, useEffect } from "react";
import login from "../../assets/login/loginImg.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../assets/login/google.png";
import github from "../../assets/login/github.png";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  console.log(location, from);

  const { customLoginandPass, googleLogin, githubLogin } =
    useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6, "transparent");
  }, []);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    if (!validateCaptcha(data.captcha)) {
      toast.error("Captcha does not match");
      return;
    }

    customLoginandPass(data.email, data.password)
      .then(() => {
        toast.success("Login successfull");
        e.target.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handelGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        if (user.email) {
          toast.success("Google login successfull");
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handelGitLogin = () => {
    return githubLogin()
      .then((result) => {
        const user = result.user;
        if (user) {
          toast.success("Github login successfull");
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <section
      id="login"
      className="login h-screen flex items-center justify-center"
    >
      <div className="mycontainer">
        <div className="loginWrapper py-10 px-28 grid grid-cols-2 gap-10 items-center">
          <div className="loginLeft">
            <img className="block w-full" src={login} alt="login images" />
          </div>
          <div className="loginRight">
            <h2 className="text-3xl text-center font-semibold mb-7">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="loginInput mb-5">
                <label className="block font-medium mb-2">Email</label>
                <input
                  {...register("email")}
                  className="block w-full border border-black bg-white rounded-sm px-5 py-3 outline-0"
                  type="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="loginInput mb-5">
                <label className="block font-medium mb-2">Password</label>
                <input
                  {...register("password")}
                  className="block w-full border border-black bg-white rounded-sm px-5 py-3 outline-0"
                  type="password"
                  autoComplete="off"
                  placeholder="Enter Your Password"
                />
              </div>
              <div className="loginCaptcha block w-full border border-black bg-white rounded-sm px-5 py-3 outline-0 mb-5">
                <LoadCanvasTemplate />
              </div>
              <div className="loginInput mb-5">
                <label className="block font-medium mb-2">
                  Type the captcha
                </label>
                <input
                  required
                  {...register("captcha")}
                  className="block w-full border border-black bg-white rounded-sm px-5 py-3 outline-0"
                  type="text"
                  placeholder="Enter Your captcha"
                />
              </div>
              <div className="submit">
                <button
                  className="block w-full px-5 py-3 bg-[#DBB984] font-medium text-white"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className="formPara text-center mt-6">
              <p className="text-[#DBB984]">
                New here?
                <Link to="/signup">
                  <strong> Create a New Account</strong>
                </Link>
              </p>
            </div>
            <div className="social text-center">
              <p className="font-medium my-5">Or sign in with</p>
              <ul className="flex items-center justify-center gap-5">
                <li>
                  <button onClick={handelGoogleLogin}>
                    <img
                      className="w-[45px] h-[45px]"
                      src={google}
                      alt="google login images"
                    />
                  </button>
                </li>
                <li>
                  <button onClick={handelGitLogin}>
                    <img
                      className="w-[45px] h-[45px]"
                      src={github}
                      alt="github login images"
                    />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </section>
  );
};

export default Login;
