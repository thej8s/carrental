import React, { Fragment, useEffect, useState } from "react";
import "./cars.scss";

import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  CardActionArea,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";

function Cars() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchNumberPlate, setSearchNumberPlate] = useState("");
  const [searchModel, setSearchModel] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");
  const [filteredCarData, setFilteredCarData] = useState([]);

  const handleSearchOpen = () => {
    setSearchOpen(true);
  };

  const handleFilterOpen = () => {
    setFilterOpen(true);
  };

  const handleSearchClear = () => {
    setSearchOpen(false);
    setSearchNumberPlate("");
    setSearchModel("");
    setFilteredCarData(cars);
  };

  const handleFilterClear = () => {
    setFilterOpen(false);
    setMinPrice("");
    setMaxPrice("");
    setMinYear("");
    setMaxYear("");
    setFilteredCarData(cars);
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  const handleFilterClose = () => {
    setFilterOpen(false);
  };

  const handleSearchSubmit = () => {
    const filteredData = cars.filter((car) => {
      const numberPlateMatch = car.numberPlate
        .toLowerCase()
        .includes(searchNumberPlate.toLowerCase());

      const modelMatch = car.model
        .toLowerCase()
        .includes(searchModel.toLowerCase());

      return numberPlateMatch && modelMatch;
    });
    setFilteredCarData(filteredData);
    setSearchOpen(false);
  };

  const handleFilterSubmit = () => {
    const filteredData = cars.filter((car) => {
      const priceMatch =
        (minPrice === "" || parseInt(car.price) >= parseInt(minPrice)) &&
        (maxPrice === "" || parseInt(car.price) <= parseInt(maxPrice));

      const yearMatch =
        (minYear === "" || parseInt(car.year) >= parseInt(minYear)) &&
        (maxYear === "" || parseInt(car.year) <= parseInt(maxYear));

      return priceMatch && yearMatch;
    });
    setFilteredCarData(filteredData);
    setFilterOpen(false);
  };

  const cars = [
    {
      id: 1,
      model: "Porche Taycan",
      imageUrl:
        "https://static.autox.com/uploads/cars/2021/11/porsche-taycan.jpg",
      numberPlate: "KL60U1111",
      year: "2010",
      price: "1000",
      available: true,
    },
    {
      id: 2,
      model: "Mercedez Benz AMG GLE Coupe",
      imageUrl:
        "https://static.autox.com/uploads/cars/2024/02/mercedes-benz-amg-gle-coupe1.jpg",
      numberPlate: "KL60U2222",
      year: "2015",
      price: "1500",
      available: false,
    },
    {
      id: 3,
      model: "Maruti Suzuki Swift",
      imageUrl:
        "https://static.autox.com/uploads/cars/2024/05/maruti-suzuki-swift.jpg",
      numberPlate: "KL60U3333",
      year: "2020",
      price: "500",
      available: true,
    },
    {
      id: 4,
      model: "Force Motors Gurkha",
      imageUrl:
        "https://static.autox.com/uploads/cars/2024/05/force-motors-gurkha.jpg",
      numberPlate: "KL60U4444",
      year: "2020",
      price: "750",
      available: true,
    },
  ];

  useEffect(() => {
    setFilteredCarData(cars);
  }, []);

  return (
    <Fragment>
      <h1 className="heading">Cars</h1>
      <div className="search-add">
        <div className="search-filter">
          {/* <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              height: 35,
              marginLeft: "1rem",
            }}
          > */}

          <div className="search-filter-icon">
            <IconButton
              type="button"
              sx={{
                p: "10px",
                display: "flex",
                alignItems: "center",
                height: 35,
              }}
              aria-label="search"
              onClick={handleSearchOpen}
            >
              <SearchIcon />
            </IconButton>

            <IconButton
              type="button"
              sx={{
                p: "10px",
                display: "flex",
                alignItems: "center",
                height: 35,
              }}
              aria-label="filter"
              onClick={handleFilterOpen}
            >
              <FilterListIcon />
            </IconButton>
          </div>

          {/* </Paper> */}

          <Dialog open={searchOpen} onClose={handleSearchClose}>
            <DialogTitle>
              Search
              <IconButton
                aria-label="close"
                onClick={handleSearchClose}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <div className="search-grid">
                <TextField
                  id="outlined-basic"
                  sx={{ flex: 1 }}
                  label="Number Plate"
                  variant="outlined"
                  size="small"
                  fullWidth
                  inputProps={{ "aria-label": "number-plate" }}
                  value={searchNumberPlate}
                  onChange={(e) => setSearchNumberPlate(e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  sx={{ flex: 1 }}
                  label="Model"
                  variant="outlined"
                  size="small"
                  fullWidth
                  inputProps={{ "aria-label": "model" }}
                  value={searchModel}
                  onChange={(e) => setSearchModel(e.target.value)}
                />
                <Button
                  sx={{ mt: "1rem" }}
                  variant="contained"
                  onClick={handleSearchSubmit}
                >
                  Submit
                </Button>
                <Button
                  sx={{ mt: "1rem" }}
                  variant="outlined"
                  onClick={handleSearchClear}
                >
                  Clear
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog open={filterOpen} onClose={handleFilterClose}>
            <DialogTitle>
              Filter{" "}
              <IconButton
                aria-label="close"
                onClick={handleFilterClose}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <div className="search-grid">
                <TextField
                  id="outlined-basic"
                  sx={{ flex: 1 }}
                  label="Min Price"
                  variant="outlined"
                  size="small"
                  fullWidth
                  inputProps={{ "aria-label": "min-price" }}
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  sx={{ flex: 1 }}
                  label="Max Price"
                  variant="outlined"
                  size="small"
                  fullWidth
                  inputProps={{ "aria-label": "max-price" }}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  sx={{ flex: 1 }}
                  label="Min Year"
                  variant="outlined"
                  size="small"
                  fullWidth
                  inputProps={{ "aria-label": "min-year" }}
                  value={minYear}
                  onChange={(e) => setMinYear(e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  sx={{ flex: 1 }}
                  label="Max Year"
                  variant="outlined"
                  size="small"
                  fullWidth
                  inputProps={{ "aria-label": "max-year" }}
                  value={maxYear}
                  onChange={(e) => setMaxYear(e.target.value)}
                />
                <Button
                  sx={{ mt: "1rem" }}
                  variant="contained"
                  onClick={handleFilterSubmit}
                >
                  Submit
                </Button>
                <Button
                  sx={{ mt: "1rem" }}
                  variant="outlined"
                  onClick={handleFilterClear}
                >
                  Clear
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
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
        {filteredCarData.map((car) => (
          <div className="card" key={car.id}>
            <Card sx={{ maxWidth: 330 }}>
              <CardActionArea
                sx={{
                  minHeight: 320,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "start",
                }}
              >
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
                <CardContent className="card-text">
                  <Typography variant="body2" color="text.secondary">
                    {car.numberPlate}
                  </Typography>
                  <div className="car-info">
                    <Typography
                      gutterBottom
                      variant="body1"
                      sx={{ fontSize: "1.25rem" }}
                      component="div"
                    >
                      {car.model}
                    </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default Cars;
