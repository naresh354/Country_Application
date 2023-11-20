import React from "react";
import Form from "./Form";
import { Box, Grid } from "@mui/material";
import LogoImg from "../assets/logoBanner.png";

function Login() {
  return (
    <div className="centerElement" style={{ height: "100vh" }}>
      <Grid container sx={{ width: "100%" }}>
        <Grid xs={12} sm={6} className="centerElement">
          <Form />
        </Grid>
        <Grid
          xs={12}
          sm={6}
          sx={{
            display: {
              xs: "none",
              sm: "block",
              
            },
          }}
        >
          <div className="centerElement">
          <Box component="img" src={LogoImg}></Box>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
