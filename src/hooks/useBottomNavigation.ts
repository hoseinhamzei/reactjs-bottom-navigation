import { useState, useEffect } from 'react';

/**
 * A hook that manages the state of a bottom navigation component.
 *
 * @param {number | null} initialSelected - The initial selected item index.
 * @param {boolean} hideOnScroll - Whether to hide the navigation on scroll.
 * @returns {[{ current: number | null, hidden: boolean, scrollY: number }, (selected: number | null) => void]} - The state and setSelected function.
 */
const useBottomNavigation = (initialSelected: number | null, hideOnScroll: boolean): [{
    current: number | null;
    hidden: boolean;
    scrollY: number;
}, (selected: number | null) => void] => {
    const [state, setState] = useState({
        current: initialSelected,
        hidden: false,
        scrollY: 0,
    });

    useEffect(() => {
        setState((prevState) => ({ ...prevState, current: initialSelected }));
    }, [initialSelected]);

    useEffect(() => {
        if (window && hideOnScroll) {
            const handleScroll = () => {
                const newScrollY = window.scrollY;
                setState((prevState) => ({
                    ...prevState,
                    hidden: newScrollY > prevState.scrollY,
                    scrollY: newScrollY,
                }));
            };

            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, [hideOnScroll]);

    const setSelected = (selected: number | null) => {
        setState((prevState) => ({ ...prevState, current: selected }));
    }

    return [state, setSelected];
};

export default useBottomNavigation;