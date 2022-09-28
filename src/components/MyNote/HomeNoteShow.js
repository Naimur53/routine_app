import React, { useState } from "react";
import { getDataFromLocalDb } from "../../utilities/localDb";

const HomeNoteShow = () => {
  const [list, setList] = useState(getDataFromLocalDb("lists"));
  return (
    <div className="fixed custom_height overflow-y-auto">
      {list?.slice(0,3).map((singleCacheItem, i) => (
        <>
          <div className={"bg-light-purple p-3 mx-3 rounded-xl mb-2 text-justify"}>
            <div>
              <p className="font-bold">{singleCacheItem.title}</p>
              <p>{singleCacheItem.note}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default HomeNoteShow;
