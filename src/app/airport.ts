export interface IAirport {
 iataCode:string,
   city:string,
   airport:string,
   phone:string,
   website:string,
   wikipedia:string,
   picture:string,
   wentFlightterminals:
   [
     {
     airline:string,
     terminal:string,
     icon:string
   }
 ],
 backFlightterminals:[
   {
      airline:string,
      terminal:string,
      icon:string
    }
  ],

}

