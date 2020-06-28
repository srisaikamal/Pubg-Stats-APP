import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import DataCard from "../../Components/DataCard";

import PubgContext from "../../Context/PubgContext";
const DuoFPP = () => {
  const pubgContext = useContext(PubgContext);

  const { lifetimeData } = pubgContext;
  return (
    <>
      {lifetimeData === null ? (
        <h1>No Data Yet</h1>
      ) : (
        <Grid container justify="center" spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <DataCard
              title={"WINS"}
              value={lifetimeData.attributes.gameModeStats["duo-fpp"].wins}
              icon={<i class="fa fa-trophy" aria-hidden="true"></i>}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <DataCard
              title={"LOSSES"}
              value={lifetimeData.attributes.gameModeStats["duo-fpp"].losses}
              icon={<i class="fa fa-genderless" aria-hidden="true"></i>}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <DataCard
              title={"KILLS"}
              value={lifetimeData.attributes.gameModeStats["duo-fpp"].kills}
              icon={<i class="fa fa-skull-crossbones" aria-hidden="true"></i>}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <DataCard
              title={"HEADSHORTS"}
              value={
                lifetimeData.attributes.gameModeStats["duo-fpp"].headshotKills
              }
              icon={<i class="fa fa-head-side-virus" aria-hidden="true"></i>}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <DataCard
              title={"WEAPONS AQUIRED"}
              value={
                lifetimeData.attributes.gameModeStats["duo-fpp"].weaponsAcquired
              }
              icon={<i class="fa fa-utensils" aria-hidden="true"></i>}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <DataCard
              title={"TOP 10's"}
              value={lifetimeData.attributes.gameModeStats["duo-fpp"].top10s}
              icon={<i class="fa fa-ankh" aria-hidden="true"></i>}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <DataCard
              title={"REVIVES"}
              value={lifetimeData.attributes.gameModeStats["duo-fpp"].revives}
              icon={<i class="fa fa-plus-circle" aria-hidden="true"></i>}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <DataCard
              title={"KILL DISTANCE"}
              value={
                lifetimeData.attributes.gameModeStats["duo-fpp"].longestKill
              }
              icon={
                <i
                  class="fa fa-long-arrow-alt-right long-arrow-alt-right-icon"
                  aria-hidden="true"
                ></i>
              }
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <DataCard
              title={"TIME SURVIVED"}
              value={Math.floor(
                lifetimeData.attributes.gameModeStats["duo-fpp"]
                  .longestTimeSurvived / 60
              )}
              icon={<i class="fa fa-clock clock-icon" aria-hidden="true"></i>}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default DuoFPP;
