import { Box, Container, Grid, Typography } from "@mui/material";

import cities from "../data.json";

const Home = () => {
  return (
    <>
      <Container maxWidth="md">
        {cities.map((city) => (
          <Box key={city.id}>
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
                <p>{tour.name}</p>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </>
  );
};

export default Home;
