import React, { Component } from 'react';
import {Router, Route, browserHistory, Link} from 'react-router';
import Albums from './Albums';
import Songs from './Songs';

export default class Artist extends Component {

	componentDidMount () {
	    const artistId = this.props.routeParams.artistId;
	    const selectArtist = this.props.selectArtist;
	    selectArtist(artistId);
  	}


	render(){

		const name = this.props.artistInfo ? this.props.artistInfo.selectedArtist.name: "";
		const albums = this.props.artistInfo.artistAlbums;
		const songs = this.props.artistInfo.artistSongs;
		console.log(songs)
		return(
			<div>
				<h3>{name}</h3>
				<Albums albums = {albums} />
				<Songs 
				songs ={songs}
				currentSong = {this.props.currentSong}
				isPlaying = {this.props.isPlaying}
				toggle = {this.props.toggleOne}
				 />				
			</div>
			)
	}
}

