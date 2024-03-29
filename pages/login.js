import Image from "next/image";
import Link from "next/link";
import Footer from "../components/home/Footer";
import SocialAuthButton from "../components/home/simplecomponents/SocialAuthButton";
import AuthHeader from "../components/universal/AuthHeader";
import AuthImage from "./../public/static/images/auth_page.png";
import Router from "next/router";
import Constants from "./../components/constant";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlice";
import Cookies from "js-cookie";

export default function Login() {
  const dispatch = useDispatch();
  const logUserIn = async (event) => {
    event.preventDefault();
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: event.target.email.value,
          password: event.target.password.value,
        }),
      };
      const res = await fetch(Constants.BASE_URL + "/login", requestOptions)
        .then((response) => response.json())
        .then((data) => data.user);
      if (res.length > 0) {
        let user = res[0];
        dispatch(login(user));
        Cookies.set("session_token", user.api_token);
        Cookies.set("session", "true");
        Router.push("/");
      } else {
        alert("You have enter wrong details");
      }
      console.log(res.length);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex  flex-col">
      <AuthHeader />
      <div className="flex justify-center items-center content-center w-full bg-white">
        <div className="flex w-5/12 justify-between pt-[100px]">
          <div className="flex flex-col w-5/12 justify-start">
            <div className="flex flex-col justify-center items-center w-full">
              <p className=" place-items-center text-red-700 font-bold text-xl">
                Log in to Pturk
              </p>
              <div className="flex justify-between items-center">
                <p className=" place-items-center text-black font-medium text-base my-[5px]">
                  New to Pturk?
                </p>
                <Link href={"/signup"}>
                  <a>
                    <p className=" place-items-center text-[#0073bb] font-medium  ml-2 text-base hover:underline cursor-pointer">
                      Sign Up
                    </p>
                  </a>
                </Link>
              </div>
            </div>

            {/* LOG IN FORM */}
            <div className="flex flex-col justify-start">
              <p className=" place-items-center text-center my-6 text-black font-normal  ml-2 text-sm ">
                By logging in, you agree to Pturk’s{" "}
                <span className=" text-[#0073bb] mr-1 hover:underline cursor-pointer">
                  Terms of Service
                </span>
                and
                <span className="text-[#0073bb] ml-1 hover:underline cursor-pointer">
                  Privacy Policy.
                </span>
              </p>
              <SocialAuthButton />
              <div className="flex items-center">
                <div className="h-[1px] bg-black opacity-30 w-full" />
                <p className="mx-2 text-base font-normal text-black opacity-70">
                  OR
                </p>
                <div className="h-[1px] bg-black opacity-30 w-full" />
              </div>
              {/* Login form here */}
              <form onSubmit={logUserIn}>
                <div className="w-full my-2">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    autoComplete="email"
                    className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-sm"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    autoComplete="password"
                    className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-sm"
                  />
                  <p className=" place-items-center text-right font-normal text-[#0073bb] hover:underline cursor-pointer  ml-2 text-sm ">
                    Forgot Password
                  </p>
                  <button
                    type="submit"
                    className="h-fit justify-center flex my-3  w-full items-center bg-[#E00707] hover:bg-[#ee5656]  rounded-sm text-[#ffffff]   px-4 py-[10px]  text-base font-bold cursor-pointer  "
                  >
                    Log In
                  </button>

                  <div className="flex justify-end">
                    <p className=" place-items-center text-right font-normal text-black opacity-50 ml-2 text-sm">
                      New to Pturk?
                    </p>
                    <Link href={"/signup"}>
                      <a>
                        <p className=" place-items-center text-right font-normal text-[#0073bb] hover:underline cursor-pointer  ml-[2px] text-sm ">
                          Sign Up
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="flex justify-between">
            <Image
              src={AuthImage}
              width="382"
              height="342"
              objectFit="contain"
              alt="Pturk Logo"
              className="align-center"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
