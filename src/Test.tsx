import React from "react";
import { BottomNavigation } from "./components/BottomNavigation";
import "./assets/test.css";

function Test() {
  const bottomNavItems = [
    {
      title: "Home",
      onClick: ({ id }) => alert("menu clicked " + id),
    },
    // items can have either title, icon or both or neither!
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
    <main className="test-page">
      <BottomNavigation
        items={bottomNavItems}
        selected={0}
        onItemClick={(item) => console.log(item)}
        activeBgColor="slateBlue"
        activeTextColor="white"
        hideOnScroll
      />
    </main>
  );
}

export default Test;
