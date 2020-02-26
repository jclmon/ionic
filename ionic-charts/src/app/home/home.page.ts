import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Chart } from 'chart.js';
// import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

   @ViewChild('pieChart') pieChart;
   @ViewChild('barChart') barChart;
   @ViewChild('lineChart') lineChart;

   public technologies: any = {'technologies' : [
                            {
                                'technology' : 'Mobile: Ionic/Angular',
                                'time'       : 50,
                                'color'      : 'rgba(206, 61, 95, 0.5)',
                                'hover'      : 'rgba(199, 108, 129, 0.5)'
                            },
                            {
                                'technology' : 'Front-end: Sass/CSS',
                                'time'       : 15,
                                'color'      : 'rgba(83, 131, 185, 0.5)',
                                'hover'      : 'rgba(122, 160, 202, 0.5)'
                            },
                            {
                                'technology' : 'Server: PHP/MySQL',
                                'time'       : 10,
                                'color'      : 'rgba(198, 147, 194, 0.5)',
                                'hover'      : 'rgba(200, 166, 197, 0.5)'
                            },
                            {
                                'technology' : 'Code Documentation',
                                'time'       : 5,
                                'color'      : 'rgba(54, 116, 152, 0.5)',
                                'hover'      : 'rgba(103, 139, 160, 0.5)'
                            },
                            {
                                'technology' : 'Knowledge: Blogging',
                                'time'       : 10,
                                'color'      : 'rgba(152, 54, 145, 0.5)',
                                'hover'      : 'rgba(152, 89, 149, 0.5)',
                            },
                            {
                                'technology' : 'SEO/Online Marketing',
                                'time'       : 10,
                                'color'      : 'rgba(192, 192, 192, 0.5)',
                                'hover'      : 'rgba(220, 220, 220, 0.5)'
                            }
        ]
    };

    
   public pieChartEl: any;
   public barChartEl: any;
   public lineChartEl: any;
   public chartLabels: any = [];
   public chartValues: any = [];
   public chartColours: any = [];
   public chartHoverColours: any = [];
   public chartLoadingEl: any;
   chartLoading: any;


   constructor( public navCtrl: NavController ) {}

   ngOnInit() {
    // this.useAnotherOneWithWebpack();
      this.defineChartData();
      // this.createPieChart();
      // this.createBarChart();
      this.createLineChart();
   }

   useAnotherOneWithWebpack() {
    var ctx = (<any>document.getElementById('canvas-chart')).getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
              label: 'My First dataset',
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              data: [0, 10, 5, 2, 20, 30, 45],
              borderWidth: 1
            }]
       }
    });
  }

   /**
    *
    * Parse the JSON data, push specific keys into selected arrays for use with
    * each chart
    *
    */
   defineChartData(): void {
      for (let k = 0; k < this.technologies.technologies.length; k++) {
         const tech  = this.technologies.technologies[k];
         this.chartLabels.push(tech.technology);
         this.chartValues.push(tech.time);
         this.chartColours.push(tech.color);
         this.chartHoverColours.push(tech.hover);
      }
   }

   /**
    *
    * Configure the Pie chart, define configuration options
    *
    */
   createPieChart(): void {
    this.pieChartEl = new Chart(this.pieChart.nativeElement,
      {
         type: 'pie',
         data: {
            labels: this.chartLabels,
            datasets: [{
               label                 : 'Daily Technology usage',
               data                  : this.chartValues,
               backgroundColor       : this.chartColours,
               hoverBackgroundColor  : this.chartHoverColours
            }]
         }}
      );

      this.chartLoading = this.pieChartEl.generateLegend();
   }

   /**
    *
    * Configure the Bar chart, define configuration options
    *
    */
   createBarChart(): void {
     
    this.barChartEl = new Chart(this.barChart.nativeElement,
      {
         type: 'bar',
         data: {
            labels: this.chartLabels,
            datasets: [{
               label                 : 'Daily Technology usage',
               data                  : this.chartValues,
               backgroundColor       : this.chartColours,
               hoverBackgroundColor  : this.chartHoverColours
            }]
         }
      });
   }

   /**
    *
    * Configure the Line chart, define configuration options
    *
    */
   createLineChart(): void {
    this.lineChartEl = new Chart(this.lineChart.nativeElement,
      {
         type: 'line',
         data: {
            labels: this.chartLabels,
            // datasets: [{
            //    label                 : 'Daily Technology usage',
            //    data                  : this.chartValues,
            //    backgroundColor       : this.chartColours,
            //    hoverBackgroundColor  : this.chartHoverColours,
            //    fill 				   : false
            // }]
             datasets: [
                {
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    backgroundColor: 'rgba(220,220,220,1)',
                    hoverBackgroundColor: 'rgba(220,220,220,1)',
                    label: 'Divinator'
                },
                {
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    backgroundColor: 'rgba(151,187,205,1)',
                    hoverBackgroundColor: 'rgba(151,187,205,1)',
                    label: 'Black Coat'
                },
                {
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    backgroundColor: 'rgba(80,90,180,1)',
                    hoverBackgroundColor: 'rgba(80,90,180,1)',
                    label: 'MacroHard'
                }
            ]
         },
         options : {
          scales: {
             yAxes: [{
                ticks: {
                   beginAtZero: true,
                   stepSize: 5,
                   max : 100
                }
             }],
             xAxes: [{
                ticks: {
                   autoSkip: false
                }
             }]
          }
       }
      });
   }

}
