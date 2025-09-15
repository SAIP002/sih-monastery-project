// ===================================
// THIS IS THE MODULE FOR PERSON 1 (API & Data Architect)
// ===================================

const khangAPI = {
    
    // This function is the main "contract" with Person 3.
    // It will check the user's location and decide what Khang should do.
    getCurrentAction: function() {
        
        // For now, we will just return a simple "idle" action.
        // Later, you will add the logic here to check the user's location
        // against the scripts.json file.
        
        // Example of what you will return when a match is found:
        // return { action: 'point', text: 'This is the sacred statue!' };
        
        // The default action when nothing is nearby:
        return { action: 'idle', text: null };
    }
};

// You can add your Google Maps initialization code and event listeners below this.
// For example:
/*
let panorama;
function initPano() {
  // Your Google Street View setup code...
  
  panorama.addListener('pov_changed', () => {
    // Every time the view changes, we check for an action.
    const instruction = khangAPI.getCurrentAction();
    console.log(instruction); // Use console.log for testing your work!
  });
}
*/