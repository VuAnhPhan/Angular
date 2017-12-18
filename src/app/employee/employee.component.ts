import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../services/employee.service'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit {
    public employees: any[];
  constructor(private employService: EmployeeService) { }

  ngOnInit() {
    this.employees=this.employService.GetList();
  }

}
