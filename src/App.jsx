import React from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Jobs from './components/Jobs';

const App = () => {
  return (
    <div className='w-[95%] m-auto bg-white'>
      <Navbar />
      <Search />
      <Jobs />
    </div>
  )
}

export default App;