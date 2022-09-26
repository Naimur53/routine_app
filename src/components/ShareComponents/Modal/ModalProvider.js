import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import AddNote from "../../AddNotes/AddNotes";

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

const ModalProvider = ({ open, onClose }) => {
  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <AddNote />
        </Box>
      </Modal>
    </div>
  );
};

export default ModalProvider;
