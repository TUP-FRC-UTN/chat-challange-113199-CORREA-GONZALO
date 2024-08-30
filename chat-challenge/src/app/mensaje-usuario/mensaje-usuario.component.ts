import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { empty } from 'rxjs';

@Component({
  selector: 'app-mensaje-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensaje-usuario.component.html',
  styleUrl: './mensaje-usuario.component.css'
})
export class MensajeUsuarioComponent {

  @Input() usuario : string = "";
  @Output() mensajeEnviado = new EventEmitter<string>();
  
  mensaje : string = "";

  enviarMensaje(){
    this.mensajeEnviado.emit(this.mensaje);
    this.mensaje = "";
  }
}
