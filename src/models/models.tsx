import React, { ReactNode } from "react";

export type CartHeaderTypes = {
  text: string;
};
export type productsType = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
};
export type cartItemType = {
  product?: productsType;
  quantity: number;
};
export type CardProps = {
  products: apiData;
  prodId: number;
  cardColors: { background?: string; topColor: string; bottomColor: string };
  text: { topText: string | undefined; bottomText: string | undefined };
};

export type ProductProps = {
  id: string | undefined;
};

export type ChildrenType = {
  children: ReactNode;
};

export type apiData = productsType[] | null;

export type quantityInputTypes = {
  decreaseNumber: () => void;
  increaseNumber: () => void;
  inputValue: number;
  id?: string;
  customClass?: string;  
};

export type AddressInputProps = {
  type: string;
  inputName: string;
  placeholder: string;
  maxLength?: number;
  minLength?: number;
  inputType: "string" | "number" | "email";
  setInputValidated: (arg1: boolean) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type ContinueButtonType = {
  className?: string;
  text: string;
  type?: "button" | "reset" | "submit";
  onClick?: () => void;
};
export type validationStatus =
  | "Ok"
  | "Type only numbers!"
  | ""
  | "Too many spaces!"
  | "Invalid email!"
  | "Must be 5 characters long!"
  | "Minimum 8 characters long!";

export type AddressType = {
  Name: string;
  Address: string;
  Postal: string;
  City: string;
  Phone: string;
  Email: string;
};

export type CartSectionType = {
  children: React.ReactNode;
  customClass?: string;
};

export type PriceSummaryProps = {
  handleBtnClick: () => void;
  btnText: string;
};

export type addressInputsModelType = {
  name: string;
  placeholder: string;
  inputType: "string" | "number" | "email";
  type: "text" | "tel" | "zip";
  minLength?: number;
  maxLength?: number;
};


export const addressInputsModel: addressInputsModelType[] = [
  { name: "Name", placeholder: "Fullname", inputType: "string", type: "text" },
  {
    name: "Address",
    placeholder: "Address",
    inputType: "string",
    type: "text",
  },
  {
    name: "Postal",
    placeholder: "Zip code",
    inputType: "number",
    type: "zip",
    maxLength: 5,
  },
  { name: "City", placeholder: "City", inputType: "string", type: "text" },
  {
    name: "Phone",
    placeholder: "Phone",
    inputType: "number",
    type: "tel",
    minLength: 8,
    maxLength: 11,
  },
  { name: "Email", placeholder: "Email", inputType: "email", type: "text" },
];