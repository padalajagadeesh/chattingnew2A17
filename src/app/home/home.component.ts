import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[HttpClientModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private api:HttpClient){

  }
  value=true;
  data =[{name:'jaggu',city:'hyd'},
  {name:'tharun',city:'hyd'},
  {name:'vijay',city:'hyd',role:'developer'}]
  ngOnInit(){
    console.log('rrrr')
    if(this.value){
      console.log('hwllo')
    } else {
      console.log('22222')
    }
    // ('https://jsonplaceholder.typicode.com/todos/1')
    this.api.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((val:any)=>{
      console.log(val,'909')
    })
  }

}