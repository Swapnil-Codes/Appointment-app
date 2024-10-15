import { Component } from '@angular/core';
import { Appointment } from '../model/appointment';
import {OnInit} from "@angular/core";
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
appointments:Appointment[];
newAppointmentDate:Date=new Date();
description:string="";

constructor(){
  this.appointments=[];
}

ngOnInit(): void {
  let savedAppointments = localStorage.getItem("appointments")
  this.appointments = savedAppointments ? JSON.parse(savedAppointments) : []
}

addAppointment(){
  const appointment:Appointment={
    id: new Date().getMilliseconds(),
    title: this.description,
    date: this.newAppointmentDate
  }
  this.appointments.push(appointment);
  localStorage.setItem("appointments",JSON.stringify(this.appointments));
  this.description='';
  this.newAppointmentDate=new Date();
  }

  removeAppointment(index:number){
    this.appointments.splice(index,1);
    localStorage.setItem("appointments",JSON.stringify(this.appointments));
  }
}


