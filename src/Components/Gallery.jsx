import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Stack, Typography } from "@mui/material";
import { gallery } from "../Constants/Constants";
import { SectionWrapper } from "./hoc";
import { Container } from "@mui/system";
function Gallery() {
  return (
    <Box bgcolor="#f4f4f4" className="section">
      <Container>
        <Typography
          fontWeight="bold"
          fontSize={{ xs: "18px", sm: "35px" }}
          color="black"
          textAlign="center"
          mb="60px">
          Our Gallery
        </Typography>
        <Box p="0 50px" position="relative">
          <Swiper
            loop={true}
            modules={[Navigation, Pagination]}
            breakpoints={{
              540: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              991: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            spaceBetween={20}
            // slidesPerView={1}
            navigation
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}>
            {gallery.map((item) => (
              <Stack key={item.id}>
                <SwiperSlide>
                  <img
                    src={item.img}
                    alt={item.id}
                    style={{ width: "100%", height: "100%" }}
                  />
                </SwiperSlide>
              </Stack>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}

export default SectionWrapper(Gallery, "gallery");
