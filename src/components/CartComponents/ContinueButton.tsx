import { Link } from "react-router-dom";
import { ContinueButtonType } from "../../models/models";
function ContinueButton({ LinkTo, text, type }:ContinueButtonType) {
  return (
    <Link to={LinkTo}>
      <button type={type} className="flex m-4 px-4 py-2 border bg-[#B6C9C0] rounded-md font-medium">
        {text}
      </button>
    </Link>
  );
}

export default ContinueButton;
