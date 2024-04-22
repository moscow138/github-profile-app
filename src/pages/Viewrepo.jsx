import React, {useEffect, useState,} from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Viewrepo.css"
import { ChakraBaseProvider } from "@chakra-ui/react";
import { Stack,
    Text,
    Box,
    StackDivider,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
   
    } from '@chakra-ui/react'


const Viewrepo = () => {
// data state
const [word, setword] = useState([]);

useEffect(()=>{
    fetch('https://api.github.com/users/moscow138/repos')
    .then((response) => response.json())
    .then((repo) => {
     setword(repo)

    
    
    });
    
},[])

const {repoId} = useParams();
   
    return(
       
        <div>
        
         <Navbar></Navbar>
       <div className="viewrepo">
        {word.map((repo,i) => (
      <Stack divider={<StackDivider />} spacing='' key={i}>
        <Box>
        <Text pt='50' fontSize='sm' color='red'>
          <Link pt='' to={`/repo/${i}`}>{i == repoId ? repo.name : ''}</Link>
        </Text>

      <UnorderedList className="list-item">
      <ListItem className="item">{repo.name}</ListItem>
      
      </UnorderedList>
        
      </Box>
      </Stack>
         ))}
         
            <Link to='/'>Back to all repository</Link>
            </div>
            <Footer></Footer>
        </div>
       
    )
}

export default Viewrepo