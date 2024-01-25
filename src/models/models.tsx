export type productsType = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
};
export type cartItemType = {
  product: productsType;
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

export type apiData = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}[] | null;
