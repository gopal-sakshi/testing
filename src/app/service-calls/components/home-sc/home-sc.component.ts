import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { SimpleExpressService } from '../../services/simple-express.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home-sc',
    templateUrl: './home-sc.component.html',
    styleUrls: ['./home-sc.component.scss']
})
export class HomeScComponent implements OnInit {


    showVideo11: boolean = false;
    showSimpleExpress: boolean = false;
    showSoap14: boolean = false;
    showUploadFile: boolean = false;
    showAxiosFetch: boolean = false;
    localServerUrl: string = 'http://localhost:9000'
    showXssAttacks12: boolean = false;
    eventSource:any;
    text23:string = '';

    constructor(
        private simpleExpressService: SimpleExpressService,
        private http: HttpClient,
        private _zone:NgZone) { }

    ngOnInit(): void {

    }

    doSSE() {
        // ------ DOESNTTTTTTTTTTT WORKKKKKKK   normal observable/subscribe DOESNT WORK for server sent events
        // this.http.get('http://localhost:3044/misc22/server-sent-events24').subscribe(res => {
        //     console.log("res ===> ", res)
        // });

        // ----------- WORKSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
        this.eventSource = new EventSource('http://localhost:3044/misc22/server-sent-events24');
        new Observable(observer => {
            this.eventSource.onmessage = event => {
                this._zone.run(() => {
                    observer.next(JSON.parse(event.data));
                });
            };

            this.eventSource.onerror = event => {
                console.log("res.end() on server is interpreted as error; dont let browser retry & call .close()")
                observer.complete();
            }
        }).subscribe(
            (res:any) => {
                console.log("res ===> ", res, typeof res);
                this.text23 = this.text23 + res.time23;
            },
            (err:any) => { },
            /* complete emitted... so manually close the eventSource */ 
            () => { this.eventSource.close(); this.eventSource = null; }
        );

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
            if (res && res.code == 200) {
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

    ngOnDestroy() {        
        if (!this.eventSource) {
            return;
        }
        this.eventSource.close();
        this.eventSource = null;
    }

}
