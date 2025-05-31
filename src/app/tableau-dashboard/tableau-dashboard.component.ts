import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

declare var tableau: any;

@Component({
  selector: 'app-tableau-dashboard',
  templateUrl: './tableau-dashboard.component.html',
  styleUrls: ['./tableau-dashboard.component.scss'],
})
export class TableauDashboardComponent implements AfterViewInit {
  @ViewChild('vizContainer', { static: true }) vizContainer!: ElementRef;
  viz: any;

  ngAfterViewInit(): void {
    this.initViz();
  }

  initViz(): void {
    const url = 'https://public.tableau.com/views/RegionalSampleWorkbook/Storms';
    const options = {
      hideTabs: true,
      width: '100%',
      height: '600px',
    };
    this.viz = new tableau.Viz(this.vizContainer.nativeElement, url, options);
  }

}
