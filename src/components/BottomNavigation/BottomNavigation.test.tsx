import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BottomNavigation, BottomNavigationProps } from "./BottomNavigation";

describe("BottomNavigation", () => {
  const onItemClick = jest.fn();
  const props: BottomNavigationProps = {
    items: [
      {
        title: "Item 1",
        icon: <i className="fas fa-home"></i>,
        activeIcon: <i className="fas fa-home"></i>,
      },
      {
        title: "Item 2",
        icon: <i className="fas fa-star"></i>,
        activeIcon: <i className="fas fa-star"></i>,
      },
    ],
    onItemClick,
  };

  beforeEach(() => {
    onItemClick.mockClear();
  });

  it("renders correctly", () => {
    render(<BottomNavigation {...props} />);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("calls onItemClick when an item is clicked", () => {
    render(<BottomNavigation {...props} />);
    const item1 = screen.getByText("Item 1");
    const item2 = screen.getByText("Item 2");
    fireEvent.click(item1);
    expect(onItemClick).toHaveBeenCalledTimes(1);
    expect(onItemClick).toHaveBeenCalledWith({
      id: 0,
      title: "Item 1",
      icon: <i className="fas fa-home"></i>,
      activeIcon: <i className="fas fa-home"></i>,
    });
    fireEvent.click(item2);
    expect(onItemClick).toHaveBeenCalledTimes(2);
    expect(onItemClick).toHaveBeenCalledWith({
      id: 1,
      title: "Item 2",
      icon: <i className="fas fa-star"></i>,
      activeIcon: <i className="fas fa-star"></i>,
    });
  });

  it("applies custom styles", () => {
    const customStyles = { backgroundColor: "red" };
    render(<BottomNavigation {...props} style={customStyles} />);
    const nav = screen.getByRole("navigation");
    expect(nav).toHaveStyle("background-color: red");
  });

  it("hides on scroll when hideOnScroll is true", () => {
    render(<BottomNavigation {...props} hideOnScroll />);
    const nav = screen.getByRole("navigation");
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    expect(nav).toHaveClass("hidden");
  });

  it("does not hide on scroll when hideOnScroll is false", () => {
    render(<BottomNavigation {...props} hideOnScroll={false} />);
    const nav = screen.getByRole("navigation");
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    expect(nav).not.toHaveClass("hidden");
  });

  it("applies active status and active styles properly", () => {
    render(
      <BottomNavigation {...props} activeBgColor="red" activeTextColor="blue" />
    );
    const item1 = screen.getByText("Item 2");
    fireEvent.click(item1);

    expect(item1).toBeInTheDocument();
    console.log(item1.style);

    const tabs = screen.getAllByRole("tab");

    const activeTab = tabs.find(
      (tab) => tab.getAttribute("aria-selected") === "true"
    );

    expect(activeTab).toBeInTheDocument();
    expect(activeTab).toHaveStyle("background-color: red");
    expect(activeTab).toHaveStyle("color: blue");
  });

  it("renders custom content when render prop is provided", () => {
    const customRender = jest.fn(({ isActive, id }) => (
      <div>{isActive ? `Active ${id}` : `Inactive ${id}`}</div>
    ));
    const customProps: BottomNavigationProps = {
      ...props,
      items: [
        {
          render: customRender,
        },
      ],
    };
    render(<BottomNavigation {...customProps} />);
    expect(screen.getByText("Inactive 0")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Inactive 0"));
    expect(screen.getByText("Active 0")).toBeInTheDocument();
  });

  it("prioritizes item-level active prop over selected index", () => {
    const itemsWithActive = [
      {
        title: "Item 1",
        active: true
      },
      {
        title: "Item 2",
        active: false
      }
    ];
    
    render(<BottomNavigation items={itemsWithActive} selected={1} />);
    
    const tabs = screen.getAllByRole("tab");
    expect(tabs[0]).toHaveAttribute("aria-selected", "true");
    expect(tabs[1]).toHaveAttribute("aria-selected", "false");
  });

  it("falls back to selected index when active prop is not provided", () => {
    const mixedItems = [
      {
        title: "Item 1",
        active: true
      },
      {
        title: "Item 2" // No active prop
      },
      {
        title: "Item 3" // No active prop
      }
    ];
    
    render(<BottomNavigation items={mixedItems} selected={2} />);
    
    const tabs = screen.getAllByRole("tab");
    expect(tabs[0]).toHaveAttribute("aria-selected", "true"); 
    expect(tabs[1]).toHaveAttribute("aria-selected", "false");
    expect(tabs[2]).toHaveAttribute("aria-selected", "true");
  });

  it("applies active styles to items with active prop", () => {
    const itemsWithActive = [
      {
        title: "Item 1",
        active: true
      }
    ];
    
    render(
      <BottomNavigation 
        items={itemsWithActive} 
        activeBgColor="red" 
        activeTextColor="blue"
      />
    );
    
    const activeTab = screen.getByRole("tab");
    expect(activeTab).toHaveStyle({
      backgroundColor: "red",
      color: "blue"
    });
  });
});
