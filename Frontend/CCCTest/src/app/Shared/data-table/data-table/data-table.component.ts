
import { Component, OnInit, ViewChild, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataTableColumn } from '../../data-table-columns/data-table-columns';
import { TableActions } from '../../table-actions/table-actions';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit , OnChanges {
  @Input() displayedColumns: DataTableColumn[] = [];
  @Input() data: any[] = [];
  @Input() actions: TableActions[] = [];
  @Output() onEdit: EventEmitter<Object> = new EventEmitter();
  @Output() onDelete: EventEmitter<number> = new EventEmitter();
  // @Output() onDataSourceChange: EventEmitter<any> = new EventEmitter();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  public columns: string[] = [];
  public dataSource = new MatTableDataSource<any>();

  constructor() { }

  ngOnInit(): void {
    this.columns = this.displayedColumns.map(col => col.name);
    console.log("------->" , this.columns)
    this.dataSource = new MatTableDataSource<any>(this.data);
    console.log("------------------->" , this.dataSource)
  }
  ngOnChanges() {

    this.dataSource.paginator = this.paginator;
  }

  public applySearch(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public edit(obj: Object) {
    this.onEdit.emit(obj);
  }

  public delete(id: number) {
    this.onDelete.emit(id);
  }

}
