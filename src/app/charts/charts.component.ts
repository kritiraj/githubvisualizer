import { Component, OnInit,Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  @Input() barChartsData;
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = [];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public doughnutChartLabels:string[] = ['Closed', 'Open'];
  public doughnutChartData:number[] = [];
  public doughnutChartType:string = 'doughnut';
  public barChartData:any[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.evaluate()
  }

  evaluate(){
   let closedstate= _.filter(this.barChartsData, ['state','closed']);
   let openstate= _.filter(this.barChartsData, ['state','open']);
   this.barChartData=[{data:[closedstate.length],label:'ClosedState'},
   {data:[openstate.length],label:'OpenState'}]
   this.doughnutChartData=[closedstate.length,openstate.length]
  }
  
 
}
