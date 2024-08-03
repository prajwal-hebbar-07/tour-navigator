import { useParams } from "react-router-dom";

import cities from "../data.json";

const TourDetails = () => {
  const { place, id } = useParams();

  const cityName = place.replace(/_/g, " ");

  const selectedTour = cities
    .find((city) => city.name === cityName)
    ?.tours.find((tour) => tour.id == id);

  return <></>;
};

export default TourDetails;
