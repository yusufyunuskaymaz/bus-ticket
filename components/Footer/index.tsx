"use client"
import { useUserContext } from '@/contexts/user-context'
import React from 'react'

const Footer = () => {
  const {currentUser} = useUserContext()
  return (
    <div className='p-5 text-center bg-gray-500 text-white'>Otobüs Biletini Güvenle Al!
    <br />
    {currentUser.name} {currentUser.surname}
    </div>
  )
}

export default Footer