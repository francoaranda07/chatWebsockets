import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { ApiService } from '../service/api.service';
import { SocketService } from '../service/socket.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  messages : string[] = [];
  constructor(private socket:SocketService) { 
    this.onReceiveMessage()//para que cuando esto se inicialice el socket quede escuchando
  }
  ngOnInit(): void {

  }

  onReceiveMessage(){
    this.socket.io.on("client-newMessage", (data) =>{
      this.messages.push(data)
    })
  }
}
