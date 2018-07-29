import {RouterModule, Routes} from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { ArtistComponent } from './components/artist/artist.component';
import { ModuleWithProviders } from '../../node_modules/@angular/core/src/metadata/ng_module';
import { NotFoundComponent } from './components/not-found/not-found.component';



const routes:Routes = [
    {
        path:'',
        component:SearchComponent,
    },
    {
        path:'about',
        component:AboutComponent,
    },
    {
        path:'search',
        component:SearchComponent,
    },
    {
        path:'artist/:id',
        component:ArtistComponent,
    },
    {
        path:'**',
        component:NotFoundComponent,
    }
]

export const ROUTER: ModuleWithProviders = RouterModule.forRoot(routes);