why XSS attacks didnt work in Angular

Contextual Escaping
- binding user input to the view is called "interpolation"
- Angular won't interpret the input as HTML and will display the entire input as plain text on your webpage.

Input Sanitization
- Angular automatically recognizes the <script> tag as unsafe and removed it

Trusting and Bypassing
- use DomSanitizer 
- use the byPassSecurityTrust..() functions 
- to tell Angular that you trust the input value


<!-- https://www.stackhawk.com/blog/angular-xss-guide-examples-and-prevention/ -->