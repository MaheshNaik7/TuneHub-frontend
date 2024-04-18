import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DisplayPlaylist() {
  const [allPlaylists, setAllPlaylists] = useState([]);

  useEffect(() => {
    // Fetch all playlists data
    axios.get('http://localhost:8080/fetchAllPlaylists')
      .then(response => {
        setAllPlaylists(response.data);
      })
      .catch(error => console.error('There was an error!', error));
  }, []);

  return (
    <div>
      <h1>Playlist</h1>
      <table border>
        <thead>
          <tr>
            <th>Name</th>
            <th>Songs</th>
          </tr>
        </thead>
        <tbody>
          {allPlaylists.map((playlist, index) => (
            <tr key={index}>
              <td>{playlist.name}</td>
              <td>
                <ul>
                  {playlist.songs.map((song, index) => (
                    <li key={index}>
                      <span>{song.name}</span>
                      <audio controls>
                        <source src={song.link} type="audio/mpeg" />
                      </audio>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayPlaylist;


// function Displayplaylist(){
//     return(
//         <div>
//             <h1>Playlist</h1>
//             <table border>
// 			<thead>
// 				<tr>
// 					<th>Name</th>
// 					<th>Songs</th>
// 				</tr>
// 			</thead>
// 			<tbody>
// 				<tr th:each="Playlist:${allPlaylists}">
// 					<td th:text="${Playlist.name}"></td>
// 					<td>
// 						<ul>
// 							<li th:each="song:${Playlist.songs}">
// 							    <span th:text="${song.name}"></span>	
// 							    <audio controls>
//         							<source th:src="${song.link}" type="audio/mpeg"/>
//     							</audio>
// 							</li>
// 						</ul>
// 					</td>
// 				</tr>
// 			</tbody>
// 		</table>
//         </div>
//     )
// }

// export default Displayplaylist;