import React, {useState} from "react";
import axios from 'axios';
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

const ImagePost = () => {
  const [file, setFile] = useState<File | null>(null);
  const [caption, setCaption] = useState("")
  const currentUser = useSelector(selectCurrentUser);
  console.log('here it is', currentUser);
  const submit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (file) {
      const data = {
        image: file,
        caption: caption,
        userId: currentUser.id
      };
      await axios.post("/images/upload", data, { headers: {'Content-Type': 'multipart/form-data'}})
    }
  }

  return (
    <form onSubmit={(e) => {submit(e)}}>
       <input onChange={e => setFile(e.target.files![0])} type="file" accept="image/*"></input>
       <input value={caption} onChange={(event) => setCaption(event.target.value)} type="text" placeholder='Caption'></input>
       <button type="submit">Submit</button>
     </form>
  )
};

export default ImagePost;