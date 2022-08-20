import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent implements OnInit {

  @Input() items: any[]=[];
  
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  verArtista(item:any):any {
    
    let artistaId:string='';

    // console.log('item.type',item.type)
    // console.log('item',item)
    if(item.type==='artist') {
      artistaId=item.id;
    } else if(item.type==='album') {
      artistaId=item.artists[0].id;
    }

    console.log('artistaId',artistaId)

    this._router.navigate(['/artist',artistaId])
  }
}
