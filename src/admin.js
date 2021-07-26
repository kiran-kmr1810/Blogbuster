import {FormControl,FormLabel,Input, Box,Text,
    Button,Center,useToast, 
    Stack,useColorModeValue} from '@chakra-ui/react';
import React from 'react';
import Editor from "rich-markdown-editor";

const Admin = () => {
    const toast = useToast()

    const b = useColorModeValue("gray.300", "gray.800")
    const edi = "";

    function submit(){
        console.log(edi);
    }

    return(
    <div>
      <Box 
      //p={{ base: "20px", md: "35px", lg: "40px" }}
      py = {{ base: "75px", md: "100px", lg: "150px" }}
      px = {{ base: "20px", md: "100px", lg: "150px" }}
      bg={b}
      h = "100%"
      >
      <Center>
      <Box
        w={{ base: "400px", md: "400px", lg: "600px" }}
        h='100%' 
        p='20px' 
        border='2px' 
        bgColor='gray.700'>
        <Box>
        <Text 
        fontSize= '32' 
        fontWeight='bold'
        color='white'
        >ADD NEW ARTICLE</Text>
        <Box bgColor='white' h='5px' w='100%'/>
        </Box>

        <Box py='30px'>
        <Stack spacing="30px">
        <FormControl id="password" isRequired>
        <FormLabel color='green.400'>PASSWORD</FormLabel>
        <Input  placeholder="password"/>
        </FormControl>

        <FormControl id="topic" isRequired>
        <FormLabel color='white'>TOPIC</FormLabel>
        <Input placeholder="Topic of the article"/>
        </FormControl>

        <FormControl id="date" isRequired>
        <FormLabel color='green.400'>DATE</FormLabel>
        <Input  placeholder="Date in yyyy/mm/dd form" />
        </FormControl>

        <FormControl id="heading" isRequired>
        <FormLabel color='white'>HEADING</FormLabel>
        <Input placeholder="Heading of the article"/>
        </FormControl>

        <FormControl id="summary" isRequired>
        <FormLabel color='green.400'>SUMMARY</FormLabel>
        <Input placeholder="write a short summary about the article"/>
        </FormControl>

        <FormControl id="tags" isRequired>
        <FormLabel color='white'>TAGS</FormLabel>
        <Input placeholder="Enter array of TAGS [,]"/>
        </FormControl>

        <FormControl id="author" isRequired>
        <FormLabel color='green.400'>AUTHOR</FormLabel>
        <Input placeholder="author name"/>
        </FormControl>
        </Stack>
        <Center>
        <Button bgColor = "green.400" 
                width='full' 
                mt={4}
                _hover={{
                    bg:"black",
                    color:"green.400"
                    }}
                onClick={() =>  {
                    submit();
                    toast({
                        title: "ARTICLE SUBMITTED SUCESSFULLY",
                        status: "success",
                        duration: 2000,
                        isClosable: true,
                });}}
                >
            SUBMIT
        </Button>
        </Center>
        </Box>
        </Box>
        </Center>
        </Box>
        <Box minH ="500px" w="1000px">
        <Editor defaultValue="Hello world!" dark="true"/>
        </Box>
    </div>   
    )
}

export default Admin;
