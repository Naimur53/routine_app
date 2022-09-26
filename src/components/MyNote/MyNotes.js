import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getDataFromLocalDb } from "../../utilities/localDb";
import MainLayout from "../ShareComponents/MainLayout/MainLayout";
import ModalProvider from "../ShareComponents/Modal/ModalProvider";
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

const MyNotes = ({ items, editItem, removeItem }) => {
  const [cacheItems, setCacheItems] = useState(getDataFromLocalDb("lists"));
  const { bgStyle, contentStyle, headingStyle } = chooseTheme(4);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* <MainLayout> */}
      {cacheItems?.map((singleCacheItem, i) => (
        <div className={bgStyle + " p-4 rounded-xl mb-2"}>
          <Grid container spacing={3}>
            <Grid item md={10}>
              <div>
                <p>{singleCacheItem.title}</p>
                <p>{singleCacheItem.note}</p>
              </div>
            </Grid>

            <Grid item md={2}>
              <Button
                onClick={() => {
                  // setOpen(true);
                  editItem(singleCacheItem.id);
                }}
              >
                <UpdateIcon />
              </Button>
              {/* <ModalProvider open={open} onClose={handleClose} /> */}
              <Button onClick={() => removeItem(singleCacheItem.id)}>
                Remove
              </Button>
            </Grid>
          </Grid>
        </div>
      ))}

      {/* </MainLayout> */}
    </>
  );
};

export default MyNotes;
