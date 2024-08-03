import { Box, Grid, Paper, Typography, Rating } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Link } from "react-router-dom";

const TourCard = ({ cityName, tour }) => {
  const formattedCityName = cityName.replace(/\s+/g, "_");

  return (
    <Grid item xs={3}>
      <Link
        style={{ textDecoration: "none" }}
        to={`/${formattedCityName}/${tour.id}`}
      >
        <Paper elevation={3}>
          <img src={tour.image} alt={tour.name} className="card-img" />
          <Box my={1} ml={1}>
            <Typography variant="h6" component="h3" color="primary">
              {tour.name}
            </Typography>
            <Box display="flex" alignItems="center" my={1}>
              <AccessTimeIcon color="grey" />
              <Typography variant="body2" component="p" ml={0.5} color="grey">
                {tour.duration} hours
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt={3}
              mb={1}
            >
              <Box display="flex" alignItems="center">
                <Rating value={tour.rating} precision={0.5} readOnly />
                <Typography variant="body2" component="p" ml={0.5}>
                  {tour.rating}
                </Typography>
              </Box>
              <Typography variant="body3" component="p" color="grey" mr={2}>
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box my={2} pb={1}>
              <Typography
                variant="body1"
                component="p"
                fontWeight="bold"
                color="primary"
              >
                Rs. {tour.price}/-
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Link>
    </Grid>
  );
};

export default TourCard;
