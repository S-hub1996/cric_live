import { Image, Input, Button, Flex, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import { searchMatch } from "./api";
import Cards from "./Card";
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
    
    .catch((error) => {});
  }
  console.log(data) 
  return (
    <div>
      <Flex m="4" gap={4}>
        <Input
          placeholder="Search teams, Players etc"
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

      <SimpleGrid columns={[1, 2, 3]}>
        {data?data?.map((match) => {
            if (match.teamInfo)
            return <Cards match={match}/>
        }):null}
    </SimpleGrid>


      <Image
        src="https://img.freepik.com/premium-vector/cricket-championship-concept_1302-17559.jpg?auto=format&h=200"
        w="100%"
      />


    </div>
  );
};

export default SearchPage;
