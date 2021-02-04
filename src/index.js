import React, { useState } from 'react'
import styles from './styles.module.css'

export const BottomNavigation = ({
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
        className={`${styles['bottom-nav-item']} ${
          current === idx && styles.active
        }`}
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
        {item.title && (
          <p className={styles['bottom-nav-item']}>{item.title}</p>
        )}
      </div>
    )
  })
  return <div className={styles['bottom-nav']}>{navItems}</div>
}
