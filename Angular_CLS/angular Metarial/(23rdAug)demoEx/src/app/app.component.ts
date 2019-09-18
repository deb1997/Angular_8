import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'table-overview-example',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  //columns in table
  displayedColumns = ['id', 
                      'name', 
                      'progress', 
                      'color'];
  //this is the final data
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator,{static:true}) 
      paginator: MatPaginator;
  @ViewChild(MatSort,{static:true}) 
      sort: MatSort;

  constructor() {
    // Create 100 users
    const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) { 
      users.push(createNewUser(i)); 
    }
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
}
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * 
            (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * 
           (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100)
              .toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}
const COLORS = ['maroon', 'red', 'orange', 'yellow'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus'];
export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}