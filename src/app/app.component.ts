import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HEADComponent } from './COMPONENT/head/head.component';
import { BODYComponent } from './COMPONENT/body/body.component';
import { TAILComponent } from './COMPONENT/tail/tail.component';
import { TAILENDComponent } from './COMPONENT/tailend/tailend.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HEADComponent, BODYComponent, TAILComponent, TAILENDComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'maquetacion-quetzalcoatl';
}
