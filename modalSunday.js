const data = {
  morning: {
    title: "Подъём",
    text: "Проснись спокойно и красиво — сегодня день перезагрузки 🔄",
    text2: "Немного движения утром — и настроение сразу +100 ✨",
    text3: "Подготовься к новой неделе как чемпион — начни с хорошего утра!",
  },

  sleep: {
    title: "😴 Восстановление",
    text: "Тело растёт во сне",
    text2: "Хороший сон = энергия",
    text3: "Отдых — это тоже развитие",
  },

  study: {
    title: "📚 Новые знания",
    text: "Выбери тему, которая тя нтересует.\n Посмотри видео, почитай, задай вопросы...",
    text2: "Новые знания делают тебя умнее и \nоткрывают двери в будущее! 📚",
    text3: "Знания = возможности! 🚀",
  },

  project: {
    title: "🌍 Проект",
    text: "Создай свой Youtube канал! \n Выбери тему, придумай название и начни снимать видео!",
    text2: "Продумай концепцию, сделай план и начни действовать! \n Это крутой способ учиться и делиться своими идеями с миром!",
    text3: "Твой канал — это твоя площадка для творчества и роста! \n Начни с малого!",
  },

  games: {
    title: "🎮 Гаджеты",
    text: "Отдохни с гаджетами, \n но не пропади в них полностью 😴",
    text2: "Соцсети забирают время и внимание — \n а это самое ценное, что у тебя есть! \n Время — это единственное, \n что нельзя вернуть назад.",
    text3: "Используй технологии, чтобы расти, \n а не просто «залипать». \n Используй гаджеты так, \n чтобы они делали тебя лучше, \n а не слабее!",
  },

  family: {
    title: "👨‍👩‍👧‍👦 Семья",
    text: "Проведи время с близкими \n спокойно и без спешки. 😴 \n Это укрепляет вашу связь \n и делает вас счастливее!",
    text2: "Поддержка — это сила! \n Даже если бывают споры —  это нормально, \n так учатся понимать друг друга. \n Семья — это твой тыл, \n твоя опора и твоя сила!",
    text3: "Семья — твой фундамент! 🧱 \n Любовь  и поддержка близких — \n это топливо для \n твоего роста и счастья!",
  },

  read: {
    title: "📖 Чтение",
    text: "Чтение — это путь к знаниям",
    text2: "Оно расширяет кругозор. И учит мыслить глубже",
    text3: "Читай книги, которые тебя вдохновляют",
  },

  free: {
    title: "🌟 Свободное время",
    text: "Используй его с умом - это не пауза, это возможность 🌟",
    text2: "Займись хобби или спортом. Сделай что-то, что сделает тебя лучше!",
    text3: "Так ты растёшь как личность. \n Ты управляешь своим временем, \n а не оно тобой!",
  },

  plan: {
    title: "🎯 План",
    text: "Успех — это не случайность. \n Он складывается из маленьких действий каждый день",
    text2: "Планируй свои шаги. \n Чтобы не думать “что делать?”, а просто делать",
    text3: "Ты управляешь своей жизнью. \n Сделал хоть немного → уже победил 💪",
  },

  week: {
    title: "📓 Итоги недели",
    text: "Посмотри назад и подумай",
    text2: "Что получилось лучше всего?",
    text3: "Так растут сильные люди",
  },

  evening: {
    title: "🌙 Вечер",
    text: "Отдохни и расслабься",
    text2: "Ты хорошо поработал",
    text3: "Завтра новый старт!",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const modal = document.getElementById("modal");
  const title = document.getElementById("modal-title");
  const text = document.getElementById("modal-text");
  const text2 = document.getElementById("modal-text2");
  const text3 = document.getElementById("modal-text3");
  const close = document.querySelector(".close");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.dataset.id;
      if (!data[id]) return;

      title.innerText = data[id].title;
      text.innerText = data[id].text;
      text2.innerText = data[id].text2;
      text3.innerText = data[id].text3;

      modal.style.display = "block";
    });
  });

  close.onclick = () => (modal.style.display = "none");

  window.onclick = (e) => {
    if (e.target == modal) modal.style.display = "none";
  };
});

// Плавающая подсказка при наведении на карточку
document.addEventListener("DOMContentLoaded", () => {

  const tips = [
    { icon: "🌍", text: "Исследуй мир!" },
    { icon: "⭐", text: "Учись каждый день!" },
    { icon: "🎯", text: "Ставь цели!" },
    { icon: "🚀", text: "Действуй!" },
    { icon: "💪", text: "Ты становишься сильнее!" },
    { icon: "🧠", text: "Тренируй мозг!" },
    { icon: "❤️", text: "Помогай другим!" },
    { icon: "📚", text: "Читай и развивайся!" }
  ];

  const colors = [
  "linear-gradient(135deg, #ff4d4d, #f53434)", // красный
  "linear-gradient(135deg, #ff9a00, #ff5e00)", // оранжевый
  "linear-gradient(135deg, #00c853, #00ff88)", // зелёный
  "linear-gradient(135deg, #2979ff, #00c6ff)", // синий
  "linear-gradient(135deg, #8820b5, #e040fb)", // фиолетовый
  "linear-gradient(135deg, #ff4081, #ff80ab)", // розовый
  "linear-gradient(135deg, #ffcc00, #ff9800)"  // жёлтый
];

  const el = document.getElementById("floating-tip");
  if (!el) return;

  const textEl = el.querySelector(".tip-text");
  const iconEl = el.querySelector(".tip-icon");
  if (!textEl || !iconEl) return;

  function randomPosition() {
  const margin = 20;

  const maxX = window.innerWidth - el.offsetWidth - margin;
  const maxY = window.innerHeight - el.offsetHeight - margin;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  el.style.left = x + "px";
  el.style.top = y + "px";
}

  function showTip() {
    const tip = tips[Math.floor(Math.random() * tips.length)];

    textEl.innerText = tip.text;
    iconEl.innerText = tip.icon;

    // 🔥 смена цвета
  const color = colors[Math.floor(Math.random() * colors.length)];
  el.style.background = color;

    randomPosition();

    el.classList.add("show");

    const lifeTime = 10000; // 10 секунд

    setTimeout(() => {
      el.classList.remove("show");
    }, lifeTime);

    setTimeout(showTip, lifeTime + 5000);
  }

  // запуск
  setTimeout(showTip, 3000);

});
