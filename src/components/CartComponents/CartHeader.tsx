import { CartHeaderTypes } from "../../models/models";

function CartHeader({text}:CartHeaderTypes) {
    return (<p className="text-2xl ml-4 md:ml-0 font-semibold md:text-center md:bg-white md:p-2 md:rounded-t-md">{text}</p>  );
}

export default CartHeader;