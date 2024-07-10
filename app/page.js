"use client";
import {
  Card,
  Grid,
  Typography,
  Box,
  Checkbox,
  Divider,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const [checkedItems, setCheckedItems] = useState({
    allPages: false,
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  });

  const notify = (selectedPages) =>
    toast(`${selectedPages.join(", ")} are selected`, { icon: "👏" });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (name === "allPages") {
      setCheckedItems({
        allPages: checked,
        page1: checked,
        page2: checked,
        page3: checked,
        page4: checked,
      });
    } else {
      setCheckedItems((prevState) => ({
        ...prevState,
        [name]: checked,
        allPages:
          checked &&
          Object.keys(prevState)
            .slice(1)
            .every((key) => prevState[key]),
      }));
    }
  };

  const handleDoneClick = () => {
    const selectedPages = Object.keys(checkedItems).filter(
      (key) => checkedItems[key] && key !== "allPages"
    );
    notify(selectedPages);
  };

  const styles = {
    boxStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
    },
    cardStyles: {
      width: "370px",
      height: "326px",
      border: "1px",
      borderRadius: "10px",
      padding: "10px",
      boxShadow: "0px 8px 15px 0px #1414141F",
    },
    gridStyles: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "8px, 15px, 8px, 22px",
      paddingLeft: "15px",
    },
    buttonGrid: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px, 15px, 10px, 15px",
      marginTop: "8%",
    },
    fontStyles: {
      fontWeight: 200,
      fontSize: "14px",
    },
    checkBoxStyles: {
      "& .MuiSvgIcon-root": { fontSize: 24 },
    },
    buttonStyles: {
      backgroundColor: "#FFCE22",
      boxShadow: "none",
      color: "#1F2128",
      borderRadius: "4px",
      height: "40px",
      padding: "10px, 20px, 10px, 20px",
      width: "340px",
      textTransform: "none",
      fontWeight: 200,
      "&:hover": {
        backgroundColor: "#FFD84D",
        boxShadow: "none",
      },
    },
  };

  return (
    <Box sx={styles.boxStyle}>
      <Toaster />
      <Card sx={styles.cardStyles}>
        <Grid container>
          <Grid item xs={12} style={styles.gridStyles}>
            <Typography sx={styles.fontStyles}>All pages</Typography>
            <Checkbox
              name="allPages"
              checked={checkedItems.allPages}
              onChange={handleCheckboxChange}
              sx={styles.checkBoxStyles}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider variant="middle" />
          </Grid>
          <Grid item xs={12} style={styles.gridStyles}>
            <Typography sx={styles.fontStyles}>Page 1</Typography>
            <Checkbox
              name="page1"
              checked={checkedItems.page1}
              onChange={handleCheckboxChange}
              sx={styles.checkBoxStyles}
            />
          </Grid>
          <Grid item xs={12} style={styles.gridStyles}>
            <Typography sx={styles.fontStyles}>Page 2</Typography>
            <Checkbox
              name="page2"
              checked={checkedItems.page2}
              onChange={handleCheckboxChange}
              sx={styles.checkBoxStyles}
            />
          </Grid>
          <Grid item xs={12} style={styles.gridStyles}>
            <Typography sx={styles.fontStyles}>Page 3</Typography>
            <Checkbox
              name="page3"
              checked={checkedItems.page3}
              onChange={handleCheckboxChange}
              sx={styles.checkBoxStyles}
            />
          </Grid>
          <Grid item xs={12} style={styles.gridStyles}>
            <Typography sx={styles.fontStyles}>Page 4</Typography>
            <Checkbox
              name="page4"
              checked={checkedItems.page4}
              onChange={handleCheckboxChange}
              sx={styles.checkBoxStyles}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider variant="middle" />
          </Grid>
          <Grid item xs={12} style={styles.buttonGrid}>
            <Button
              onClick={handleDoneClick}
              variant="contained"
              sx={styles.buttonStyles}
            >
              Done
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
