import React from 'react'
import './Grid.css';
import One from './Context/FolderOne/One';
import Two from './Context/FolderTwo/Two';
import Three from './Context/FolderThree/Three';
import Four from './Context/FolderFour/Four';
import Six from './Context/FolderSix/Six';
import Eight from './Context/FolderEight/Eight';

const Grid = () => {
  return (
    <div id='Container'>
        <One />
        <Two />
        <Three />
        <Four />
        <Six />
        <Eight />
    </div>
  )
}

export default Grid
