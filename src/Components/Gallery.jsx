import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Stack, Typography } from "@mui/material";
import { gallery } from "../Constants/Constants";
function Gallery() {
  return (
    <Box bgcolor="#f4f4f4" py="150px">
      <Typography
        fontWeight="bold"
        fontSize={{ xs: "18px", sm: "35px" }}
        color="black"
        textAlign="center"
        mb="60px">
        Our Gallery
      </Typography>
      <Box p="0 250px" position="relative">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={4}
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
                  style={{ width: "100%", height: "250px" }}
                />
              </SwiperSlide>
            </Stack>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

export default Gallery;
