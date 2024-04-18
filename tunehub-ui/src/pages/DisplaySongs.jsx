import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Displaysongs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // Fetch songs data
    axios.get('http://localhost:8080/fetchSongs')
      .then(response => {
        setSongs(response.data);
      })
      .catch(error => console.error('There was an error!', error));
  }, []);

  return (
    <div>
      <h1>Songs</h1>
      <table border>
        <thead>
          <tr>
            <th>Name</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Play</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr key={index}>
              <td>{song.name}</td>
              <td>{song.artist}</td>
              <td>{song.genre}</td>
              <td>
                <audio controls>
                  <source src={song.link} type="audio/mpeg" />
                </audio>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Displaysongs;


// function Displaysongs(){
//     return(
//         <div>
//             <h1>Songs</h1>
//             <table border>
// 			<thead>
// 				<tr>
// 					<th>Name</th>
// 					<th>Artist</th>
// 					<th>Genre</th>
// 					<th>Play</th>
// 				</tr>
// 			</thead>
// 			<tbody>
// 				<tr th:each="song:${songs}">
// 					<td th:text="${song.name}"></td>
// 					<td th:text="${song.artist}"></td>
// 					<td th:text="${song.genre}"></td>
// 					<td>
// 						<audio controls>
//         					<source th:src="${song.link}" type="audio/mpeg"/>
//     					</audio>
// 					</td>
// 				</tr>
// 			</tbody>
// 		</table>
//         </div>
//     )
// }

// export default Displaysongs;