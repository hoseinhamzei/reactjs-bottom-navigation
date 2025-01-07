
import { renderHook } from '@testing-library/react';
import useBottomNavigation from './useBottomNavigation';
import { act } from 'react';

describe('useBottomNavigation', () => {
  it('initializes with correct state', () => {
    const { result } = renderHook(() => useBottomNavigation(1, false));
    expect(result.current[0]).toEqual({
      current: 1,
      hidden: false,
      scrollY: 0,
    });
  });

  it('hides navigation on scroll when hideOnScroll is true', () => {
    const { result } = renderHook(() => useBottomNavigation(0, true));
    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event('scroll'));
    });
    expect(result.current[0]).toEqual({
      current: 0,
      hidden: true,
      scrollY: 100,
    });
  });

  it('does not hide navigation on scroll when hideOnScroll is false', () => {
    const { result } = renderHook(() => useBottomNavigation(0, false));
    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event('scroll'));
    });
    expect(result.current[0]).toEqual({
      current: 0,
      hidden: false,
      scrollY: 0,
    });
  });

  it('calls setSelected correctly', () => {
    const { result } = renderHook(() => useBottomNavigation(0, false));
    act(() => {
      result.current[1](1);
    });
    expect(result.current[0]).toEqual({
      current: 1,
      hidden: false,
      scrollY: 0,
    });
  });
});