import { CartSectionType } from "../models/models";


export default function CartSection({ children,customClass }:CartSectionType) {
  return <div className={`flex border-y-2 ${customClass}`}>{children}</div>;
}
