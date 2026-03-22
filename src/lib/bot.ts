import { Telegraf } from "telegraf";
import { db } from "./db";
import { books } from "@/db/schema";
import { sql } from "drizzle-orm";

const bot = new Telegraf(process.env.BOT_TOKEN!);

bot.command("start", (ctx) => {
  ctx.reply("Привет! Я бот читательского клуба.\n\nКоманды:\n/random — выбрать случайную книгу");
});

bot.command("random", async (ctx) => {
  try {
    const [randomBook] = await db
      .select()
      .from(books)
      .orderBy(sql`RANDOM()`)
      .limit(1);

    if (!randomBook) {
      return ctx.reply("Пока в каталоге нет книг 😔");
    }

    const msg = `🎲 Сегодня читаем:\n\n<b>${randomBook.title}</b>\n${randomBook.author}${
      randomBook.year ? ` (${randomBook.year})` : ""
    }`;

    ctx.replyWithHTML(msg);
  } catch (err) {
    console.error(err);
    ctx.reply("Что-то пошло не так...");
  }
});

bot.catch((err) => {
  console.error("Ошибка в боте:", err);
});

export { bot };

if (process.env.NODE_ENV === "development") {
  console.log("Запуск в режиме polling...");
  bot.launch().then(() => console.log("Бот запущен (polling)"));
}