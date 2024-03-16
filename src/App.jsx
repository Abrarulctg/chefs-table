
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import SubSection from './components/SubSection/SubSection'
import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart'

function App() {



  return (
    <>
      <div className='max-w-6xl mx-auto'>
        <Header></Header>
        <Banner></Banner>
        <SubSection></SubSection>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-2/3">
            <Cards></Cards>
          </div>
          <div className="w-1/3">
            <Cart></Cart>
          </div></div>

      </div>
      <Footer></Footer>

    </>
  )
}

export default App
