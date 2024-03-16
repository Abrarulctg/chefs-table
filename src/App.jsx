
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import SubSection from './components/SubSection/SubSection'
import Cards from './components/Cards/Cards'

function App() {



  return (
    <>
      <div className='max-w-6xl mx-auto'>
        <Header></Header>
        <Banner></Banner>
        <SubSection></SubSection>

        <div className="flex flex-col lg:flex-row">
          <div className="w-2/3">
            <Cards></Cards>
          </div>
          <div className="w-1/3">
            <h2>cart</h2>
          </div></div>
      </div>

    </>
  )
}

export default App
