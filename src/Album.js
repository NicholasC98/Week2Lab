import React, { useState } from 'react';
import albums from "./data.js";

export default function Album() {
    let styles = {borderRadius: "100px"};

    const [ album, setAlbum ] = useState(albums[0])
    
    return (
        <div className="App">
            <header className="App-header">
                <div className="Display">
                    <div className="display-image">
                        <img src={album.coverImg} alt={album.name} height="300px" width="300px" />
                    </div>
                    <div className="display-tracks">
                        <ol>
                            {album.tracks.map((track) => (
                                <li> {track} </li>
                            ))}
                        </ol>
                    </div>
                </div>
            <h1>Select An Album:</h1>
            {albums.map((alb, index) => (
                <div id="album">
                    <img style={styles} src={alb.coverImg} alt={alb.name} height="40px" onClick={() => setAlbum(albums[index]) }/>
                    <span>{alb.name}</span>
                </div>
            ))}                
            </header>
        </div>
    )
}
