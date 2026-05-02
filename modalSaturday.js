const data = {

  morning: {
    title: "Сон и утро",
    text: "Сегодня можно поспать подольше 😌 Твоё тело восстанавливается.",
    text2: "Хороший сон — это энергия, настроение и сила на весь день.",
    text3: "Отдых — это тоже часть развития!"
  },

  games: {
    title: "Гаджеты",
    text: "Играй, но не забывай про время ⏳",
    text2: "Ты управляешь гаджетами, а не они тобой.",
    text3: "Оставь время и для настоящих приключений!"
  },

  family: {
    title: "Семья",
    text: "Проведи время с близкими ❤️",
    text2: "Игры и разговоры делают вас ближе.",
    text3: "Семья — это твоя поддержка и сила."
  },

  food: {
    title: "Обед",
    text: "Вкусная еда — это радость и энергия 🍲",
    text2: "Совместные обеды делают день теплее.",
    text3: "Отдыхай и наслаждайся моментом!"
  },

  hobby: {
    title: "Хобби",
    text: "Делай то, что тебе нравится 🎮🎨 Поиграй в игры, порисуй, поищи что-то в интернете. ",
    text2: "Хобби развивает твоё мышление и воображение.",
    text3: "Занимайся тем - что приносит радость! Когда тебе интересно — ты растёшь быстрее!"
  },

  walk: {
    title: "Приключение",
    text: "Найди 5 интересных вещей 👀 Это может быть: птица, растение, звук, насекомое или что-то необычное.",
    text2: "Сделай фото или зарисуй то, сделай заметки, что заметил. Дома сделай альбом своих открытий.",
    text3: "Настоящие исследователи замечают то, что другие не видят!"
  },

  video: {
    title: "Видео",
    text: "Посмотри что-то познавательное 🎬",
    text2: "Узнай что-то новое про мир, природу или технологии.",
    text3: "Каждое новое знание делает тебя сильнее!"
  },

  lego: {
    title: "Проект",
    text: "Создай что-то своё 🧱",
    text2: "LEGO, эксперимент или идея — не важно, главное пробовать!",
    text3: "Ошибки — это путь к новым открытиям!"
  },

  ideas: {
    title: "Дневник приключений",
    text: "Что сегодня было самым интересным?",
    text2: "Что нового ты узнал?",
    text3: "Каждый день — это новая история!"
  },

  evning: {
    title: "Вечер",
    text: "Время расслабиться 🌙",
    text2: "Вспомни, что сегодня было самым крутым.",
    text3: "Ты прожил день не зря!"
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