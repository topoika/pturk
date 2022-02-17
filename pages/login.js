import { formatWithValidation } from "next/dist/shared/lib/utils";
import Image from "next/image";
import SocialAuthButton from "../components/home/simplecomponents/SocialAuthButton";
import AuthHeader from "../components/universal/AuthHeader";
import AuthImage from "./../public/static/images/auth_page.png";
import { SearchIcon } from "@heroicons/react/solid";

export default function Login() {
  return (
    <div className="flex  flex-col">
      <AuthHeader />
      <div className="flex justify-center items-center content-center w-full bg-white">
        <div className="flex w-5/12 justify-between pt-[200px]">
          <div className="flex flex-col w-5/12 justify-start">
            <div className="flex flex-col justify-center items-center w-full">
              <p className=" place-items-center text-red-700 font-bold text-xl">
                Log in to Pturk
              </p>
              <div className="flex justify-between">
                <p className=" place-items-center text-black font-medium text-base my-[5px]">
                  New to Pturk?
                </p>
                <p className=" place-items-center text-[#0073bb] font-medium  ml-2 text-base hover:underline cursor-pointer">
                  Sign Up
                </p>
              </div>{" "}
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
              <button
                type="button"
                className="h-fit w-full items-center rounded-md border text-white border-white  px-4 py-[10px]  bg-[#E00707] text-base font-semibold cursor-pointer  "
              >
                Continue with Facebook
              </button>
              <SocialAuthButton
                text={"Continue with Google"}
                colortext="#666666"
                colorbg="fff"
                Icon={SearchIcon}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <Image
              src={AuthImage}
              width="382"
              height="342"
              alt="Pturk Logo"
              className="align-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
