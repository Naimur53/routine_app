import { TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const initialState = {
  title: "",
  note: "",
};
const AddNote = () => {
  const [formValue, setFormValue] = useState(initialState);
  const [cacheItem, setCacheItems] = useState([]);
  const { title, note } = formValue;

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && note) {
      console.log("title,note", title, note);

      let oldData = JSON.parse(localStorage?.getItem("formValue"));

      // localStorage.setItem("formValue", JSON.stringify(formValue));
      localStorage.setItem(
        "formValue",
        JSON.stringify([...oldData , formValue])
      );
    }
  };

  // onSubmit = {(e) => e.preventDefault()}

  useEffect(() => {
    const cacheItems = JSON.parse(localStorage.getItem("formValue"));
    if (cacheItems) {
      setCacheItems(cacheItems);
    }
  }, []);

  console.log("cacheItems", cacheItem);

  return (
    <form onSubmit={handleSubmit}>
      <Typography id="modal-modal-title" variant="body1">
        ADD YOUR NOTE
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 1 }}>
        <TextField
          id="standard-search"
          name="title"
          value={title}
          onChange={onInputChange}
          label="Add Title"
          type="name"
          variant="standard"
          sx={{ width: "100%", mb: 3 }}
          color="success"
        />

        <textarea
          id="message"
          name="note"
          value={note}
          onChange={onInputChange}
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message..."
        ></textarea>
      </Typography>

      <button
        type="submit"
        class="inline-flex items-center mt-3 px-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
      >
        Publish Note
      </button>
    </form>
  );
};

export default AddNote;
