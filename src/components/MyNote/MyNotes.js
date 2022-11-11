import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ModalProvider from "../ShareComponents/Modal/ModalProvider";
import EditIcon from "@mui/icons-material/Edit";

import { getDataFromLocalDb, updateLocalDb } from "../../utilities/localDb";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArticleIcon from "@mui/icons-material/Article";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import MainLayout from "./../ShareComponents/MainLayout/MainLayout";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    lg: 550,
    md: 450,
    xs: 350,
  },
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const MyNotes = () => {
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleClose = () => setOpen(false);
  const handleCloseAdd = () => setOpenAdd(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [list, setList] = useState(getDataFromLocalDb("lists"));
  const [isEdit, setEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  //   <div className={"bg-light-purple p-4 rounded-xl mb-2"}>
  //   <div className="flex flex-wrap">
  //     <div className="flex-1 w-64 text-justify">
  //       <p className="font-bold">{singleCacheItem.title}</p>
  //       <p>{singleCacheItem.note}</p>
  //     </div>
  //     <div className="w-16">
  //       <Button
  //         onClick={() => {
  //           setOpen(true);
  //           editItem(singleCacheItem.id);
  //         }}
  //       >
  //         <EditIcon />
  //       </Button>
  //       <Button onClick={() => removeItem(singleCacheItem.id)}>
  //         <DeleteForeverIcon />
  //       </Button>
  //     </div>
  //   </div>
  // </div>
  useEffect(() => {
    updateLocalDb("lists", list);
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && isEdit) {
      setList(
        list?.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name, note: description };
          }
          return item;
        })
      );
      setOpen(false);
      setName("");
      setDescription("");
      setEditId(null);
      setEdit(false);
    }
  };
  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const editItem = list.find((item) => item.id === id);
    setEditId(id);
    setEdit(true);
    setName(editItem.title);
    setDescription(editItem.note);
  };

  return (
    <MainLayout>
      <div>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <form onSubmit={handleSubmit}>
              <Typography id="modal-modal-title" variant="body1">
                UPDATE YOUR NOTE
              </Typography>
              <TextField
                onChange={(e) => setName(e.target.value)}
                value={name}
                label="Add Title"
                type="name"
                variant="standard"
                sx={{ width: "100%", mb: 3 }}
                color="primary"
              />

              <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Your message..."
              />

              <button
                type="submit"
                className="inline-flex items-center mt-3 px-5 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-700 hover:bg-blue-600"
              >
                Update Note
              </button>
            </form>
          </Box>
        </Modal>
      </div>
      <div className="flex flex-wrap mb-2">
        <div className="flex-1 w-64 text-xl ">
          <ArticleIcon /> MY NOTES
        </div>
        <div>
          <Button onClick={handleOpenAdd}>
            Add Note
            <NoteAddIcon sx={{ ml: 1 }} />
          </Button>
          <ModalProvider
            open={openAdd}
            onClose={handleCloseAdd}
            setList={setList}
          />
        </div>
      </div>
      <Grid
        container
        spacing={4}
        sx={{
          marginTop: "20px",
          marginBottom: "20px",
          alignContent: "center",
          justifyContent: "around",

          padding: "10px",
        }}
      >
        {list?.reverse().map((singleCacheItem, i) => (
          <Grid item md={6} lg={4}>
            <div class="bg-white border-t-4 border-t-green-300  p-5   rounded-tl-xl rounded-br-xl shadow-md w-[320px]   min-h-[150px]">
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
              <div className="mt-2">
                <Button
                  title="Edit "
                  onClick={() => {
                    setOpen(true);
                    editItem(singleCacheItem.id);
                  }}
                >
                  <EditIcon sx={{ color: "blue" }} />
                </Button>
                <Button
                  title="Delete "
                  onClick={() => {
                    window.confirm("You wnat to delete?") ? (
                      removeItem(singleCacheItem.id)
                    ) : (
                      <></>
                    );
                  }}
                >
                  <DeleteForeverIcon sx={{ color: "blue" }} />
                </Button>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  );
};

export default MyNotes;
