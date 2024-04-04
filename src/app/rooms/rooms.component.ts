import { Component } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {

  hotelName: string = "Hotel Kamau";
  numberOfRooms:number = 10;

  hideRooms:boolean = false;

  rooms: Room = {
    totalRooms:0,
    availableRooms:10,
    bookedRooms: 5
  }

  toggle():boolean{

    return this.hideRooms = !this.hideRooms;
  }
  

}
