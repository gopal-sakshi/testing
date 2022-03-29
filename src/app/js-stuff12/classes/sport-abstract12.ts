export abstract class SportAbstract12 {

    sportName:string;
    playerPerTeam:number;

    init() {
        console.log('inside init of sport abstract');
        this.sayHello();
        this.showSupport();
    }

    sayHello() {
        console.log('saying hello from sport abstract');
    }

    // all inherited classes must implement this method... first we cheer for the team
    abstract showSupport():void

    abstract famousPlayers():String[];
}

/*
    Abstract Classes 
    - they are a good fit if you want to provide implementation details to your children
        but don't want to allow an instance of your class to be directly instantiated (which allows you to partially define a class).


    When you have a requirement where your base class should provide default implementation of certain methods 
        whereas other methods should be open to being overridden by child classes use abstract classes.

*/