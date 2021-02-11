import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-producer-portal',
  templateUrl: './producer-portal.component.html',
  styleUrls: ['./producer-portal.component.css']
})
export class ProducerPortalComponent implements OnInit {

  
  constructor(private router: Router) { }


  ngOnInit(): void {
  }
  showModal():void {
    $("#myModal").modal('show');
  }
  sendModal(): void {
    //do something here
    this.hideModal();
  }
  hideModal():void {

    document.getElementById('close-modal')?.click()
  }

  onRegisterSubmit(){
    document.getElementById('close-modal')?.click()
    this.router.navigate(['/dashboard'])

  }
}
