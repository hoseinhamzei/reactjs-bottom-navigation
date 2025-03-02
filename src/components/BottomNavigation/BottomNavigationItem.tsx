import React from "react";
import { BottomNavigationItemType } from "./BottomNavigation";

interface BottomNavigationItemProps {
  item: BottomNavigationItemType;
  current: number | null;
  id: number;
  getItemStyle: () => React.CSSProperties;
  onClick: (id: number, item: BottomNavigationItemType) => void;
  style?: React.CSSProperties;
}

export const BottomNavigationItem: React.FC<BottomNavigationItemProps> = ({
  item,
  current,
  id,
  getItemStyle,
  onClick,
  style = {},
}) => {
  const isActive = item.active !== undefined ? item.active : current === id;
  return (
    <div
      id={"nav-item-" + id}
      className={`bottom-nav-item ${isActive ? "active" : ""}`}
      style={isActive ? {...getItemStyle(), ...style} : style}
      onClick={() => onClick(id, item)}
      role="tab"
      aria-selected={isActive}
    >
      {item.render ? (
        item.render({ isActive, id: id })
      ) : (
        <>
          {item.icon
            ? isActive && item.activeIcon
              ? item.activeIcon
              : item.icon
            : ""}
          {item.title && <p className="bottom-nav-item-title">{item.title}</p>}
        </>
      )}
    </div>
  );
};
