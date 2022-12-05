import { Injectable } from "@angular/core"
import { io } from 'socket.io-client'
// import { environment } from "src/environments/environment"

@Injectable({
    providedIn: 'root'
})

export class SocketService {
    io = io("http://localhost:3000/", {
        withCredentials: true,
        autoConnect: true
    })
    constructor(){
        
    }
}