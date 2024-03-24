import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Avatar,
  Typography,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineUnlock,
} from "react-icons/ai";
import { FaUser, FaMap } from "react-icons/fa";
import { BiSolidCity } from "react-icons/bi";
import { GiVillage } from "react-icons/gi";
import { useLocation } from "react-router-dom";
import GoogleMapContainer from "../../components/GoogleMapContainer/GoogleMapContainer";

const PublicProfilePage = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const location = useLocation();
  const userData = location.state.userData;
  console.log(userData, "location data");
  console.log(location.state, "id data location");
  return (
    <Card sx={{ width: "100%", marginTop: 5, paddingY: 5 }}>
      <CardContent>
        <Box
          sx={{
            position: "relative",
            width: 100,
            height: 100,
            margin: "auto",
            backgroundImage: `url(${userData.picture.large})`,
            backgroundSize: "cover",
            borderRadius: "50%",
            overflow: "hidden",
            zIndex: 0,
          }}
        >
          <Avatar
            sx={{
              width: "100%",
              height: "100%",
              zIndex: 1,
            }}
            alt="Profile Pic"
            src={userData.picture.medium}
          />
        </Box>
        <Tabs value={tabValue} onChange={handleChange} centered>
          <Tab icon={<FaMap size={32} />} />
          <Tab icon={<AiOutlineUser size={32} />} />
          <Tab icon={<AiOutlineMail size={32} />} />
          <Tab icon={<AiOutlineHome size={32} />} />
          <Tab icon={<AiOutlinePhone size={32} />} />
          <Tab icon={<AiOutlineUnlock size={32} />} />
          <Tab icon={<AiOutlineUser size={32} />} />
          <Tab icon={<FaUser size={32} />} />
          <Tab icon={<GiVillage size={32} />} />
          <Tab icon={<BiSolidCity size={32} />} />
        </Tabs>
        <Box
          sx={{
            padding: 2,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {tabValue === 0 && (
            <>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                  <GoogleMapContainer
                    latitude={userData.location.coordinates.latitude}
                    longitude={userData.location.coordinates.longitude}
                  />
                </Grid>
              </Grid>
            </>
          )}
          {tabValue === 1 && (
            <Typography variant="body1">Email: {userData.email}</Typography>
          )}
          {tabValue === 2 && (
            <Typography variant="body1">
              Address: {userData.location.street.number},{" "}
              {userData.location.street.name}, {userData.location.state}{" "}
              {userData.location.country}
            </Typography>
          )}
          {tabValue === 3 && (
            <Typography variant="body1">
              Cell No: {userData.cell} Phone No: {userData.phone}
            </Typography>
          )}
          {tabValue === 4 && (
            <Typography variant="body1">
              User Name: {userData.login.username} Password:{" "}
              {userData.login.password}
            </Typography>
          )}
          {tabValue === 5 && (
            <Typography variant="body1">National: {userData.nat}</Typography>
          )}
          {tabValue === 6 && (
            <Typography variant="body1">
              Username: {userData.name.first} {userData.name.last}
            </Typography>
          )}
          {tabValue === 7 && (
            <Typography variant="body1">
              Country: {userData.location.country}
            </Typography>
          )}
          {tabValue === 8 && (
            <Typography variant="body1">
              City: {userData.location.state}
            </Typography>
          )}
          {tabValue === 9 && (
            <Typography variant="body1">
              User Name: {userData.name.title}
              {userData.name.first}
              {userData.name.last}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default PublicProfilePage;
