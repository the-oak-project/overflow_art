import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artwork-details',
  templateUrl: './artwork-details.component.html',
  styleUrls: ['./artwork-details.component.css']
})
export class ArtworkDetailsComponent implements OnInit {

  constructor() { }

  // public s3Url: string = 'https://overflow-art.s3.us-east-2.amazonaws.com/static/heart/';
  public message: string | undefined;

  private showError(error: any): void {
    this.message = error.message;
  }

  ngOnInit(): void {
  }

}
