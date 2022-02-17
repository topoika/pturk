import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialAuthButton({ colortext, colorbg, Icon, text }) {
  return (
    <div>
      <button
        type="button"
        className="h-fit w-full items-center rounded-md border text-[{colortext}] border-white  px-4 py-[10px]  bg-[{colorbg}] text-base font-semibold cursor-pointer  "
      >
        <div className=" flex">
          <FontAwesomeIcon icon={faFaceRelieved} />
          <Icon className="h-6" /> {text}
        </div>
      </button>
    </div>
  );
}

export default SocialAuthButton;
