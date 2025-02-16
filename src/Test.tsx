import React, { useState } from "react";
import { BottomNavigation } from "./components/BottomNavigation/BottomNavigation";
import "./assets/test.css";

function Test() {
  const [menuOpen, setMenuOpen] = useState(false);

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
    {
      title: "Menu",
      icon: <span>☰</span>,
      active: menuOpen, // this prop will override the default active state
      onClick: () => setMenuOpen(!menuOpen)
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
        selected={0} // can be used to manually control the active item using state
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
