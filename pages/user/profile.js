import DashBoardHeader from "../../components/dashboard/DashBoardHeader";
import SideBar from "../../components/dashboard/SideBar";

export default function Profile() {
  return (
    <div className="flex flex-col">
      <DashBoardHeader />
      <div className="flex justify-center bg-white">
        <div className="flex justify-between w-10/12 h-fit ">
          <SideBar />
          <div className="w-full ">
            <p>this is the page contianer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
