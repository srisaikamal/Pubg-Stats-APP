import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import PubgContext from "../../Context/PubgContext";
import DataCard from "../../Components/DataCard";

const Solo = () => {
  const pubgContext = useContext(PubgContext);

  const { lifetimeData } = pubgContext;

  if (lifetimeData === null) {
    return <h1>No Data Yet</h1>;
  } else {
    return (
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <DataCard
            title={"WINS"}
            value={lifetimeData.attributes.gameModeStats.solo.wins}
            icon={<i class="fa fa-trophy trophy-icon" aria-hidden="true"></i>}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <DataCard
            title={"LOSSES"}
            value={lifetimeData.attributes.gameModeStats.solo.losses}
            icon={
              <i
                class="fa fa-genderless genderless-icon"
                aria-hidden="true"
              ></i>
            }
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <DataCard
            title={"KILLS"}
            value={lifetimeData.attributes.gameModeStats.solo.kills}
            icon={
              <i
                class="fa fa-skull-crossbones skull-crossbones-icon"
                aria-hidden="true"
              ></i>
            }
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <DataCard
            title={"HEADSHORTS"}
            value={lifetimeData.attributes.gameModeStats.solo.headshotKills}
            icon={
              <i
                class="fa fa-head-side-virus head-side-virus-icon"
                aria-hidden="true"
              ></i>
            }
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <DataCard
            title={"WEAPONS AQUIRED"}
            value={lifetimeData.attributes.gameModeStats.solo.weaponsAcquired}
            icon={
              <i class="fa fa-utensils utensils-icon" aria-hidden="true"></i>
            }
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <DataCard
            title={"TOP 10's"}
            value={lifetimeData.attributes.gameModeStats.solo.top10s}
            icon={<i class="fa fa-ankh ankh-icon" aria-hidden="true"></i>}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <DataCard
            title={"REVIVES"}
            value={lifetimeData.attributes.gameModeStats.solo.revives}
            icon={
              <i class="fa fa-plus-circle circle-icon" aria-hidden="true"></i>
            }
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <DataCard
            title={"KILL DISTANCE"}
            value={lifetimeData.attributes.gameModeStats.solo.longestKill}
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
              lifetimeData.attributes.gameModeStats.solo.longestTimeSurvived /
                60
            )}
            icon={<i class="fa fa-clock clock-icon" aria-hidden="true"></i>}
          />
        </Grid>
      </Grid>
    );
  }
};

export default Solo;
