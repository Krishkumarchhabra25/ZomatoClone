import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'
import React from 'react'

const Template = ({children}) => {
  return (
    <div>
    <Header />
    <main>
    {children}
    </main>
<Footer />
    </div>
  )
}

export default Template