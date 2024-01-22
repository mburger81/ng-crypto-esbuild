import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import eccrypto from "@toruslabs/eccrypto";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-crypto-esbuild';

  constructor() {
    console.log(eccrypto);
  }
}
