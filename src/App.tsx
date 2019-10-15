import React from 'react'
import './App.scss'

import Todos from './Todos'

const App: React.FC = () => (
  <div className='container'>
    <h1 className='header'>todos</h1>
    <Todos />
  </div>
)

export default App