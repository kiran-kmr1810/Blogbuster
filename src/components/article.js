import {
  Box, Text,Image,Link, HStack,useColorModeValue
} from '@chakra-ui/react'
import React from 'react'; 

const Article = (props) => {
  const overall = useColorModeValue("white", "gray.800")
  const title = useColorModeValue("black", "white")
  const about = useColorModeValue("gray.800", "gray.400")
  const tag = useColorModeValue("green.400", "black")
  const gr = useColorModeValue("black", "green.400")
  const ye = useColorModeValue("black", "yellow.400")
  const bl = useColorModeValue("blue.500", "blue.300")

  
  return (
    <div>
      <Box p={4} display={{ md: "flex" }} 
      bg= "white"
      borderRadius="lg"
      p = "30px"
      >
      <Box flexShrink={0}>
        <Image
          borderRadius="lg"
          //width={{ md: 40 }}
          w = {{ base: "300px", md: "300px", lg: "200px" }}
          h = {{ base: "200px", md: "300px", lg: "150px" }}
          src= {props.picture}
        />
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <HStack spacing="7px">
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="sm"
          letterSpacing="wide"
          color={gr}
          bgColor={tag}
          p ="5px"
        >
          {props.topic}
        </Text>
        <Text
          fontWeight="bold"
          fontSize="sm"
          letterSpacing="wide"
          color={ye}
          bgColor={tag}
          p ="5px"
        >
          {props.date}
        </Text>
        </HStack>
        <Link href= {`http://localhost:3000/article/${props.uid}`} isExternal>
        <Text
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="extrabold"
          href="#"
          color={title}
          _hover={{
            color:"orange.400",
            }}
          fontFamily = "sans-serif"
        >
          {props.heading}
        </Text>
        </Link>
        <Text mt={2} 
        color={about}
        fontWeight="medium"
        fontFamily = "sans-serif"
        >
          {props.summary}
        </Text>
        <Text mt={1} 
        color= {bl}
        fontWeight="bold"
        fontFamily = "monospace"
        fontSize = "md"
        textTransform="uppercase"
        >
        {props.author}
        </Text>
      </Box>
    </Box>
    </div>
  );
}

export default Article;