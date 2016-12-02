import React from 'react';
import {Router, Route, browserHistory, Link} from 'react-router';

const Albums = (props) => {

  const albums = props.albums;
  const selectAlbum = props.selectAlbum;

  return (
    <div>
      <h3>Albums</h3>
      <div className="row">
      {
        albums.map(album => (
          <div className="col-xs-4 thumbnail" key={ album.id }>
           
            
              <img src={ album.imageUrl } />
              <div className="caption">
               <h5>
                  <span>
                      <Link to={`/albums/${ album.id }`}>{ album.name }</Link>
                  </span>
                </h5>
                <small>{ album.songs.length } songs</small>
              </div>
            
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default Albums;
