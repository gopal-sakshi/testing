import { Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-embed-view11',
  templateUrl: './embed-view11.component.html',
  // template: `
  //   <div class= "header"> I am a header </div>
  //   <div class= "body">
  //     <ng-container #containerGopal> </ng-container>
  //   </div>
  // <div class= "footer"> I am a footer</div>
  //   <ng-template #templateGopal let-viewName="name">
  //     <div>Hi, My name is {{ viewName }}.I am a view created from a template</div>
  //   </ng-template>`,
  styleUrls: ['./embed-view11.component.scss']
})
export class EmbedView11Component implements OnInit {


  @ViewChild("elementRef0", { read: ElementRef }) elementRef0: ElementRef<any>;

  // we created an embedded_view using TemplateRef... then supplied that embedded_view to ViewContainer
  @ViewChild("template1", { read: TemplateRef }) template1: TemplateRef<any>;
  @ViewChild("container1", { read: ViewContainerRef }) container1: ViewContainerRef;

  // we used createEmbeddedView method of ViewContainer itself...
  @ViewChild("template2", { read: TemplateRef }) template2: TemplateRef<any>;
  @ViewChild("container2", { read: ViewContainerRef }) container2: ViewContainerRef;
  //@ViewChild("footerDiv") footerDiv:ElementRef;

  
  constructor() { }

  ngOnInit(): void {
    window.localStorage.setItem("name","yeshwant");
  }

  ngAfterViewInit() {


    this.elementRef0.nativeElement.textContent = "hello doctor"


    // creating an embedded view... lets call this "View 1"
    const viewRef = this.template1.createEmbeddedView({
      name11: "View1",
      createdBy11: "GopAL"
    });
    // This view is still not visible in the UI. In order to see it in the UI, we need a placeholder to render it.
    this.container1.insert(viewRef);      
    this.container2.createEmbeddedView(this.template2, {name12:"View2", createdBy12:"Sakshi"})
    // APPROACH 1 = call "createEmbeddedView() on templateRef" And then "insert() on container ref"
    // APPROACH 2 = call createEmbeddedView() directly on container ref

  }

  ngAfterContentInit(): void {}

}
