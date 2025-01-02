import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { DynamicButtonsDirective } from '../../directives/dynamic-buttons.directive'

@Component({
  selector: 'app-button-exemple',
  standalone: true,
  imports: [MatButtonModule, DynamicButtonsDirective],
  templateUrl: './button-exemple.component.html',
  styleUrl: './button-exemple.component.scss'
})
export class ButtonExempleComponent {
}
