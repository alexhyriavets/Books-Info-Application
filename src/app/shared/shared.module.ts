import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule,
         MatToolbarModule,
         MatCardModule,
         MatExpansionModule,
         MatListModule,
         MatSelectModule
} from '@angular/material';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatExpansionModule,
        MatListModule,
        MatSelectModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatExpansionModule,
        MatListModule,
        MatSelectModule
    ]
})
export class SharedModule { }
