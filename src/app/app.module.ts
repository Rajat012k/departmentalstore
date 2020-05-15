import {
  BrowserModule,
  HAMMER_GESTURE_CONFIG,
  HammerModule,
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  LyHammerGestureConfig,
  LyThemeModule,
  LY_THEME,
  LY_THEME_NAME,
  StyleRenderer,
  LyTheme2,
} from '@alyle/ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MinimaLight } from '@alyle/ui/themes/minima';
import { CommonModule } from '@angular/common';

import { LyCommonModule } from '@alyle/ui';
import { LyCardModule } from '@alyle/ui/card';
import { LyIconModule } from '@alyle/ui/icon';
import { LyTypographyModule } from '@alyle/ui/typography';
import { ReceptionistPageComponent } from './receptionist-page/receptionist-page.component';

import { LyDrawerModule } from '@alyle/ui/drawer';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyListModule } from '@alyle/ui/list';
import { LyButtonModule } from '@alyle/ui/button';
import { LyRadioModule } from '@alyle/ui/radio';
import { ResponsiveModule } from '@alyle/ui/responsive';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LyExpansionIconModule } from '@alyle/ui';
import { LyExpansionModule } from '@alyle/ui/expansion';

@NgModule({
  declarations: [AppComponent, ReceptionistPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HammerModule,
    FormsModule,
    HttpClientModule,

    CommonModule,
    LyCommonModule,
    LyCardModule,
    LyButtonModule,
    LyIconModule,

    LyButtonModule,
    LyIconModule,
    LyTypographyModule,

    LyDrawerModule,
    LyToolbarModule,
    LyListModule,
    LyButtonModule,
    LyRadioModule,
    LyTypographyModule,
    LyIconModule,
    ResponsiveModule,
    LyExpansionModule,
    LyExpansionIconModule,
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig },
    StyleRenderer,
    LyTheme2,
    { provide: LY_THEME_NAME, useValue: 'minima-light' },
    { provide: LY_THEME, useClass: MinimaLight, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
