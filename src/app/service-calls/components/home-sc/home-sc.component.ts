import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { SimpleExpressService } from '../../services/simple-express.service';

@Component({
  selector: 'app-home-sc',
  templateUrl: './home-sc.component.html',
  styleUrls: ['./home-sc.component.scss']
})
export class HomeScComponent implements OnInit {

  
  showVideo11:boolean = false;
  showSimpleExpress:boolean = false;
  showSoap14:boolean = false;
  showUploadFile:boolean = false;
  showAxiosFetch:boolean = false;
  localServerUrl:string = 'http://localhost:9000'
  showXssAttacks12:boolean = false;
  
  constructor(
    private simpleExpressService:SimpleExpressService,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
  }

  showStaticResource() {
    this.simpleExpressService.openImage();
  }

  uploadFile23() {
    var payload = {};
    var blah22 = <HTMLInputElement>document.getElementById('inputFile23');
    console.log(blah22.files);
    
    // const reader = new FileReader();
    // reader.readAsDataURL(blah22.files[0]);
    // reader.addEventListener('loadend', () => {      
    //   console.log(reader.result);
    //   var blob23 = new Blob([reader.result]);
    // })

    this.simpleExpressService.uploadFile23(blah22.files[0]).subscribe(res => {
      console.log(res);
      if(res && res.code == 200) {
        Swal.fire({
          html: `file uploaded successfully`
        })
      }
    })
  }

  fetchLocalServerData() {
    var coursesUrl = this.localServerUrl + '/api/courses'
    this.http.get(coursesUrl).subscribe(res => { console.log(res) });    
  }

}
