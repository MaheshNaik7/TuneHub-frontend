import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';


function CustomerHome() {
  const [isPremium, setIsPremium] = useState(false);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // Fetch premium status
    // For demonstration purposes, setting isPremium to true
    setIsPremium(true);

    // Fetch songs data
    axios.get('http://localhost:8080/fetchSongs')
      .then(response => {
        setSongs(response.data);
      })
      .catch(error => console.error('There was an error!', error));
  }, []);

  return (
    <div>
      <h1>Customer Home</h1>
      {!isPremium ? (
        <div className="non-premium">
          <Link to="/pay">Get premium</Link>
          <br />
          <Link to="/logout">LOGOUT</Link>
        </div>
      ) : (
        <div className="premium">
          <h2>Premium Content</h2>
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
      )}
      <Link to="/explore Songs">Explore Songs</Link>
    </div>
  );
}

export default CustomerHome;

	
//     return(
//         <div>
//             <h1>Customer Home</h1>
// 	<div th:unless="${isPremium}" class="non-premium">
//                 <a href="pay">Get premium</a>
//                 <br/>
//                 <a href="logout">LOGOUT</a>
//             </div>
		
// 		<div th:if="${isPremium}" class="premium">
// 			<table border>
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
// 		</div>
// 		<Link to="/explore Songs">Explore Songs</Link>
//         </div>
//     )
// }

//export default CustomerHome;