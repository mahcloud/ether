import React from "react";
import { Button, GridContainer } from "@alchemyalcove/ether";

class GridExample extends React.Component {
  render() {
    return(
      <GridContainer columns={3}>
        <Button>one</Button>
        <Button>two</Button>
        <Button>three</Button>
        <Button>four</Button>
      </GridContainer>
    );
  }
}

export default GridExample;
