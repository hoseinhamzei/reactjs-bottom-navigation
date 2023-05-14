
  

# reactjs-bottom-navigation

  

> React bottom navigation component

  

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![npm](https://img.shields.io/npm/v/reactjs-bottom-navigation.svg)](https://www.npmjs.com/package/reactjs-bottom-navigation)

  

## Introduction

  

![enter image description here](https://www.hoseinh.com/wp-content/uploads/2021/02/Annotation-2021-02-04-171944.jpg)

"ReactJS Bottom Navigation" is a lightweight and flexible component that provides a customizable bottom navigation experience for your React applications. This component has been fully re-implemented in TypeScript in version 2, providing a more robust and type-safe development experience. With a range of options to customize it.

  
  

## Installation

  

```bash

  

npm install  --save  reactjs-bottom-navigation

  

```

## Props

 

| Props | Type | default | description |
| ------------------ | --------------------- | ------- | ----------------------------------------------------------------------------- |
| items | BottomNavigationItem[] | - | The array of items to display in the navigation |
| selected | number | null | (optional) The index of the currently selected item, used for setting a default active item and/or controlling active state manually |
| onItemClick | function | - | (optional)triggers when an item is clicked and it returns the item |
| activeBgColor | string | - | (optional) custom active background color code |
| activeTextColor | string | black | (optional) custom active text color code |

## Item Structure
all item properties are optional, if no property is provided the item will take space and it will be empty

| Prop | Type | description |
|--|--|--|
| title | string | (optional) item title |
| icon | JSX.Element | (optional) item icon |
| activeIcon | JSX.Element | (optional) item active icon |
| onClick | function | (optional) triggers when the item is clicked and it returns the item |
| render | ({ isActive: boolean; id: number }) =>  JSX.Element | (optional) will replace title and icons if provided, used for rendering custom content inside bottom navigation items |

  

## Usage
To use the component, you need to provide an array of "items" which represent the individual navigation options in the bottom navigation bar. Each item can have a "title", an "icon", or both. You can also provide a custom rendering function to create your own content for the item.

Example:

```jsx

import  React  from  "react";
import { BottomNavigation } from  "reactjs-bottom-navigation";

function  App() {

const  bottomNavItems = [
	{
		title:  "Home",
		onClick: ({ id }) =>  alert("menu clicked " + id),
		icon: <HomeIcon />, // just for example
		activeIcon: <HomeIcon color="#fff" />
	},

	// items can have either title, icon or both or neither!
	{
	},
	{
		title:  "Search",
	},
	// the render method enables custom item content
	{
		render: ({ isActive, id }) =>  isActive ? <strong>{id}</strong> : <span>{id}</span>,
	},
];

  

return (
<div>
	<BottomNavigation
		items={bottomNavItems}
		selected={0}
		onItemClick={(item) =>  console.log(item)}
		activeBgColor="slateBlue"
		activeTextColor="white"
	/>
</div>
);

}


export  default  App;

```



  
  

## Customization
  

the component elements have the following class names which you can assign new styles to them:

Bottom Navigation: _bottom-nav_

Items: _bottom-nav-item_

titles: _bottom-nav-item–title_

you can also use "activeBgColor" and "activeTextColor" props and the item render method

## Upcoming Features (contributions are welcome)

- auto show/hide on scroll option
- multiple item placement options
- no styles option
- shadow option

  

## License

  

MIT © [hoseinhamzei](https://github.com/hoseinhamzei)
