import { Injectable } from '@angular/core';
import {Http,URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'
@Injectable()
export class HomeService {
repoData=[];
  constructor(private http:Http) { }

 issueURI(page) {
      var pageParam = page ? '&page=' + page : '';
      return pageParam;
  }

  getRepoDetail(url,page=1){

  var pageUrl = 'https://api.github.com/repos'+url+'issues?per_page=100&state=all'+this.issueURI(page);   
  console.log(pageUrl)
  return this.http.get(pageUrl)
  	.map((data)=>{
  		data["page"]=page
      return data;
  	})
  	.catch((e)=>{
       console.log("hsssyyy")
  		return Observable.throw(e)
  	})
  }

}
