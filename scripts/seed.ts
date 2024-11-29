import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "@/db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Japanese",
        imageSrc: "/jp-flag.svg",
      },

      {
        id: 2,
        title: "French",
        imageSrc: "/fr-flag.svg",
      },
      {
        id: 3,
        title: "Hindi",
        imageSrc: "/in-flag.svg",
      },
      {
        id: 4,
        title: "Tamil",
        imageSrc: "/in-flag.svg",
      },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: "Unit 1",
        description: "Introduction to Japanese",
        order: 1,
      },
    ]);
    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        order: 1,
        title: "Hiragana",
      },
      {
        id: 2,
        unitId: 1,
        order: 2,
        title: "Katakana",
      },
      {
        id: 3,
        unitId: 1,
        order: 3,
        title: "Kanji",
      },
      {
        id: 4,
        unitId: 1,
        order: 4,
        title: "Numbers",
      },
      {
        id: 5,
        unitId: 1,
        order: 5,
        title: "Greetings",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        order: 1,
        question: "What is 'a' in Hiragana?",
      },
      {
        id: 2,
        lessonId: 1,
        type: "ASSIST",
        order: 2,
        question: "I",
      },
      {
        id: 3,
        lessonId: 1,
        type: "SELECT",
        order: 3,
        question: "Which one of these is 'o' in Hiragana?",
      },
      {
        id: 4,
        lessonId: 2,
        type: "SELECT",
        order: 1,
        question: "What is 'ka' in Katakana?",
      },
      {
        id: 5,
        lessonId: 2,
        type: "ASSIST",
        order: 2,
        question: "Ke",
      },
      {
        id: 6,
        lessonId: 2,
        type: "SELECT",
        order: 3,
        question: "Which one of these is 'ko' in Katakana?",
      },
      {
        id: 7,
        lessonId: 3,
        type: "SELECT",
        order: 1,
        question: "What is the Kanji for 'water'?",
      },
      {
        id: 8,
        lessonId: 3,
        type: "ASSIST",
        order: 2,
        question: "Fire",
      },
      {
        id: 9,
        lessonId: 3,
        type: "SELECT",
        order: 3,
        question: "Which one of these is the Kanji for 'tree'?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1,
        correct: true,
        text: "あ",
        audioSrc: "/jp-hiragana-a.mp3",
      },
      {
        challengeId: 1,
        correct: false,
        text: "い",
        audioSrc: "/jp-hiragana-i.mp3",
      },
      {
        challengeId: 1,
        correct: false,
        text: "う",
        audioSrc: "/jp-hiragana-u.mp3",
      },
      {
        challengeId: 1,
        correct: false,
        text: "え",
        audioSrc: "/jp-hiragana-e.mp3",
      },
      {
        challengeId: 1,
        correct: false,
        text: "お",
        audioSrc: "/jp-hiragana-o.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 2,
        correct: false,
        text: "あ",
        audioSrc: "/jp-hiragana-a.mp3",
      },
      {
        challengeId: 2,
        correct: true,
        text: "い",
        audioSrc: "/jp-hiragana-i.mp3",
      },
      {
        challengeId: 2,
        correct: false,
        text: "う",
        audioSrc: "/jp-hiragana-u.mp3",
      },
      {
        challengeId: 2,
        correct: false,
        text: "え",
        audioSrc: "/jp-hiragana-e.mp3",
      },
      {
        challengeId: 2,
        correct: false,
        text: "お",
        audioSrc: "/jp-hiragana-o.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 3,
        correct: false,
        text: "あ",
        audioSrc: "/jp-hiragana-a.mp3",
      },
      {
        challengeId: 3,
        correct: false,
        text: "い",
        audioSrc: "/jp-hiragana-i.mp3",
      },
      {
        challengeId: 3,
        correct: false,
        text: "う",
        audioSrc: "/jp-hiragana-u.mp3",
      },
      {
        challengeId: 3,
        correct: false,
        text: "え",
        audioSrc: "/jp-hiragana-e.mp3",
      },
      {
        challengeId: 3,
        correct: true,
        text: "お",
        audioSrc: "/jp-hiragana-o.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 4,
        correct: true,
        text: "カ",
        audioSrc: "/jp-katakana-ka.mp3",
      },
      {
        challengeId: 4,
        correct: false,
        text: "キ",
        audioSrc: "/jp-katakana-ki.mp3",
      },
      {
        challengeId: 4,
        correct: false,
        text: "ク",
        audioSrc: "/jp-katakana-ku.mp3",
      },
      {
        challengeId: 4,
        correct: false,
        text: "ケ",
        audioSrc: "/jp-katakana-ke.mp3",
      },
      {
        challengeId: 4,
        correct: false,
        text: "コ",
        audioSrc: "/jp-katakana-ko.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 5,
        correct: false,
        text: "カ",
        audioSrc: "/jp-katakana-ka.mp3",
      },
      {
        challengeId: 5,
        correct: true,
        text: "ケ",
        audioSrc: "/jp-katakana-ke.mp3",
      },
      {
        challengeId: 5,
        correct: false,
        text: "ク",
        audioSrc: "/jp-katakana-ku.mp3",
      },
      {
        challengeId: 5,
        correct: false,
        text: "キ",
        audioSrc: "/jp-katakana-ki.mp3",
      },
      {
        challengeId: 5,
        correct: false,
        text: "コ",
        audioSrc: "/jp-katakana-ko.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 6,
        correct: false,
        text: "カ",
        audioSrc: "/jp-katakana-ka.mp3",
      },
      {
        challengeId: 6,
        correct: false,
        text: "キ",
        audioSrc: "/jp-katakana-ki.mp3",
      },
      {
        challengeId: 6,
        correct: false,
        text: "ク",
        audioSrc: "/jp-katakana-ku.mp3",
      },
      {
        challengeId: 6,
        correct: false,
        text: "ケ",
        audioSrc: "/jp-katakana-ke.mp3",
      },
      {
        challengeId: 6,
        correct: true,
        text: "コ",
        audioSrc: "/jp-katakana-ko.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 7,
        correct: true,
        text: "水",
        audioSrc: "/jp-kanji-water.mp3",
      },
      {
        challengeId: 7,
        correct: false,
        text: "火",
        audioSrc: "/jp-kanji-fire.mp3",
      },
      {
        challengeId: 7,
        correct: false,
        text: "木",
        audioSrc: "/jp-kanji-tree.mp3",
      },
      {
        challengeId: 7,
        correct: false,
        text: "土",
        audioSrc: "/jp-kanji-earth.mp3",
      },
      {
        challengeId: 7,
        correct: false,
        text: "金",
        audioSrc: "/jp-kanji-gold.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 8,
        correct: false,
        text: "水",
        audioSrc: "/jp-kanji-water.mp3",
      },
      {
        challengeId: 8,
        correct: true,
        text: "火",
        audioSrc: "/jp-kanji-fire.mp3",
      },
      {
        challengeId: 8,
        correct: false,
        text: "木",
        audioSrc: "/jp-kanji-tree.mp3",
      },
      {
        challengeId: 8,
        correct: false,
        text: "土",
        audioSrc: "/jp-kanji-earth.mp3",
      },
      {
        challengeId: 8,
        correct: false,
        text: "金",
        audioSrc: "/jp-kanji-gold.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 9,
        correct: false,
        text: "水",
        audioSrc: "/jp-kanji-water.mp3",
      },
      {
        challengeId: 9,
        correct: false,
        text: "火",
        audioSrc: "/jp-kanji-fire.mp3",
      },
      {
        challengeId: 9,
        correct: true,
        text: "木",
        audioSrc: "/jp-kanji-tree.mp3",
      },
      {
        challengeId: 9,
        correct: false,
        text: "土",
        audioSrc: "/jp-kanji-earth.mp3",
      },
      {
        challengeId: 9,
        correct: false,
        text: "金",
        audioSrc: "/jp-kanji-gold.mp3",
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};

main();
