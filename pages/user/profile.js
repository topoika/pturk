import DashBoardHeader from "../../components/dashboard/DashBoardHeader";
import UpdateUserForm from "../../components/dashboard/profile-page/UpdateUserForm";
import SideBar from "../../components/dashboard/SideBar";

export default function Profile() {
  return (
    <div className="flex flex-col">
      <DashBoardHeader />
      <div className="flex justify-center bg-white">
        <div className="flex justify-between w-10/12 h-fit ">
          <SideBar />
          <UpdateUserForm />
        </div>
      </div>
    </div>
  );
}
