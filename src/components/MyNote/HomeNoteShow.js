import React, { useState } from "react";
import { getDataFromLocalDb } from "../../utilities/localDb";

const HomeNoteShow = ({ list }) => {
  console.log({ list });
  return (
    <div className="  overflow-y-auto">
      {list?.slice(0, 3).map((singleCacheItem, i) => (
        <>
          <div
            className={
              "bg-light-purple p-3  rounded-xl mb-2 text-justify break-words"
            }
          >
            <div>
              <p className="font-bold  ">{singleCacheItem.title}</p>
              <p>{singleCacheItem.note}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default HomeNoteShow;
