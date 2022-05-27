# decorator 
- an expression that evaluates to a function
- this function takes 3 arguments
    target
    name
    descriptor
- The core functionality of most angular decorators is to attach metadata to a class. 
- This metadata is then used by the compiler to construct various factories.


# Decorator
- nothing but a JS function
- `A method decorator` will be called before the method it’s decorating
- `A class decorator` will be called before the class to be decorated.
    Example: 
      @HostListener('window: scroll', [])       -----------> `method decorator`
      onWindowScroll() {...}

      @Input appName:any                      -------------> `property decorator`

      @Component({... })
      export class Lifecycle12Component {...}   ----------> `class decorator`


# 4 main types of decorators
- class decorators          = @Component, @NgModule
- property decorators       = @Input, @Output
- method decorators         = @HostListener
- parameter decorator       = @Inject


# PROPERTY DECORATORS
- decorate specific properties within our classes

# METHOD DECORATORS
- that declares a DOM event to listen for, and provides a handler method to run when that event occurs.
- similar to property decorators but are used for methods instead.

    @HostListener('window: scroll', [])
    onWindowScroll() {
        this.showBackToTopBtn = window.pageYOffset > 500 ? true : false;
    }
    // when window scroll happens, showBackToTopBtn will be set to true (or) false...

# PARAMETER DECORATORS
- to decorate parameters in our class constructors.

*/