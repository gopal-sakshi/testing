<ng-container *ngTemplateOutlet="companyLogo"></ng-container>
<!-- whereever *ngTemplateOutlet="companyLogo" appears... the whole content gets inserted there -->

<ng-template #companyLogo>
    <div>some p, img, span, HTML contents</div>
</ng-template>

<!-- *************************************************************************************  -->

// app-ng-template-outlet12             is a child component which accepts 3 @Input() properties
<app-ng-template-outlet12 
    [headerTemplate]="header1" 
    [bodyTemplate]="body1" 
    [footerTemplate]="footer1">
</app-ng-template-outlet12>

<ng-container *ngTemplateOutlet="headerTemplate ? headerTemplate : defaultHeader"></ng-container>
<ng-template #defaultHeader>Some default header</ng-template>

<!-- 
    outlet12 ===> takes 3 properties
        headerTemplate, bodyTemplate, footerTemplate
    
    all these 3 properties ====>    typeof "TemplateRef"                    // YES
                                    string, boolean, number                 // NOT    
-->

<!-- *************************************************************************************  -->

<!-- app-ng-content11 is a child component -->
<app-ng-content11>
    <h6>this is h6 element</h6>
    <div>this is div element</div>
    <span>this is span element</span>
    <p>this is a paragraph (p element)</p>
</app-ng-content11>


<!-- Notice this -->

<app-ng-content11  inputProp2="blah" inputProp2="blah2"> </app-ng-content11>        <!-- WRONG -->
<app-ng-content11> inputProp2="blah" inputProp2="blah2" </app-ng-content11>        <!-- RIGHT -->

<ng-content select="h6"></ng-content>
<ng-content select="div"></ng-content
<ng-content select="p"></ng-content>
<ng-content select="span"></ng-content>
<ng-content></ng-content>