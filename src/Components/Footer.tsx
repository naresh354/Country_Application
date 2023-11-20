import google from "../assets/google.png";
import facebook from "../assets/facebook.png"
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ mb: 4, mt: 4 }}>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", mt: 10, mb: 5 }}>
      <Box component="img" sx={{ border: "2px solid #3C3C3C", p: 1, ml: 2, borderRadius: "50%" }} src={google} />
      <Box component="img" sx={{ border: "2px solid #3C3C3C", p: 1, ml: 2, borderRadius: "50%" }} src={facebook} />
      <Box component="img" sx={{ border: "2px solid #3C3C3C", p: 1, ml: 2, borderRadius: "50%" }} src={linkedin} />
      <Box component="img" sx={{ border: "2px solid #3C3C3C", p: 1, ml: 2, borderRadius: "50%" }} src={twitter} />



        
      </Box>
        <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ fontWeight: "800", fontSize: "0.8rem" }}>Example@email.com </Typography>
            <Typography sx={{ fontWeight: "800", fontSize: "0.8rem", mt: 1 }}>Copyright © 2020 Name. All rights reserved.</Typography>
        </Box>
     
    </Box>
  )
}

export default Footer