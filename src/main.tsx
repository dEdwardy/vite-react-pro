import dva from 'dva'
import createHistory from 'history/createBrowserHistory'
import React from 'react'
import './index.css'
import App from './App'
import models from '@/models'
import router from '@/router'
import 'antd/dist/antd.css'

// 1. initialize
const app = dva({
  history:createHistory()
})

// 2.plugins
// app.use

// 3. model
app.model(models)

// 4.router
app.router(router)

// 5.start
app.start('#root')