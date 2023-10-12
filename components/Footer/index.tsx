"use client"
import { useUserContext } from '@/contexts/user-context'
import React from 'react'
import { ToastContainer } from "react-toastify";


const Footer = () => {
  const {currentUser} = useUserContext()
  return (
    <div className='p-5 text-center bg-gray-500 text-white'>Otobüs Biletini Güvenle Al!
    <br />
    {currentUser.name} {currentUser.surname}
    <ToastContainer />

    </div>
  )
}

export default Footer