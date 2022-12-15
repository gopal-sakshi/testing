import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app69-xss-attacks12',
  templateUrl: './xss-attacks12.component.html',
  styleUrls: ['./xss-attacks12.component.scss']
})
export class XssAttacks12Component implements OnInit {

  // sanitizer == your requirement/logic/code is such that, you should allow html to execute scripts
    // (or) your html snippet must execute the script contained within
    // only then, use sanitizer to bypass securityTrust
  constructor(private sanitizer: DomSanitizer) { }

  @ViewChild('scriptPlacedHere2') divElement: ElementRef;
  ngOnInit(): void {    
  }

  domXss() {

    // try entering this as inputScript = <script>alert("pappa ayyavu ga")</script>
      // <div>input23</div>                                             // ideal Behaviour
      // <div>        
            // </div><span style="color:red">baduuu</span><div>           // imagine input23 as this
      // </div>       

    var inputScript = (<HTMLInputElement>document.getElementById('badScript')).value;
    console.log(inputScript);
    this.sanitizer.bypassSecurityTrustScript(inputScript);
    this.sanitizer.bypassSecurityTrustHtml(inputScript);
    
    // APPROACH I ===> didnt work, even with sanitizers, bypass & stuff
    document.getElementById('scriptPlacedHere1').innerHTML = inputScript;

    // APPROACH II ==> didnt work
    var badScriptElement = document.createElement('p');
    badScriptElement.textContent = inputScript;
    document.body.appendChild(badScriptElement);
    
    // using native APIs
    this.divElement.nativeElement.innerHTML = inputScript;
  }

}
