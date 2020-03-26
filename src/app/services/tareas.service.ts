import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


import { IEmpresa } from '../interfaces/iempresa';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(
    private http: HttpClient
  ) {}

  getAll(){    
    return this.http.get<IEmpresa[]>(environment.apiURL+'empresa');
  }

  getEmpresa(id:string){
    return this.http.get<IEmpresa>(`${environment.apiURL}empresa/${id}`);
  }

  getFromPH(){
    const api = 'https://jsonplaceholder.typicode.com/users';

    return this.http.get(api);
  }
}
