import { subscribeOn } from 'rxjs';
import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  artista:any={};
  topTracks:any[]=[];
  loading:boolean;


  constructor(private _activatedRoute:ActivatedRoute,
              private _spotify:SpotifyService) { 

    this.loading=true;
    this._activatedRoute.params.subscribe( params => {
      // console.log(params['id']);
      this.getArtista( params['id']);
      this.getTopTracks( params['id']);
    });
    setTimeout(() => { this.loading=false; }, 500);
    
  }

  getArtista(id:string) {

    this.loading=true;

    this._spotify.getArtista(id)
      .subscribe(artista => {
        console.log(artista);
        this.artista=artista;
        setTimeout(() => { this.loading=false; }, 500);
      });
  }

  getTopTracks(id:string) {
    this.loading=true;
    this._spotify.getTopTracks(id)
          .subscribe( topTracks=> {
            console.log(topTracks);
            this.topTracks=topTracks;
            setTimeout(() => { this.loading=false; }, 500);
    });
  }
}
