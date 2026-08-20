import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBar } from "./pages/menu-bar/menu-bar";
import { FooterBar } from "./pages/footer-bar/footer-bar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBar, FooterBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('HunWeb');
}
