import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalaComponent } from './sala/sala.component';
import { MensajeUsuarioComponent } from './mensaje-usuario/mensaje-usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SalaComponent,MensajeUsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chat-challenge';
}
