import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participation',
  templateUrl: './participation.component.html',
  styleUrls: ['./participation.component.css']
})
export class ParticipationComponent  implements OnInit{
  currentParticipant: any;

  constructor(private ParticipantService: participantService) { }
//me
  ngOnInit(): void {
    this.participantService.getUserBoard().subscribe(
      data => {
        this.currentParticipant = this.ParticipantService.getUser();
      },
      err => {
        this.token.signOut();
        window.location.assign("/home");
      }
    );

  }
}
