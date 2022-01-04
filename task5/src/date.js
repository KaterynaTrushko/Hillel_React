import faker from "faker";

export const HASHTAG = [
  {value: 'hot_news'},
  {value: 'events'},
  {value: 'weather'},
  {value: 'crime'},
];  

export function make(){

  const indHashtag = faker.random.number({ min: 0, max: HASHTAG.length - 1 })
  
  return{
    id: faker.datatype.uuid(),
    title: "The latest events in " + faker.address.city(),
    description: faker.commerce.productDescription(),
    photo: faker.image.city(),
    hashtag: '#'+ HASHTAG[indHashtag].value,
    author: faker.name.firstName() +" "+ faker.name.lastName(),
    

  }
}

// заголовок - текст
// текст - текст
// короткое описание - текст
// фото - ссылка на фото или base64
// хештеги - список чекбоксов
// автор - один на выбор - список радио-кнопок

  export function makeNews(count = 10) {
    return Array(10).fill('').map(() => make());
  }

