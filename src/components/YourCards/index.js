import { Box } from "@mui/material";
import { CardItem } from "../card";
import { data } from "../data";

export const YourCards = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {data.map((each) => {
          return <CardItem carditem={each} key={each.id} />;
        })}
      </Box>
    </>
  );
};
