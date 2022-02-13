import Header from "../components/home/Header";
import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { route } from "next/dist/server/router";
import UniversalHeadder from "../components/universal/UniversalHeadder";

export default function Search(props) {
  return (
    <div className="bg-white  ">
      <UniversalHeadder props={{ searchName: "Restaurants" }} />
    </div>
  );
}

export async function getServerSideProps(context) {
  let subcategories = await fetch(
    `http://localhost:3001/api/subcategories/${
      context.query.id ? context.query.id : 1
    }`
  ).then((res) => res.json());
  return {
    props: {
      subcategories: subcategories,
    },
  };
}
