`use strict`

// Cuando hago CLICK en Header-svg,
    // Header-nav se le añade `isActive`

$(`.Header-svg`).click(function(){
    $(`.Header-nav`).toggleClass(`isActive`)
})