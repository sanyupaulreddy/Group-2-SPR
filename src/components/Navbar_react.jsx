import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const Navbar_react = () => {
  return (
    <div>
        <section id={StyleSheet.navBlock}>
            <article>
                <Logo/>
                <Menu/>
            </article>
        </section>
    </div>
  )
}

export default Navbar_react