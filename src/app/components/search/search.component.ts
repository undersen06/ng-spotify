import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from 'Artist';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search:string
  searchRes:Artist[];
  constructor(private _SpotifyService: SpotifyService) { }

  ngOnInit() {
    // this._SpotifyService.searchMusic('rihanna').subscribe((_data) => {
    //   console.log(_data);
    // }, (_error) => {

    // })
  }

  searchMusic() {

    this._SpotifyService.searchMusic(this.search).subscribe((_data:any) => {
      console.log(_data.artists.items);
      this.searchRes =_data.artists.items
    }, (_error) => {

    })


  }

}
