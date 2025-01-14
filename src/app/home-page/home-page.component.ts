import { NgFor, NgIf } from '@angular/common';
import { Block } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [NgFor, NgIf],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent{
  values: any = [false,false,false,false,false,false,false,false,false,false];
  index: any;
  message: any = true;
  score: any;
  HighScore: any = 0;
  start()
  {
    this.values = [false,false,false,false,false,false,false,false,false,false];
    this.message = false;
    this.score = 20;
    this.index = Math.floor(Math.random()*10);
    this.values[this.index] = true;
    let x = document.getElementById('frogImg');
    let y = document.getElementById('frogImg2');
      if(x&&y)
      {
        x.style.display = 'none';
        y.style.display = 'block';
      }
  }

  correct()
  {
      this.message = true;
      let x = document.getElementById('frogImg');
      let y = document.getElementById('frogImg2');
      let z = document.getElementById('Game1');
      if(x&&y&&z)
      {
        x.style.display = 'block';
        y.style.display = 'none';
      }

      if(this.score>0&&z)
      {
        z.textContent = 'You, Win!';
      }

      if(this.HighScore<this.score)
      {
        this.HighScore = this.score;
      }
  }

  wrong()
  {
    if(!this.message)
    {
      this.score = this.score - 2;
    }

    if(this.score==0)
    {
      let z = document.getElementById('Game1');
      if(z)
      {
        z.textContent = 'You, loose!';
        this.correct();
      }
    }
  }

}
