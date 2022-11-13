import { Component, OnInit } from '@angular/core';
import { AnimesService } from 'app/shared/animes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  animes:any = [];


  constructor(private animesService:AnimesService) {
    this.animesService.getAnimes().subscribe(
      (res:any) =>{
        console.log(res);
        this.animes = res;
      }
    )

   }

   ngOnInit(): void {
  }

}
