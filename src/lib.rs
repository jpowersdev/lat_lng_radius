extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
#[derive(Debug, Copy, Clone)]
pub struct Coords {
    pub lat: Delta,
    pub lng: Delta,
}

#[wasm_bindgen]
#[derive(Debug, Copy, Clone)]
pub struct Delta {
    pub min: f64,
    pub max: f64,
}

#[wasm_bindgen]
pub fn within_radius(lat: f64, lng: f64, rad: f64) -> Coords {
    let deg_per_km = 0.009;
    let radius = rad.to_radians() * deg_per_km;

    let lat_min = lat.to_radians() - radius;
    let lat_max = lat.to_radians() + radius;
    let lng_min = lng.to_radians() - (radius / lat.to_radians().cos());
    let lng_max = lng.to_radians() + (radius / lat.to_radians().cos());

    let coords = Coords {
        lat: Delta {
            min: lat_min.to_degrees(),
            max: lat_max.to_degrees(),
        },
        lng: Delta {
            min: lng_min.to_degrees(),
            max: lng_max.to_degrees(),
        },
    };
    return coords;
}
