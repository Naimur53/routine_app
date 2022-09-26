import React from "react";
import "./DemoCard.css";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Container,
  Grid,
  Select,
  TextField,
  Typography,
} from "@mui/material";
const DemoCard = (item) => {
  const { institute, semester, department, totalClass, i, routineUses } =
    item.item;
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <Grid item lg={2} md={3}>
      <div className="container ">
        <div className="">
          <div className="">
            <div className=" card">
              <div className="icon slide slide1">
                <h1>informfatljsd</h1>
              </div>
            </div>
          </div>

          <div className="slide slide2">
            <div className="content">
              <h3>Hello there!</h3>

              <p>Trust yourself and keep going.</p>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default DemoCard;
