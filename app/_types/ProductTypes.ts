
export type ProductType = {
  id: string;
  name: string;
  description: string;
  price: number;
  discount: number | null;
  image: string;
  images: string[];
  colors: string[];
};
