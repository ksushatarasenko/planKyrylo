const data = {
  morning: {
    title: "Подъём",
    text: "Проснись! Да-да, именно ты 😄 \n Потянись, сделай зарядку и покажи понедельнику, кто тут главный!",
    text2: "Если встать сразу — день пойдёт легче. Если нет… подушка победит 😴",
    text3: "Начни день как чемпион: просто оторвись от подушки!"
  },
  school: {
    title: "Школа",
    text: "Каждый урок — это новый уровень! \n Старайся учиться с интересом, \n задавай вопросы и делись идеями с друзьями. \n Помни, что знания — это сила, \n а школа — это твой тренировочный лагерь \n для будущих приключений!",
    text2: "Учиться — это как собирать пазл, и каждый новый кусочек делает картину яснее!",
    text3: "Не бойся ошибаться, ведь именно через ошибки мы учимся и становимся сильнее!"
  },
  food: {
    title: "Питание",
    text: "Ешь разнообразную и полезную пищу. \n Пей воду, чтобы оставаться энергичным и сосредоточенным. \n Помни, что здоровое питание — это ключ к хорошему настроению и отличной учебе!",
    text2: "Фрукты, овощи, белки и злаки — это топливо для твоего тела и мозга. ",
    text3: "Старайся избегать слишком много сладкого и фастфуда, чтобы чувствовать себя лучше и быть готовым к новым приключениям!"
  },

  walk: {
    title: "🎯 Миссия",
    text: "Найди 3 интересные вещи: \nптицу, растение или насекомое. \n Попробуй понять, что это.",
    text2: "Сделай себе заметку о том, что тебе понравилось. \n Можешь зарисовать это или написать пару слов. \n Сделай фото и собери свой альбом природы!",
    text3: "Наблюдай за природой, слушай звуки и вдохновляйся красотой вокруг тебя!"

  },
  study: {
    title: "Дневник наблюдений",
    text: "Прочитай про то, что увидел. \n Стань исследователем!",
    text2: "Распечатай фото, которое ты сделал или дорисуй картинку.",
    text3: "Найди видео про то что ты сегодня наблюдай и узнай новые интересные факты! Создай свой каталог природы!"
  },
  games: {
    title: "Гаджеты",
    text: "Играй, но контролируй время. Ты управляешь игрой, а не она тобой.",
    text2: "Попробуй найти игру, которая развивает твой мозг и творческие способности.",
    text3: "Помни, что реальный мир тоже интересный! Не забывай про друзей и природу."
  },
  good: {
    title: "Доброе дело",
    text: "Помоги дома: убери, помоги мам, \n спроси чем ей помочь. \n Это делает тебя сильнее.",
    text2: "Полей цветы, вытери пыль, убери у себя на столе. \n Это не только поможет твоей семье, но и научит тебя ответственности.",
    text3: "Помогая другим, ты делаешь мир лучше и становишься настоящим героем!"
  },
  lesson: {
    title: "Уроки",
    text: "Повтори тему, которую сегодня проходил. \n Просмотри тетрадь и вспомни, что было самым интересным.",
    text2: "Если есть плохая оценка, подумай как исправить, как подтянуть предмет.",
    text3: "Выпиши 5 новых слов, которые ты сегодня узнал. \n Это поможет тебе запомнить и расширить свой словарный запас!"
  },
  video: {
    title: "Видео",
    text: "Посмотри видео про что-то интересное. \n Это поможет тебе узнать что-то новое!",
    text2: "Можешь выбрать видео о природе, науке или истории. \n Главное — чтобы тебе было интересно!",
    text3: "После просмотра подумай, что тебе понравилось и что ты узнал. \n Это поможет тебе лучше понять мир вокруг!"
  },
  evning: {
    title: "Спокойный вечер",
    text: "Приготовься к сну: \n убери вещи, выключи свет, \n и начни день с чистой головой.",
    text2: "Постарайся не использовать гаджеты перед сном. \n Это поможет тебе лучше выспаться и быть бодрым утром.",
    text3: "Спокойный вечер — помечтай. \n Наслаждайся моментом и засыпай с улыбкой!"
  }
};

const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const title = document.getElementById('modal-title');
const text = document.getElementById('modal-text');
const text2 = document.getElementById('modal-text2');
const text3 = document.getElementById('modal-text3');
const close = document.querySelector('.close');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const id = card.dataset.id;
    if (!data[id]) return;

    title.innerText = data[id].title;
    text.innerText = data[id].text;
    text2.innerText = data[id].text2;
    text3.innerText = data[id].text3;

    modal.style.display = 'block';
  });
});

close.onclick = () => modal.style.display = 'none';

window.onclick = (e) => {
  if (e.target == modal) modal.style.display = 'none';
};

// Плавающая подсказка при наведении на карточку
document.addEventListener("DOMContentLoaded", () => {

  const tips = [
  { icon: "🚀", text: "Понедельник — это старт новой недели. Начни уверенно!" },
  { icon: "🎯", text: "Сегодня выбери 1 цель и сделай шаг к ней" },
  { icon: "💪", text: "Начало — самое сложное. Дальше будет легче!" },
  { icon: "⚡", text: "Сделай что-то полезное с утра — и день уже удался" },
  { icon: "🧠", text: "Новый день = новый шанс стать умнее" },
  { icon: "🔥", text: "Не жди настроения — начни, и оно появится" },
  { icon: "⏳", text: "Твоё время начинается сейчас. Не откладывай" },
  { icon: "😄", text: "Улыбнись — ты уже проснулся, это победа!" },
  { icon: "📈", text: "Маленький шаг сегодня = большой результат потом" },
  { icon: "🏆", text: "Сильные начинают, даже когда не хочется" },
  { icon: "🎮", text: "Неделя началась — первый уровень открыт!" },
  { icon: "🌟", text: "Сделай этот день чуть лучше, чем вчера" },
  { icon: "🛠️", text: "Ты строишь свою неделю своими действиями" },
  { icon: "💡", text: "Попробуй сегодня что-то новое — мозг скажет спасибо" },
  { icon: "🚶‍♂️", text: "Просто начни. Даже маленькое действие считается" }
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