import { categories } from "../utils/constants";
import { Stack } from "@mui/material";

const Sidebar = () => {
  const selectedCategory = "New";

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((e) => {
        return (
          <button
            key={e.name}
            className="category-btn"
            style={{
              background: e.name === selectedCategory && "#FC1503",
              color: "white",
            }}
          >
            <span style={{color : e.name === selectedCategory ? 'white' : 'red', marginRight : '15px'}} >{e.icon}</span>
            <span style={{opacity : e.name === selectedCategory ? '1' :  '0.8'}} >{e.name}</span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
