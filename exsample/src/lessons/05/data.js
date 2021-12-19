import faker from 'faker';

export const RATINGS = [
  {
    label: '0+',
    value: '0+'
  },
  {
    label: 'PG-13',
    value: '13+'
  },
  {
    label: '17+',
    value: '17+'
  },
  {
    label: 'UR',
    value: 'UR'
  },
];

export const GENRES = [
  {
    label: 'Horror',
    value: 'horror',
  },
  {
    label: 'Action',
    value: 'action',
  },
  {
    label: 'Drama',
    value: 'drama',
  },
  {
    label: 'Cartoons',
    value: 'cartoons',
  },
];

export const ACTORS = Array(10).fill('').map(() => {
  return {
    id: faker.datatype.uuid(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  }
});

export function makeMovie() {
  const genresIndex = faker.random.number({ min: 0, max: GENRES.length - 1 });
  const actorIndex = faker.random.number({ min: 0, max: ACTORS.length - 1 });

  return {
    id: faker.datatype.uuid(),
    title: faker.commerce.product(),
    description: faker.lorem.sentences(2),
    rating: RATINGS[faker.random.number({ min: 0, max: RATINGS.length - 1 })].value,
    genres: [
      GENRES[genresIndex].value,
      GENRES[genresIndex >= GENRES.length - 1 ? 0 : genresIndex + 1].value,
    ],
    photo: faker.image.imageUrl(),
    actors: [
      ACTORS[actorIndex].id,
      ACTORS[actorIndex >= ACTORS.length - 1 ? 0 : actorIndex + 1].id,
    ],
  }
}

export function makeMovies(count = 10) {
  return Array(10).fill('').map(() => makeMovie());
}
