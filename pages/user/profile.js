import { useSelector } from "react-redux";
import DashBoardHeader from "../../components/dashboard/DashBoardHeader";
import UpdateUserForm from "../../components/dashboard/profile-page/UpdateUserForm";
import SideBar from "../../components/dashboard/SideBar";
import { getUser } from "../../redux/slices/userSlice";

export default function Profile() {
  let user = useSelector(getUser);
  return (
    <div className="flex flex-col">
      <DashBoardHeader />
      <div className="flex justify-center bg-white">
        <div className="flex justify-between w-10/12 h-fit ">
          <SideBar />
          <UpdateUserForm currentUser={user} />
        </div>
      </div>
    </div>
  );
}
