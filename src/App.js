// import { useRoutes } from 'react-router-dom'
// import { ROUTES } from './routers';
// import './App.css';


// function App() {
//   return useRoutes(ROUTES)
// }

// export default App;

import { Routes, useRoutes, Route, BrowserRouter } from 'react-router-dom'
import { ROUTES } from './routers';
import './App.css';
import Layout from './layout';

function App(){
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element= {<Layout/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
