import { AnimesService } from 'app/shared/animes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {

  animes:any = [];

  constructor(private AnimesService:AnimesService) {
    this.AnimesService.getAnimes().subscribe(
      (res:any) =>{
        console.log(res);
        this.animes = res;
      }
    )
   }

  ngOnInit(): void {
  }

}
