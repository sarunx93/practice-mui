import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import cities from "../data.json";
import { Box, Typography } from "@mui/material";
import ImageCollage from "../components/ImageCollage";
import Accordian from "../components/Accordian";
const Tour = () => {
  const { id } = useParams();

  const tour = cities.map((city) => city.tours.filter((tour) => tour.id));
  const preSelectedTour = tour.flat();
  const selectedTour = preSelectedTour.find((tour) => tour.id == id);

  return (
    <Container sx={{ width: 1200, marginTop: 5 }}>
      <Typography variant="h3" component="h1">
        {selectedTour.name}
      </Typography>
      <Box marginTop={3} sx={{ display: "flex", alignItems: "center" }}>
        <img src={selectedTour.image} alt="" height={325} />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          labore suscipit nihil facere et minus veniam! Repudiandae enim quod,
          minus ex possimus soluta voluptate libero, rem natus doloremque odit
          temporibus.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          Frequently Asked Questions
        </Typography>
        <Accordian />
      </Box>
    </Container>
  );
};

export default Tour;
