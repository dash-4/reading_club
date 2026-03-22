import { db } from "@/lib/db";
import { books } from "@/db/schema";

async function seed() {
  await db.insert(books).values([
    { title: "1984", author: "Джордж Оруэлл", year: 1949 },
    { title: "Мастер и Маргарита", author: "Михаил Булгаков", year: 1967 },
    { title: "Дюна", author: "Фрэнк Герберт", year: 1965 },
    { title: "451 градус по Фаренгейту", author: "Рэй Брэдбери", year: 1953 },
  ]);

  console.log("Добавлено 4 книги");
}

seed().catch(console.error);