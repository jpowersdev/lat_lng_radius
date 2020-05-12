# Lat/Lng Radius

This is a terrible package name. Please send suggestions.

This package was created so I could do a query within a specific radius around a given lat/lng.

Example usage:

```ts
function toKilometers(miles: number): number {
  return miles * 1.60934;
}

async function within_radius(latitude, longitude, radius) {
  const wasm = await import('@jpowersdev/lat_lng_radius');
  let temp: Coords = wasm.within_radius(
    latitude,
    longitude,
    toKilometers(radius)
  );
  return {
    lat: {
      min: temp.lat.min,
      max: temp.lat.max,
    },
    lng: {
      min: temp.lng.min,
      max: temp.lng.max,
    },
  };
}
```

This returns an object like this:

```ts
{
  lat: {
    min: 123,
    max: 456
  },
  lng: {
    min: 123,
    max: 456
  }
}
```

You could then build a query approximating this if statement:

```
if (
    lat > lat.min &&
    lat < lat.max &&
    lng > lng.min &&
    lng < lng.max
  ) {
  // do something
}
```

It's written in rust and converted to wasm, which is why you can't see the source code. If anyone is interested, I can send it to you. It's fairly basic.
