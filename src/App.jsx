import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import ShopBody from './components/ShopBody'
import { useState } from 'react'


function App() {


  let products = [
    {
      id: 1,
      productName: "Nike Zoom GT cut 2",
      stars: "",
      price: "$150 - $170",
      sale:"",
      inCart: false,
      image : "./src/assets/shoe1.png"
    },
    {
      id: 2,
      productName: "Jordan Spizike Low",
      stars: 5,
      price: "$180",
      sale:"$160",
      inCart: false,
      image : "./src/assets/shoe2.png"
    },
    {
      id: 3,
      productName: "Jordan Retro 5",
      stars: "",
      price: "$225",
      sale:"$200",
      inCart: false,
      image:"/src/assets/shoe3.png"
    },
    {
      id: 4,
      productName: "Puma Miles Morales",
      stars: 5,
      price: "$90",
      sale:"",
      inCart: false,
      image:"/src/assets/shoe4.png"
    },
    {
      id: 5,
      productName: "Adidas originals Crazy 8",
      stars: "",
      price: "$140",
      sale:"",
      inCart: false,
      image : "/src/assets/shoe5.png"
    },
    {
      id: 6,
      productName: "Under Armour HOVR splash 2",
      stars: "",
      price: "$110",
      sale:"",
      inCart: false,
      image : "/src/assets/shoe6.png"
    },
    {
      id: 7,
      productName: "Timberland Field Boots",
      stars: 5,
      price: "$130",
      sale:"$120",
      inCart: false,
      image: "/src/assets/shoe7.png"
    },
    {
      id: 8,
      productName: "Polo Ralph Lauren low",
      stars: 5,
      price: "$125",
      sale:"$99.99",
      inCart: false,
      image : "/src/assets/shoe8.png"
    }
  ]

  const [cartItems, setCartItems] = useState(products);

  const handleCartUpdate = (updatedProduct) => {
    setCartItems((prevItems) =>
      prevItems.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  return (
    <>
      <Nav cartItems={ cartItems} />
      <ShopBody products={products} cartItems={cartItems} setCartItems={setCartItems} onCartUpdate={ handleCartUpdate } />
      <Footer />
    </>
  )
}

export default App
