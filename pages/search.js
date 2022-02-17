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
