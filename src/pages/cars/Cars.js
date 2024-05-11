import React, { Fragment } from "react";
import "./cars.scss";

import SearchIcon from "@mui/icons-material/Search";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Box,
  Button,
  CardActionArea,
  CardActions,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

function Cars() {
  const carData = [
    {
      id: 1,
      name: "Porche Taycan",
      imageUrl:
        "https://static.autox.com/uploads/cars/2021/11/porsche-taycan.jpg",
      brand: "Porche",
      price: "₹1000/h",
      available: true,
    },
    {
      id: 2,
      name: "Mercedez Benz AMG GLE Coupe",
      imageUrl:
        "https://static.autox.com/uploads/cars/2024/02/mercedes-benz-amg-gle-coupe1.jpg",
      brand: "Mercedez Benz",
      price: "₹1500/h",
      available: false,
    },
    {
      id: 3,
      name: "Maruti Suzuki Swift",
      imageUrl:
        "https://static.autox.com/uploads/cars/2024/05/maruti-suzuki-swift.jpg",
      brand: "Maruti Suzuki",
      price: "₹500/h",
      available: true,
    },
    {
      id: 4,
      name: "Force Motors Gurkha",
      imageUrl:
        "https://static.autox.com/uploads/cars/2024/05/force-motors-gurkha.jpg",
      brand: "Force Motors",
      price: "₹750/h",
      available: true,
    },
  ];

  return (
    <Fragment>
      <h1 className="heading">Cars</h1>
      <div className="search-add">
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            width: 200,
            height: 35,
          }}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>

        <Link to={"/add-car"} className="add-button">
          <Button
            variant="contained"
            style={{
              marginBottom: "1rem",
            }}
          >
            Add Car
          </Button>
        </Link>
      </div>

      <div className="cars-list">
        {carData.map((car) => (
          <div className="card" key={car.id}>
            <Card sx={{ maxWidth: 345, minWidth: 300 }}>
              <CardActionArea>
                <Box
                  sx={{
                    width: "25%",
                    textAlign: "center",
                    top: 0,
                    left: 0,
                    padding: "4px 8px",
                    margin: "1rem",
                    backgroundColor: "transparent",
                    border: car.available
                      ? "1px solid #4caf50"
                      : "1px solid #f44336",
                    borderRadius: 4,
                    color: car.available ? "#4caf50" : "#f44336",
                    zIndex: 1,
                  }}
                >
                  {car.available ? "Available" : "Unavailable"}
                </Box>
                <CardMedia
                  component="img"
                  height="140"
                  image={car.imageUrl}
                  alt={car.name}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {car.brand}
                  </Typography>
                  <div className="car-info">
                    <Typography gutterBottom variant="h6" component="div">
                      {car.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {car.price}
                    </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}

        {/* <div className="card">card 2</div>
        <div className="card">card 3</div>
        <div className="card">card 4</div>
        <div className="card">card 5</div>
        <div className="card">card 6</div>
        <div className="card">card 7</div>
        <div className="card">card 8</div>
        <div className="card">card 9</div> */}
      </div>
    </Fragment>
  );
}

export default Cars;
