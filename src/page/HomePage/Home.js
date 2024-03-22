import React, { useEffect, useState, Suspense } from "react";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  Paper,
  Typography,
  Switch,
  FormControlLabel,
  Box,
  Button,
  Input,
  Divider,
  Grid,
} from "@mui/material";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { showSuccessToast } from "../../utils/showToast";
import randomUsers from "../../apis/userData/randomUsers";

const UserTable = React.lazy(() =>
  import("../../components/UserTable/UserTable")
);

const Home = ({ setUserAuthenticated }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const apiData = await randomUsers();
      setData(apiData);
      console.log(apiData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  //
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserAuthenticated(false);
    showSuccessToast("You Are Log Out");
    navigate("/");
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper
        elevation={3}
        sx={{
          padding: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          className="title-bar"
          sx={{
            width: "100%",
            display: "inline-flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxSizing: "border-box",
            position: "relative",
            zIndex: "1",
          }}
        >
          <Box>
            <Typography variant="h5" component="h1" gutterBottom>
              Front End Brave
            </Typography>
          </Box>
          <Box>
            <Button onClick={() => handleLogout()} variant="contained">
              LogOut
            </Button>
            <FormControlLabel
              sx={{ ml: "auto" }}
              control={
                <Switch
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />
              }
              label={
                darkMode ? (
                  <>
                    <Box sx={{ display: "inline-flex", alignItems: "center" }}>
                      <MdOutlineLightMode fontSize="large" />
                    </Box>
                  </>
                ) : (
                  <>
                    <Box sx={{ display: "inline-flex", alignItems: "center" }}>
                      <MdDarkMode fontSize="large" />
                    </Box>
                  </>
                )
              }
            />
          </Box>
        </Box>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <Suspense fallback={<div>Loading...</div>}>
              <UserTable apiData={data} />
            </Suspense>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
};

export default Home;
