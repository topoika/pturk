function HeaderCategoriesItem({ text }) {
  return (
    <div>
      <p className="text-s font-bold px-5 pl-1.5 cursor-pointer  hover:animate-pulse">
        {text}
      </p>
    </div>
  );
}

export default HeaderCategoriesItem;
