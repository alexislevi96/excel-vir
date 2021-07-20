import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  noFile = false;
  
  data: any;
  constructor() { }

  ngOnInit(): void {
  }
  onFileChange(evt: any) {
    const target : DataTransfer =  <DataTransfer>(evt.target);
    
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      const wsname : string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      // console.log(ws);
      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1, raw:false }));
      console.log(this.data);
      let x = this.data.slice(1);
      // console.log(x);
      this.noFile = true; 
    };

    reader.readAsBinaryString(target.files[0]);
  }
}
