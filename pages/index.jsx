import React from "react";

import { db } from "../plugins";

function Home({ customers }) {
  const customerItem = (customer) => {
    return <li key={customer.id}>{customer.phone_number}</li>;
  };

  return (
    <div>
      <ul>{customers.map((customer) => customerItem(customer))}</ul>
    </div>
  );
}

export default Home;

export async function getStaticProps() {
  const result = await db.many("SELECT * FROM customers");

  return {
    props: {
      customers: result,
    },
  };
}
