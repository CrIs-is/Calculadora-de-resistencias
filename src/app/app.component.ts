import { Component, OnInit } from '@angular/core';
import { Banda} from './interfaz';
import { colors } from '../assets/colores';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./estilos.css']
})
export class AppComponent implements OnInit{

  public bandaCinco = false;

  cambio: string;
  bo = false;
  public colores;
  public calculo;
  public selecciono = false;

  public tolerancias;

  public banda1:any={
    nombre:'',
    color:'',
    texto:'',
    valor:null,
    multiplicador:0,
    tolerancia: ''
  };
  public banda2:any ={
    nombre:'',
    color:'',
    valor:null,
    multiplicador:0,
    tolerancia: ''
  };
  public banda3:any ={
    nombre:'',
    color:'',
    valor:null,
    multiplicador:0,
    tolerancia: ''
  };
  public banda4:any ={
    nombre:'',
    color:'',
    valor:null,
    multiplicador:0,
    tolerancia: ''
  };
  public banda5:any ={
    nombre:'',
    color:'',
    valor:null,
    multiplicador:0,
    tolerancia: ''
  };

  ultimaBanda : string = "campo";

  public bandas = [this.banda1,this.banda2,this.banda3,this.banda4,this.banda5]
  
  constructor(private spinner: NgxSpinnerService){
  }

  public multiplicadores=[];
  ngOnInit(){ 
    this.multiplicadores = colors
    this.colores = colors.filter((n:any)=> n.valor != null)
    this.tolerancias = this.colores.filter((n: any) => n.tolerancia !== '' )
    console.log(this.multiplicadores)
  }

  getColor(evento,position){
    this.bandas[position] = this.colores[evento] 
    console.log(this.bandas[position])
    this.resultado();
  }

  multiplicador(evento){
    this.bandas[2] = this.multiplicadores[evento] 
    console.log(this.bandas[2]);
    
    this.resultado();
  }

  toleran(evento){
    this.bandas[3] = this.tolerancias[evento.target.value]
    this.selecciono = true;

  }

  cuatroBandas(){
    this.cambio = "Cambiando a 4 bandas"
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 1 seconds */
      this.spinner.hide();
    }, 2000);
  
    this.bandaCinco = false;
    this.resultado();
  }

  cincoBandas(){
    this.cambio = "Cambiando a 5 bandas"
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 1 seconds */
      this.spinner.hide();
    }, 2000);
  
    this.bandaCinco = true
    this.resultado();
  }

  //CALCULANDO TOTAL Y FORMATEANDO CIFRA
  resultado(){
    
    //CALCULANDO TOTAL CON 4 BANDAS
  if(!this.bandaCinco){

    
    if(this.bandas[0].valor == 0 && this.bandas[1].valor == 0){
      this.calculo = 0;
    }
    else{
      const sum = this.bandas[0].valor+''+this.bandas[1].valor;
      const resultado = parseInt(sum) * this.bandas[2].multiplicador
      console.log(resultado);
  
      this.calculo = resultado +"";
      if(this.bandas[2].nombre == 'Rojo'){
        if(this.bandas[0].valor == 0){
          this.calculo = this.calculo;
        }else{
          this.calculo = (this.calculo[0]+'.'+this.calculo[1]+'k');
        }    
      }
      else if(this.bandas[2].nombre == 'Naranja'){
        if(this.bandas[0].valor == 0){
          this.calculo = (this.calculo[0]+'k');
        }else{
          this.calculo = (this.calculo[0]+this.calculo[1]+'k');
        }  
      }
      else if(this.bandas[2].nombre == 'Amarillo'){
        this.calculo = this.calculo+'K';
      }
      else if(this.bandas[2].nombre == 'Verde'){
        if(this.bandas[0].valor == 0){
          this.calculo = this.calculo+'K';
        }else{
          this.calculo = (this.calculo[0]+'.'+this.calculo[1]+'M');
        }  
      }
      else if(this.bandas[2].nombre == 'Azul' ){
        if(this.bandas[0].valor == 0){
          this.calculo = (this.calculo[0]+'M');
        }else{
          this.calculo = (this.calculo[0]+this.calculo[1]+'M');
        }  
      }
      else if(this.bandas[2].nombre == 'Violeta'){
        this.calculo = this.calculo+'M';
      }
      else if(this.bandas[2].nombre == 'Gris'){
        if(this.bandas[0].valor == 0){
          this.calculo = (this.calculo +'M');
        }else{
          this.calculo = (this.calculo[0]+'.'+this.calculo[1]+'G');
        }  
      }
      else if(this.bandas[2].nombre == 'Blanco'){
        if(this.bandas[0].valor == 0){
          this.calculo = this.calculo * 100;
          this.calculo = (this.calculo +'M');
        }else{
          this.calculo = (this.calculo[0]+'.'+this.calculo[1]+'G');
        }  
      }
      else if(this.bandas[2].nombre == 'Plateado'){
        if(this.bandas[0].valor == 0){
          this.calculo = resultado.toFixed(2) ;
        } 
        else{
          this.calculo = resultado.toFixed(2) ;

        }
      }
      else if(this.bandas[2].nombre == 'Dorado'){
        if(this.bandas[0].valor == 0){
          this.calculo = resultado.toFixed(1) ;
        } 
        else{
          this.calculo = resultado.toFixed(1) ;

        }
      }

    else{
        this.calculo = resultado 
      }
    }
  }

    //CALCULANDO TOTAL CON 5 BANDAS
    
  if(this.bandaCinco){
    const sum = this.bandas[0].valor+''+this.bandas[1].valor+''+this.bandas[4].valor;
    const resultado = parseInt(sum) * this.bandas[2].multiplicador;
    console.log(resultado);

    if((this.bandas[0].valor == 0 && this.bandas[1].valor == 0 && this.bandas[4].valor == 0) || this.bandas[4].valor == null ){
      this.calculo = 0;
    }
    else{
      this.calculo = resultado + "";
      if(this.bandas[2].nombre == 'Marrón'){
        if(this.bandas[0].valor == 0){
          this.calculo = resultado;
        }else{
          this.calculo = (this.calculo[0]+'.'+this.calculo[1]+this.calculo[2]+'k');
        }

      }
      else if(this.bandas[2].nombre == 'Rojo'){
          if(this.bandas[0].valor == 0){
            this.calculo = (this.calculo[0]+'.'+this.calculo[1]+this.calculo[2]+'k');
          }else{
            this.calculo = (this.calculo[0]+this.calculo[1]+'.'+this.calculo[2]+'k');
          }
  
      }
      else if(this.bandas[2].nombre == 'Naranja'){
          if(this.bandas[0].valor == 0){
            this.calculo = resultado+"K";
          }else{
            this.calculo = (this.calculo[0]+this.calculo[1]+this.calculo[2]+'k');
          }
  
      }
      else if(this.bandas[2].nombre == 'Amarillo'){
        if(this.bandas[0].valor == 0){
          this.calculo = resultado + "K";
        }else{
          this.calculo = (this.calculo[0]+'.'+this.calculo[1]+this.calculo[2]+'M');
        }

      }

      else if(this.bandas[2].nombre == 'Verde'){
        if(this.bandas[1].valor == 0 && this.bandas[0].valor == 0){
          this.calculo = (this.calculo[0]+this.calculo[1]+this.calculo[2]+'K');
        }
        else if(this.bandas[0].valor == 0){
          this.calculo = (this.calculo[0]+"."+this.calculo[1]+this.calculo[2]+'M');
        } else{
          this.calculo = (this.calculo[0]+this.calculo[1]+'.'+this.calculo[2]+'M');
        }

    }else if(this.bandas[2].nombre == 'Azul'){
      if(this.bandas[0].valor == 0){
        this.calculo = resultado+"M";
      }else{
        this.calculo = (this.calculo[0]+this.calculo[1]+this.calculo[2]+'M');
      }
    }
    else if(this.bandas[2].nombre == 'Violeta'){
      if(this.bandas[0].valor == 0){
        this.calculo = resultado + "M";
      }else{
        this.calculo = (this.calculo[0]+'.'+this.calculo[1]+this.calculo[2]+'G');
      }
    }
    else if(this.bandas[2].nombre == 'Gris'){
      if(this.bandas[1].valor == 0 && this.bandas[0].valor == 0){
        this.calculo = (this.calculo[0]+this.calculo[1]+this.calculo[2]+'M');
      }
      else if(this.bandas[0].valor == 0){
        this.calculo = (this.calculo[0]+"."+this.calculo[1]+this.calculo[2]+'G');
      }else{
        this.calculo = (this.calculo[0]+this.calculo[1]+'.'+this.calculo[2]+'G');
      }  
    }
    else if(this.bandas[2].nombre == 'Blanco'){
      
      if(this.bandas[1].valor == 0 && this.bandas[0].valor == 0){
        this.calculo = this.calculo * 100  + "M";
        
      }
      else if(this.bandas[0].valor == 0){
        this.calculo = (this.calculo[0]+"."+this.calculo[1]+'G');
      }else{
        this.calculo = (this.calculo[0]+this.calculo[1]+'.'+this.calculo[2]+'G');
      }  
    }

          
          
          
        }    
      }
  }
  
      
  
}
