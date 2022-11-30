import { Image, Input, Button, Flex, SimpleGrid, Heading, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { searchMatch } from "./api";
import Cards from "./Card";
import SearchCard from "./SearchCard";
import './slide.css'
import Carousel from "./Slider";
const SearchPage = () => {
  const [input, setinput] = useState("");
  const [data, setdata] = useState("");

  function handleSearch() {
    console.log(input)
    searchMatch(input)
      .then((data) => {
        console.log(data);
        setdata(data.data);
      })

      .catch((error) => { });
  }
  console.log(data)

  useEffect(() => {
    if (data.length) {
      setdata(data)
    }

  }, [data])
  return (
    <div>
      <Flex m="4" gap={4}>
        <Input
          placeholder="Search Upcoming Series..."
          value={input}
          onChange={(e) => {
            setinput(e.target.value);
          }}
        />
        <Button
          onClick={handleSearch}
          w="40%"
          _hover={"none"}
          color="white"
          bg="#984337"
        >
          Search
        </Button>
      </Flex>
      <Heading textAlign={'center'}>Search Results</Heading>
      <SimpleGrid columns={[1, 2, 3, 3, 5]}>

        {data ? data?.map((match) => {
          // if (match.teamInfo)
          return <SearchCard match={match} key={match.id} />
        }) : null}

      </SimpleGrid>


      {/* <Image
        src="https://img.freepik.com/premium-vector/cricket-championship-concept_1302-17559.jpg?auto=format&h=200"
        w="100%"
      /> */}
<Box w={'full'}>

    
  <Carousel/>
</Box>

    </div > 
  );
};

export default SearchPage;
