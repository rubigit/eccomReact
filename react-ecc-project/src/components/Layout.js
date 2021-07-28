import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'



const Layout = ({ children }) => {

    return (
        <>
            <Header />
            <main className="products">
                {children}
            </main>
            <Footer />
        </>
    )
}

console.log(`Test6: Layout.js`,)
export default Layout