import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

export default function NavRow() {
  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return (
    <React.Fragment>
      <Grid item xs={12} sm={3}>
        <Link
          href="/"
          style={{ textDecoration: "none", color: "black" }}
          onClick={(e) => {
            let about = document.getElementById("about");
            e.preventDefault();
            about &&
              about.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <Typography fontSize="13px">👤 ABOUT</Typography>
        </Link>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "black",
          }}
          onClick={(e) => {
            let about = document.getElementById("exp");
            e.preventDefault();
            about &&
              about.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <Typography fontSize="13px">💼 EXPERIENCES</Typography>
        </Link>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Link
          href="/"
          style={{ textDecoration: "none", color: "black" }}
          onClick={(e) => {
            let about = document.getElementById("skills");
            e.preventDefault();
            about &&
              about.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <Typography fontSize="13px">💻 SKILLS</Typography>
        </Link>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Link
          href="/"
          style={{ textDecoration: "none", color: "black" }}
          onClick={(e) => {
            let about = document.getElementById("projects");
            e.preventDefault();
            about &&
              about.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <Typography fontSize="13px">📋 PROJECTS</Typography>
        </Link>
      </Grid>
    </React.Fragment>
  );
}
