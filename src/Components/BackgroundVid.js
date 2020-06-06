import React from 'react';
import {Link} from 'react-router-dom';

import chick from '../Video/chick01.mp4'


const BackgroundVid = ()=> {
    return(
//     <Player>
// <source src={chick}></source>    
//         </Player>
<div>
<video className="video-container video-container-overlay" autoPlay loop muted data-reactid=".0.1.0.0">
  <source type="video/mp4" data-reactid=".0.1.0.0.0" src={chick} />
</video>

<div id="polina">
  <h1 id="pixie">Pixie Slater</h1>
  <p>“You have to get over the fear of facing the worst in yourself. You should instead fear unexamined racism. Fear the thought that right now, you could be contributing to the oppression of others and you don't know it. But do not fear those who bring that oppression to light. Do not fear the opportunity to do better.”</p>
  <br></br>
  <h3>Pick a <span>Scenerio</span> Below:</h3>
  <button><Link style={{ textDecoration: 'none', color: 'yellow' }} to="/C_Scene_01">Cracker</Link></button>
  <button><Link style={{ textDecoration: 'none' ,color: 'yellow'}} to="/N_Scene_01">Negro</Link></button>
</div>

</div>

    )
}

export default BackgroundVid;