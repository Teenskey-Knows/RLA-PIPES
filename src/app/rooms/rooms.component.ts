import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {

  roomList : RoomList[] = 

[
  {
    roomNumber:1,
    roomType: "Delux Room",
    amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom,Kitchen",
    price: 500,
    photos: 'https://www.istockphoto.com/photo/confident-young-woman-arriving-in-hotel-reception-gm1352189114-427686847?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_photo_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fphotos%2Fsearch%2Fafrica%2520hotels%2F&utm_term=africa+hotels',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Jan-2021')
  },
  {
    roomNumber:2,
    roomType: "Delux Room Two",
    amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom,Kitchen",
    price: 1500,
    photos: 'https://www.istockphoto.com/photo/confident-young-woman-arriving-in-hotel-reception-gm1352189114-427686847?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_photo_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fphotos%2Fsearch%2Fafrica%2520hotels%2F&utm_term=africa+hotels',
    checkinTime: new Date('11-Jan-2024'),
    checkoutTime: new Date('12-June-2024')
  },
  {
    roomNumber:3,
    roomType: "Delux Room Three",
    amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom,Kitchen",
    price: 2500,
    photos: 'https://www.istockphoto.com/photo/confident-young-woman-arriving-in-hotel-reception-gm1352189114-427686847?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_photo_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fphotos%2Fsearch%2Fafrica%2520hotels%2F&utm_term=africa+hotels',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Jan-2021')
  },
  {
    roomNumber:4,
    roomType: "Delux Room Four",
    amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom,Kitchen",
    price: 3500,
    photos: 'https://www.istockphoto.com/photo/confident-young-woman-arriving-in-hotel-reception-gm1352189114-427686847?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_photo_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fphotos%2Fsearch%2Fafrica%2520hotels%2F&utm_term=africa+hotels',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Jan-2021')
  },
  {
    roomNumber:5,
    roomType: "Delux Room Five",
    amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom,Kitchen",
    price: 500,
    photos: 'https://www.istockphoto.com/photo/confident-young-woman-arriving-in-hotel-reception-gm1352189114-427686847?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_photo_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fphotos%2Fsearch%2Fafrica%2520hotels%2F&utm_term=africa+hotels',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Jan-2021')
  }
]


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
