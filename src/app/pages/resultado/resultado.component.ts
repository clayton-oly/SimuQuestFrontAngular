import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-resultado',
  imports: [NgFor, NgIf, NgClass, RouterModule ],
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})

export class ResultadoComponent implements OnInit {
  resultadoDetalhado: any[] = [];
  i: number = 0
  resul: number = 0;

  ngOnInit(): void {
    const salvo = localStorage.getItem('resultadoDetalhado');
    this.resultadoDetalhado = salvo ? JSON.parse(salvo) : [];

    // Limpa logo após carregar
    localStorage.removeItem('resultadoDetalhado');

    console.log('Resultado recebido:', this.resultadoDetalhado);
    this.resultado();
  }


  resultado() {
    this.resul = this.resultadoDetalhado.find(r => r.id == 5)

    this.resultadoDetalhado.forEach(r => {
      console.log(r.options)
      r.options.forEach((o: any) => {
        if (o.correta && o.selecionada) {
          console.log("verdadeira")
          this.i++
        }

      });
    });

    this.resul = (this.i / this.resultadoDetalhado.length) * 100
  }

  get total() {
    if (this.resul >= 70) {
      return "Aprovado"
    } else {
      return "Reprovado"
    }
  }
}

