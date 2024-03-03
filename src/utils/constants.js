// Массив исходных карточек

const initialCards = [
  {
    name: '33 слова о дизайне',
    link: '/images/preview/1.png',
    duration: '1ч 47м',
    favorite: true,
  },
  {
    name: 'Киноальманах «100 лет дизайна»',
    link: '/images/preview/2.png',
    duration: '1ч 3м',
    favorite: false,
  },
  {
    name: 'В погоне за Бенкси',
    link: '/images/preview/3.png',
    duration: '1ч 42м',
    favorite: false,
  },
  {
    name: 'Баския: Взрыв реальности',
    link: '/images/preview/4.png',
    duration: '1ч 21м',
    favorite: false,
  },
  {
    name: 'Бег это свобода',
    link: '/images/preview/5.png',
    duration: '1ч 44м',
    favorite: false,
  },
  {
    name: 'Книготорговцы',
    link: '/images/preview/6.png',
    duration: '1ч 37м',
    favorite: true,
  },
  {
    name: 'Когда я думаю о Германии ночью',
    link: '/images/preview/7.png',
    duration: '1ч 56м',
    favorite: false,
  },
  {
    name: 'Gimme Danger: История Игги и The Stooge...',
    link: '/images/preview/8.png',
    duration: '1ч 59м',
    favorite: false,
  },
  {
    name: 'Дженис: Маленькая девочка грустит',
    link: '/images/preview/9.png',
    duration: '1ч 42м',
    favorite: true,
  },
  {
    name: 'Соберись перед прыжком',
    link: '/images/preview/10.png',
    duration: '1ч 10м',
    favorite: true,
  },
  {
    name: 'Пи Джей Харви: A dog called money',
    link: '/images/preview/11.png',
    duration: '1ч 4м',
    favorite: false,
  },
  {
    name: 'По волнам: Искусство звука в кино',
    link: '/images/preview/12.png',
    duration: '1ч 7м',
    favorite: false,
  },
];

const moviesFavorite = [
  {
    name: '33 слова о дизайне',
    link: '/images/preview/1.png',
    duration: '1ч 47м',
    favorite: true,
  },
  {
    name: 'Киноальманах «100 лет дизайна»',
    link: '/images/preview/2.png',
    duration: '1ч 3м',
    favorite: true,
  },
  {
    name: 'В погоне за Бенкси',
    link: '/images/preview/3.png',
    duration: '1ч 42м',
    favorite: true,
  },
];

export const validationConf = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_disabled',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'popup__error_visible'
}; 

export const configApi = { 
// url: 'https://mesto.nomoreparties.co/v1/cohort-73/', 
// url: 'http://localhost:3000', 
url: 'https://https://api.logowazmovies.nomoredomainswork.ru', 
headers: { 
authorization: `Bearer ${localStorage.getItem('jwt')}`, 
"Content-Type": "application/json" 
} 
}


export {initialCards, moviesFavorite}
