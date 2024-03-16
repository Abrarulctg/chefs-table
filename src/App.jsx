
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import SubSection from './components/SubSection/SubSection'
import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart'
import { useState } from 'react'

function App() {

  const [carts, setCarts] = useState([]);
  const [wantToCookCount, setWantToCookCount] = useState(0);

  const handleWantToCock = (cards) => {
    console.log("want to cock btn clicked", cards)
    const newCartItem = [...carts, cards];
    setCarts(newCartItem);
    setWantToCookCount(wantToCookCount + 1);
  }


  return (
    <>
      <div className='max-w-6xl mx-auto'>
        <Header></Header>
        <Banner></Banner>
        <SubSection></SubSection>

        <div className="flex flex-col lg:flex-row gap-4 mx-auto justify-center">
          <div className="w-3/5 self-center">
            <Cards
              handleWantToCock={handleWantToCock}

            ></Cards>
          </div>
          <div className="w-2/5">
            <Cart
              carts={carts}
              wantToCookCount={wantToCookCount}
            ></Cart>
          </div></div>

      </div>
      <Footer></Footer>

    </>
  )
}

export default App
