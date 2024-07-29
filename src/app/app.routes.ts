import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CategorySearchComponent } from './category-search/category-search.component';
import { CraftsmanSheetComponent } from './craftsman-sheet/craftsman-sheet.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { ContactComponent } from './contact/contact.component';
import { CookieManagementComponent } from './cookie-management/cookie-management.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"category/:categoryName", component: CategorySearchComponent},
    {path:"artisan/:id", component:CraftsmanSheetComponent},
    {path: "legal-notice", component: LegalNoticeComponent},
    {path: "personal-data", component: PersonalDataComponent},
    {path: "accessibility", component: AccessibilityComponent},
    {path: "contact", component: ContactComponent},
    {path: "cookie-management", component: CookieManagementComponent},
    {path: "**", component: NotFoundComponent}
];

export const appRoutingProviders = [
    provideRouter(routes)
  ];