import { useAppContext } from '../context/appContext.js'
import {Navigate, Outlet} from 'react-router-dom'

const ProtectedRoute = ({children}) => {
  const {user} = useAppContext()

  if(!user){
    return <Navigate to = '/register' />
  }
  return(
    <div><Outlet /></div>
  )
}

export default ProtectedRoute