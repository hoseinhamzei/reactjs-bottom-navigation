import React from "react";
import { BottomNavigationItemType } from "./BottomNavigation";
interface BottomNavigationItemProps {
    item: BottomNavigationItemType;
    current: number | null;
    id: number;
    getItemStyle: () => React.CSSProperties;
    onClick: (id: number, item: BottomNavigationItemType) => void;
}
export declare const BottomNavigationItem: React.FC<BottomNavigationItemProps>;
export {};
