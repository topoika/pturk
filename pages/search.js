import Header from "../components/home/Header";
import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { route } from "next/dist/server/router";

export default function Search(props) {
  return (
    <div>
      <Header />
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log(context.query);
  let subcategories = await fetch(
    `http://localhost:3001/api/subcategories/${
      context.query.id ? context.query.id : 1
    }`
  ).then((res) => res.json());
  console.log(subcategories);
  return {
    props: {
      subcategories: subcategories,
    },
  };
}
