import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Data1 from "../Pages/LifetimeData/Squad";
import Data2 from "../Pages/LifetimeData/SquadFPP";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "70%",
    backgroundColor: theme.palette.background.paper,
    // eslint-disable-next-line
    ["@media (max-width:760px)"]: {
      width: "90%",
    },
  },
}));

const TabsData = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Squad" {...a11yProps(0)} />
          <Tab label="Squad FPP" {...a11yProps(1)} />
          <Tab label="Duo" {...a11yProps(2)} />
          <Tab label="Duo" {...a11yProps(3)} />
          <Tab label="Solo" {...a11yProps(4)} />
          <Tab label="Solo FPP" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Data1 />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Data2 />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Duo
      </TabPanel>
      <TabPanel value={value} index={3}>
        Duo
      </TabPanel>
      <TabPanel value={value} index={4}>
        Solo
      </TabPanel>
      <TabPanel value={value} index={5}>
        Solo FPP
      </TabPanel>
    </div>
  );
};
export default TabsData;
