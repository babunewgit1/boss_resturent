import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/login/loginImg.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const { customLogin } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  console.log(location, from);

  const onSubmit = (data, e) => {
    customLogin(data.email, data.password)
      .then((userCredential) => {
        const currentUser = userCredential.user;
        updateProfile(currentUser, {
          displayName: data.name,
        });
        if (currentUser.email) {
          const savedUser = {
            name: data.name,
            email: data.email,
          };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(savedUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                toast.success("Signup Completed");
                e.target.reset();
                navigate(from, { replace: true });
              }
            });
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
          <div className="loginRight">
            <h2 className="text-3xl text-center font-semibold mb-7">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="loginInput mb-5">
                <label className="block font-medium mb-2">Name</label>
                <input
                  required
                  {...register("name")}
                  className="block w-full border border-black bg-white rounded-sm px-5 py-3 outline-0"
                  type="text"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="loginInput mb-5">
                <label className="block font-medium mb-2">Email</label>
                <input
                  required
                  {...register("email")}
                  className="block w-full border border-black bg-white rounded-sm px-5 py-3 outline-0"
                  type="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="loginInput mb-5">
                <label className="block font-medium mb-2">Password</label>
                <input
                  required
                  autoComplete="off"
                  {...register("password")}
                  className="block w-full border border-black bg-white rounded-sm px-5 py-3 outline-0"
                  type="password"
                  placeholder="Enter Your Password"
                />
              </div>

              <div className="submit">
                <button
                  className="block w-full px-5 py-3 bg-[#DBB984] font-medium text-white"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="formPara text-center mt-6">
              <p className="text-[#DBB984]">
                Already registered?
                <Link to="/login">
                  <strong> Go to log in</strong>
                </Link>
              </p>
            </div>
          </div>
          <div className="loginLeft">
            <img className="block w-full" src={login} alt="login images" />
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </section>
  );
};

export default Signup;
