import React from 'react'
import './Grid.css';
import One from './Context/FolderOne/One';
import Two from './Context/FolderTwo/Two';
import Three from './Context/FolderThree/Three';
import Four from './Context/FolderFour/Four';
import Five from './Context/FolderFive/Five';
import Six from './Context/FolderSix/Six';
import Seven from './Context/FolderSeven/Seven';
import Eight from './Context/FolderEight/Eight';

const Grid = () => {
  return (
    <div id='Container'>
        <One />
        <Two />
        <Three />
        <Four />
        <Five />
        <Six />
        <Seven />
        <Eight />
    </div>
  )
}

export default Grid
