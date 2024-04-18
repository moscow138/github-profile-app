import React,{useState} from "react";




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
const profile = await fetch(`https://api.github.com/users/${username}`);
const profiletoJson = await profile.json();
// console.log(profiletoJson)

const repositories = await fetch(profiletoJson.repos_url);
const repoJson    = await repositories.json();
// console.log(repoJason);
if(profiletoJson){
  setData(profiletoJson);
  setRepositories(repoJson)
}
    }

  return (
  
        <div>
        <input type="text" value={username} onChange={onChangeHandler} />
        <button type="submit" onClick={submitHandler}>Search</button>

        <ul>
          <li>{data.login}</li>
        </ul>

        </div>
  );
};

export default Profile;