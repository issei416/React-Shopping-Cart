import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import ShopBody from './components/ShopBody'


function App() {

  let products = [
    {
      id: 1,
      productName: "Nike Zoom GT cut 2",
      stars: "",
      price: "$150 - $170",
      inCart: false,
      image : "./src/assets/shoe1.png"
    },
    {
      id: 2,
      productName: "Jordan Spizike Low",
      stars: 5,
      price: "$160",
      inCart: false
    },
    {
      id: 3,
      productName: "Nike Zoom GT cut 2",
      stars: "",
      price: "$150 - $170",
      inCart: false
    },
    {
      id: "shoe1",
      productName: "Nike Zoom GT cut 2",
      stars: "",
      price: "$150 - $170",
      inCart: false
    },
    {
      id: "shoe1",
      productName: "Nike Zoom GT cut 2",
      stars: "",
      price: "$150 - $170",
      inCart: false
    },
    {
      id: "shoe1",
      productName: "Nike Zoom GT cut 2",
      stars: "",
      price: "$150 - $170",
      inCart: false
    },
    {
      id: "shoe1",
      productName: "Nike Zoom GT cut 2",
      stars: "",
      price: "$150 - $170",
      inCart: false
    },
    {
      id: "shoe1",
      productName: "Nike Zoom GT cut 2",
      stars: "",
      price: "$150 - $170",
      inCart: false
    }
  ]

  return (
    <>
      <Nav />
      <ShopBody products={ products } />
      {/* <Footer /> */}
    </>
  )
}

export default App
