import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { AccessTime } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";
const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 14,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 12,
          },
        },
      ],
    },
  },
});

const Card = ({ tour }) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={6}>
          <img src={tour.image} className="img" alt="img" />
          <Box paddingX={2}>
            {/* an h4 with the looks of h2 */}
            <Typography component="h2" variant="h5">
              {tour.name}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTime sx={{ width: 15, marginRight: 0.5 }} />
              <Typography variant="body2" component="p">
                {tour.duration} hours
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
              <Rating
                name="read-only"
                value={tour.rating}
                readOnly
                precision={0.5}
                size="small"
              />
              <Typography variant="body2" component="p" marginLeft={0.75}>
                {tour.rating}
              </Typography>
              <Typography variant="body3" component="p" marginLeft={0.75}>
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="h3" marginTop={0}>
                From A$ 300
              </Typography>
            </Box>
            <Link to={`/${tour.id}`}>More Details</Link>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default Card;
