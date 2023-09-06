import React, { useState } from 'react'
import NavBar from './comps/NavBar';
import News from './comps/News';
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App = () => {

  const [progress, setProg] = useState(0);

  const setProgress = (progress) => {
    setProg(progress);
  } 

  const [mode, setMode] = useState('light');

  return (
    <div>
      <NavBar mode = {mode} />
      <LoadingBar
        height={2}
        color='#f11946'
        progress={progress}
      />
      <Routes>
        <Route exact path='/' element={<News setProgress={setProgress} pageSize={9} country="in" category="general"  mode = {mode} />}> </Route>
        <Route exact path='/business' element={<News setProgress={setProgress} key="business" pageSize={9} country="in" category="business"  mode = {mode} />}> </Route>
        <Route exact path='/entertainment' element={<News setProgress={setProgress} key="entertainment" pageSize={9} country="in" category="entertainment" />} />
        <Route exact path='/general' element={<News setProgress={setProgress} key="general" pageSize={9} country="in" category="general"  mode = {mode} />}> </Route>
        <Route exact path='/health' element={<News setProgress={setProgress} key="health" pageSize={9} country="in" category="health"  mode = {mode} />}> </Route>
        <Route exact path='/science' element={<News setProgress={setProgress} key="science" pageSize={9} country="in" category="science"  mode = {mode} />}> </Route>
        <Route exact path='/sports' element={<News setProgress={setProgress} key="sports" pageSize={9} country="in" category="sports"  mode = {mode} />}> </Route>
        <Route exact path='/technology' element={<News setProgress={setProgress} key="technology" pageSize={9} country="in" category="technology"  mode = {mode} />}> </Route>
      </Routes>
    </div>
  )
}

export default App;