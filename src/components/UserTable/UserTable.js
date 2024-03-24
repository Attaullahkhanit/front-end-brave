import React, { useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Box,
  Input,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import "./styles.scss";


function UserTable({ apiData }) {
  const navigate = useNavigate();
  const location = useLocation();
  const itemsPerPage = 5;
  const [activePage, setActivePage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const genderParam = params.get("gender");
    if (genderParam) {
      setGenderFilter(genderParam);
    }
  }, [location.search]);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    setActivePage(1);
  };

  const handleGenderFilterChange = (event) => {
    const { value } = event.target;
    setGenderFilter(value);
    setActivePage(1);
    navigate(`?gender=${value}`);
  };

  const allUserData = Array.isArray(apiData.results) ? apiData.results : [];

  const filteredData = allUserData.filter((data) => {
    const searchTermLowerCase = searchTerm.toLowerCase();
    return (
      (data.name.first.toLowerCase().includes(searchTermLowerCase) ||
        data.name.last.toLowerCase().includes(searchTermLowerCase) ||
        data.email.toLowerCase().includes(searchTermLowerCase) ||
        data.cell.toLowerCase().includes(searchTermLowerCase)) &&
      (!genderFilter || data.gender.toLowerCase() === genderFilter)
    );
  });

  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleViewProfile = (userData) => {
    navigate(`/publicprofile/${userData.id}`, {
      state: { userData: userData },
    });
  };

  return (
    <>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Box sx={{ textAlign: "left" }}>
            <FormControl fullWidth>
              <InputLabel id="gender-filter-label">Gender Search</InputLabel>
              <Select
                labelId="gender-filter-label"
                id="gender-filter"
                value={genderFilter}
                onChange={handleGenderFilterChange}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ textAlign: "center" }}>
            <Input
              placeholder="Search"
              type="text"
              value={searchTerm}
              onChange={handleSearch}
            />
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Picture</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Cell No</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Profile</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentItems.map((data, index) => (
              <TableRow key={index + indexOfFirstItem}>
                <TableCell>{index + indexOfFirstItem + 1}</TableCell>
                <TableCell>
                  <img src={data.picture?.thumbnail} alt="Dummy Image" />
                </TableCell>
                <TableCell>{data.name?.first}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.gender}</TableCell>
                <TableCell>{data.cell}</TableCell>
                <TableCell>{data.dob.age}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    onClick={() => handleViewProfile(data)}
                  >
                    View Profile
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <Box className="pagination-container">
        <Box className="pagination-right">
          <Box className="paginationcls">
            <Pagination
              activePage={activePage}
              itemsCountPerPage={itemsPerPage}
              totalItemsCount={filteredData.length}
              pageRangeDisplayed={4}
              onChange={handlePageChange}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default UserTable;
