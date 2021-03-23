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

function CustomerServiceList({ customerServices }) {
  const listItems = customerServices.map((customerService) => {
    return (
      <ListItem key={customerService.id} button divider>
        <ListItemText primary={customerService.name} />
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
  const result = await db.many("SELECT * FROM customer_services");

  return {
    props: {
      customerServices: result,
    },
  };
}

export default CustomerServiceList;
