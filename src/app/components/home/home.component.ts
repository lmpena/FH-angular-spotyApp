import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevasCanciones : any [] = [];
  loading:boolean;
  error:boolean;
  mensajeError:string;

  constructor( private _spotify:SpotifyService) {
    this.mensajeError='';
    this.error=false;
    this.loading=true;
    this._spotify.getNewReleases()
      .subscribe((data:any) => {
          // console.log(data.albums.items)
          this.nuevasCanciones = data.albums.items;
    }, (errorServicio) =>{
      this.error=true;
      this.loading=false;
      this.mensajeError=errorServicio.error.error.message;
      console.log(errorServicio);
      console.log(this.mensajeError);
    } );

    setTimeout(()=>{ this.loading=false;},500);
  }

  ngOnInit(): void {
  }

}
