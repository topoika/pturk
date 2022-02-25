function SideBarItems({ text, Icon, active }) {
  return (
    <div
      className={
        active
          ? "bg-gray-500 border-l-8 border-blue-700 mb-2"
          : "bg-transparent border-l-8 border-transparent mb-2 hover:bg-slate-300"
      }
    >
      <div className="flex items-center py-2 px-4">
        <Icon className="h-5 w-5 text-white mx-1" />
        <p className="text-white font-bold text-[14px]">{text}</p>
      </div>
    </div>
  );
}

export default SideBarItems;
