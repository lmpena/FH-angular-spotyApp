import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor( private _http:HttpClient) { }

  getQuery ( query:string) {
    const url=`https://api.spotify.com/v1/${ query  }`;
    const headers = new HttpHeaders ( {
      'Authorization': 'Bearer BQAPLfWhvMeatiHaJDXBg76m4Of78u9wCx279W2vC5JnppWDt9eXqRn1zyLOHAkai8xfv8D1j3G_HoHlbZeMWzsIKNufEIRs8Ru1k3vRk-TkV95aqgg'
    });

    return this._http.get(url, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map ( data => {
        // console.log(data.albums.items) - No funciona
        console.log(data)
        // return data.albums.items;
        return data;
      }))
  }


  getArtistas(termino:string) {
    return this.getQuery(`search?query=${ termino }&type=artist&locale=es-ES%2Ces%3Bq%3D0.9%2Cen%3Bq%3D0.8&offset=0&limit=15`)
            .pipe(map( (data:any) => data.artists.items ));
  }

  getArtista(id:string) {
    return this.getQuery(`artists/${ id }`);
            // .pipe(map( (data:any) => data['artists'].items ));
  }

  getTopTracks(id:string) {
    return this.getQuery(`artists/${ id }/top-tracks?market=US`)
              .pipe(map( (data:any) => data['tracks'] ));
  }
}
