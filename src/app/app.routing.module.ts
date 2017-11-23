import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PartnersComponent } from './partners/partners.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { IeltsProjectComponent } from './ielts-project/ielts-project.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },

    { path: 'projects', component: ProjectsComponent },
    { path: 'ielts', component: IeltsProjectComponent },
    { path: 'partners', component: PartnersComponent },
    { path: 'about', component: AboutComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
