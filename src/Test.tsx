import React from "react";
import { BottomNavigation } from "./components/BottomNavigation";
import "./assets/test.css";

function Test() {
  const bottomNavItems = [
    {
      title: "Home",
      icon: <span>🏠</span>,
      activeIcon: <span style={{ backgroundColor: "blue" }}>🏠</span>,
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

  function handleClick(id) {
    console.log("clicked", id);
  }

  return (
    <main className="test-page">
      <BottomNavigation
        items={bottomNavItems}
        activeBgColor="blue"
        activeTextColor="yellow"
        selected={0}
        onItemClick={handleClick}
        hideOnScroll
        style={{
          height: "60px",
          backgroundColor: "lightGray",
        }}
      />
    </main>
  );
}

export default Test;
