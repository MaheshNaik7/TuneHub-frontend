import React from "react"
import {Link} from 'react-router-dom'

function Adminhome(){
    return(
        <div>
            <h1>AdminHome</h1>
            <Link to="addSongs">Add a  new Song</Link>
            <br></br><br></br><br></br>
            <Link to="displaySongs">View Song</Link>
            <br></br><br></br><br></br>
            <Link to="createPlaylist">Create Playlist</Link>
            <br></br><br></br><br></br>
            <Link to="viewPlaylists">View Playlists</Link>
        </div>
    )
}

export default Adminhome;