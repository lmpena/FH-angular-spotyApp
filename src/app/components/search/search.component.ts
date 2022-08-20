import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artistas:any[]=[];
  loading:boolean;

  constructor(private _spotify:SpotifyService) { 
    this.loading=false;
  }

  buscar(termino:string) {
    this.loading=true;
    this._spotify.getArtistas(termino)
      .subscribe((data:any)=> {
        // console.log(data.artists.items);
        this.artistas=data;
      });
      setTimeout(()=>{ this.loading=false;},100);
  }
}
