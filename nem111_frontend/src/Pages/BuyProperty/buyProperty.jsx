import BuyNavbar from "./buyNavbar";
import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Box, Button, Flex, Grid, Stack,Skeleton } from "@chakra-ui/react";
import { store } from "../../Redux/store";
import { getProperty } from "../../Redux/Property/action";
import { BuyproductCart } from "./buyPropertyCard";
export const BuyProperty = () =>{
    
    // return <>
    
    // <BuyNavbar/>
    // <br /><br />

    const [page, setPage] = useState(1);
   
  const [searchParam, setSearchParam] = useSearchParams();
  const dispatch = useDispatch();

//   const {propertys,isloading }=useSelector((store)=>{
//     return store.property
//   },shallowEqual);
//   console.log(propertys)
const  propertys=useSelector((store)=>store.Property.propertys)
const isloading=useSelector((store)=>store.Property.isLoading);
console.log(propertys)
  console.log(isloading)
//   let allParams = {
//     params: {
//       page: page,
//       search:searchParam.getAll("search"),
//       status:searchParam.getAll("status"),
//       furnishing:searchParam.getAll("furnishing"),
//       ownership:searchParam.getAll("ownership"),
//       type:searchParam.getAll("type"),
//       transaction:searchParam.getAll("transaction"),
//       sortByPrice:searchParam.getAll("sortByPrice"),
//       sortBySize:searchParam.getAll("sortBySize"),
//     },
//   }
  useEffect(() => {
    dispatch(getProperty());
  }, []);


  if (isloading) {
    return (
      
      <Grid
        w={"90%"}
        m={"auto"}
        gridTemplateColumns={{
          lg: "repeat(2,1fr)",
          xl: "repeat(2,1fr)",
          md: "repeat(2,1fr)",
          sm: "repeat(2,1fr)",
          base: "repeat(2,1fr)",
        }}
        gap={"20px"}
      >
        <Stack>
          <Skeleton
            startColor="green.500"
            endColor="orange.500"
            height="200px"
          />
        </Stack>
        <Stack>
          <Skeleton
            startColor="green.500"
            endColor="orange.500"
            height="200px"
          />
        </Stack>
        <Stack>
          <Skeleton
            startColor="green.500"
            endColor="orange.500"
            height="200px"
          />
        </Stack>
        <Stack>
          <Skeleton
            startColor="green.500"
            endColor="orange.500"
            height="200px"
          />
        </Stack>
        <Stack>
          <Skeleton
            startColor="green.500"
            endColor="orange.500"
            height="200px"
          />
        </Stack>
        <Stack>
          <Skeleton
            startColor="green.500"
            endColor="orange.500"
            height="200px"
          />
        </Stack>
        <Stack>
          <Skeleton
            startColor="green.500"
            endColor="orange.500"
            height="200px"
          />
        </Stack>
        <Stack>
          <Skeleton
            startColor="green.500"
            endColor="orange.500"
            height="200px"
          />
        </Stack>
        <Stack>
          <Skeleton
            startColor="green.500"
            endColor="orange.500"
            height="200px"
          />
        </Stack>
      </Grid>
    );
  }
  return (
    <>
    <BuyNavbar/>
      <br />
      <Flex>
      <Grid
        gridTemplateColumns={{
          xl: "repeat(1,1fr)",
          lg: "repeat(1,1fr)",
          md: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          base: "repeat(1,1fr)",
        }} 
        gap={5}
        w={{ xl: "60%", lg: "60%", md: "60%", sm: "60%", base: "60%" }}
        m={"auto"}
        sx={{margin:"20px"}}
      >
        {Array.isArray(propertys.data)&&propertys.data.map((el) => {
          return (
            <BuyproductCart key={el._id} product={el} />
          );
        })}
      </Grid>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30144.622186874127!2d72.82389400435528!3d19.19180514340419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1686954305012!5m2!1sen!2sin" style={{width:"40%", height:"70vh", border:"0.5px solid grey", margin:"20px"}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </Flex>
      <br />
      <Flex gap={"5px"} justifyContent={"center"}>
        <Button
          onClick={() => setPage((pre) => pre - 1)}
          isDisabled={page === 1}
          color={"#00d100"}
        >
          PRE
        </Button>
        <Button color={"#00d100"}>{page}</Button>
        <Button
          onClick={() => setPage((pre) => pre + 1)}
          isDisabled={page === 32 / 8}
          color={"#00d100"}
        >
          NEXT
        </Button>
      </Flex>


    </>
  )
}
