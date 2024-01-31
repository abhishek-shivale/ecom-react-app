import {Link} from 'react-router-dom'
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { useState } from 'react'

const user = {_id:"rffgrf", role :"admin"}
function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const logoutHandler = () => {
    setIsOpen(false);
  }

  return (<nav className='header'>
    <Link to={'/'} onClick={()=>{setIsOpen(false)}}>Home</Link>
    <Link to={'/search'} onClick={()=>{setIsOpen(false)}}><FaSearch/></Link>
    <Link to={'/cart'} onClick={()=>{setIsOpen(false)}}><FaShoppingBag/></Link>
    {
      user?._id?(
        <>
        <button onClick={()=>{setIsOpen((pre)=> !pre)}}><FaUser/></button>
        <dialog open={isOpen}>
          <div>
            {
              user.role === 'admin' && (
                <Link onClick={()=>{setIsOpen(false)}} to={'/admin/dashboard'}>Admin</Link>
              )
            }
            <Link onClick={()=>{setIsOpen(false)}} to={'/orders'}>My Orders</Link>
            <button onClick={logoutHandler}><FaSignOutAlt /></button>
          </div>
        </dialog>
        </>
      ):(
        <>
        <Link onClick={()=>{setIsOpen(false)}} to={'/login'} ><FaSignInAlt/></Link>
       </>
      )
    }

  </nav>)
}

export default Header