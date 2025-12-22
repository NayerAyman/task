import ProductDetails from "./ProductSection/ProductDetails";

const dummyProduct = {
  name: "J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue",
  description:
    "Lorem ipsum dolor sit , consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, diam nonummy",
  price: 350,
  discount: 50,
  discountEndDate: "2025-01-15",
  ratingValue: 4.5,
  reviewsNumber: 128,
  colors: ["#d90202", "#b8ccda", "#988755", "#7198c8", "#5d5d5b"],
  images: [
    "/imgs/prodImg1.png",
    "/imgs/prodImg2.png",
    "/imgs/prodImg3.png",
    "/imgs/prodImg4.png",
  ],
};

export default function ProductSection() {
  return (
    <ProductDetails
      name={dummyProduct.name}
      description={dummyProduct.description}
      price={dummyProduct.price}
      discount={dummyProduct.discount}
      images={dummyProduct.images}
      colors={dummyProduct.colors}
    />
  );
}
