import Carousel from "../../components/Carousel";
import { SwiperSlide } from "swiper/react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { productsCarouselMaxCount } from "../../utils/constants";
import { Box, Typography } from "@mui/material";
import { ProductCardType, ProductType } from "../../Types/ProductTypes";
import useProductsByCategory from "../../hooks/productsHooks/useProductsByCategory";
import CardSkeleton from "../../components/ProductCard/CardSkeleton";
import EmptyDataMsg from "../../components/EmptyDataMsg";

const productCarouselbreakpoints = {
  0: {
    slidesPerView: 1.5,
    spaceBetween: 15,
  },
  400: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  500: {
    slidesPerView: 2.5,
    spaceBetween: 20,
  },
  900: {
    slidesPerView: 3.5,
    spaceBetween: 20,
  },
  1200: {
    slidesPerView: 5,
    spaceBetween: 40,
  },
};

type SuggestedProductsProps = Pick<ProductType, "category" | "id">;

function SuggestedProducts({ category, id }: SuggestedProductsProps) {
  const { isError, isLoading, error, suggestedProducts } =
    useProductsByCategory(category);

  if (isError) {
    return <EmptyDataMsg message={error?.message as string} />;
  }

  if (category) {
    return (
      <Box
        component={"section"}
        sx={{
          width: "100%",
          position: "relative",
        }}
      >
        <Typography
          variant="h4"
          component={"h4"}
          sx={{
            position: "absolute",
            top: { xs: "0.21rem", sm: "-0.1rem", md: "-0.2rem", lg: "0.2rem" },
            left: "0rem",
            zIndex: "999",
            fontWeight: "500",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          Suggested
        </Typography>

        <Carousel width="100%" breakpoints={productCarouselbreakpoints}>
          {isLoading
            ? Array.from({ length: productsCarouselMaxCount }).map((_, i) => {
                return (
                  <SwiperSlide key={i}>
                    <CardSkeleton isInSlider={true} />
                  </SwiperSlide>
                );
              })
            : suggestedProducts.map((product: ProductCardType, i: number) => {
                if (i >= productsCarouselMaxCount) return null;
                if (product.id === id) return null;
                return (
                  <SwiperSlide key={product.id}>
                    <ProductCard
                      isInSlider={true}
                      id={product.id}
                      tag={product.tag}
                      discount={product.discount}
                      image={product.image}
                      name={product.name}
                      price={product.price}
                      ratingValue={product.ratingValue}
                    />
                  </SwiperSlide>
                );
              })}
        </Carousel>
      </Box>
    );
  }
}

export default SuggestedProducts;
