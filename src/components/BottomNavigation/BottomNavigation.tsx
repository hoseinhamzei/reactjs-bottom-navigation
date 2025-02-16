import React from "react";
import "./index.css";
import { BottomNavigationItem } from "./BottomNavigationItem";
import useBottomNavigation from "../../hooks/useBottomNavigation";

export interface BottomNavigationItemType {
  title?: string;
  icon?: React.JSX.Element;
  activeIcon?: React.JSX.Element;
  render?: (params: { isActive: boolean; id: number }) => React.JSX.Element;
  onClick?: (params: { id: number;[key: string]: any }) => void;
  active?: boolean;
}

export interface BottomNavigationProps {
  items: BottomNavigationItemType[];
  selected?: number | null;
  onItemClick?: (params: { id: number;[key: string]: any }) => void;
  noActiveBg?: boolean;
  activeBgColor?: string;
  activeTextColor?: string;
  hideOnScroll?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * A flexible and customizable bottom navigation component that displays a set of items as icons or custom content.
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
  hideOnScroll = false,
  style = {},
  className = "",
}) => {

  const [state, setSelected] = useBottomNavigation(selected, hideOnScroll);

  function getItemStyle(): React.CSSProperties {
    const style: React.CSSProperties = {};
    if (activeBgColor) {
      style.backgroundColor = activeBgColor;
      style.color = activeTextColor || "black";
    }
    return style;
  }

  function handleItemClick(idx: number, item: BottomNavigationItemType): void {
    setSelected(idx);
    if (item.onClick) {
      item.onClick({ id: idx, ...item });
    }
    if (onItemClick) {
      onItemClick({ id: idx, ...item });
    }
  }

  const navItems = items.map((item, idx) => (
    <BottomNavigationItem
      current={state.current}
      item={item}
      id={idx}
      key={`bottom-nav-item-${idx}`}
      getItemStyle={getItemStyle}
      onClick={handleItemClick}
    />
  ));

  return (
    <div
      className={`${state.hidden ? "bottom-nav hidden" : "bottom-nav"} ${className}`}
      style={style}
      role="navigation"
    >
      {navItems}
    </div>
  );
};
