import { Injectable } from "@angular/core";

@Injectable()
export class BookService {
    count:number = 0;
    bookList:any = [
        { title: 'Physics', id: 1},
        { title: 'Chemistry', id: 2},
        { title: 'Maths', id: 3}
    ];

    bookFullDetails:any = [
        { title: 'Physics', id: 1, info:'bhoutika-sastram', subTopics: ['atoms', 'universe', 'space', 'gravity'], scholars: 'newton'},
        { title: 'Chemistry', id: 2, info:'rasayana-sastram', subTopics: ['organic', 'carbons', 'reactions', 'covalent-bond'], scholars: 'mendeleev'},
        { title: 'Maths', id: 3, info:'ganita-sastram', subTopics: ['vectors', 'algebra', 'geometry'], scholars: 'pythagoras'},
    ]        
    
    constructor() { }

    getBookFullDetails(bookId:number) {        
        return this.bookFullDetails.find(book => book.id == bookId);            // this returns singleElement
        // return this.bookFullDetails.filter(book => book.id == bookId);       // this returns subArray
    }

    getBookList() {
        console.log('book list served for ',++this.count);
        return this.bookList;
    }
}       