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

    await db.insert(schema.challenges).values([
      {
        id: 10,
        lessonId: 4,
        type: "SELECT",
        order: 1,
        question: "What is '1' in Japanese?",
      },
      {
        id: 11,
        lessonId: 4,
        type: "ASSIST",
        order: 2,
        question: "5",
      },
      {
        id: 12,
        lessonId: 4,
        type: "SELECT",
        order: 3,
        question: "Which one of these is '10' in Japanese?",
      },
      {
        id: 13,
        lessonId: 5,
        type: "SELECT",
        order: 1,
        question: "What is 'Good Morning' in Japanese?",
      },
      {
        id: 14,
        lessonId: 5,
        type: "ASSIST",
        order: 2,
        question: "Thank you",
      },
      {
        id: 15,
        lessonId: 5,
        type: "SELECT",
        order: 3,
        question: "Which one means 'Good evening'?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 10,
        correct: true,
        text: "いち",
        audioSrc: "/jp-numbers-1.mp3",
      },
      {
        challengeId: 10,
        correct: false,
        text: "に",
        audioSrc: "/jp-numbers-2.mp3",
      },
      {
        challengeId: 10,
        correct: false,
        text: "さん",
        audioSrc: "/jp-numbers-3.mp3",
      },
      {
        challengeId: 10,
        correct: false,
        text: "よん",
        audioSrc: "/jp-numbers-4.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 11,
        correct: true,
        text: "ご",
        audioSrc: "/jp-numbers-5.mp3",
      },
      {
        challengeId: 11,
        correct: false,
        text: "ろく",
        audioSrc: "/jp-numbers-6.mp3",
      },
      {
        challengeId: 11,
        correct: false,
        text: "なな",
        audioSrc: "/jp-numbers-7.mp3",
      },
      {
        challengeId: 11,
        correct: false,
        text: "はち",
        audioSrc: "/jp-numbers-8.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 12,
        correct: true,
        text: "じゅう",
        audioSrc: "/jp-numbers-10.mp3",
      },
      {
        challengeId: 12,
        correct: false,
        text: "きゅう",
        audioSrc: "/jp-numbers-9.mp3",
      },
      {
        challengeId: 12,
        correct: false,
        text: "はち",
        audioSrc: "/jp-numbers-8.mp3",
      },
      {
        challengeId: 12,
        correct: false,
        text: "なな",
        audioSrc: "/jp-numbers-7.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 13,
        correct: true,
        text: "おはようございます",
        audioSrc: "/jp-greetings-ohayou.mp3",
      },
      {
        challengeId: 13,
        correct: false,
        text: "こんにちは",
        audioSrc: "/jp-greetings-konnichiwa.mp3",
      },
      {
        challengeId: 13,
        correct: false,
        text: "こんばんは",
        audioSrc: "/jp-greetings-konbanwa.mp3",
      },
      {
        challengeId: 13,
        correct: false,
        text: "おやすみなさい",
        audioSrc: "/jp-greetings-oyasumi.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 14,
        correct: true,
        text: "ありがとう",
        audioSrc: "/jp-greetings-arigatou.mp3",
      },
      {
        challengeId: 14,
        correct: false,
        text: "さようなら",
        audioSrc: "/jp-greetings-sayounara.mp3",
      },
      {
        challengeId: 14,
        correct: false,
        text: "すみません",
        audioSrc: "/jp-greetings-sumimasen.mp3",
      },
      {
        challengeId: 14,
        correct: false,
        text: "はじめまして",
        audioSrc: "/jp-greetings-hajimemashite.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 15,
        correct: true,
        text: "こんばんは",
        audioSrc: "/jp-greetings-konbanwa.mp3",
      },
      {
        challengeId: 15,
        correct: false,
        text: "おはよう",
        audioSrc: "/jp-greetings-ohayou.mp3",
      },
      {
        challengeId: 15,
        correct: false,
        text: "こんにちは",
        audioSrc: "/jp-greetings-konnichiwa.mp3",
      },
      {
        challengeId: 15,
        correct: false,
        text: "おやすみなさい",
        audioSrc: "/jp-greetings-oyasumi.mp3",
      },
    ]);
    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};

main();
