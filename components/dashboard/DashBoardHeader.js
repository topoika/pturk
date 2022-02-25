import Image from "next/image";
import Link from "next/link";
import React from "react";

function DashBoardHeader() {
  return (
    <div className="flex  bg-[#E00707] justify-center items-center py-2 ">
      <div className="max-w-6xl w-9/12 h-4/5">
        <div>
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
      </div>
      <p>This is a dashboard header</p>
    </div>
  );
}

export default DashBoardHeader;
