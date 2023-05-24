import { HttpClient } from '@angular/common/http';
import { Component ,Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{

  status:any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
        .subscribe(() => this.status = 'Delete successful');
}
}
