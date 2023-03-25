import React from 'react'
import { Button } from '@chakra-ui/react'
import { AuthContext } from '../Context/AuthContext'
import { useContext } from 'react'
export const Navbar = (props) => {
  const {authState}=useContext(AuthContext)
  console.log(authState.token)
  return(
    <div>
<div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            gap: "100px",
            height:'80px',
            alignItems:'center '
          }}
        >
          <h2 style={{fontWeight:'normal',fontSize:'40px'}}>ECLOTHS</h2>
         <div style={{
            display: "flex",
            flexDirection: "row",gap:'30px'}}> 
            <h6>HOME</h6>
          <h6>ABOUT</h6><h6>CONTACT US</h6></div>
          <div style={{
            display: "flex",
            alignItems:'center ',

            flexDirection: "row",gap:'30px'}} >

          <Button colorScheme='blue' variant='outline'>{authState.token ?authState.token :"Hello User"}</Button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" height='20px' viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" height='20px' viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" height='20px' viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

            <Button colorScheme='blue' variant='outline' >SIGN OUT </Button>
            </div>
            


        </div>
    </div>
   )

 }