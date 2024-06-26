import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Card,CardBody,
   Image,
   Stack,
   Button,
   Text,
   Box,
   Input,
   StackDivider,
   CardHeader,
   Heading,
   CardFooter,
  
   } from '@chakra-ui/react'
import './Profile.css'

   const Profile = () => {

    const [data, setData] = useState({});
    const [username, setUsername] = useState("");
    const [repositories, setRepositories] = useState([]);
    
// set username to input value by calling this functionn
    const onChangeHandler = (e) => {
        setUsername(e.target.value)
    }
    //preventing the default form from submitting
    const submitHandler = async (e) => {
      e.preventDefault();
//fectch data from Api
const profile = await fetch(`https://api.github.com/users/${ username ? username : 'moscow138'}`);
const profiletoJson = await profile.json();
// console.log(profiletoJson)

const repositories = await fetch(profiletoJson.repos_url);
const repoJson    = await repositories.json();
// console.log(repoJson);
if(profiletoJson){
  setData(profiletoJson);
  setRepositories(repoJson)
}
    }
// set pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;
    const lastIndex   = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = repositories.slice(firstIndex, lastIndex);
    const npages = Math.ceil(repositories.length / recordsPerPage);
    const numbers = [...Array(npages + 1).keys()].slice(1);
    // console.log(numbers);
    //set search state.
    const [search, setSearch] = useState('');
    console.log(search);

  return (
  
        <div className='profile'>
        <Stack direction='row' spacing={4} pb='2'>
        <Input type="text" placeholder='Search other username' size='sm' value={username} onChange={onChangeHandler} htmlSize={18} width='auto' />
        <Button type='submit' onClick={submitHandler} variant='solid' colorScheme='blackAlpha' size='sm'>Get default Repo</Button>
        </Stack>
        <div className="container">
      
        
  <Card
  className="card"
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  
>
  
  { !data.avatar_url ? ' ' : (
    <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '250px' }}
    src={data.avatar_url}
    alt='github avatar'
    />
  )}
    
  <Stack Stack divider={<StackDivider />} spacing='1' >
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

  </Stack>
  <CardFooter>
    
  </CardFooter>
</Card>
{/* colum 2 to list repos */}
<div className='col-2'>
<Stack direction='row' spacing={4} pb='2'>
        <Input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Search repository' size='sm' htmlSize={18} width='auto' />
        <Button type='submit' variant='solid' colorScheme='blackAlpha' size='sm'>Search</Button>
        </Stack>          
  <Card
  maxW='sm'
  className="card"
  >
  <CardHeader>
    <Heading color='white' size='sm' textDecoration='underline'>Repositories</Heading>
  </CardHeader>

  <CardBody>
  
    {records.filter((item) => {
      return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search);
    }).map((repo,i) => (
      <Stack divider={<StackDivider />} spacing='' key={i}>
        <Box>
        <Text pt='2' fontSize='sm' color='white'>
          <Link to={`/repo/${i}`}>{repo.name}</Link>
        </Text>
      </Box>
      </Stack>     
      
    ))}
    
    <div className="center">
   <div className="pagination">
   <a href="#" onClick={prepage}>&laquo;</a>
   
   
    {numbers.map((n, i) => (
     
      <span className={`link ${currentPage === n ? 'active' : '' }`} key={i}>
      <a href="#" onClick={()=> changeCPage(n)} >{n}</a>      
      </span>
   
    ))}
  
   <a href="#" onClick={nextPage}>&raquo;</a>

   </div>
   </div>
  </CardBody>


</Card>
                               
       </div>
      </div>
      </div>    
  );
//previous unction
  function prepage(){
    if(currentPage !== 1){
      setCurrentPage(currentPage - 1)
    }

  }
//current page function...
  function changeCPage(id){
    setCurrentPage(id)

  }
  //page pageunction...
  function nextPage(){
    if(currentPage != npages){
      setCurrentPage(currentPage + 1)
    }

  }
  
};


export default Profile;