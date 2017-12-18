import {Injectable} from '@angular/core';

@Injectable()
export class EmployeeService {
    GetList(): any[] {
        let employees: any[] = [

            { Id: 1, Name: "Phan Anh Vũ" },
            { Id: 1, Name: "Phan Anh Vũ 1" },
            { Id: 1, Name: "Phan Anh Vũ2" },
        ];
        return employees;
    }
}