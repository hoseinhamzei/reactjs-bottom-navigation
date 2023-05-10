import React from 'react';
import { render, screen } from '@testing-library/react';
import {BottomNavigation, BottomNavigationProps } from './BottomNavigation';

describe('BottomNavigation', () => {
  const onItemClick = jest.fn();
  const props: BottomNavigationProps = {
    items: [
      {
        title: 'Item 1',
        icon: <i className="fas fa-home"></i>,
        activeIcon: <i className="fas fa-home"></i>,
      },
      {
        title: 'Item 2',
        icon: <i className="fas fa-star"></i>,
        activeIcon: <i className="fas fa-star"></i>,
      },
    ],
    onItemClick,
  };

  beforeEach(() => {
    onItemClick.mockClear();
  });

  it('renders correctly', () => {
    render(<BottomNavigation {...props} />);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('calls onItemClick when an item is clicked', () => {
    render(<BottomNavigation {...props} />);
    const item1 = screen.getByText('Item 1');
    const item2 = screen.getByText('Item 2');
    item1.click();
    expect(onItemClick).toHaveBeenCalledTimes(1);
    expect(onItemClick).toHaveBeenCalledWith({ id: 0, title: 'Item 1', icon: <i className="fas fa-home"></i>, activeIcon: <i className="fas fa-home"></i> });
    item2.click();
    expect(onItemClick).toHaveBeenCalledTimes(2);
    expect(onItemClick).toHaveBeenCalledWith({ id: 1, title: 'Item 2', icon: <i className="fas fa-star"></i>, activeIcon: <i className="fas fa-star"></i> });
  });
});
