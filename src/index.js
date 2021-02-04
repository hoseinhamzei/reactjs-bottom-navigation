import React, { useState } from 'react'

const BottomNavigation = ({
  items,
  defaultSelectedTab = null,
  onItemClick,
  noActiveBg
}) => {
  const [current, setCurrent] = useState(defaultSelectedTab)

  const navItems = items.map((item, idx) => {
    return (
      <div
        key={'nav-item-' + idx}
        id={'nav-item-' + idx}
        className={`bottom-nav-item ${current === idx && 'active'}`}
        style={noActiveBg && { backgroundColor: 'transparent' }}
        onClick={() => {
          setCurrent(idx)
          if (item.onClick) {
            item.onClick({ id: idx, ...item })
          }
          if (onItemClick) {
            onItemClick({ id: idx, ...item })
          }
        }}
      >
        {current !== idx && item.icon ? item.icon : ''}
        {current === idx && item.activeIcon ? item.activeIcon : ''}
        {item.title && <p className='bottom-nav-item--title'>{item.title}</p>}
      </div>
    )
  })
  return <div className='bottom-nav'>{navItems}</div>
}

export default BottomNavigation
