import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-data-analyst',
  templateUrl: './data-analyst.component.html',
  styleUrls: ['./data-analyst.component.css']
})
export class DataAnalystComponent {
  constructor(private service: AuthService,private toastr: ToastrService, private router: Router) {
   
    this.SetAccessPermission();
  }
  analystlist: any;
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  accessdata: any;
  haveedit = false;
  haveadd = false;
  havedelete = false;

  ngAfterViewInit(): void {

  }
  LoadAnalyst() {
    this.service.Getall().subscribe(res => {
      this.analystlist = res;
      this.dataSource = new MatTableDataSource(this.analystlist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  SetAccessPermission(){
    this.service.Getaccessbyrole(this.service.getrole(),'da').subscribe(res=>{
      this.accessdata = res;
      //console.log(this.accessdata);

      if(this.accessdata.length>0)
      {
        this.haveadd = this.accessdata[0].haveadd;
        this.haveedit = this.accessdata[0].haveedit;
        this.havedelete = this.accessdata[0].havedelete;
        this.LoadAnalyst();
      }
      else{
        alert('You are not authorized to access');
        this.router.navigate([''])
      }
    })
  }

  displayedColumns: string[] = ['username', 'name', 'email', 'status', 'role'];

  updateanalyst(code:any){

    if(this.haveedit)
    {
      this.toastr.success("Success");
    }else{
      this.toastr.warning("You don't have access for Edit");
    }
  }


  // removeanalyst(code:any){
    
  //   if(this.havedelete)
  //   {
  //     this.DeleteAnalyst(code);
  //     this.toastr.success("Success");
  //   }else{
  //     this.toastr.warning("You don't have access for Delete");
  //   }
  // }


  addanalyst(){
    
    if(this.haveadd)
    {
      this.toastr.success("Success");
    }else{
      this.toastr.warning("You don't have access for Create");
    }
  }


  // DeleteAnalyst(code: string) {
  //   this.service.deleteanalyst(code).subscribe(res => {
  //     console.log(code);
  //     this.toastr.success("Employee deleted successfully!");
  //     this.LoadAnalyst();
  //   });
  // }
}
