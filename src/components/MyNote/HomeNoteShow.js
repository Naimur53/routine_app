import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { getDataFromLocalDb } from "../../utilities/localDb";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
const HomeNoteShow = ({ list }) => {
  return (
    <Grid container spacing={4}>
      {list?.slice(0, 3).map((singleCacheItem, i) => (
        <>
          <Grid item md={12} lg={12}>
            <div class="bg-white border-t-4 border-t-green-300  p-5   rounded-tl-xl rounded-br-xl shadow-md w-[320px]   min-h-[80px]">
              <div className="flex justify-between">
                {" "}
                <h1 title="title" class="text-xl font-bold">
                  {singleCacheItem.title}
                </h1>
              </div>

              <div class="mb-3">
                <div class="bg-gray-400 w-24 h-1 rounded-lg mt-2   overflow-hidden">
                  <div class="bg-gray-100 w-full h-full rounded-lg shadow-md"></div>
                </div>
              </div>

              <h2 title="note" class="tracking-wide">
                {singleCacheItem.note}
              </h2>
              <div className="mt-2"></div>
            </div>
          </Grid>
        </>
      ))}
    </Grid>
  );
};

export default HomeNoteShow;
