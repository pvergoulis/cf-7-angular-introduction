import { Component, inject, OnInit } from '@angular/core';
import { JokesService } from 'src/app/shared/services/jokes.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-http-client-example',
  imports: [ MatButtonModule, MatCardModule],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css'
})
export class HttpClientExampleComponent implements OnInit {
  jokesService = inject(JokesService)
  
   dadJoke: string = ''
   chuckNorrisJoke: string = ''

  ngOnInit():void{
    // this.jokesService.getDadJokes().subscribe((data)=>{
    //   console.log("Dad joke ", data)
    //   console.log('dad joke, ',data.joke)
    // })

    // this.jokesService.getChuckNorisJokes().subscribe((data)=>{
    //   console.log('chuck jokes ', data)
    //   console.log('chuck value ', data.value)
    // })
    this.refreshChuckNorrisJoke()
    this.refreshDadJoke()
  }

  refreshDadJoke(){
    this.jokesService.getDadJokes().subscribe((data)=>{
      console.log('New data joke', data.joke)
      this.dadJoke = data.joke
    })
  }

  refreshChuckNorrisJoke(){
    this.jokesService.getChuckNorisJokes().subscribe((data)=>{
      console.log('new Chuck Norris joke ', data.value)
      this.chuckNorrisJoke = data.value
    })
  }

}
