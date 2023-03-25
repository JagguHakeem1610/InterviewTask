import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { Loading } from "./Loading";

export const ProductList = () => {
  const [loading,setLoading]=useState(false)
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    setLoading(true)
    setTimeout(()=>{
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setLoading(false)
          setDataList(data);
        });
    },2000)
  };
  if(loading){
    return <Loading/>
  }
  return (
    <div style={{display:'grid',gridTemplateColumns:" 1fr 1fr 1fr 1fr"}}>
      {dataList.map((ele) => {
         return(<div key={ele.id}  style={{
          boxShadow: "0 0 10px black",
          padding: "10px",
          margin: "10px",
        }}>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
            marginBottom: "1rem",
            flexDirection: "column"
          }}
          
        >
            <Link to={`/productItem/${ele.id}`}>
          <img src={ele.image} alt={ele.title} width="200" height="200" /></Link>
          <b>{ele.title}</b>
          <span>₹ {ele.price}</span>
          <div style={{ display: "flex" }}>
            <b>{ele.category}</b>
          </div>
          <Link to={`/productItem/${ele.id}`}> <Button colorScheme='blackAlpha' size='lg'>Show Now</Button> </Link>
        
        </div>
        </div>
      )
      }
      )
      }
        
    </div>
  );
};
