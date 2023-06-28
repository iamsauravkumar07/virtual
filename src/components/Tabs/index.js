import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
export const Tabs = () => {
  return (
    <>
      <Box sx={{ display: "flex", width: 1, m: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: 14,
              mr: 2,
              color: "text.primary",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              Your
            </Link>
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ fontSize: 14, mr: 2, color: "text.primary" }}
          >
            <Link to="/all" style={{ textDecoration: "none" }}>
              All
            </Link>
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ fontSize: 14, mr: 2, color: "text.primary" }}
          >
            <Link to="/blocked" style={{ textDecoration: "none" }}>
              {" "}
              Blocked
            </Link>
          </Typography>
        </Box>

        <Box sx={{ display: "flex" }}></Box>
      </Box>
    </>
  );
};
