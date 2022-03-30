import { Navigate, NavLink,Route,Routes } from "react-router-dom"
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages"

export const LazyLayout = () => {
  return (
    <div>
        <h1>LazyLayout Page</h1>

        <ul>
            <li><NavLink to='lazy1'>lazy 1</NavLink></li>
            <li><NavLink to='lazy2'>lazy 2</NavLink></li>
            <li><NavLink to='lazy3'>lazy 3</NavLink></li>
        </ul>

            <Routes>
                <Route path='lazy1' element={<LazyPage1/>} />
                <Route path='lazy2' element={<LazyPage2/>} />
                <Route path='lazy3' element={<LazyPage3/>} />
            
                {/* <Route path="*" element={<div><h1>Not Found</h1></div>} /> */}
                <Route path="*" element={<Navigate replace to='lazy1' />} />
            </Routes>

            


    </div>
  )
}


export default LazyLayout