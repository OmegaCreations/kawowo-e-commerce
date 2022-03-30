require('file-loader?name=[name].[ext]!./index.html')

import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { App } from './App'
import './styles/Menu.scss'


// scripts

import './scripts/mouse.js' // custom mouse
// parallax img move and switch page animation
import './scripts/menu-anim.js' 

const appElement = document.getElementById('app')
const root = ReactDOMClient.createRoot(appElement)

root.render(<App/>)