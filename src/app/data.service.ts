import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {}

  filterById(m){
    return data.find(e => e.id === +m);
      }

  filterByCity(s){
    return data.filter(e => e.city.includes(s) || e.airport.includes(s));

      }
  getData(){
    return data;
  }

}

let data = [
  {
    id:1,
    city: 'تهران',
    airport: 'امام خمینی',
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'.'
  },
  {
    id: 2,
    city: 'تهران',
    airport: 'مهرآباد',
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'.'
  },
  {
    id: 3,
    city: 'یزد',
    airport: ' هاشمی نژاد',
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'.'
  },
  {
    id: 4,
    city: 'اصفهان',
    airport: ' هاشمی نژاد',
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'.'
  },
  {
    id: 5,
    city: 'مشهد',
    airport: '_',
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'.'
  },
  {
    id: 6,
    city: 'شیراز',
    airport: ' هاشمی نژاد',
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'.'
  },
  {
    id: 7,
    city: 'یزد',
    airport: ' هاشمی نژاد',
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'.'
  },
  {
    id: 8,
    city: 'اصفهان',
    airport: ' هاشمی نژاد',
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'.'
  },
  {
    id: 9,
    city: 'مشهد',
    airport: "_",
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'.'
  },
  {
    id: 10,
    city: 'شیراز',
    airport: ' هاشمی نژاد',
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'.'
  },
  {
    id: 11,
    city: 'یزد',
    airport: ' هاشمی نژاد',
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'.'
  },
  {
    id: 12,
    city: 'اصفهان',
    airport: ' هاشمی نژاد',
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'.'
  },
  {
    id:13,
    city: 'مشهد',
    airport: "_",
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'.'
  },
  {
    id: 14,
    city: 'شیراز',
    airport: ' هاشمی نژاد',
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'.'
  },
  {
    id: 15,
    city: 'یزد',
    airport: ' هاشمی نژاد',
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'.'
  },
  {
    id: 16,
    city: 'اصفهان',
    airport: ' هاشمی نژاد',
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'.'
  },
  {
    id: 17,
    city: 'مشهد',
    airport: "_",
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'.'
  },
  {
    id: 18,
    city: 'شیراز',
    airport: ' هاشمی نژاد',
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'.'
  },
  {
    id: 19,
    city: 'یزد',
    airport: ' هاشمی نژاد',
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'.'
  },
  {
    id: 20,
    city: 'اصفهان',
    airport: ' هاشمی نژاد',
    phone: '051-33400001',
    website: 'mashhad.airport.ir',
    wikipedia:"https://fa.wikipedia.org/wiki/%D9%81%D8%B1%D9%88%D8%AF%DA%AF%D8%A7%D9%87_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C_%D8%B4%D9%87%DB%8C%D8%AF_%D9%87%D8%A7%D8%B4%D9%85%DB%8C%E2%80%8C%D9%86%DA%98%D8%A7%D8%AF_%D9%85%D8%B4%D9%87%D8%AF",
    picture:'.'
  },


];
