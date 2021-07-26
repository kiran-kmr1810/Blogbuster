import React from 'react';
import {
    Box,Center,CircularProgress,SimpleGrid,Spacer,Text
  } from '@chakra-ui/react'
import Article from "./article";

class Hero extends React.Component {
  constructor(props) 
  {  
   super(props);
    this.state = {
      data: [],
      showComponent: false,
      loading: true
    };
  }

  async componentDidMount() {
    this.state.showComponent = false;
    this.state.loading = true;
    fetch(`https://blog-ops24.herokuapp.com/getall`)
    .then((response) => response.json())
    .then(data => this.setState({ data:data,loading:false })); 
}
    
render() {
  return (
    (this.state.loading)?
    <div>
          <Center>
          <Box
          w = "100%"
          h = "400px"
          py = "150px"
          >
          <Center>
          <CircularProgress isIndeterminate color="black" size="150px" thickness="10px" />
          </Center>
          </Box>
          </Center>
        </div>
      :
    <div>
        <Box 
        bg="orange.400" 
        w= "100%" 
        h= "100%"
        py = {{ base: "30px", md: "13px", lg: "50px" }}
        px = {{ base: "25px", md: "40px", lg: "180px" }}
        >
        <Box bg="white" boxShadow="dark-lg" p="25px">
        <Text color="black" align="center"
          fontSize={{ base: "32px", md: "40px", lg: "54px" }}
          fontWeight= 'extrabold'  
          >
          BLOGBUSTER</Text>
          <Text color="gray.500" align="center">
            ~ EveryThing & EveryOne ~
          </Text>
          <Box h={{ base: "25px", md: "25px", lg: "50px" }}>
          <Text align="center" color="black">
          ------------------------------------------------------------------
          </Text>
          </Box>
         <SimpleGrid columns={1} spacing="20px">
            {this.state.data.map((art) => (
            <Article
            heading={art.heading}
            summary={art.summary}
            picture={art.picture}
            tags={art.tags}
            topic={art.topic}
            date={art.date}  
            author={art.author}
            uid = {art.uid} 
            />   
            ))}
            </SimpleGrid>
          </Box>
        </Box>
    </div>
  );
}
}
export default Hero;
