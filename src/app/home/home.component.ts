import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/home.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 chartData=[]
 errorText="";
 loading=false;
 path;
 barChartsData=[];

  constructor(private home:HomeService) { }

  ngOnInit() {
  
  }
  getDetails(event){
  	let url=event.form._value.url;
    let i=url.indexOf("github.com");
    if(i!=-1){
    this.errorText="";
    this.loading=true;
    this.path=url.split("github.com")
    this.path=this.path[this.path.length-1]
    if(this.path[this.path.length-1]!='/'){
      this.path=this.path+'/';
    }
    this.getHttpDetails();
    this.chartData=[]
  }
  else{
    this.errorText="Not a Valid Github URL";
  }
  }

  getHttpDetails(page=1){
  this.home.getRepoDetail(this.path,page)
      .subscribe((data)=>{
        this.chartData.push(...data.json());
        console.log(data.json())
        var linkHeader = data.headers.get('link');
        if (linkHeader && linkHeader.indexOf('rel="next"') > 0) {
          this.getHttpDetails(data.page+1);
        }
        else{
          console.log(data.json())
          this.loading=false;
          this.barChartsData=[...this.chartData];
          
        }
      },
      (err)=>{
        this.errorText=err.statusText;
        this.loading=false;
      })
  }

}
