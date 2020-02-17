import { Url } from 'url'

export class Airports {

 
    name: string
    cityName: string
    nameEn: string
    cityNameEn: string
    iataCode: string
    timeStamp: string
  


}

export class selectedAirports {

  
    iataCode: string
    name: string
    cityName: string
    phoneNumber: number
    flightBoardLink:Url
    wikipediaLink:Url
    websiteLink:Url
    cityWeatherLink: Url
    description: null
    imageUrl:Url
    hasAnyTerminal: true
    timeStamp: null
  

  }
