import React, { useEffect, useState } from "react";
import axios from "axios";

function CreatePlaylist() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // Fetch songs data
    axios.get("http://localhost:8080/fetchSongs")
      .then(response => {
        setSongs(response.data);
      })
      .catch(error => console.error('There was an error!', error));
  }, []);

  return (
    <div>
      <h1>Create Playlist</h1>
      <form action="addPlaylist" method="post">
        <label>Playlist name:</label>
        <input type="text" name="name" />
        <br />
        {songs.map((song) => (
          <div key={song.id}>
            <input type="checkbox" name="songs" value={song.id} />
            <label>{song.name}</label>
          </div>
        ))}
        <br />
        <br />
        <input type="submit" value="ADD PLAYLIST" />
      </form>
    </div>
  );
}

export default CreatePlaylist;


// function CreatePlaylist(){
//     return(
//         <div>
//             <h1>Create Playlist</h1>
//             <form action="addPlaylist" method="post">
//                 <label>Playlist name:</label>
//                 <input type="text" name="name"/>
//                 <br/>
//                 <div th:each="song:${songs}">
//                     <input type="checkbox" th:name="songs" th:value="${song.id}"/>
//                     <label th:text="${song.name}"></label>
//                 </div>
//                 <br/>
//                 <br/>
//                 <input type="submit" value="ADD PLAYLIST"/>
// 		</form>
//         </div>
//     )
// }

// export default CreatePlaylist;