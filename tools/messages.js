const messages = {
  root: {
    isNotFound: 'Запрашиваемый ресурс не найден',
    serverErr: 'На сервере произошла ошибка',
  },
  text: {
    isShort: 'Поле должно быть минимум 2 символа',
  },
  password: {
    isShort: 'Длина пароля минимум 8 символов',
    isMax: 'Не должен превышать 64 символа',
    isRequired: 'Пароль обязателен',
    isEmpty: 'Поле пароля не может быть пустым или с пробелами',
  },
  registration: {
    isSuccessful: 'Пользователь успешно создан',
    isFail: 'Произошла ошибка при создании пользователя',
    isNotUnique: 'Указанный почтовый ящик уже используется',
    isNotLink: 'Неправильный формат ссылки',
    isNotEmail: 'Неправильный формат почтового адреса',
    isRequired: 'Поле обязательно для заполнения',
    isWrong: 'Имя не должно начинаться и заканчиваться пустыми символами',
  },
  authorization: {
    isRequired: 'Нужна авторизация',
    isSuccessful: 'Успешная авторизация',
    isFailed: 'Неправильные почта или пароль',
  },
  user: {
    id: {
      isNotFound: 'Нет пользователя с такими id',
      isNotValid: 'Неверный формат id пользователя',
    },
    isFail: 'Произошла ошибка при операции с пользователем',
  },
  article: {
    id: {
      isNotFound: 'Нет новости с таким id',
      isNotValid: 'Неверный формат id, должен содержать только буквенно-цифровые символы',
      isLength: 'Длина id должна составлять 24 символа',
    },
    isFail: 'Произошла ошибка при операции с новостью',
    isForbidden: 'Недостаточно прав для удаления новости',
    isSuccessful: 'Новость удалена',
  },
};

module.exports = {
  messages,
};
