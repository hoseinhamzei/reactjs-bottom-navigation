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

  it("applies active styles correctly", () => {
    render(
      <BottomNavigation
        {...props}
        activeBgColor="green"
        activeTextColor="yellow"
      />
    );
    const item1 = screen.getByText("Item 1");
    fireEvent.click(item1);
    expect(item1.parentElement).toHaveStyle("background-color: green");
    expect(item1.parentElement).toHaveStyle("color: yellow");
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
});
