import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
})
export class DashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  stuff: any = [
    {
      title: 'Active State Licenses',
      type: 'PieChart',
      data: [
        ['Alabama', 1], ['Alaska', 0], ['Arizona', 1], ['Arkansas', 0], ['California', 0], ['Colorado', 1], ['Connecticut', 1], ['Delaware', 1], ['Florida', 0], ['Georgia',1],
        ['Hawaii',1], ['Idaho',1], ['Illinois',1], ['Indiana',0], ['Iowa',0], ['Kansas',1], ['Kentucky',0], ['Louisiana',1], ['Maine',0], ['Maryland',0],
        ['Massachusetts',0],['Michigan',1],['Minnesota',0],['Mississippi',1],['Missouri',1],['Montana',0],['Nebraska',0],['Nevada',1],['New Hamshire',0],['New Jersey',1],
        ['New Mexico',0],['New York',0],['North Carolina',1],['North Dakota',1],['Ohio',1],['Oklahoma',0],['Oregon',1],['Pennsylvania',1],['Rhode Island',0],['South Carolina',1],
        ['South Dakota',1],['Tennessee',0],['Texas',1],['Utah',1],['Vermont',0],['Virginia',0],['Washington',1],['West Virginia',0],['Wisconsin',0],['Wyoming',1]
      ],
      columnNames: ['State', 'Count'],
      options: { pieHole: 0.4 , is3D:true},
      width: 1000,
      height: 390,
    },
    {},
    {},
    {},
  ];
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { index: 0, title: 'Naomi Will, Georgia, Builders Risk', cols: 1, rows: 1 },
          { index: 1, title: 'Card 2', cols: 1, rows: 1 },
          { index: 2, title: 'Card 3', cols: 1, rows: 1 },
          { index: 3, title: 'Card 4', cols: 1, rows: 1 },
        ];
      }

      return [
        { index: 0, title: 'Naomi Will - Atlanta, Georgia - Builders Risk', cols: 2, rows: 2 },
        { index: 1, title: 'Card 2', cols: 1, rows: 1 },
        { index: 2, titletitle: 'Card 3', cols: 1, rows: 2 },
        { index: 3, title: 'Card 4', cols: 1, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {
    console.log(this.stuff);
  }
}
