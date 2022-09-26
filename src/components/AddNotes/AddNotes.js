import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { getDataFromLocalDb, updateLocalDb } from "../../utilities/localDb";
import MyNotes from "../MyNote/MyNotes";

const AddNote = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [list, setList] = useState(getDataFromLocalDb("lists"));
  const [isEdit, setEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  //   console.log("listttttttt: ", list);
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
      setName("");
      setDescription("");
      setEditId(null);
      setEdit(false);
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
        note: description,
      };
      setList([...list, newItem]);
      setName("");
      setDescription("");
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
    <div>
      <form onSubmit={handleSubmit}>
        {editId ? "UPDATE YOUR NOTE" : " ADD YOUR NOTE"}

        <TextField
          onChange={(e) => setName(e.target.value)}
          value={name}
          label="Add Title"
          type="name"
          variant="standard"
          sx={{ width: "100%", mb: 5 }}
          color="success"
        />

        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message..."
        />

        <button
          type="submit"
          className="inline-flex items-center mt-3 px-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
        >
          {editId ? "Edit Note" : " Submit Note"}
        </button>
      </form>
      <div>
        {list?.length > 0 && (
          <div sx={{ mt: 2 }}>
            <MyNotes items={list} removeItem={removeItem} editItem={editItem} />
            ;
          </div>
        )}
      </div>
    </div>
  );
};

export default AddNote;
