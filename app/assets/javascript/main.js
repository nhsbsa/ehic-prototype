// ES6 or Vanilla JavaScript

accessibleAutocomplete.enhanceSelectElement({
  selectElement: document.querySelector('#eu-location-picker')
})

accessibleAutocomplete.enhanceSelectElement({
  selectElement: document.querySelector('#other-location-picker')
})

accessibleAutocomplete.enhanceSelectElement({
  selectElement: document.querySelector('#dual-location-picker-1')
})

accessibleAutocomplete.enhanceSelectElement({
  selectElement: document.querySelector('#dual-location-picker-2')
})
// if(document.querySelector('#other-location-picker')) {
//   accessibleAutocomplete.enhanceSelectElement({
//     selectElement: document.querySelector('#other-location-picker')
//   })
// }

// if(document.querySelector('#eu-location-picker')) {
//   accessibleAutocomplete.enhanceSelectElement({
//     selectElement: document.querySelector('#eu-location-picker')
//   })
// }

// if(document.querySelector('#efta-location-picker-3')) {
//   accessibleAutocomplete.enhanceSelectElement({
//     selectElement: document.querySelector('#efta-location-picker-3')
//   })
// }

if(document.querySelector('#location-picker-1')) {
  accessibleAutocomplete.enhanceSelectElement({
    selectElement: document.querySelector('#location-picker-1')
  })
}

if(document.querySelector('#location-picker-2')) { 
  accessibleAutocomplete.enhanceSelectElement({
    selectElement: document.querySelector('#location-picker-2')
  })
}

if(document.querySelector('#location-picker-3')) {
  accessibleAutocomplete.enhanceSelectElement({
    selectElement: document.querySelector('#location-picker-3')
  })
}
