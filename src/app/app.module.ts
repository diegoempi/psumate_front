import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_ROUTING } from "./app.routes";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//validators

import { Ng2Rut } from "ng2-rut";

//Interceptors

import { AuthInterceptor } from "./interceptors/auth-interceptor";
//servicios

import { LocalizacionService } from "./services/localizacion.service";
import { VideosService } from "./services/videos.service";
import { GlobalService } from "./services/global";
import { RevisionService } from "./services/revision.service";
import { UserService } from "./services/user.service";
import { MaterialService } from "./services/material.service";

//componentes
import { AppComponent } from './app.component';
import { HomeWComponent } from './components/home-w/home-w.component';
import { Form1WComponent } from './components/form1-w/form1-w.component';
import { Form2WComponent } from "./components/form2-w/form2-w.component";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomePComponent } from './components/home-p/home-p.component';
import { NavComponent } from './components/nav-p/nav-p.component';
import { AdjustComponent } from './components/adjust/adjust.component';
import { VideosComponent } from './components/videos/videos.component';
import { CapitulosYVideosComponent } from './components/videos/capitulosyvideos.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminUnidadComponent } from './components/admin/adminUnidad.component';
import { AdminCapituloComponent } from './components/admin/adminCapitulo.component';
import { AdminRevisionComponent } from './components/admin/adminRevision.component';
import { AdminRevisionCapituloComponent } from './components/admin/adminRevisionCapitulo.component';
import { AdminRevisionUnidadComponent } from './components/admin/adminRevisionUnidad.component';
import { VideosListaComponent } from "./components/videos/videoslista.component";
import { RevisionComponent } from "./components/revision/revision.component";
import { RevisionListaComponent } from "./components/revision/revisionlista.component";
import { RevisionDetalleComponent } from "./components/revision/revisiondetalle.component";
import { NavAdminComponent } from './components/nav-p/nav-p-admin.component';


import { AdminVideoComponent } from './components/admin/adminVideo.component';
import { LoadingComponent } from './components/shared/loading.component';

import { SafePipe } from './pipes/globalPipes';

import { DetalleComponent } from './components/videos/detalle.component';
import { MatriculaComponent } from './components/matricula/matricula.component';
import { AdminMaterialUnidadComponent } from './components/admin/admin-material-unidad/admin-material-unidad.component';
import { AdminMaterialCapituloComponent } from './components/admin/admin-material-capitulo/admin-material-capitulo.component';
import { AdminMaterialComponent } from './components/admin/admin-material/admin-material.component';
import { MaterialComponent } from './components/material/material.component';
import { MaterialUnidadComponent } from './components/material-unidad/material-unidad.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeWComponent,
    Form1WComponent,
    Form2WComponent,
    LoginComponent,
    RegisterComponent,
    HomePComponent,
    NavComponent,
    AdjustComponent,
    VideosComponent,
    CapitulosYVideosComponent,
    AdminComponent,
    AdminUnidadComponent,
    AdminCapituloComponent,
    AdminRevisionComponent,
    AdminRevisionCapituloComponent,
    AdminRevisionUnidadComponent,
    VideosListaComponent,
    AdminVideoComponent,
    DetalleComponent,
    MatriculaComponent,
    SafePipe,
    LoadingComponent,
    RevisionComponent,
    RevisionListaComponent,
    RevisionDetalleComponent,
    NavAdminComponent,
    AdminMaterialUnidadComponent,
    AdminMaterialCapituloComponent,
    AdminMaterialComponent,
    MaterialComponent,
    MaterialUnidadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2Rut,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [
    LocalizacionService,
    VideosService,
    GlobalService,
    RevisionService,
    UserService,
    MaterialService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
