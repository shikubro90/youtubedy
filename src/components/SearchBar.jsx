import { useState } from "react";
import { useNavigate } from "react-router";
import { Paper, IconButton } from "@mui/material";
import { SearchRounded } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={(e) => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value=""
        onChange={() => {}}
      />
      <IconButton >
        <SearchRounded sx={{ p: "10px", color: "red" }} />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
