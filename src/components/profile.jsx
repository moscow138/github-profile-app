import React,{useState} from "react";
import { Card,CardBody,
   CardFooter,
   Image,
   Stack,
   Button,
   Text,
   Box,
   Input,
   StackDivider,
   CardHeader,
   Heading,
   Table,
   Thead,
   Tbody,
   Tfoot,
   Tr,
   Th,
   Td,
   TableCaption,
   TableContainer

   } from '@chakra-ui/react'
import './Profile.css'


const Profile = () => {

    const [data, setData] = useState({});
    const [username, setUsername] = useState("");
    const [repositories, setRepositories] = useState([]);
    
// 
    const onChangeHandler = (e) => {
        setUsername(e.target.value)
    }
    //
    const submitHandler = async (e) => {
      e.preventDefault();
//
const profile = await fetch(`https://api.github.com/users/${ username ? username : 'moscow138'}`);
const profiletoJson = await profile.json();
console.log(profiletoJson)

const repositories = await fetch(profiletoJson.repos_url);
const repoJson    = await repositories.json();
console.log(repoJson);
if(profiletoJson){
  setData(profiletoJson);
  setRepositories(repoJson)
}
    }

   

  return (
  
        <div className='profile'>
           <Stack direction='row' spacing={4} pb='2'>
        <Input type="text" placeholder='Search other username' size='sm' value={username} onChange={onChangeHandler} htmlSize={18} width='auto' />
        <Button type='submit' onClick={submitHandler} variant='solid' colorScheme='blackAlpha' size='sm'>Get default user</Button>
        </Stack>
           <div className="container">
      
        
  <Card
  className="card"
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={data.avatar_url}
    alt='github avatar'
  />

  <Stack Stack divider={<StackDivider />} spacing='-1' >
    <CardBody>
    
    
  <Stack direction='row' spacing={4}>
  <Button variant='solid' colorScheme='blue' size='xs'>Public Repos: {data.public_repos}</Button>
    <Button variant='solid' colorScheme='red' size='xs'>Public Gists: {data.public_gists}</Button>
  </Stack>
  
  <Stack divider={<StackDivider />} spacing='4'>
        <Box>

        </Box>

      <Box>
      <Text pt='3' fontSize='sm' color='white'>
        Name: {data.name}
        </Text>
  
      </Box>
      <Box pt='0'>
    
        <Text pt='0' fontSize='sm' color='white'>
        Website: {data.blog}
        </Text>
      </Box>
      <Box>
       
        <Text pt='0' fontSize='sm' color='white'>
        Bio: {data.bio}
        </Text>
      </Box>
       <Box>
       
       <Button variant='solid' colorScheme='blackAlpha' size='sm'><a href={data.html_url} target="_black">View github profile</a></Button>
      </Box>
      
    </Stack>

    </CardBody>

    <CardFooter>
      
    </CardFooter>
  </Stack>
</Card>
{/* colum 2 to list repos */}
<div className='col-2'>
<Stack direction='row' spacing={4} pb='2'>
        <Input type="text" placeholder='Search repository' size='sm' htmlSize={18} width='auto' />
        <Button type='submit' variant='solid' colorScheme='blackAlpha' size='sm'>Search</Button>
        </Stack>          
  <Card
  maxW='md'
  className="card"
  >
  <CardHeader>
    <Heading color='white' size='md'>List all user repositories</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='-10'>
      <Box>
        
        <Text pt='2' fontSize='sm'>
          View a summary of all your clients over the last month.
        </Text>
      </Box>
      <Box>
      
        <Text pt='2' fontSize='sm'>
          Check out the overview of your clients.
        </Text>
      </Box>
      <Box>
       
        <Text pt='2' fontSize='sm'>
          See a detailed analysis of all your business clients.
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
                    
                   
                 
                </div>

      </div>
      </div>

      
        
  );
};

export default Profile;