import React, { useState, useEffect } from "react";
import "./index.css";
import { BottomNavigationItem } from "./BottomNavigationItem";

export interface BottomNavigationItemType {
  title?: string;
  icon?: JSX.Element;
  activeIcon?: JSX.Element;
  render?: (params: { isActive: boolean; id: number }) => JSX.Element;
  onClick?: (params: { id: number; [key: string]: any }) => void;
}

export interface BottomNavigationProps {
  items: BottomNavigationItemType[];
  selected?: number | null;
  onItemClick?: (params: { id: number; [key: string]: any }) => void;
  noActiveBg?: boolean;
  activeBgColor?: string;
  activeTextColor?: string;
}

/**
 * A bottom navigation component that displays a set of items as icons or custom content.
 *
 * @typedef {Object} BottomNavigationItem
 * @property {string=} title - The title text to display for the item.
 * @property {JSX.Element=} icon - The icon to display for the item.
 * @property {JSX.Element=} activeIcon - The icon to display when the item is active.
 * @property {function(params: {isActive: boolean, id: number}): JSX.Element=} render - A custom render method to use for the item to display.
 * @property {function(params: {id: number, [key: string]: any}): void=} onClick - A callback function to execute when the item is clicked.
 * @property {Object.<string, *>} [key] - Additional props to pass to the item component.
 *
 * @typedef {Object} BottomNavigationProps
 * @property {BottomNavigationItem[]} items - The array of items to display in the navigation.
 * @property {number|null=} selected - The index of the currently selected item.
 * @property {function(params: {id: number, [key: string]: any}): void=} onItemClick - A callback function to execute when an item is clicked.
 * @property {string=} activeBgColor - The background color to use for the active item.
 * @property {string=} activeTextColor - The text color to use for the active item.
 *
 * @param {BottomNavigationProps} props - The component props.
 * @returns {JSX.Element} - The rendered component.
 */
export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  items,
  selected = null,
  onItemClick,
  activeBgColor,
  activeTextColor,
}) => {
  const [current, setCurrent] = useState<number | null>(selected);

  useEffect(() => {
    setCurrent(selected);
  }, [selected]);

  // determine active styles
  function getItemStyle(): React.CSSProperties {
    const style: React.CSSProperties = {};
    if (activeBgColor) {
      style.backgroundColor = activeBgColor;
      style.color = activeTextColor || "black";
    }
    return style;
  }

  function handleItemClick(idx: number, item: BottomNavigationItemType): void {
    setCurrent(idx);
    if (item.onClick) {
      item.onClick({ id: idx, ...item });
    }
    if (onItemClick) {
      onItemClick({ id: idx, ...item });
    }
  }

  // if a custom render method is provided use it, otherwise use the default icon and title
  const navItems = items.map((item, idx) => {
    return (
      <BottomNavigationItem
        current={current}
        item={item}
        id={idx}
        key={`bottom-nav-item-${idx}`}
        getItemStyle={getItemStyle}
        onClick={handleItemClick}
      />
    );
  });

  return <div className="bottom-nav">{navItems}</div>;
};
