import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {}

  filterByIata(m){
     let d = data.find(e => e.iataCode == m);

     if(d.airport === '_') d.airport = d.city;
     if(d.picture === '_') d.picture = 'no-pic.jpg';

     return d

      }

  filterByCity(s){
    return data.filter(e => e.city.includes(s) || e.airport.includes(s) || e.iataCode.includes(s));

      }
  getData(){
    return data;
  }

}

let data = [
  {
    iataCode:'DEF',
    city: 'تهران',
    airport: 'امام خمینی',
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'_'
  },
  {
    iataCode:'THR',
    city: 'تهران',
    airport: 'مهرآباد',
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'pic (1).jpg',
    terminals:[
      {
      airline:"زاگرس",
      terminal:"ترمینال1"
    },
    {
      airline:"کیش ایر",
      terminal:"ترمینال2"
    },
    {
      airline:"وارش",
      terminal:"ترمینال1"
    },
    {
      airline:"معراج",
      terminal:"ترمینال1"
    } ,
    {
      airline:"زاگرس",
      terminal:"ترمینال1"
    },
    {
      airline:"کیش ایر",
      terminal:"ترمینال2"
    },
    {
      airline:"وارش",
      terminal:"ترمینال1"
    },
    {
      airline:"معراج",
      terminal:"ترمینال1"
    },
    {
      airline:"زاگرس",
      terminal:"ترمینال1"
    },
    {
      airline:"کیش ایر",
      terminal:"ترمینال2"
    },
    {
      airline:"وارش",
      terminal:"ترمینال1"
    },
    {
      airline:"معراج",
      terminal:"ترمینال1"
    }
  ]
  },
  {
    iataCode:'CED',
    city: 'یزد',
    airport: ' هاشمی نژاد',
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'pic (6).jpg'
  },
  {
    iataCode:'SDF',
    city: 'اصفهان',
    airport: ' هاشمی نژاد',
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'pic (5).jpg'
  },
  {
    iataCode:'GED',
    city: 'مشهد',
    airport: '_',
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'pic (4).jpg'
  },
  {
    iataCode:'EES',
    city: 'شیراز',
    airport: ' هاشمی نژاد',
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'pic (3).jpg'
  },
  {
    iataCode:'LKI',
    city: 'یزد',
    airport: ' هاشمی نژاد',
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'pic (2).jpg'
  },
  {
    iataCode:'DFD',
    city: 'اصفهان',
    airport: ' هاشمی نژاد',
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'pic (1).jpg'
  },
  {
    iataCode:'DEF',
    city: 'مشهد',
    airport: "_",
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'pic (6).jpg'
  },
  {
    iataCode:'DEF',
    city: 'شیراز',
    airport: ' هاشمی نژاد',
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'pic (5).jpg'
  },
  {
    iataCode:'DFF',
    city: 'یزد',
    airport: ' هاشمی نژاد',
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'pic (4).jpg'
  },
  {
    iataCode:'BSR',
    city: 'اصفهان',
    airport: ' هاشمی نژاد',
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'pic (3).jpg'
  },
  {
    iataCode:'JFT',
    city: 'مشهد',
    airport: "_",
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'pic (2).jpg'
  },
  {
    iataCode:'ZEG',
    city: 'شیراز',
    airport: ' هاشمی نژاد',
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'pic (1).jpg'
  }
  

];
