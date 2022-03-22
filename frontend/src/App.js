import React from 'react'

import { About, Header, Footer, Skills, Testimonials, Work } from './Containers'
import { NavBar } from './Components'

const App = () => {
  return (
    <div className = 'app'>
      <header>
        <nav>
          <NavBar />
        </nav>
        <Header />
      </header>
      <main>
      <About />
      <Work />
      <Skills />
      <Testimonials />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
