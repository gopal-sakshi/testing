import { Component, OnInit } from '@angular/core';
// import * as DynamoDB from "aws-sdk/clients/dynamodb";

@Component({
  selector: 'app69-aws-stuff1',
  templateUrl: './aws-stuff1.component.html',
  styleUrls: ['./aws-stuff1.component.scss']
})
export class AwsStuff1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // DynamoDB.DocumentClient.
    // moved to cognito23 module...
  }

}
