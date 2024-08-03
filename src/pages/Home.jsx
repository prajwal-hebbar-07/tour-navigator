import { Box, Container, Grid, Typography } from "@mui/material";

import cities from "../data.json";
import TourCard from "../components/TourCard";

const Home = () => {
  return (
    <>
      <Container maxWidth="lg">
        {cities.map((city) => {
          const cityName = city.name;
          return (
            <Box key={city.id} pt={2} pb={2}>
              <Typography
                variant="h3"
                component="h2"
                color="secondary"
                fontWeight="bold"
                mb={3}
              >
                {city.name}
              </Typography>
              <Grid container spacing={2}>
                {city.tours.map((tour) => (
                  <TourCard key={tour.id} cityName={cityName} tour={tour} />
                ))}
              </Grid>
            </Box>
          );
        })}
      </Container>
    </>
  );
};

export default Home;
