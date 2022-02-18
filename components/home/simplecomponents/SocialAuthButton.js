import Image from "next/image";
import Google from "./../../../public/static/images/social-auth/google.png";
import Facebook from "./../../../public/static/images/menu/facebook.svg";
import Apple from "./../../../public/static/images/menu/apple.svg";

function SocialAuthButton() {
  return (
    <div>
      <button
        type="button"
        className="h-fit justify-center flex my-2  w-full items-center bg-[#19a7ff] hover:bg-[#4ab4f7]  rounded-md text-[#ffffff]   px-4 py-[10px]  text-base font-bold cursor-pointer  "
      >
        <Image
          src={Facebook}
          width="25"
          height="25"
          alt="New Lofo"
          className="mx-2 "
        />
        Continue with Facebook
      </button>
      <button
        type="button"
        className="h-fit justify-center flex my-2  w-full items-center rounded-md border text-[#3b3b3b] border-[#adadad] hover:bg-[#fffbfb] px-4 py-[10px]  text-base font-bold cursor-pointer  "
      >
        <Image
          src={Google}
          width="25"
          height="25"
          alt="New Lofo"
          className="mx-2"
        />
        Continue with Google
      </button>
      <button
        type="button"
        className="h-fit justify-center flex my-2 w-full items-center rounded-md bg-black hover:bg-[#2c2b2b] text-white  px-4 py-[10px]  text-base font-bold cursor-pointer  "
      >
        <Image
          src={Apple}
          width="25"
          height="23"
          alt="New Lofo"
          className="mx-2 "
        />
        Continue with Apple
      </button>
    </div>
  );
}

export default SocialAuthButton;
