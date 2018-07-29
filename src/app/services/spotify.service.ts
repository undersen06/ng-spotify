import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';
import { Artist } from 'Artist';




 HttpHeaders


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private searchUrl: string = 'https://api.spotify.com/v1/'
  private artistURL:string;
  private headers: HttpHeaders;
  


  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.headers = new HttpHeaders().set('Authorization', 'Bearer BQCPRVkcTyNvDbwCZb2E7urB4Z8fvY-1lf3KrFc_9dgoRlMExxxjPIRnes0HH4XTtjhRGR9QnpLhCPjz-2qWgNRywHPbeIOXznsgKp5kfh32OIAafvqSkHoFePLB1g63aXEU3Cu3D9fqTvQs');
  }


  searchMusic(_data: string, type = 'artist') {

    let params: any = {};
    params.query = _data;
    params.offset = 0;
    params.limit = '20';
    params.type = type;

    return this.http.get(`${this.searchUrl}search`, { params, headers:this.headers });

  }

  getArtist(id:string) {
    return this.http.get<Artist>(`${this.searchUrl}artists/${id}`, { headers:this.headers });
  }

  getAlbums(id:string) {
    return this.http.get(`${this.searchUrl}artists/${id}/albums`, { headers:this.headers });
  }
}
