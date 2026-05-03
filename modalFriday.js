const data = {

  morning: {
    title: "Утро",
    text: "Проснись бодро и начни день правильно ☀️",
    text2: "Утро задаёт настроение всему дню.",
    text3: "Собранность = успех!"
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
    text: "Учись и задавай вопросы 📚",
    text2: "Любопытство — сила учёного.",
    text3: "Каждый урок — шаг вперёд!"
  },

  food: {
    title: "Обед",
    text: "Восстанови силы 🍎",
    text2: "Отдых нужен мозгу.",
    text3: "Ешь и отдыхай спокойно."
  },

  games: {
    title: "Гаджеты",
    text: "Используй с умом 📱",
    text2: "Контроль — это сила.",
    text3: "Не забывай про реальный мир!"
  },

  experiment: {
    title: "Эксперимент",
    text: "Проведи опыт 🧪",
    text2: "Пробуй и проверяй идеи.",
    text3: "Так работают учёные!"
  },

  learn: {
    title: "Изучение",
    text: "Узнай что-то новое 📚",
    text2: "Мир огромен и интересен.",
    text3: "Учёба расширяет возможности!"
  },

  family: {
    title: "Семья",
    text: "Проведи время с близкими ❤️",
    text2: "Поддержка важна.",
    text3: "Семья — твоя опора."
  },

  good: {
    title: "Доброе дело",
    text: "Помоги кому-то ❤️",
    text2: "Делать добро — важно.",
    text3: "Это делает мир лучше!"
  },

  diary: {
    title: "Дневник",
    text: "Запиши открытия 📓",
    text2: "Что ты узнал сегодня?",
    text3: "Каждый день — история!"
  },

  brain: {
    title: "Тренировка мозга",
    text: "Решай задачи 🧠",
    text2: "Мозг любит нагрузку.",
    text3: "Ты становишься умнее!"
  },

  evening: {
    title: "Вечер",
    text: "Отдохни и расслабься 🌙",
    text2: "Подведи итоги дня.",
    text3: "Ты молодец!"
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