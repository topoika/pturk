import { DownloadIcon, TrashIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Constants from "../../constant";
import Router from "next/router";

function UpdateUserForm() {
  const updateUser = async (event) => {
    event.preventDefault();
    let _user = JSON.stringify({
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      address: event.target.address.value,
      address_2: event.target.address_2.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      city: event.target.city.value,
      state: event.target.state.value,
      zipcode: event.target.zipcode.value,
      country: event.target.country.value,
      about: event.target.about.value,
      facebook_url: event.target.facebook_url.value,
      linkedin_url: event.target.linkedin_url.value,
      twitter_url: event.target.twitter_url.value,
      instagram_url: event.target.instagram_url.value,
      pinterest_url: event.target.pinterest_url.value,
    });
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: _user,
      };
      const res = await fetch(
        Constants.BASE_URL + "/updateuser",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => data.user);
      console.log(res);
      if (res.length > 0) {
        Router.push("/");
      } else {
        alert("You have enter wrong details");
      }
      console.log(res.length);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="w-full  flex flex-col">
      <div className=" px-5 py-4">
        <p className="text-black opacity-70 font-semibold text-lg">
          Update Profile Details
        </p>
      </div>
      <div className="px-9 py-4 my-4 mx-4 border rounded-md">
        <div className="flex justify-start items-center">
          <Image
            className="h-8 w-8 rounded-full"
            height="150"
            width="150"
            objectFit="fit"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile Image"
          />
          <button
            type="button"
            className=" rounded-md h-fit py-[10px] px-4 ml-16 text-white border-white bg-[#E00707] text-base font-bold cursor-pointer  hover:bg-[#ec4949] hover:text-gray-900"
          >
            Update Image
          </button>
        </div>
        <div className="h-[1px] bg-gray-300 my-4" />
        <form onSubmit={updateUser}>
          <div className="flex flex-col">
            <div className="flex my-4">
              <input
                type="text"
                placeholder="First Name"
                name="first_name"
                autoComplete="given-name"
                defaultValue="Topoika"
                className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-sm"
              />
              <div className="w-[30px]" />
              <input
                type="text"
                placeholder="Last Name"
                name="last_name"
                autoComplete="family-name"
                className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-sm"
              />
            </div>
            <div className="flex my-4">
              <input
                type="email"
                placeholder="someone@domain.com"
                name="email"
                autoComplete="email"
                className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-sm"
              />
              <div className="w-[30px]" />
              <input
                type="tel"
                placeholder="+00-12345-67890"
                name="phone"
                autoComplete="tel"
                className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-sm"
              />
            </div>
            <div className="flex my-4">
              <input
                type="text"
                placeholder="Your Address (1st line)"
                name="address"
                autoComplete="address-line1"
                className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-sm"
              />
              <div className="w-[30px]" />
              <input
                type="text"
                placeholder="Your Address (2nd line)"
                name="address_2"
                autoComplete="address-line2"
                className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-sm"
              />
            </div>
            <div className="flex my-4">
              <input
                type="text"
                placeholder="Your City"
                name="city"
                autoComplete="home city"
                className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-sm"
              />
              <div className="w-[30px]" />
              <input
                type="text"
                placeholder="Zip Code"
                name="zipcode"
                autoComplete="postal-code"
                className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-sm"
              />
              <div className="w-[30px]" />
              <input
                type="text"
                placeholder="State"
                name="state"
                autoComplete="home state"
                className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-sm"
              />
              <div className="w-[30px]" />
              <input
                type="text"
                placeholder="Country"
                name="country"
                autoComplete="country-name"
                className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-sm"
              />
            </div>
            <textarea
              type="text"
              rows="8"
              placeholder="Write about youself"
              name="about"
              autoComplete="nickname"
              className="w-full px-2 py-2 my-4 border outline-[2px] rounded-sm"
            />
            <div className="flex my-4">
              <input
                type="text"
                placeholder="Enter facebook profile url"
                name="facebook_url"
                className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-sm"
              />
              <div className="w-[30px]" />
              <input
                type="text"
                placeholder="Enter twitter profile url"
                name="twitter_url"
                className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-sm"
              />
            </div>
            <div className="flex my-4">
              <input
                type="text"
                placeholder="Enter linkedin profile url"
                name="linkedin_url"
                className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-sm"
              />
              <div className="w-[30px]" />
              <input
                type="text"
                placeholder="Enter instagram profile url"
                name="instagram_url"
                className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-sm"
              />
            </div>
            <div className="flex my-4">
              <input
                type="text"
                placeholder="Enter pinterest profile url"
                name="pinterest_url"
                className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-sm"
              />
              <div className="w-[30px]" />
              <div className="w-full" />
            </div>
          </div>
          <button
            type="submit"
            className=" rounded-md my-3 h-fit w-fit py-[10px] px-4  text-white border-white bg-[#E00707] text-base font-bold cursor-pointer  hover:bg-[#ec4949] hover:text-gray-900"
          >
            Update Profile
          </button>
        </form>
      </div>
      <div className="px-5 py-4">
        <p className="text-black opacity-70 font-semibold text-lg">
          Update Password
        </p>
      </div>
      <div className="px-9 py-8 my-4 mx-4 border rounded-md">
        <div className="flex flex-col">
          <div className="flex my-4">
            <input
              type="password"
              placeholder="Write new password"
              name="new_password"
              className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-sm"
            />
            <div className="w-[30px]" />
            <input
              type="password"
              placeholder="Confirm new password"
              name="confirm_new_password"
              className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-sm"
            />
          </div>
          <p>
            Enter same password in both fields Use an uppercase letter and a
            number for stronger password.
          </p>
          <button
            type="submit"
            className=" rounded-md my-3 h-fit w-fit py-[10px] px-4  text-white border-white bg-[#E00707] text-base font-bold cursor-pointer  hover:bg-[#ec4949] hover:text-gray-900"
          >
            Update Password
          </button>
        </div>
      </div>
      <div className="flex justify-between mx-4 mb-9">
        <button
          type="button"
          className="flex items-center rounded-md my-3 h-fit w-fit py-[8px] px-4  text-white border-white bg-[#24ee24] text-sm font-normal cursor-pointer  hover:bg-[#277c0d]"
        >
          <DownloadIcon className="h-4 w-4 text-white mr-1 " />
          Download Profile
        </button>
        <button
          type="button"
          className="flex items-center rounded-md my-3 h-fit w-fit py-[8px] px-4  text-white border-white bg-[#dd3939] text-sm font-normal cursor-pointer  hover:bg-[#b11313]"
        >
          <TrashIcon className="h-4 w-4 text-white mr-1 " />
          Delete Account
        </button>
      </div>
    </div>
  );
}

export default UpdateUserForm;
