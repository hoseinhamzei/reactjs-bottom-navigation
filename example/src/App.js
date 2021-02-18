import React from 'react'

import BottomNavigation from 'reactjs-bottom-navigation'
import 'reactjs-bottom-navigation/dist/index.css'

function App() {
  const bottomNavItems = [
    {
      title: 'Home'
    },
    {
      title: 'Search'
    },
    {
      title: 'Notifications'
    },
    {
      title: 'Menu',
      onClick: () => alert('menu clicked')
    }
  ]

  return (
    <div>
      <BottomNavigation
        items={bottomNavItems}
        defaultSelected={0}
        onItemClick={(item) => console.log(item)}
        activeBgColor={'#000000'}
        activeTextColor={'yellow'}
      />
    </div>
  )
}

export default App
