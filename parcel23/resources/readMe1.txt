Parcel converts JS assets to ES5, which won't run in in the context of a <script type="module"> tag, 
so just use plain <script> tags with no type attribute in your source HTML.

Parcel has a development server built in
    which will automatically rebuild your app as you change files 
    supports hot module replacement for fast development. 
    
Point it at your entry file:
    parcel index.html
