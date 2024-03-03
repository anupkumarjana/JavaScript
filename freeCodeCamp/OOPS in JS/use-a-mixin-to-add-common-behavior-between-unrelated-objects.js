let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line
let glideMixin = function(obj) {
  obj.glide = function() {
    console.log("Gliding!");
  };
};

// Use glideMixin on the bird object to give it the glide method
glideMixin(bird);

// Use glideMixin on the boat object to give it the glide method
glideMixin(boat);


// Use glideMixin to give both bird and boat the ability to glide
Object.assign(bird, glideMixin);
Object.assign(boat, glideMixin);