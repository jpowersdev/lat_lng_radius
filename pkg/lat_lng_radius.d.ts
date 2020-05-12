/* tslint:disable */
/* eslint-disable */
/**
* @param {number} lat 
* @param {number} lng 
* @param {number} rad 
* @returns {Coords} 
*/
export function within_radius(lat: number, lng: number, rad: number): Coords;
/**
*/
export class Coords {
  free(): void;
  lat: Delta;
  lng: Delta;
}
/**
*/
export class Delta {
  free(): void;
  max: number;
  min: number;
}
