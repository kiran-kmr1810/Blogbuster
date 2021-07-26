import {
    Box,Center,Stack,Text,CircularProgress
  } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState,useEffect} from 'react'; 
import ReactHtmlParser from 'react-html-parser';
import ClapButton from 'react-clap-button';
import { HeartSharp } from 'react-ionicons'

function Art() {
    const onCountChange = ({ count, countTotal }) => {
        console.log(countTotal);
    };
    var a = window.location.pathname
    var arr = [...a].slice(9,);
    var s = arr.join(); 
    const [body, setbody] = useState();
    var [loading, setloading] = useState(true);
    const [date, setdate] = useState();
    const [likes, setlikes] = useState();
    const [heading,setheading] = useState();
    const [summary,setsummary] = useState();
    const [picture,setpicture] = useState();
    const [tags,settags] = useState();
    const [topic,settopic] = useState();
    const [author,setauthor] = useState();

    useEffect(() => {
        const output = {
            "uid": s,
          }
          axios.post(`https://blog-ops24.herokuapp.com/getone`, output)
          .then(response =>{
            console.log(response.data);
            setbody(response.data.body);
            setdate(response.data.date);
            setlikes(response.data.likes);
            setheading(response.data.heading);
            setsummary(response.data.summary);
            setpicture(response.data.picture);
            settags(response.data.tags);
            settopic(response.data.topic);
            setauthor(response.data.author);
            setloading(false);
          }).catch(err =>{
            console.log(err);
          })
    }, []);
    console.log(tags)
    return (
        (loading)?
        <div>
              <Center>
              <Box
              w = "100%"
              h = "400px"
              py = "150px"
              >
              <Center>
              <CircularProgress isIndeterminate color="green.400" size="150px" thickness="10px" />
              </Center>
              </Box>
              </Center>
            </div>
          :
        <div>
        <Center>
        <Box 
        h="100%"
        w = {{ base: "365px", md: "300px", lg: "800px" }}
        py = {{ base: "60px", md: "100px", lg: "100px" }}
        >
        <Text
        fontWeight="extrabold"
        textTransform="uppercase"
        fontSize="sm"
        letterSpacing="wide"
        p="10px"
        align="center"
        >
        -- {topic} --
        </Text>
        <Text 
        fontSize="4xl" 
        paddingTop="20px"
        paddingBottom="20px"
        fontWeight = "extrabold"
        align="center"  
        >{heading}</Text>
        <Text
        fontStyle="italic"
        fontWeigh="bold"
        fontFamily="sans-serif"
        paddingBottom="20px" 
        align="center"     
        > 
        {summary}
        </Text>
        <Box
        paddingBottom="20px"
        >
        <img 
        src={picture}/>
        </Box>
        <Stack 
        spacing="2px"
        paddingBottom="30px"
        paddingTop = "10px"
        >
        <Text
        fontWeight="bold"
        align = "left"
        >
        {date}
        </Text>
        <Text
        align = "left"
        fontWeight="bold"
        fontStyle="italic"
        color="blue.500"
        >
            {author}
        </Text>
        </Stack>
        { ReactHtmlParser(body) }
        <Center>
        <Box 
        py="30px"
        >
        <ClapButton
            count={0}
            countTotal={likes}
            maxCount={1}
            isClicked={false}
            onCountChange={onCountChange}
            iconComponent={props => 
            <HeartSharp
                {...props}
                color={'#48bb78'}  
                title="heart"
                height="62px"
                width="68px"/>}
        />
        </Box>
        </Center>
        </Box>
        </Center>
      </div>
    );
  }
  
export default Art;