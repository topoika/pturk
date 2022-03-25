import UniversalHeadder from "../../components/universal/UniversalHeadder";

export default function AddListing() {
  return (
    <div>
      <UniversalHeadder props={{ searchName: "" }} />
      <div className="flex justify-center">
        <div className="flex justify-center items-center relative top-[14vh] flex-col max-w-6xl w-9/12">
          <div className="flex justify-start w-full px-4 my-3">
            <p className="text-red-900 text-xl font-bold">
              Add a new Business Listing
            </p>
          </div>
          <form className="w-full px-4">
            <div className="flex my-4 w-full">
              <input
                type="text"
                placeholder="Business Name"
                name="name"
                className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-md"
              />
              <div className="w-[30px]" />
              <input
                type="text"
                placeholder="Address"
                name="address"
                autoComplete="address-line"
                className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-md"
              />
            </div>
            <div className="flex my-4 w-full">
              <input
                type="text"
                placeholder="Longitude"
                name="longitude"
                className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-md"
              />
              <div className="w-[30px]" />
              <input
                type="text"
                placeholder="Latitude"
                name="latitude"
                autoComplete="address-line"
                className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-md"
              />
            </div>
            <button>
              <a
                target="blank"
                href="https://www.gps-coordinates.net/my-location"
                className="hover:text-blue-700"
              >
                Find my coodinates ?
              </a>
            </button>
            <div className="flex my-4 w-full">
              <input
                type="checkbox"
                placeholder="Longitude"
                name="longitude"
                className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-md"
              />
              Dining
            </div>
            <div className="my-4 lg:w-2/3">
              <textarea
                type="text"
                rows="8"
                placeholder="Short Description"
                name="short_desc"
                className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-md"
              />
              <div className="w-[30px]" />
              <textarea
                type="text"
                rows={16}
                placeholder="Description"
                name="description"
                className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-md"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
