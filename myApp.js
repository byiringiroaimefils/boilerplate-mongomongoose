require('dotenv').config();
const mongoose=require('mongoose')
const myId='mongodb+srv://aimefils173:filsprimuaime@cluster0.bn4kbqu.mongodb.net/test?retryWrites=true&w=majority';

  
mongoose.connect(myId, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'people', 
  useFindAndModify: false,
  useCreateIndex: true,
  serverSelectionTimeoutMS: 5000,
}).then((data) => {
  console.log("connected",data)
})


const personSchema=new mongoose.Schema({
    name:{
      type: String,
      required: true
    },
    age:Number,
    favoriteFoods:[String]
})
    
let Person = mongoose.model('Person',personSchema)

const createAndSavePerson = (done) => {
  let person=new Person({
    name:'Aime Fils',
    age:17,
    favoriteFoods:['pizza','burger']
  })
  person.save(function(err, data) {
    if(err){
      return done(err);
    }
    else 
      done(null,data)
  
  });
}
const arrayOfPeople=[
  {
    name:"filsprimu",
   age:29,
   favoriteFoods:['pizza','keyy']
  },
  {
    name:"primu",
   age:9,
   favoriteFoods:['pizza','food']
  }
  
]
const createManyPeople = (arrayOfPeople, done) => {
    Person.create(arrayOfPeople, function (err, data) {
        if (err) {
            console.error(err);
            return done(err);
        } else {
            return done(null, data);
        }
    });
};

// const createManyPeople = (arrayOfPeople, done) => {
//     Person.create(arrayOfPeople, function (err, data) {
//       if (err) {
//       console.log(err);
//       } else {
//         return done(null, data); 
//       }
//     });

// };

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
