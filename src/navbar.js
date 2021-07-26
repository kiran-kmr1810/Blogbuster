import {
  Box, HStack, Text,useColorMode,Button,useColorModeValue, Spacer
} from '@chakra-ui/react'
import {
  MoonIcon,SunIcon
} from '@chakra-ui/icons';

export default function Navbar() {

  const { colorMode, toggleColorMode } = useColorMode()
  const nav = useColorModeValue("white", "black")
  const text = useColorModeValue("green.400", "white")
  const gr = useColorModeValue("green.400", "green.400")

return(
<div>
<Box 
bg={nav}
px={4} 
w = "100%"
pos="fixed"
top = "0"
height = {{ base: "50px", md: "70px", lg: "80px" }}>
    <HStack 
    >
    <Text color={text} 
    fontSize={{ base: "32px", md: "40px", lg: "54px" }}
    fontWeight= 'extrabold'  
    >
    BLOG</Text>
    <Spacer/>
    <Button onClick={toggleColorMode}
    >{colorMode === "light" ? <MoonIcon/> : <SunIcon/>}
    </Button>
    </HStack>
</Box>
<Box 
bgColor={gr}
h = {{ base: "10px", md: "5px", lg: "8px" }} 
w='100%'
pos="fixed"
top = {{ base: "50px", md: "70px", lg: "80px" }}
/>
</div>
);
}
