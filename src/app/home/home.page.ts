import { Component } from '@angular/core';
import { TareasService } from "../services/tareas.service";
import { IEmpresa } from "../interfaces/iempresa";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  empresas:IEmpresa[];
  constructor(
    private tareasService: TareasService
  ) {}

  getAll(){
    this.tareasService.getAll()
    .subscribe(empresa => {
      console.log(empresa);
    });
  }

  getEmpresa(id:string){
    this.tareasService.getEmpresa(id)
    .subscribe(empresa => {
      console.log(empresa);
      this.empresas.push(empresa);
    });
  }

  getFromPH(){
    console.log("se dio");
    this.tareasService.getFromPH()
    .subscribe(user => console.log(user));
  }

}
