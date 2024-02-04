import React from "react";
import { BottomNavigation } from "./components/BottomNavigation";

function Test() {
  const bottomNavItems = [
    {
      title: "Home",
      onClick: ({ id }) => alert("menu clicked " + id),
    },
    // items can have either title, icon or both
    {},
    {
      title: "Search",
    },
    // the render method enables custom item content
    {
      render: ({ isActive, id }) =>
        isActive ? <strong>{id}</strong> : <span>{id}</span>,
    },
  ];

  return (
    <div>
      <BottomNavigation
        items={bottomNavItems}
        selected={0}
        onItemClick={(item) => console.log(item)}
        activeBgColor="slateBlue"
        activeTextColor="white"
      />
    </div>
  );
}

export default Test;
