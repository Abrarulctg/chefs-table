
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import SubSection from './components/SubSection/SubSection'
import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [carts, setCarts] = useState([]);
  // const [wantToCookCount, setWantToCookCount] = useState(0);

  const [currentlyCookingItem, setCurrentlyCookingItem] = useState([]);
  const recipeIDs = [];
  // const notify = () => toast("Wow so easy!");

  // const ToasterShow = () => {
  //   return `{<div className="toast toast-top toast-end">
  //     <div className="alert alert-info">
  //       <span>New mail arrived.</span>
  //     </div>
  //   </div>}`
  // }
  const successAlert = () => toast.success('Success, Recipe added to the cart!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    // transition: Bounce,
  });
  const errorAlert = () => toast.error('You can not select same recipe at a time!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    // transition: Bounce,
  });


  const handleWantToCock = (cards, recipe_id) => {
    for (const cart of carts) {
      recipeIDs.push(cart.recipe_id)
    }
    if (recipeIDs.includes(recipe_id)) {
      // console.log("toaster Show")
      errorAlert()
    }
    else {
      successAlert()
      const newCartItem = [...carts, cards];
      setCarts(newCartItem);
    }
  }

  // let removedIdFromWantToCookTable = [];
  //Handle Preparing Button
  const handlePreparing = (cartItem, recipe_id) => {
    const updatedCart = carts.filter(cart => cart.recipe_id !== recipe_id);
    setCarts(updatedCart);

    // console.log(cartItem);
    const newCookingItem = [...currentlyCookingItem, cartItem]
    setCurrentlyCookingItem(newCookingItem);
  }
  console.log(currentlyCookingItem);




  return (
    <>
      {/* Display Toaster */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Bounce
      />

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
              currentlyCookingItem={currentlyCookingItem}
            ></Cart>
          </div></div>

      </div>
      <Footer></Footer>

    </>
  )
}

export default App
