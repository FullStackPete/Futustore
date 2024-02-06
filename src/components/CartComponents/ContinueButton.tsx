import { ContinueButtonType } from "../../models/models";
function ContinueButton({
  text,
  type,
  className,
  onClick,
}: ContinueButtonType) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={
        `flex m-4 px-4 py-2 border bg-[#B6C9C0] rounded-md font-medium ` +
        className
      }
    >
      {text}
    </button>
  );
}

export default ContinueButton;
