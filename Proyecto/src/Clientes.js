/*

Usaremos la db "Clientes".
En las que estaran almacenadas una serie de datos con los que podremos dessarollar nuestras querrys.
 


Estructura de documento:  
 Nombre: String 
 Apellido: String 
 Fecha: Date Activo: 
 Boolean 
 Tarjeta_credito: 
 Int Municipio:String 
 DNI: Object 
    {     
     Numero: String     
     Renovado: Boolean 
    
    } 
    
Persona: Object
 
    {     
         Altura: Int   (m) 
         Intereses: Array
         Peso: Int (kg)

     }
*/











db.Clientes.insertMany([


                                            {
        
            nombre: "Pablo",
            apellido: "García",
            fecha: new Date("1994-05-23"),                      
            activo: true,
            tarjeta_credito: null,
            municipio:"Mairena Del Alcor",
            dni: 
                                    
                 {
                numero:"1234567K",
                renovado:true
                 },
                                   
                 Personal:
            {
            altura: 1.88,
            intereses:["futbol","videojuegos"],
            peso: 72,
            actividad:[20,0,7,43,5,6,7,3,23,65]
                            }
                                   
                                   
                            },
                        
                                            ,
                                            {
        
            nombre: "Antonio",
            apellido: "Guevara",
            fecha: new Date("1984-12-22"),                      
            activo: false,
            tarjeta_credito: 1234567789,
            municipio:"Mairena Del Alcor",
            dni: 
                                    
                 {
                numero:"6478965K",
                renovado:false
                 },
                                   
                 Personal:
            {
            altura: 1.72,
            intereses:["boxeo","tenis"],
            peso: 72,
            actividad:[2,5,6,78,24,56,10,8,9,1]
                            }
                                   
                                   
                            },
                        
                                            ,
                                            {
        
            nombre: "Malcom",
            apellido: "Gedo",
            fecha: new Date("2001-04-13"),                      
            activo: true,
            tarjeta_credito: null,
            municipio:"Viso Del Alcor",
            dni: 
                                    
                 {
                numero:"6451296J",
                renovado:false
                 },
                                   
                 Personal:
            {
            altura: 1.94,
            intereses:["baloncesto","musica"],
            peso: 90,
            actividad:[1,2,3,4,5,6,6,6,7,9]
                            }
                                   
                                   
                            },
                        
                                            ,
                                            {
        
            nombre: "Ricardo",
            apellido: "Martinez",
            fecha: new Date("1990-01-02"),                      
            activo: false,
            tarjeta_credito: null,
            municipio:"Carmona",
            dni: 
                                    
                 {
                numero:"9765430P",
                renovado:true
                 },
                                   
                 Personal:
            {
            altura: 1.60,
            intereses:["judo","animales"],
            peso: 50,
            actividad:[1,3,4,5,6,7,3,43,6,32]
                            }
                                   
                                   
                            },
                        
                                            ,
                                            {
        
            nombre: "Juan",
            apellido: "Martinez",
            fecha: new Date("1998-08-23"),                      
            activo: true,
            tarjeta_credito: 987654567,
            municipio:"Utrera",
            dni: 
                                    
                 {
                numero:"64578934U",
                renovado:false
                 },
                                   
                 Personal:
            {
            altura: 1.98,
            intereses:["rugby","futbol"],
            peso: 90,
            actividad:[10,0,7,43,5,6,7,3,3,5]
                            }
                                   
                                   
                            },
                        
                                            ,
                                            {
        
            nombre: "Alfredo",
            apellido: "Gonzalez",
            fecha: new Date("2003-05-11"),                      
            activo: false,
            tarjeta_credito: null,
            municipio:"Alcala De Guadaira",
            dni: 
                                    
                 {
                numero:"96836590A",
                renovado:false
                 },
                                   
                 Personal:
            {
            altura: 1.75,
            intereses:["futbol","baloncesto"],
            peso: 72,
            actividad:[24,0,7,43,5,6,7,3,2,6]
                            }
                                   
                                   
                            },
                        
                                            ,
                                            {
        
            nombre: "Antonio",
            apellido: "Delgado",
            fecha: new Date("2000-02-02"),                      
            activo: true,
            tarjeta_credito: null,
            municipio:"Mairena Del Alcor",
            dni: 
                                    
                 {
                numero:"8456349K",
                renovado:false
                 },
                                   
                 Personal:
            {
            altura: 1.82,
            intereses:["futbol","cocinar","videojuegos"],
            peso: 68,
            actividad:[7,0,7,3,5,6,7,3,43,15]
                            }
                                   
                                   
                            },
                        
                                            ,
                                            {
        
            nombre: "Benito",
            apellido: "Castro",
            fecha: new Date("1980-01-14"),                      
            activo: false,
            tarjeta_credito: 847637893,
            municipio:"Viso Del Alcor",
            dni: 
                                    
                 {
                numero:"7363894K",
                renovado:true
                 },
                                   
                 Personal:
            {
            altura: 1.84,
            intereses:["jiujitsu","yoga"],
            peso: 79,
            actividad:[12,12,23,12,13,14,2,3,4,5]
                            }
                                   
                                   
                            },
                        
                                            ,
                                            {
        
            nombre: "Rosa",
            apellido: "Ruiz",
            fecha: new Date("1974-05-19"),                      
            activo: true,
            tarjeta_credito: null,
            municipio:"Alcala De Guadaira",
            dni: 
                                    
                 {
                numero:"64538345K",
                renovado:false
                 },
                                   
                 Personal:
            {
            altura: 1.72,
            intereses:["correr","leer"],
            peso: 72,
            actividad:[1,4,6,8,3,54,67,12,45,6]
                            }
                                   
                                   
                            },
                        
                                            ,
                                            {
        
            nombre: "Pablo",
            apellido: "Ugarte",
            fecha: new Date("1990-03-12"),                      
            activo: false,
            tarjeta_credito: 748394656,
            municipio:"Viso Del Alcor",
            dni: 
                                    
                 {
                numero:"85749047T",
                renovado:true
                 },
                                   
                 Personal:
            {
            altura: 1.74,
            intereses:["futbol","cocinar"],
            peso: 77,
            actividad:[20,0,7,43,5,6,7,3,23,65]
                            }
                                   
                                   
                            },
                        
                                            ,
                                            {
        
            nombre: "Ricardo",
            apellido: "García",
            fecha: new Date("2002-06-19"),                      
            activo: false,
            tarjeta_credito: null,
            municipio:"Utrera",
            dni: 
                                    
                 {
                numero:"9586745G",
                renovado:false
                 },
                                   
                 Personal:
            {
            altura: 1.80,
            intereses:["dormir","videojuegos"],
            peso: 64,
            actividad:[6,34,56,7,3,2,4,6,64,2]
                            }
                                   
                                   
                            },
                        
                                            ,
                                            {
        
            nombre: "Ricardo",
            apellido: "Benitez",
            fecha: new Date("1992-07-23"),                      
            activo: true,
            tarjeta_credito: null,
            municipio:"Mairena Del Alcor",
            dni: 
                                    
                 {
                numero:"5745934K",
                renovado:false
                 },
                                   
                 Personal:
            {
            altura: 1.89,
            intereses:["rugby","futbol"],
            peso: 69,
            actividad:[2,30,27,13,5,6,7,3,25,67]
                            }
                                   
                                   
                            },
                        
                                            ,
                                            {
        
            nombre: "Pablo",
            apellido: "Chincoa",
            fecha: new Date("1978-04-09"),                      
            activo: false,
            tarjeta_credito: 9095865456,
            municipio:"Viso Del Alcor",
            dni: 
                                    
                 {
                numero:"0485749R",
                renovado:false
                 },
                                   
                 Personal:
            {
            altura: 1.68,
            intereses:["futbol","videojuegos"],
            peso: 74,
            actividad:[3,0,7,4,5,6,7,3,3,6]
                            }
                                   
                                   
                            },
                        
                                            ,
                                            {
        
            nombre: "Camilo",
            apellido: "Arango",
            fecha: new Date("1998-07-21"),                      
            activo: false,
            tarjeta_credito: null,
            municipio:"Alcala De Guadaira",
            dni: 
                                    
                 {
                numero:"4585854J",
                renovado:false
                 },
                                   
                 Personal:
            {
            altura: 1.58,
            intereses:["billar","bolos"],
            peso: 63,
            actividad:[4,7,2,7,9,4,12,4,56,1]
                            }
                                   
                                   
                            },
                        
                                            ,
                                            {
        
            nombre: "Manolo",
            apellido: "Romero",
            fecha: new Date("2001-01-05"),                      
            activo: true,
            tarjeta_credito: 4563474593,
            municipio:"Viso Del Alcor",
            dni: 
                                    
                 {
                numero:"9684567K",
                renovado:true
                 },
                                   
                 Personal:
            {
            altura: 1.76,
            intereses:["futbol","mma"],
            peso: 70,
            actividad:[1,23,4,4,2,4,5,3,65,5,6]
                            }
                                   
                                   
                            },
                        
                                            ,
                                            {
        
            nombre: "Juanma",
            apellido: "Dominguez",
            fecha: new Date("1993-08-23"),                      
            activo: false,
            tarjeta_credito: null,
            municipio:"Mairena Del Alcor",
            dni: 
                                    
                 {
                numero:"9678567K",
                renovado:false
                 },
                                   
                 Personal:
            {
            altura: 1.68,
            intereses:["ajedrez","parchis"],
            peso: 76,
            actividad:[2,5,6,3,5,2,4,4,5,2,4]
                            }
                                   
                                   
                            },
                        
                                            ,
                                            {
        
            nombre: "Pedro",
            apellido: "Rodriguez",
            fecha: new Date("1997-01-17"),                      
            activo: true,
            tarjeta_credito: 26347449374,
            municipio:"Carmona",
            dni: 
                                    
                 {
                numero:"57458455H",
                renovado:false
                 },
                                   
                 Personal:
            {
            altura: 1.70,
            intereses:["baloncesto","videojuegos"],
            peso: 64,
            actividad:[4,6,5,3,6,8,12,34,5,5,]
                            }
                                   
                                   
                            },
                        
                                            ,
                                            {
        
            nombre: "Antonio",
            apellido: "Muniain",
            fecha: new Date("1991-08-10"),                      
            activo: false,
            tarjeta_credito: 17233494234,
            municipio:"Carmona",
            dni: 
                                    
                 {
                numero:"5758563SK",
                renovado:true
                 },
                                   
                 Personal:
            {
            altura: 1.68,
            intereses:["escribir","leer"],
            peso: 72,
            actividad:[5,6,7,4,3,6,3,5,7,8]
                            }
                                   
                                   
                            },
                        
                                            ,
                                            {
        
            nombre: "Javier",
            apellido: "Ibarra",
            fecha: new Date("1972-01-16"),                      
            activo: false,
            tarjeta_credito: 4744748934,
            municipio:"Carmona",
            dni: 
                                    
                 {
                numero:"34478947I",
                renovado:false
                 },
                                   
                 Personal:
            {
            altura: 1.19,
            intereses:["comics","cocina"],
            peso: 72,
            actividad:[1,4,3,5,6,4,8,9,1,5]
                            }
                                   
                                   
                            },
                        
                                            ,
                                            {
        
            nombre: "Ismael",
            apellido: "Gonzalez",
            fecha: new Date("1965-01-30"),                      
            activo: true,
            tarjeta_credito: null,
            municipio:"Mairena Del Alcor",
            dni: 
                                    
                 {
                numero:"1234567K",
                renovado:false
                 },
                                   
                 Personal:
            {
            altura: 1.68,
            intereses:["andar","cine"],
            peso: 62,
            actividad:[2,0,7,3,5,3,6,3,5,65]
                            }
                                   
                                   
                            },
                        
                                            ,
                                            {
        
            nombre: "Santiago",
            apellido: "Valls",
            fecha: new Date("2003-04-13"),                      
            activo: false,
            tarjeta_credito: 36746438452,
            municipio:"Alcala De Guadaira",
            dni: 
                                    
                 {
                numero:"6578367K",
                renovado:false
                 },
                                   
                 Personal:
            {
            altura: 1.97,
            intereses:["futbol","boxeo"],
            peso: 77,
            actividad:[5,7,23,4,6,7,3,4,5,1,2]
                            }
                                   
                                   
                            },
                        
                                            ,
                                            {
        
            nombre: "Jose Maria",
            apellido: "Garcia",
            fecha: new Date("2001-12-12"),                      
            activo: false,
            tarjeta_credito: 674598455,
            municipio:"Mairena Del Alcor",
            dni: 
                                    
                 {
                numero:"1457594Z",
                renovado:true
                 },
                                   
                 Personal:
            {
            altura: 1.83,
            intereses:["boxeo","videojuegos","cine","musica","cantar","correr"],
            peso: 74,
            actividad:[2,4,6,34,,12,23,12,12,12,5,2]
                            }
                                   
                                   
                            },
                        
                                            ,
                                            {
        
            nombre: "Pablo",
            apellido: "Holgado",
            fecha: new Date("1997-03-14"),                      
            activo: true,
            tarjeta_credito: null,
            municipio:"Mairena Del Alcor",
            dni: 
                                    
                 {
                numero:"46474334Z",
                renovado:false
                 },
                                   
                 Personal:
            {
            altura: 1.56,
            intereses:["tenis","animales"],
            peso: 45,
            actividad:[34,1,4,7,5,4,2,9,5,3,4]
                            }
                                   
                                   
                            },
                        
                                            ,
                                            {
        
            nombre: "Raul",
            apellido: "Burgos",
            fecha: new Date("2001-02-13"),                      
            activo: false,
            tarjeta_credito: true,
            municipio:"Mairena Del Alcor",
            dni: 
                                    
                 {
                numero:"74983475V",
                renovado:false
                 },
                                   
                 Personal:
            {
            altura: 1.58,
            intereses:["ajedrez","parchis"],
            peso: 59,
            actividad:[2,5,3,24,5,6,3,1,3,5,3]
                            }
                                   
                                   
                            },
                        
                                            ,
                                            {
        
            nombre: "Dolores",
            apellido: "Garcia",
            fecha: new Date("1967-12-31"),                      
            activo: false,
            tarjeta_credito: null,
            municipio:"Mairena Del Alcor",
            dni: 
                                    
                 {
                numero:"5756748X",
                renovado:false
                 },
                                   
                 Personal:
            {
            altura: 1.60,
            intereses:["leer","cine"],
            peso: 56,
            actividad:[4,3,21,3,5,2,1,2,4,2,1]
        }
                                   
                                   
    },

]);
