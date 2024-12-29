import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import theme from "../../assets/theme_pattern.svg";
import services from "../../assets/services_data.js";
import arrow from "../../assets/arrow_icon.svg";

const Services = () => {
  return (
    <Box id="services" sx={{ py: 8, px: 4 }}>
      {/* Title Section */}
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "2rem", sm: "3rem" },
            fontWeight: "bold",
          }}
        >
          My Services
        </Typography>
        <Box
          component="img"
          src={theme}
          alt="Theme pattern"
          sx={{
            width: { xs: "100px", sm: "150px" },
            mx: "auto",
            display: "block",
          }}
        />
      </Box>

      {/* Services Grid */}
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                p: 3,
                border: "2px solid white",
                borderRadius: "10px",
                textAlign: "center",
                transition: "transform 0.4s, border-color 0.4s",
                "&:hover": {
                  transform: "scale(1.05)",
                  borderColor: "pink",
                },
              }}
            >
              <Typography variant="h6" sx={{ fontSize: "1.5rem", fontWeight: 600 }}>
                {service.s_no}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  background: "linear-gradient(270deg, #de8908 50%, #b415ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mt: 2,
                }}
              >
                {service.s_name}
              </Typography>
              <Typography
                sx={{
                  color: "#d4d4d4",
                  fontSize: "1rem",
                  mt: 2,
                  lineHeight: "1.5",
                }}
              >
                {service.s_desc}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                  mt: 3,
                }}
              >
                <Typography
                  sx={{
                    color: "pink",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  Read More
                </Typography>
                <Box
                  component="img"
                  src={arrow}
                  alt="Arrow icon"
                  sx={{ width: "20px" }}
                />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
