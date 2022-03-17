import Link from "next/link";
import React from "react";

function MenuItem({ Icon, text, route }) {
  return (
    <div className="flex group my-2">
      <Link href={route}>
        <a className="flex items-center">
          {Icon ? <Icon className="h-5 mr-1 text-[rgb(110,112,114)]" /> : <></>}
          <p className="text-[rgb(110,112,114)] text-base font-medium group-hover:underline">
            {text}
          </p>
        </a>
      </Link>
    </div>
  );
}

export default MenuItem;
