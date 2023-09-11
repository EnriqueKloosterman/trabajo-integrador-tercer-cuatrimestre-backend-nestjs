import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='w-3/4 bg-slate-800 p-3 my-3 mx-auto rounded-md'>
        <nav>
            <ul className=' flex flex-row justify-around font-bold text-sm md:text-base lg:text-lg text-white'>
                <li>
                    <Link to="/" className='navLink'>Home</Link>
                </li>
                <li>
                    <Link to="/recipes" className='navLink'>Recetas</Link>                
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar