import Card from './/Component/Card';
import './App.css';
import Banner from './/Component/BannerJumbotron';
import Navbarnew from ".//Component/Navbar";
import React, { useState,useEffect} from 'react';
import Footer from './/Component/footer';
import { data } from './/Component/imgdata';
// import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  const[cartValue,setCartValue]=useState(0);
  const[cardItems,setCardItems]=useState([])

  useEffect(() => {
    setCardItems(data)
    //Runs on every render
  },[]);


 function handleCart(Items){
                        if(Items.added){
                          setCartValue(prevstate=> prevstate+1);
                          let  cardItem =[...cardItems]
                          const index = cardItem.indexOf(Items)
                          cardItem[index].added=!(cardItem[index].added)
                          // setCardItems(cardItems)
                      
                                      }
                        else {
                        setCartValue(prevstate=> prevstate-1)
                        let  cardItem =[...cardItems]
                          const index = cardItem.indexOf(Items)
                          cardItem[index].added=!(cardItem[index].added)
                        
                              }
                        }

  return (
    <div className="App">
     <Navbarnew cartValue = {cartValue}/>
     <Banner/>
     {cardItems.map(Items =>
     <Card
    
     handleCart={()=>handleCart(Items)}
     key={Items.id}
     value={cartValue}
     items={Items}
     />

     )}
     <Footer/>

    </div>
  );
}

export default App;