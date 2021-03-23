import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@material-ui/core";

import React from "react";

import { db } from "../plugins";

function ServiceList({ services }) {
  const listItems = services.map((service) => {
    return (
      <ListItem key={service.id} button divider>
        <ListItemText primary={service.keyword} />
      </ListItem>
    );
  });

  return (
    <Container maxWidth="sm">
      <Box padding={4}>
        <Paper elevation={4}>
          <List disablePadding>{listItems}</List>
        </Paper>
      </Box>
    </Container>
  );
}

export async function getStaticProps() {
  const result = await db.many("SELECT * FROM services");

  return {
    props: {
      services: result,
    },
  };
}

export default ServiceList;
