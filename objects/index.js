//Task 1: creating an InstagramPost() constructor function that takes in arguments

function InstagramPost(author, content, image_link, no_of_vievs, no_of_likes) {
  this.author = author;
  this.content = content;
  this.image_link = image_link;
  this.no_of_vievs = no_of_vievs;
  this.nno_of_likes = no_of_likes;
}

//Task 2: creating an Instagram post objects using the constructor function created above
const instapost1 = new InstagramPost(
  "Temilade",
  "JavaScript is easy and fun",
  "https://imagelink",
  "60 Views",
  "55 likes"
);

const instapost2 = new InstagramPost(
  "Sturten",
  "We are on a mission of training the next generation of competent Web Developers",
  "https://imagelink",
  "60k Views",
  "59k likes"
);



// Task 3a: Creating a factory function
let createPerson = function (name, age, location) {
  return {
    name: name,
    age: age,
    location: location,
    create() {
      console.log(name + " is " + age + " years old, he lives in " + location);
    },
  };
};

//Creating an object representing Musa from the factory function created above
let musa = createPerson("Musa", 19, "Lekki, Lagos State.");
musa.create();



//Task 3b: Creating a factory function that takes eng, govt, lit, crk as arguments.
let createJambScores = function (eng, govt, lit, crk) {
  return {
    eng: eng,
    govt: govt,
    lit: lit,
    crk: crk,
    create() {
      return (
        "English: " +
        eng +
        " Government: " +
        govt +
        " Literature: " +
        lit +
        " Cristian Religion Knowledge: " +
        crk
      );
    },
  };
};

//Creating an object representing Musa's JAMB Scores from the factory function created above
let musa_jamb_score = createJambScores(70, 85, 82, 94);
console.log(musa_jamb_score.create());



/* Task 4: The different ways of cloning an object, with examples for each of them.

    1. Using the spread operator
        Example:
        const data = { name: "Alice", age: 26 }
        const copy1 = { ...data }

    2. Calling the Object.assign() function
        Example:
        const data = { name: "Alice", age: 26 }
        const copy2 = Object.assign({}, data)

    3. Using JSON parsing
        Example:
        const data = { name: "Alice", age: 26 }
        const copy3 = JSON.parse(JSON.stringify(data))

    4. Using the structuredClone() function
        Example:
        const data = { name: "Alice", age: 26 }
        const copy4 = structuredClone(data)
*/



//Task 5: Loging out each of the presidential candidates
const presidentialCandidates = {
  AAC: "Omoyele Sowore",
  ACCORD: "Christopher Imumolen",
  APC: "Bola Ahmed Tinubu",
  LP: "Peter Obi",
  NNPP: "Rabiu Kwankwaso",
  PDP: "Atiku Abubakar",
};


for (let [pp, candidate] of Object.entries(presidentialCandidates)){
  console.log(`${candidate} is the presidential candidate of ${pp}`)

}
