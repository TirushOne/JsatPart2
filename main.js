// myMovie object, decleared with "title" and "year" properties
let myMovie = {
    "title":"The Longest Day",
    "year":1964
};

console.log(JSON.stringify(myMovie));

// adding new properties
myMovie.rating = 5;
myMovie.summery = "World War II movie about the Normandy landings";

console.log(JSON.stringify(myMovie));

// updating the properties
myMovie.rating = 4;
myMovie.year = 1962;

console.log(JSON.stringify(myMovie));

// remove the summery property
delete myMovie.summery;

console.log(JSON.stringify(myMovie));