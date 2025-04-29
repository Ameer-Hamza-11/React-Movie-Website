import React from 'react'
import { Header } from '../Components/UI/Header'
import { Footer } from '../Components/UI/Footer'
import { Outlet, useNavigation } from 'react-router-dom'
import '../Components/UI/Loader.css'
import { Loader } from '../Components/UI/Loader'

export const AppLayout = () => {
const navigation =  useNavigation();
console.log(navigation);
if(navigation.state === 'loading'){
  return <Loader/>
}

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

