import { ReactNode } from "react";



export type CartHeaderTypes = {
  text:string
}
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
  cardColors: { background: string; topColor: string; bottomColor: string };
  text: { topText: string | undefined; bottomText: string | undefined };
};

export type ProductProps = {
  id: string | undefined;
};

export type CartProviderTypes = {
  children: ReactNode;
};

export type apiData = productsType[] | null;

export type quantityInputTypes = {
  decreaseNumber: () => void;
  increaseNumber: () => void;
  inputValue: number;
  id?: string;
  customClass?: string;
  onChange?: () => void;
};

export type AddressInputProps = {
  type:string, 
  inputName:string,
  placeholder:string,
  maxLength?:number,
}

export type ContinueButtonType = {
  LinkTo:string,
  text:string,
  type?: 'button'|'reset'|'submit',
}