import faker from "faker";

export const HASHTAG = ["hot_news", "events", "weather", "crime"];

function makeAuthor(count = 4) {
  return Array(4)
    .fill("")
    .map(() => faker.name.firstName() + " " + faker.name.lastName());
}

// export const AUTHORS = makeAuthor();
export const AUTHORS = ['Gerry Kemmer', 'Jerome Kovacek', 'Liza Wolf', 'Noel Batz']

function randomIndex(arr) {
  return faker.random.number({ min: 0, max: arr.length - 1 });
  console.log(HASHTAG[randomIndex(HASHTAG)]);
  console.log(AUTHORS[randomIndex(AUTHORS)]);
}

export function make() {

  return {
    id: faker.datatype.uuid(),
    title: "The latest events in " + faker.address.city(),
    description: faker.commerce.productDescription(),
    photo: faker.image.city(),
    hashtag: [HASHTAG[randomIndex(HASHTAG)]],
    author: AUTHORS[randomIndex(AUTHORS)],
  };
}

export function makeNews(count = 10) {
  return Array(10)
    .fill("")
    .map(() => make());
}
