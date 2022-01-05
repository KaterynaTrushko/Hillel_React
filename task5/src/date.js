import faker from "faker";

export const HASHTAG = [
  'hot_news',
  'events',
  'weather',
  'crime',
];

 function makeAutor(count = 4) {
  return Array(4).fill('').map(() => (
    faker.name.firstName() +" "+ faker.name.lastName()
  ));
}

export const AUTORS = makeAutor();

function randomIndex(arr){
  return faker.random.number({ min: 0, max: arr.length - 1 });
  console.log(HASHTAG[randomIndex(HASHTAG)]);
  console.log(AUTORS[randomIndex(AUTORS)]);
};

export function make() {

  // const indHashtag = faker.random.number({ min: 0, max: HASHTAG.length - 1 })

  return {
    id: faker.datatype.uuid(),
    title: "The latest events in " + faker.address.city(),
    description: faker.commerce.productDescription(),
    photo: faker.image.city(),
    hashtag: HASHTAG[randomIndex(HASHTAG)],
    autor: AUTORS[randomIndex(AUTORS)],
   

  }
}

  export function makeNews(count = 10) {
    return Array(10).fill('').map(() => make());
  }

