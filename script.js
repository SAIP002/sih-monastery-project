// ===================================
// GLOBAL VARIABLES
// ===================================
let panorama;

// ===================================
// MAIN API MODULE (PERSON 1)
// ===================================
const khangAPI = {
    poiData: [], // This will store our points of interest from scripts.json

    // New function to load the data from your JSON file
    async loadPOIData() {
        try {
            const response = await fetch('scripts.json');
            this.poiData = await response.json();
            console.log("Point of Interest data loaded successfully!");
        } catch (error) {
            console.error("Error loading POI data:", error);
        }
    },
    
    // This is the main "contract" function that we are bringing to life
    getCurrentAction: function() {
        const DISTANCE_THRESHOLD = 25; // How close the user needs to be (in meters)

        if (!panorama || !this.poiData.length) {
            // Make sure the panorama and POI data are ready
            return { action: 'idle', text: null };
        }

        const userPos = panorama.getPosition();

        // FIX: Check if the position is available before using it.
        // If userPos is not ready yet, just return and wait for the next check.
        if (!userPos) {
            return { action: 'idle', text: null };
        }

        const userLat = userPos.lat();
        const userLng = userPos.lng();

        // Loop through all our points of interest
        for (const poi of this.poiData) {
            const distance = getDistanceBetweenCoords(
                userLat,
                userLng,
                poi.position.lat,
                poi.position.lng
            );

            // Check if the user is close enough to this point
            if (distance < DISTANCE_THRESHOLD) {
                // We found a match! Return the action and text for this POI.
                return {
                    action: poi.animation,
                    text: poi.text
                };
            }
        }
        
        // If the loop finishes and no match was found, return idle.
        return { action: 'idle', text: null };
    }
};

// ===================================
// INITIALIZATION FUNCTION (Entry Point)
// ===================================
function initPano() {
  khangAPI.loadPOIData(); // Load the point of interest data first

  // Define the starting location for the Street View
  const startPosition = { lat: 27.2885, lng: 88.5714 }; // Example: Rumtek Monastery

  // Create the Google Street View panorama object
  panorama = new google.maps.StreetViewPanorama(
    document.getElementById("pano"), { // This needs a <div id="pano"> in your HTML
      position: startPosition,
      pov: { heading: 34, pitch: 10 },
      zoom: 1,
      addressControl: false,
      showRoadLabels: false
    }
  );
  
  // Add a listener that checks for nearby points every time the view changes
  panorama.addListener('pov_changed', () => {
    const instruction = khangAPI.getCurrentAction();
    console.log(instruction); // Use this for testing your logic!
  });
}

// ===================================
// HELPER FUNCTION
// ===================================
// Calculates distance between two lat/lng coordinates in meters
function getDistanceBetweenCoords(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // metres
    const φ1 = lat1 * Math.PI/180; // φ, λ in radians
    const φ2 = lat2 * Math.PI/180;
    const Δφ = (lat2-lat1) * Math.PI/180;
    const Δλ = (lon2-lon1) * Math.PI/180;

    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    const d = R * c; // in metres
    return d;
}