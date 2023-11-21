// import './App.css'
// import { Routes, Route } from 'react-router-dom';
// import { NewHome } from './components/NewHome';
// import { HeaderPage } from './layout/HeaderPage';
// import { Profile } from './components/Profile';


// function App() {

//   return (
//     <div className='workSpace'>
//       <div className='headerSpace'>
//         <HeaderPage />
//       </div>
//       <div className='contentSpace'>
//         <Routes>
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/" element={<NewHome />} />
//         </Routes>
//       </div>
//     </div>
//   )
// }

// export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
