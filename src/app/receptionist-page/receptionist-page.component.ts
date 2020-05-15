import { Component, OnInit } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';

import { ThemeVariables, ThemeRef, lyl } from '@alyle/ui';
import { STYLES as EXPANSION_STYLES } from '@alyle/ui/expansion';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
const STYLES = (theme: ThemeVariables, ref: ThemeRef) => {
  // The classes for `expansion` are not yet created, therefore,
  // we will create them to use them.
  const expansion = ref.selectorsOf(EXPANSION_STYLES);

  const { before } = theme;

  return {
    expansion: () => lyl`{
      ${expansion.panel} {
        &::after {
          transition: border ${theme.animations.durations.entering}ms ${theme.animations.curves.standard}
          content: ''
          position: absolute
          top: 0
          bottom: 0
          ${before}: 0
          border-${before}: 2px solid transparent
        }
      }
      ${expansion.panelHeader} {
        height: 54px
      }
      ${expansion.panelTitle} {
        font-weight: 500
      }

      ${expansion.expanded} {
        ${expansion.panelHeader} {
          height: 64px
        }
        &${expansion.panel} {
          background: ${theme.background.secondary}
          &::after {
            border-${before}: 2px solid ${theme.primary.default}
          }
        }
        ${expansion.panelHeader} ${expansion.panelTitle} {
          color: ${theme.primary.default}
        }
      }
    }`,
  };
};

@Component({
  selector: 'app-receptionist-page',
  templateUrl: './receptionist-page.component.html',
  styleUrls: ['./receptionist-page.component.css'],
})
export class ReceptionistPageComponent implements OnInit {
  readonly classes = this._theme.addStyleSheet(STYLES);

  panelStates = [{ state: false }, { state: true }, { state: false }];
  constructor(private _theme: LyTheme2) {}

  ngOnInit(): void {}
}
