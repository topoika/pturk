function TopButton({ Icon, text }) {
  return (
    <div className="flex justify-center py-1 px-7 mr-4 bg-white w-fit items-center rounded-md border border-black border-opacity-50 cursor-pointer hover:bg-[#E2E2E2]">
      <Icon className="h-6 w-6 fill-transparent stroke-black" />
      <p className="text-black text-lg font-semibold ml-2">{text}</p>
    </div>
  );
}

export default TopButton;
