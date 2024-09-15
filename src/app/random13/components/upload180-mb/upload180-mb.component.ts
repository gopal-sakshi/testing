import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
// this wont work... file is too big JS heap out of memory... so you cant import... instead... use httpClient.get(fileUrl);
// import BigJson from "../../resources/sunnith2.json";
// import BigJson from "../../resources/sunnith1.json";

@Component({
    selector: 'app69-upload180-mb',
    templateUrl: './upload180-mb.component.html',
    styleUrls: ['./upload180-mb.component.scss']
})
export class Upload180MbComponent implements OnInit {

    reader23: FileReader;
    constructor(
        private localStorage: LocalStorage,
        private httpClient: HttpClient
    ) { }

    ngOnInit(): void {
    }

    upload180Mb1() {
        this.reader23 = new FileReader();
        // this.reader23.readAsText('../../resources/sunnith1.json')
        // this.localStorage.setItem('bigJson', BigJson).subscribe(res => {
        //   console.log(res);
        // })
    }

    upload180Mb2() {
        // here assets/resources/sunnith2.json --------> very big Json with 180Mb
        // obviously, we wont push into github... instead, we will use small Json
        // if you want, download big json and replace it in assets/resources/ folder
        this.httpClient.get('assets/resources/sunnith2.json').subscribe(res => {
            console.log((res as any).features[2]);
            console.log((res as any).features.length)
            this.localStorage.setItem('bigJson', res).subscribe(res => {
                console.log(res);
            })
        })
    }

    parseJson() {
        this.localStorage.getItem('bigJson').subscribe(res => {
            console.log((res as any).features[2]);
        })
    }

}