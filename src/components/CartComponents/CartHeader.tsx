import { CartHeaderTypes } from "../../models/models";

function CartHeader({text}:CartHeaderTypes) {
    return (<p className="mt-28 text-2xl ml-4 font-semibold">{text}</p>  );
}

export default CartHeader;