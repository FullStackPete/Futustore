export type productsType = {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
  };
  
  export type CardProps = {
    products: productsType[];  
    prodId:number;
  };