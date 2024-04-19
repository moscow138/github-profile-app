import React,{useState} from "react";
import { Card,CardBody, CardFooter,Image,Stack,Button,Text,Box,Input,StackDivider } from '@chakra-ui/react'
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
  
        <div>
         <Stack direction='row' spacing={4} pb='2'>
        <Input type="text" placeholder='Search other username' size='sm' value={username} onChange={onChangeHandler} htmlSize={18} width='auto' />
        <Button type='submit' onClick={submitHandler} variant='solid' colorScheme='blackAlpha' size='sm'>Get default user</Button>
        </Stack>
        
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

  <Stack >
    <CardBody>
    
    
  <Stack direction='row' spacing={4}>
  <Button variant='solid' colorScheme='blue' size='xs'>Public Repos: {data.public_repos}</Button>
    <Button variant='solid' colorScheme='red' size='xs'>Public Gists: {data.public_gists}</Button>
  </Stack>
  
  <Stack divider={<StackDivider />} spacing='4'>
      <Box>
       
  
      </Box>
      <Box pt='0'>
    
        <Text pt='0' fontSize='sm'>
        Bio: {data.blog}
        </Text>
      </Box>
      <Box>
       
        <Text pt='0' fontSize='sm'>
        Email: {data.bio}
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
       

      </div>
        
  );
};

export default Profile;