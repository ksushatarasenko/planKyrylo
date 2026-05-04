const data = {

  morning: {
    title: "Утро",
    text: " Вставай! Кровать, конечно, классная… \n но приключения сегодня интереснее 😏.",
    text2: "Если начать утро правильно — \n день будет как по маслу 🧈.",
    text3: "Ты не ленивый — ты просто любишь комфорт. Но пора двигаться!"
  },

  charge: {
    title: "Зарядка",
    text: "Разбуди тело и мозг 🏃",
    text2: "Движение помогает думать лучше.",
    text3: "Энергия = сила!"
  },

  schoolPrep: {
    title: "Сборы",
    text: "Подготовься к школе 🎒",
    text2: "Порядок = спокойствие.",
    text3: "Ты готов к новым знаниям!"
  },

  school: {
    title: "Школа",
    text: "Сегодня ты учёный 🧪 — \n исследуешь, пробуешь и открываешь новое!",
    text2: "Не просто слушай — пытайся понять: \n «как это работает?» 🤔. \nЛюбопытство — сила учёного.",
    text3: "Каждый урок — шаг вперёд! \n Каждый урок — это маленькое открытие (даже если сначала кажется скучным 😄"
  },

  food: {
    title: "Обед и отдых",
    text: "Учёный тоже делает перерывы 🧪 \n Даже гении отдыхают 😄. \n Восстанови силы 🍎",
    text2: "Поел — и идеи начинают работать быстрее 🧠. \n Отдых нужен мозгу.",
    text3: "Иногда лучшая мысль приходит именно во время отдыха 💡"
  },

  games: {
    title: "Гаджеты 📱",
    text: "Телефон — это классно… \n но жизнь вне экрана ещё интереснее 😏. Скроллинг не прокачивает тебя. \n А вот знания — да 📚",
    text2: "Листать легко. \n Делать что-то настоящее — сложнее. \n Контроль — это сила.💪",
    text3: "Не трать себя на бесконечные видео 📽️. \n Не забывай про реальный мир!"
  },

  experiment: {
    title: "Эксперимент",
    text: "Проведи опыт 🧪. \n Узнай что-то новое 📚",
    text2: "Пробуй и проверяй идеи. \n Мир огромен и интересен.",
    text3: "Учёба расширяет возможности! \n Так работают учёные!"
  },

  
  family: {
    title: "Семья",
    text: "Проведи время с семьёй ❤️ — поговорите, \n посмейтесь или просто побудьте рядом 🙂 ",
    text2: "Семья — это место, \n где тебя принимают, даже если ты ошибся.\n  Ошибки — это нормально. \n Главное — понять и стать лучше",
    text3: "Ужин с семьёй — \n это маленькая традиция 🍲. \n Семья — твоя опора."
  },

  good: {
    title: "Доброе дело",
    text: "Сегодня ты учёный 🧪 — проверь: \n что будет, если сделать добро? \n Помоги кому-то ❤️",
    text2: "Спойлер: настроение поднимется \n и у тебя, и у других 😄. \n Делать добро — важно.",
    text3: "Каждое доброе дело — \n это маленький эксперимент, \n который всегда удаётся 💡. \n Это делает мир лучше!"
  },

  diary: {
    title: "Дневник",
    text: "Запиши открытия 📓. \n Попробуй заметить то, \n что вчера не видел 👀",
    text2: "Что ты узнал сегодня? \n Добавь это в свой дневник — \n ты собираешь знания 📚 ",
    text3: "Каждый день — история!"
  },

  brain: {
    title: "Тренировка мозга",
    text: "Решай задачи 🧠. \n Начни с самого простого.",
    text2: "Мозг любит нагрузку.",
    text3: "Потом втягиваешься и идёт легче. \n Ты становишься умнее!"
  },

  evening: {
    title: "Вечер",
    text: "Сегодня ты был учёным 🧪 — \n столько идей и открытий, \n пора их уложить в голове. 🌙",
    text2: "Вспомни самый интересный момент дня \n — это твой маленький успех 💡. \n Подведи итоги дня.",
    text3: "Представь, какие открытия ждут тебя дальше — \n засыпай с любопытством 😊 \n Ты молодец!"
  }

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
  { icon: "🧪", text: "Пятница — день открытий. Исследуй и пробуй новое" },
  { icon: "🧠", text: "Любопытство — твоя суперсила сегодня" },
  { icon: "💡", text: "Задавай вопросы — так рождаются знания" },
  { icon: "🔍", text: "Ищи ответы и не бойся копать глубже" },
  { icon: "📚", text: "Каждое новое знание расширяет твой мир" },
  { icon: "⚗️", text: "Экспериментируй — так учатся настоящие учёные" },
  { icon: "🚀", text: "Сегодня ты открываешь что-то новое для себя" },
  { icon: "🎯", text: "Не просто учись — понимай и исследуй" },
  { icon: "🧩", text: "Собирай знания, как пазл — шаг за шагом" },
  { icon: "🤔", text: "Интерес — лучший двигатель обучения" },
  { icon: "📈", text: "Каждый ответ рождает новые вопросы" },
  { icon: "🔬", text: "Мир полон открытий — найди хотя бы одно сегодня" },
  { icon: "🌟", text: "Сегодняшнее открытие — твой будущий успех" },
  { icon: "🛠️", text: "Учись через действие, а не только через чтение" },
  { icon: "🏆", text: "Настоящий учёный никогда не перестаёт искать ответы" }
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