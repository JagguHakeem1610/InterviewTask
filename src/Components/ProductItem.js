import { useToast } from "@chakra-ui/react";
import { useEffect, React, useRef } from "react";
import { useState } from "react";
import { Counter } from "./Counter";
import { useParams } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
  AlertDialogCloseButton,
} from "@chakra-ui/react";
import { Navbar } from "./Navbar";
const ProductItem = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const toast = useToast();

  const [itemID, setItemID] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItemID(data);
      });
  }, []);

  return (
    <>
      <Navbar />
      <h2 style={{ color: "#2b6cb0", fontSize: "50px" }}>Product Details</h2>

      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "30px" }}
      >
        {
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <img
              
              src={itemID.image}
              width="400"
              height="200px"
            />

            <div
              style={{
                display: "flex",
                
                gap: "1rem",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem",
                marginBottom: "1rem",
                flexDirection: "column",
              }}
            >
              <b>{itemID.title}</b>
              <img src='https://t3.ftcdn.net/jpg/04/20/03/48/360_F_420034841_AKpgqQGkkUyeD7oWc9y8vGTMwT4GmbHm.jpg' width='160px' height='150px'/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br/> sed do
                eiusmodtempor incididunt ut labore et dolore magna<br/> aliqua. Ut
                enim ad minim veniam,quis nostrud exercitation <br/>ullamco laboris
                nisi ut aliquip ex ea commodoconsequat. Duis<br/> aute irure dolor in
                reprehenderit in voluptate velit <br/>essecillum dolore eu fugiat
                nulla pariatur. Excepteur <br/>sint occaecat cupidatat nonproident,
                sunt in culpa qui officiav<br/> deserunt mollit anim id est laborum.
              </p>
              <span>₹ {itemID.price}</span>
              <b>{itemID.category}</b>
              <Counter/>

              <Button onClick={onOpen}>PROCEED TO CHECKOUT</Button>
              <AlertDialog
                motionPreset="slideInBottom"
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
              >
                <AlertDialogOverlay />

                <AlertDialogContent>
                  <AlertDialogHeader>CONFORM ORDER</AlertDialogHeader>
                  <AlertDialogCloseButton />
                  <AlertDialogBody>
                    One step away to place Order. Please click YES to conform
                    the Order...!
                  </AlertDialogBody>
                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      No
                    </Button>
                    <Button colorScheme="red" ml={3} onClick={onClose}>
                      <Button
                        colorScheme="red"
                        ml={3}
                        onClick={() =>
                          toast({
                            title: "Order Placed SeccessFully",
                            description:
                              "We will delivery your order in 30Mins",
                            status: "success",
                            duration: 2000,
                            isClosable: true,
                          })
                        }
                      >
                        Yes
                      </Button>
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        }
      </div>
    </>
  );
};
export default ProductItem;
