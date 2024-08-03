import { useParams } from "react-router-dom";

import cities from "../data.json";
import { Box, Container, Typography } from "@mui/material";
import ImageListScroll from "../components/ImageListScroll";
import Footer from "../components/Footer";

const TourDetails = () => {
  const { place, id } = useParams();

  const cityName = place.replace(/_/g, " ");

  const selectedTour = cities
    .find((city) => city.name === cityName)
    ?.tours.find((tour) => tour.id == id);

  return (
    <Container sx={{ width: 1200 }}>
      <Box my={2}>
        <Typography
          variant="h3"
          component="h1"
          color="secondary"
          fontWeight="bold"
        >
          {selectedTour.name}
        </Typography>
      </Box>
      <Box my={2} display="flex">
        <img src={selectedTour.image} alt={selectedTour.name} height={400} />
        <ImageListScroll />
      </Box>
      <Box my={2}>
        <Typography
          variant="h5"
          component="h2"
          color="secondary"
          fontWeight="bold"
        >
          About
        </Typography>
        <Typography variant="body2" component="p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia placeat
          doloribus ab perferendis obcaecati explicabo deleniti mollitia iusto.
          Aliquam, omnis. Assumenda aperiam, voluptates autem quibusdam
          accusamus eos voluptatibus eligendi soluta. Enim illum dolorum nam
          eaque libero voluptates veniam neque dolores iusto nihil perferendis.
        </Typography>
      </Box>
      <Box my={2}>
        <Typography
          variant="h5"
          component="h2"
          color="secondary"
          fontWeight="bold"
        >
          Rating, Reviews, Price
        </Typography>
        <Typography variant="body1" component="h3">
          Rating - {selectedTour.rating}
        </Typography>
        <Typography variant="body1" component="h3">
          Reviews - {selectedTour.numberOfReviews}
        </Typography>
        <Typography variant="body1" component="h3">
          Price - Rs. {selectedTour.price}/-
        </Typography>
      </Box>
      <Footer />
    </Container>
  );
};

export default TourDetails;
