import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpCrudDemoService {

  url: String = "";

  constructor(private http: HttpClient) { 
    this.url = "https://jsonplaceholder.typicode.com";
  }

  public getAllPosts()  {
    console.log("HTTP CRUD DEMO...");
    let endPoints = "/posts";
    return this.http.get(this.url + endPoints);
  }

  public getPostById(postId: number) {
    //let id: number = postId;
    let id: number = 1;
    console.log("Got id: " +  id);
    let endpoints = "/posts/" + id;
    return this.http.get(this.url + endpoints);
  }

  public addPost(postData: Object) {
    let endpoints = "/posts";
    return this.http.post(this.url + endpoints, postData);
  }

  public updatePost(postData: Object) {
    let endPoints = "/posts/1"
    return this.http.put(this.url + endPoints, postData);
  }

  public deletePost() {
    let endPoints = "/posts/1"
    return this.http.delete(this.url + endPoints);
  }
}
