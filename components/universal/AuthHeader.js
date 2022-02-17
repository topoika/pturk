import Image from "next/image";
import Link from "next/link";

function AuthHeader() {
  return (
    <div className="flex  bg-[#E00707] justify-center items-center py-2">
      <Link href={"/"}>
        <a>
          <Image
            src={
              "https://s3-media0.fl.yelpcdn.com/assets/public/logo_desktop_white.yji-2d2a7a4342fcfc9007c4020b1f76558a.svg"
            }
            alt="Pturk Logo"
            width="85"
            height="50"
            className="align-center"
          />
        </a>
      </Link>
    </div>
  );
}

export default AuthHeader;
