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
      inCart: false,
      image : "./src/assets/shoe2.png"
    },
    {
      id: 3,
      productName: "Jordan Retro 5",
      stars: "",
      price: "$225",
      inCart: false,
      image:"/src/assets/shoe3.png"
    },
    {
      id: 4,
      productName: "Puma Miles Morales",
      stars: "",
      price: "$90",
      inCart: false,
      image:"/src/assets/shoe4.png"
    },
    {
      id: 5,
      productName: "Adidas originals Crazy 8",
      stars: "",
      price: "$140",
      inCart: false,
      image : "/src/assets/shoe5.png"
    },
    {
      id: 6,
      productName: "Under Armour HOVR splash 2",
      stars: "",
      price: "$110",
      inCart: false,
      image : "/src/assets/shoe6.png"
    },
    {
      id: 7,
      productName: "Timberland Field Boots",
      stars: "",
      price: "$120",
      inCart: false,
      image: "/src/assets/shoe7.png"
    },
    {
      id: 8,
      productName: "Polo Ralph Lauren low",
      stars: "",
      price: "$99.99",
      inCart: false,
      image : "/src/assets/shoe8.png"
    }
  ]

  return (
    <>
      <Nav />
      <ShopBody products={ products } />
      <Footer />
    </>
  )
}

export default App
