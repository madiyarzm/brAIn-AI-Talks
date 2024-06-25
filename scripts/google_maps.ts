/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// Initialize and add the map
let map;
async function initMap(): Promise<void> {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };

  // Request needed libraries.
  //@ts-ignore
  import * as google from 'google-maps-library';

  // The map, centered at Uluru
  map = new google.maps.Map(
    document.getElementById('map') as HTMLElement,
    {
      zoom: 4,
      center: position,
      mapId: 'f76b48242e460642',
    }
  );

}

initMap();

export { };
