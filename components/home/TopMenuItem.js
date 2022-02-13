function TopMenuItem({ text }) {
  return (
    <div>
      <p className="text-base text-white font-bold pr-1.5 pl-1.5 cursor-pointer hover:animate-pulse hover:underline underline-offset-4 ">
        {text}
      </p>
    </div>
  );
}

export default TopMenuItem;
