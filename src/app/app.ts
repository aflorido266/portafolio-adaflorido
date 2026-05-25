import { Component, signal } from '@angular/core';
import { Skills } from "./feature/skills/skills";
import { Navbar } from './feature/navbar/navbar';
import { Proyects } from './feature/proyects/proyects';
import { About } from './feature/about/about';
import { Contact } from './feature/contact/contact';
import { Hero } from './feature/hero/hero';



@Component({
  selector: 'app-root',
  imports: [Skills,Navbar,Proyects,About,Contact,Hero],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portafolio-adaflorido');
}
