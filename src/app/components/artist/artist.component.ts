import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from 'Artist';

import { ActivatedRoute } from '@angular/router';
// import { Album } from 'Album';




@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Artist;
  albums: any;
  constructor(private spotifyService: SpotifyService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    // console.log();

    this.activatedRoute.params.subscribe((data) => {
      this.spotifyService.getArtist(data.id).subscribe((artist)=>{
        this.artist = artist;
        console.log(this.artist);
      })

      this.spotifyService.getAlbums(data.id).subscribe((albums)=>{
        this.albums = albums;
        console.log(this.albums);
      })
    })

  }

}
