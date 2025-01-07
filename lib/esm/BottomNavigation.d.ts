import React from "react";
import "./index.css";
export interface BottomNavigationItemType {
    title?: string;
    icon?: JSX.Element;
    activeIcon?: JSX.Element;
    render?: (params: {
        isActive: boolean;
        id: number;
    }) => JSX.Element;
    onClick?: (params: {
        id: number;
        [key: string]: any;
    }) => void;
}
export interface BottomNavigationProps {
    items: BottomNavigationItemType[];
    selected?: number | null;
    onItemClick?: (params: {
        id: number;
        [key: string]: any;
    }) => void;
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
export declare const BottomNavigation: React.FC<BottomNavigationProps>;
