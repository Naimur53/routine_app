import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getDataFromLocalDb } from "../../utilities/localDb";
import MainLayout from "../ShareComponents/MainLayout/MainLayout";
import UpdateIcon from "@mui/icons-material/Update";
import AddNote from "../AddNotes/AddNotes";
function chooseTheme(i) {
  const theme = [
    {
      img: "./images/blue_bol.png",
      headingStyle: "text-dark-blue",
      contentStyle: "text-medium-blue",
      bgStyle: "bg-light-blue",
    },
    {
      img: "./images/purple_bol.png",
      headingStyle: "text-dark-purple",
      contentStyle: "text-medium-purple",
      bgStyle: "bg-light-purple",
    },
    {
      img: "./images/orange_bol.png",
      headingStyle: "text-dark-orange",
      contentStyle: "text-medium-orange",
      bgStyle: "bg-light-orange",
    },
    {
      img: "./images/green_bol.png",
      headingStyle: "text-dark-green",
      contentStyle: "text-medium-green",
      bgStyle: "bg-light-green",
    },
  ];
  if (i < 4) {
    return theme[i];
  } else {
    return chooseTheme(i - 4);
  }
}

const MyNotes = ({ i }) => {
  const [cacheItem, setCacheItems] = useState([]);
  const { bgStyle, contentStyle, headingStyle } = chooseTheme(4);

  useEffect(() => {
    const cacheItems = getDataFromLocalDb("notes");
    if (cacheItems) {
      setCacheItems(cacheItems);
    }
  }, []);

  console.log("cacheItems", cacheItem);

  return (
    <MainLayout>
      {cacheItem?.map((singleCacheItem, i) => (
        <>
          <div className={bgStyle + " p-4 rounded-xl mb-2"}>
            <Grid container spacing={3}>
              <Grid item md={11}>
                <div>
                  <p>{singleCacheItem.title}</p>
                  <p>{singleCacheItem.note}</p>
                </div>
              </Grid>
              <Grid item md={1}>
                <div>
                  <UpdateIcon />
                </div>
              </Grid>
            </Grid>
          </div>
        </>
      ))}
    </MainLayout>
  );
};

export default MyNotes;
