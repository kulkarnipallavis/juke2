import React, {Component} from 'react';
import {Router, Route, browserHistory, Link} from 'react-router';

export default class Artists extends Component{
	render(){
		return(
			<div>
		  <h3>Artists</h3>
		    <div className="list-group">
		    {
		      this.props.artists.map(artist => {
		        return (
		          <div className="list-group-item" key={artist.id}>
		            <Link to="/artist">{ artist.name }</Link>   
		          </div>
		        )    
		      })
		    }
  		</div>
		</div>
		)
	}
	
}