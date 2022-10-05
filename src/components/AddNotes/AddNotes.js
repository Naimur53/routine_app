import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import {
  getDataFromLocalDb,
  putDataInLocalDb,
  updateLocalDb,
} from "../../utilities/localDb";
import MyNotes from "../MyNote/MyNotes";

const AddNote = ({ setList, onClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: new Date().getTime().toString(),
      title: name,
      note: description,
    };

    setName("");
    setDescription("");
    putDataInLocalDb("lists", newItem);
    setList((pre) => [...pre, newItem]);
    onClose();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Typography id="modal-modal-title" variant="body1">
          ADD YOUR NOTE
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
          Submit Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
