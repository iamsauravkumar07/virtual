import { Box, Card, CardContent, Typography } from "@mui/material";
import LocalFireDepartmentSharpIcon from "@mui/icons-material/LocalFireDepartmentSharp";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
export const CardItem = (props) => {
  const { carditem } = props;

  const { name_owner, data } = carditem;
  const { budget_name, spent, available_to_spend, card_type, expiry, name } =
    data[0];
  return (
    <Box width="45%" sx={{ boxShadow: 3, m: 1 }}>
      <Card>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "text.primary",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                {name}
              </Typography>
              <Typography sx={{ fontSize: "10px", color: "text.disabled" }}>
                {name_owner}.{budget_name}
              </Typography>
            </Box>
            <Box>
              <LocalFireDepartmentSharpIcon
                size="small"
                sx={{ color: "#bd138a" }}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
            <Typography
              sx={{
                display: "inline",
                fontSize: "10px",
                color: "text.secondary",
                textTransform: "capitalize",
                border: 1,
                px: 1,
                py: 0,
                borderRadius: 1,
              }}
            >
              {card_type}
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: "10px" }}>
              Expires :{expiry}
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{
                height: "7px",
                backgroundColor: "green",
                borderRadius: "10px",
                my: 1.5,
              }}
              variant="determinate"
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex" }}>
              <FiberManualRecordIcon fontSize="small" color="secondary" />
              <Typography sx={{ fontSize: "12px", fontWeight: 500, ml: 1 }}>
                Spend
              </Typography>
            </Box>
            <Typography sx={{ fontSize: "12px", fontWeight: 500 }}>
              {spent.value} {spent.currency}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex" }}>
              <FiberManualRecordIcon fontSize="small" color="success" />
              <Typography sx={{ fontSize: "12px", fontWeight: 500, ml: 1 }}>
                Available to spend
              </Typography>
            </Box>
            <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
              {available_to_spend.value} {available_to_spend.currency}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
