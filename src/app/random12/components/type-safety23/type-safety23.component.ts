import { TmplAstTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Countries, Dictionary1, Directions, PizzaPreferences, SouthStates, TNMT } from '../../classes/enum-types';




@Component({
  selector: 'app69-type-safety23',
  templateUrl: './type-safety23.component.html',
  styleUrls: ['./type-safety23.component.scss']
})
export class TypeSafety23Component implements OnInit {

  // In typescript, there are two main ways to define the type of an object-based dictionary:
  fingerCounts1: { [characterName: string]: number};
  fingerCounts2: Record<string, number>;    // here, string type permits any string, so the keyspace is effectively unbounded.
  
  likesIn1950: PizzaPreferences = {0 : 'chicken', 1: 'paneer', 2: 'veg', 3: 'spicy pizza'};
  likesIn1960: PizzaPreferences;
  
  someTurtle: TNMT = TNMT.Michael;    // someTurtle is a datatype... its value is set with 1 during initialisation
                                          // someTurtle can only accept some values (like 0,1,2,3)
                                          // it cant accept 5 (or) 'anotherTurtle' because it throws error

  someDirection:Directions;           // someDirection isnt initiasalised during declaration... see doStuff()

  dict1:Dictionary1 = {name: 'gopal', phone: '7730xxx403', city: 'hyderabad'};

  constructor() { }

  ngOnInit(): void {
    
    this.fingerCounts1 = {
      'gopal' : 10,      
      'h roshan' : 10.5,
      'nayanthara': 11
    };
    
    this.fingerCounts2 = {
      'batman' : 11,
      'joker' : 10,
      'riddler': 7,
      'lex luthor': 9,
      'some hero': 8
    };
    console.log(this.fingerCounts1);
    console.log(this.fingerCounts2);      // fingerCounts1 & fingerCounts2 ====> unbounded keyspace
                                            // but likesIn1950, likesIn1960, likesIn1970 ====> bounded keyspace

    this.likesIn1960 = {0: 'tender chicken', 1: 'spicy kebab', 2: 'mushroom', 3: 'double cheese pizza'}   
    const likesIn1970:PizzaPreferences = {0: 'egg roll', 1: 'jalepeno', 2: 'pineapple', 3: 'rings'}

    console.log(this.likesIn1950);      // initialized while declaration itself
    console.log(this.likesIn1960);      // initialized while declaration itself
    console.log(likesIn1970);          // all const variables must be initialized while declaration itself
    
  }

  doStuff1() {

    this.someDirection = Directions.NORTH;
    // this.someDirection = 3;
    // this.someDirection = 'EAST'        // throws ERROR
    
    var ntrState = SouthStates.Andhra;
    var rajiniState = SouthStates.TamilNadu;
    var mohanlalState = SouthStates.Kerala    
    console.log(ntrState, rajiniState, mohanlalState);

    // reverse mapping ENUM; you can access the value of a member and a member name from its value
    console.log(SouthStates[3])

    // Each value of the numeric enum appears two times in the internally stored enum object
    console.log(SouthStates);

    // enums throw compile time error while reassignment... just uncomment & see
    //ntrState = 'delhi'          


    var ronaldoCountry = Countries.POR;
    var ramosCountry = Countries.ESP;
    
    // access enums
    console.log(Countries.ITA);
    console.log(Countries['GER']);
    
  }

  doStuff2() {
    console.log(this.dict1);
    console.log(this.dict1.age);      // In a sparse dictionary, if you try to access a value at a key that is outside of the dictionary’s keyset
                                        // returns undefined... 

    var gopalAge = this.dict1.age       // age is undefined... 
                                          // But TypeScript assumes that our objects are complete... meaning, it considers age as 'number'
                                          // so, gopalAge is also 'number' datatype... (but as age is optional property, it can be undefined too)
                                          // if you try to type-check fingers to see whether it is undefined, your linter complains about an
                                            // unnecessary type-check.

    var batmanFingers = this.fingerCounts2.batman               // this works...
    var spidermanFingers = this.fingerCounts2.spiderman         // this returns undefined... spidermanFingers is undefined instead of 'number'
    // console.log(batmanFingers); 
    // console.log(spidermanFingers);

                                      // this is the problem with sparse dictionary
                                    // you can change it to Record<string, number|undefined> but return types of Object
                                      // functions would be affected

    const fingerCountsTemp1: Record<string, number> = { 'gopal': 3, 'priya':5 };
    const counts1: Array<number> = Object.values(fingerCountsTemp1);

    const fingerCountsTemp2: Record<string, number|undefined> = { 'gopal': 3, 'priya':5, 'sahasra': 6 };
    const counts2: Array<number|undefined> = Object.values(fingerCountsTemp2);
      // you'll have to perform an explicit typecheck on counts2 (but no such type-checking is needed for counts1)

    // Using a Map is a much better approach to implementing a type-safe, sparse dictionary
  }

  useMaps() {
    const fingerCounts44: Map<string, number> = new Map();

    fingerCounts44.set('zaphod', 5);                         // using setters to add values
    fingerCounts44.set('homer', 8);
    fingerCounts44.set('yoda', 6);
    console.log(fingerCounts44);

    const fingerCounts55: Map<string, number> = new Map([     // using tuples to define values: [string, number][]
      ['zaphod-55', 15],
      ['homer-55', 18],
      ['yoda-55', 16],
      ['batman-55', 17],
      ['superman-55', 14]
    ]); 

    console.log(fingerCounts55);
    console.log(fingerCounts55.keys);
    console.log(fingerCounts55.values);
    console.log(fingerCounts55.entries);

    // In Maps, you cannot read object keys directly. Instead, you need to use get & set.
    // A Map has keys, values, and entries methods. These return Iterators rather than arrays

    const zaphodFingers = fingerCounts44.get('zaphod');
    console.log(zaphodFingers);
    const batmanFingers = fingerCounts44.get('batman');
    console.log(batmanFingers);




  }
  
}



/* 
  Dictionary
  - In a programming language, a dictionary is a typical data structure that stores data in key-value pairs.



  http://www.pl-enthusiast.net/2014/08/05/type-safety/

  In JavaScript, the most commonly-used implementation for dictionaries is the ‘object’. A simple example might be:
    
  var fingerCounts = {          // mapping of strings to numbers
    'zaphod': 15,
    'homer: 8,
    'yoda': 6         // Accessing a value in an object =========> fingerCounts.yoda
  };

  // zaphod = The Hitchhiker's Guide to the Galaxy 
  // homer = ancient greek author (or) from simpsons
  // yoda = star wars
  =========> the keyspace can be infinited, because there are many fictional heros

  var turtlePizzas = {                      // this dictionary keyspace = ["Leonardo", "Donatello", "Michaelangelo", "Raphael"]
                                                // bounded keyspace (because only 4 teenage mutant ninja turtles are there)
                                                // so, we know exactly how big it is and what values are in it

    "Leonardo": 'chicken pizza', 
    "Donatello" 'panner pizza', 
    "Michaelangelo": 'veg pizza', 
    "Raphael" : 'spicy pizaa'             
  }

  A dictionary’s keyspace
  - set of keys that can be considered valid for that dictionary.

  A dictionary’s keyset 
  - is the set of keys that are currently defined within that dictionary.

  A keyspace is a property of the dictionary type. 
  A keyset is a property of a dictionary value.
  Many dictionaries have a keyspace that is larger than any practical keyset. 
  - We call any dictionary where the keyspace and keyset are not identical, a sparse dictionary. 
  - Otherwise, we call it complete.

  Object.keys ===> will provide you with an array of the keys in an object
  Object.values ===> will provide you with an array of the values in an object
  Object.entries ===> array of key-value pairs


 
*/
