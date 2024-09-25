<template>
  <GoogleMap api-key="YOUR_GOOGLE_MAPS_API_KEY" mapId="DEMO_MAP_ID" :center="center" :zoom="15" class="w-full h-[500px]">
    <AdvancedMarker :options="markerOptions" :pin-options="pinOptions" />
  </GoogleMap>
</template>

<script setup>
import { GoogleMap, AdvancedMarker } from 'vue3-google-map'

const center = { lat: 40.689247, lng: -74.044502 }
const markerOptions = { position: center, label: 'L', title: 'LADY LIBERTY' }
const pinOptions = { background: '#FBBC04' }
</script>