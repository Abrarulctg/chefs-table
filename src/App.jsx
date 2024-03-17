
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
  // const [wantToCookCount, setWantToCookCount] = useState(0);

  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  const recipeIDs = [];

  const handleWantToCock = (cards, recipe_id) => {
    for (const cart of carts) {
      recipeIDs.push(cart.recipe_id)
    }
    if (recipeIDs.includes(recipe_id)) {
      {
        // A toast will be added
        <div className="toast toast-top toast-end">
          <div className="alert alert-info">
            <span>You can not select same item</span>
          </div>
        </div>
      }
    }
    else {
      const newCartItem = [...carts, cards];
      setCarts(newCartItem);
    }
  }

  //Handle Preparing Button
  const handlePreparing = (cartItem, recipe_id) => {
    const updatedCart = carts.filter(cart => cart.recipe_id !== recipe_id);
    setCarts(updatedCart);

    const newCurrentlyCookingItem = [...currentlyCooking, cartItem];
    setCurrentlyCooking(newCurrentlyCookingItem);
    // console.log("preparing now", currentlyCooking)


    console.log(currentlyCooking)
    //eita currently cooking part er onno.. console a new item a add na kore cart-item er shate add kore feltece ekhon
  }

  return (
    <>
      <div className='max-w-6xl mx-auto'>
        <Header></Header>
        <Banner></Banner>
        <SubSection></SubSection>

        <div className="flex flex-col lg:flex-row gap-4 mx-auto justify-center">
          <div className="w-10/12 lg:w-3/5 self-center">
            <Cards
              handleWantToCock={handleWantToCock}
            ></Cards>
          </div>
          <div className="w-full lg:w-2/5">
            <Cart
              carts={carts}
              handlePreparing={handlePreparing}
              currentlyCooking={currentlyCooking}
            ></Cart>
          </div></div>

      </div>
      <Footer></Footer>

    </>
  )
}

export default App
