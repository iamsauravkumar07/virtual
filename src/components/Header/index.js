import AddIcon from "@mui/icons-material/Add";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import { Box } from "@mui/material";
import { IconButton, Typography } from "@mui/material";

export const Header = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "50px",
          m: 2,
        }}
      >
        <Box sx={{ m: 1, display: "flex", alignItems: "center" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "25px",
              fontWeight: "600",
              display: "inline",
            }}
          >
            Virtual Cards
          </Typography>

          <IconButton edge="end" size="small" sx={{ color: "#2774d9" }}>
            <VideocamOutlinedIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ fontSize: "11px", color: "#2774d9", fontWeight: "600" }}
          >
            Learn More
          </Typography>
        </Box>
        <Box
          sx={{
            m: 1,
            display: "flex",
            alignItems: "center",
            boxShadow: 3,
            height: "30px",
            padding: 1,
            borderRadius: 2,
          }}
        >
          <AddIcon fontSize="small" sx={{ fontSize: "17px" }} />
          <Typography
            variant="subtitle1"
            sx={{ fontSize: 11, fontWeight: "500" }}
          >
            virtual card
          </Typography>
        </Box>
      </Box>
    </>
  );
};
