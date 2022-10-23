import React from "react";
import { FormControlLabel, Typography } from "@mui/material";
import {
  CompanyName,
  Container,
  Content,
  Label,
  LabelWrapper,
  Logo,
  PageContent,
} from "./styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import ComapnyLogo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/system";
import { theme } from "./theme";

function App() {
  return (
    <Container
      sx={{
        backgroundColor: "rgb(243,246,249)",
        height: "100vh",
      }}
      maxWidth="xl"
    >
      <PageContent
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          [theme.breakpoints.down("sm")]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // backgroundColor: "red",
          },
        }}
      >
        <Logo src={ComapnyLogo} alt="comapny_logo" />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            fontFamily={"cursive"}
            variant="h2"
            gutterBottom
            sx={{ fontSize: 45 }}
          >
            Company Name
          </Typography>
        </Box>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingBottom: "200px",
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              [theme.breakpoints.down("sm")]: {
                fontSize: 25,
              },
            }}
          >
            CONTACT US
          </Typography>
          <LabelWrapper
            sx={{
              [theme.breakpoints.down("sm")]: {
                marginLeft: 0,
              },
            }}
          >
            <Label
              variant="h6"
              sx={{
                [theme.breakpoints.down("sm")]: {
                  fontSize: 18,
                },
              }}
            >
              {" "}
              Email:
            </Label>
            <Content
              variant="h6"
              sx={{
                [theme.breakpoints.down("sm")]: {
                  fontSize: 18,
                },
              }}
            >
              comapny-name.test@hotmail.com
            </Content>
          </LabelWrapper>
          <LabelWrapper
            sx={{
              [theme.breakpoints.down("sm")]: {
                marginLeft: 0,
              },
            }}
          >
            <Label
              variant="h6"
              sx={{
                [theme.breakpoints.down("sm")]: {
                  fontSize: 18,
                },
              }}
            >
              {" "}
              Phone:
            </Label>
            <Content
              variant="h6"
              sx={{
                [theme.breakpoints.down("sm")]: {
                  fontSize: 18,
                },
              }}
            >
              01/ 345 678
            </Content>
          </LabelWrapper>
          <LabelWrapper
            sx={{
              [theme.breakpoints.down("sm")]: {
                marginLeft: 0,
              },
            }}
          >
            <Label
              variant="h6"
              sx={{
                [theme.breakpoints.down("sm")]: {
                  fontSize: 18,
                },
              }}
            >
              {" "}
              Address:
            </Label>
            <Content
              variant="h6"
              sx={{
                [theme.breakpoints.down("sm")]: {
                  fontSize: 18,
                },
              }}
            >
              Fakhreddine st, Minet el Hosn, Beirut, Lebanon
            </Content>
          </LabelWrapper>
          <Box
            sx={{
              width: "25%",
              paddingTop: "20px",
              paddingLeft: "15px",
              display: "flex",
              justifyContent: "space-around",
              [theme.breakpoints.down("sm")]: {
                width: "100%",
                justifyContent: "space-around",
              },
            }}
          >
            <FacebookIcon sx={{ cursor: "pointer" }} fontSize="large" />
            <InstagramIcon sx={{ cursor: "pointer" }} fontSize="large" />
            <TwitterIcon sx={{ cursor: "pointer" }} fontSize="large" />
          </Box>
        </Box>
      </PageContent>
    </Container>
  );
}

export default App;
