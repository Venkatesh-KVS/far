import React from "react";
import styled from "styled-components";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import { AboutRabies } from "../components/AboutRabies";
import { HWIKIHR } from "../components/HWIKIHR";
import { DiagnosingRabies } from "../components/DiagnosingRabies";
import { HowRabiesTreated } from "../components/HowRabiesTreated";
import { PreventionRabies } from "../components/PreventionRabies";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const RabiesAndYou = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
      <div className="about-us">
        <div className="about-banner d-flex">
          <div className="left w-50 "></div>
          <div className="right w-50 ">
            <h3 className="heading-3 textColor m-0">LEARN ABOUT RABIES AND</h3>
            <h1 className="heading-1 primaryColor">protect yourself</h1>
          </div>
        </div>
        <div className="aboutTabs container">
          <div className="tabs d-flex">
            <div className="tabTitles">
              <Tabs
                value={value}
                onChange={handleChange}
                orientation="vertical"
              >
                <Tab className="tabTitle" label="About Rabies" />
                <Tab
                  className="tabTitle"
                  label="How will I know if I have rabies?"
                />
                <Tab className="tabTitle" label="Diagnosing Rabies" />
                <Tab className="tabTitle" label="How is rabies treated?" />
                <Tab className="tabTitle" label="Prevention of rabies" />
                <Tab className="tabTitle" label="Vaccination" />
                <Tab className="tabTitle" label="Safety of the vaccine" />
              </Tabs>
            </div>
            <div className="tabsContent">
              <TabPanel className="" value={value} index={0}>
                <AboutRabies />
              </TabPanel>
              <TabPanel className="" value={value} index={1}>
                <HWIKIHR />
              </TabPanel>
              <TabPanel className="" value={value} index={2}>
                <DiagnosingRabies />
              </TabPanel>
              <TabPanel className="" value={value} index={3}>
                <HowRabiesTreated />
              </TabPanel>
              <TabPanel className="" value={value} index={4}>
                <PreventionRabies />
              </TabPanel>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default RabiesAndYou;

const Wrapper = styled.section`
  .about-us {
    margin-top: -180px;
    .tabs {
      margin: 65px auto;
      .tabTitle {
        text-align: start;
        background-color: #f8f8f8;
        margin-bottom: 5px;
        text-transform: uppercase !important;
      }
      button {
        width: 250px;
        align-items: start;
        &:hover {
          color: var(--secondaryColor);
        }
      }
      .MuiTabs-indicator {
        background-color: var(--secondaryColor);
      }
    }
    .Mui-selected {
      color: var(--whiteColor);
      background-color: var(--secondaryColor) !important;
      &:hover {
        color: var(--whiteColor) !important;
      }
    }
    .MuiBox-root {
      padding: 0 35px;
    }
  }
  .about-banner {
    height: 78vh;
    background-image: url("./images/banner/about-us.jpg");
    background-attachment: fixed;
    background-size: contain;
    background-repeat: no-repeat;
    .right {
      vertical-align: center;
      justify-content: center;
      margin: auto 0px 100px;
      h1 {
        line-height: 1em;
      }
      h3 {
        font-family: inherit;
        font-weight: 600;
      }
    }
  }
`;
