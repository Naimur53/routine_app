import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ModalProvider from "../ShareComponents/Modal/ModalProvider";
import EditIcon from "@mui/icons-material/Edit";
import MainLayout from "../ShareComponents/MainLayout/MainLayout";
import { getDataFromLocalDb, updateLocalDb } from "../../utilities/localDb";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArticleIcon from "@mui/icons-material/Article";

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
    <>
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
                className="inline-flex items-center mt-3 px-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Edit Note
              </button>
            </form>
          </Box>
        </Modal>
      </div>
      <MainLayout>
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
        {list?.reverse().map((singleCacheItem, i) => (
          <>
            <div className={"bg-light-purple p-4 rounded-xl mb-2"}>
              <div className="flex flex-wrap">
                <div className="flex-1 w-64 text-justify">
                  <p className="font-bold">{singleCacheItem.title}</p>
                  <p>{singleCacheItem.note}</p>
                </div>
                <div className="w-16">
                  <Button
                    onClick={() => {
                      setOpen(true);
                      editItem(singleCacheItem.id);
                    }}
                  >
                    <EditIcon />
                  </Button>
                  <Button onClick={() => removeItem(singleCacheItem.id)}>
                    <DeleteForeverIcon />
                  </Button>
                </div>
              </div>
            </div>
          </>
        ))}
      </MainLayout>
    </>
  );
};

export default MyNotes;
