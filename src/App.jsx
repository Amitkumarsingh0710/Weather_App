import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBox from './SearchBox'
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Rating from '@mui/material/Rating';
import InfoBox from './InfoBox'
import Weather from './Weather'


// function App()
// {
//   return (
//     <div>
//       <h1>  MATERIAL UI DEMO!</h1>
//       <Button variant="contained" startIcon={<DeleteIcon />}  size="large">DELETE</Button>
//       <h1>Rating:</h1>
//       <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
//     </div>
//   )
// }

function App()
{
  return (
    <div>
     <Weather/>
      
    </div>
  )
}
export default App
