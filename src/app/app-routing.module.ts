import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  /*
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  */
  {
    path: 'rsl-srch',
    loadChildren: () => import('./pages/rsl-srch/rsl-srch.module').then( m => m.RslSrchPageModule)
  },
  {
    path: 'rml-srch',
    loadChildren: () => import('./pages/rml-srch/rml-srch.module').then( m => m.RmlSrchPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'key',
    loadChildren: () => import('./pages/key/key.module').then( m => m.KeyPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then( m => m.TutorialPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./pages/favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'disclaimer',
    loadChildren: () => import('./pages/disclaimer/disclaimer.module').then( m => m.DisclaimerPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./pages/contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: 'recent-srch',
    loadChildren: () => import('./pages/recent-srch/recent-srch.module').then( m => m.RecentSrchPageModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./pages/cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'rsl-srch-scenarios',
    loadChildren: () => import('./pages/rsl-srch-scenarios/rsl-srch-scenarios.module').then( m => m.RslSrchScenariosPageModule)
  },
  {
    path: 'rsl-srch-thqtr',
    loadChildren: () => import('./pages/rsl-srch-thqtr/rsl-srch-thqtr.module').then( m => m.RslSrchThqtrPageModule)
  },
  {
    path: 'rsl-srch-media',
    loadChildren: () => import('./pages/rsl-srch-media/rsl-srch-media.module').then( m => m.RslSrchMediaPageModule)
  },
  {
    path: 'rsl-srch-results',
    loadChildren: () => import('./pages/rsl-srch-results/rsl-srch-results.module').then( m => m.RslSrchResultsPageModule)
  }
  ,
  {
    path: 'info-rml',
    loadChildren: () => import('./pages/info-rml/info-rml.module').then( m => m.InfoRmlPageModule)
  },
  {
    path: 'info-rsl',
    loadChildren: () => import('./pages/info-rsl/info-rsl.module').then( m => m.InfoRslPageModule)
  },
  {
    path: 'info-gen',
    loadChildren: () => import('./pages/info-gen/info-gen.module').then( m => m.InfoGenPageModule)
  },
  {
    path: 'rml-srch-thqtr',
    loadChildren: () => import('./pages/rml-srch-thqtr/rml-srch-thqtr.module').then( m => m.RmlSrchThqtrPageModule)
  },
  {
    path: 'rml-srch-scenarios',
    loadChildren: () => import('./pages/rml-srch-scenarios/rml-srch-scenarios.module').then( m => m.RmlSrchScenariosPageModule)
  },
  {
    path: 'rml-srch-media',
    loadChildren: () => import('./pages/rml-srch-media/rml-srch-media.module').then( m => m.RmlSrchMediaPageModule)
  },
  {
    path: 'rml-srch-results',
    loadChildren: () => import('./pages/rml-srch-results/rml-srch-results.module').then( m => m.RmlSrchResultsPageModule)
  },
  {
    path: 'recent-srch-results',
    loadChildren: () => import('./pages/recent-srch-results/recent-srch-results.module').then( m => m.RecentSrchResultsPageModule)
  },
  {
    path: 'srch-results',
    loadChildren: () => import('./pages/srch-results/srch-results.module').then( m => m.SrchResultsPageModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
