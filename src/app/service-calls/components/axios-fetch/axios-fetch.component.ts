import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app69-axios-fetch',
  templateUrl: './axios-fetch.component.html',
  styleUrls: ['./axios-fetch.component.scss']
})
export class AxiosFetchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // joke-api working here... but not in simpleExpress
    // In browser, you dont need to add headers...
    // But if u use axios in nodeJs, u need to explicitly add headerss
    axios.get('https://official-joke-api.appspot.com/random_joke').then(res => {
      console.log(res);
    });
  }

  simpleGet() {

    // AXIOS GET
    axios.get('https://pokeapi.co/api/v2/pokemon').then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });

    fetch('https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
      return response.json()         // no need of this step in axios
    }).then((data) => {
      console.log(data);
    });

  }

  async simplePost() {
    await fetch(
      'http://localhost:3044/fileUpload23',                                      // fetch API ===> 1st param = url
      {                                                                           //          ====> 2nd param = options
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({a: 1, b: 'Textual content'})
      }
    ).then(response => { 
      console.log(response); 
      return response.json() 
    }).then(data => {
      console.log(data)
    });

    axios.post(
      'http://localhost:3044/quote/addQuote', 
      { pokemon: 'Pikachu' }
    ).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }

  errorHandling() {

    fetch('https://pokeapi.co/api/v2/pokemon/').then((data) => {
      console.log(data);      // conversion to json missing... see the data
    })

  }

  useInterceptors() {

    // adding request interceptor
    axios.interceptors.request.use((config) => {
      console.log(`request Obj ====> `, config);
      return config;        // Your Interceptor code to do something with the request data and return config
    }, (error) => {          // Your Interceptor code to do something with request error and return error
      return Promise.reject(error);
    });

    // adding response interceptor
    axios.interceptors.response.use((response) => {
      console.log(`response Obj ===> `, response);
      return response;
    }, (error) => {
      return Promise.reject(error);
    });

    // finally making HTTP call
    axios({
      method: 'get',
      url: 'https://pokeapi.co/api/v2/pokemon',
      data: { pokemonNumber: '1' }
    }).then(response => {
      console.log(response);
    });

  }


  monitorProgress() {

    //  Axios Has The Ability To Monitor POST Request Progress
    // axios.post(
    //   'https://pokeapi.co/api/v2/pokemon/', 
    //   { name: 'GopAL' }, 
    //   { onUploadProgress: ({ total, loaded }) => { }}
    // )

}


}
