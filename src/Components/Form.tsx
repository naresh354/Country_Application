import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import Divider from '@mui/material/Divider';
import google from "../assets/google.png";
import facebook from "../assets/facebook.png"
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import { useNavigate } from "react-router-dom";

function Form() {

    const navigate = useNavigate();

  return (
    <div>
      <Typography sx={{ fontSize: "2rem", fontWeight: "700" }}>
        Sign In
      </Typography>
      <Typography sx={{ fontSize: "0.9rem", fontWeight: "600", mt: 2 }}>
        New user? <span style={{ color: "#587FFF" }}>Create an account</span>
      </Typography>
      <form>
        <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
          <FormControl sx={{ mt: 2, width: "35ch" }} variant="standard">
            <TextField
              name="email"
              autoComplete="off"
              placeholder="Username or email"
            />
          </FormControl>

          <FormControl sx={{ mt: 2, width: "35ch" }} variant="standard">
            <TextField
              name="Password"
              // label="Password"
              variant="outlined"
              placeholder="Password"
              // type={showPassword ? "text" : "password"} // <-- This is where the magic happens
            />
          </FormControl>
          <FormControlLabel
            sx={{ mt: 2, fontWeight: "700" }}
            required
            control={<Checkbox />}
            label="Keep me signed in"
          />
          <Button
            size={"medium"}
            variant="contained"
            type={"submit"}
            sx={{
              mt: 2,
              width: "100%",
              fontWeight: 600,
              backgroundColor: "#3C3C3C",
              "&:hover": {
                backgroundColor: "#3C3C3C"
              },
            }}
            onClick={() => navigate("/home")}
          >
            Sign In
          </Button>
        </Box>
      </form>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", mt: 2 }} >
      <div className="line"></div>
      <Typography sx={{ fontWeight: "700", fontSize: "0.8rem" }}>Or Sign In With</Typography>
      <div className="line"></div>
      </Box>

   <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", mt: 2 }}>
      <Box component="img" sx={{ border: "2px solid #3C3C3C", p: 1, borderRadius: "50%" }} src={google} />
      <Box component="img" sx={{ border: "2px solid #3C3C3C", p: 1, borderRadius: "50%" }} src={facebook} />
      <Box component="img" sx={{ border: "2px solid #3C3C3C", p: 1, borderRadius: "50%" }} src={linkedin} />
      <Box component="img" sx={{ border: "2px solid #3C3C3C", p: 1, borderRadius: "50%" }} src={twitter} />



        
      </Box>
    </div>
  );
}

export default Form;
