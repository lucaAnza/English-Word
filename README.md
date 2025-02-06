# English World 

Welcome to **English World**! The website that helps you to learn english and review English vocabulary! 📖  
→ [Try it now 🔥 ](https://lucaanza.github.io/English-Word/)
## Table of Contents
- [English World](#english-world)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
      - [1. Card Deck Training ⟲](#1-card-deck-training-)
      - [2. Day Words 📅](#2-day-words-)
      - [3. Grammar Part 📖](#3-grammar-part-)
      - [4. Score Section 📊🏆](#4-score-section-)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Self-hosted](#self-hosted)
    - [Managed hosting](#managed-hosting)
  - [Data Structure](#data-structure)
  - [Customization](#customization)


## Overview  

The goal of this site is to make **learning English** easier and more accessible for everyone.  
Built using **HTML and CSS**, this platform ensures a lightweight and smooth experience that works seamlessly across all devices and operating systems without the need for installations or special configurations.  

The interactive features and learning tools are designed to provide an engaging experience, making English practice intuitive and enjoyable.  
The specific functionalities of the platform are detailed in the next section ([Features](#features))


---

## Features

Our application offers a comprehensive set of interactive tools designed to enhance your English learning experience:

#### 1. Card Deck Training ⟲  
- Train with a dynamic **deck** of **flashcards**. Each card displays a word or its translation, allowing you to test your recall. The cards flip to reveal the translation and then fade out smoothly, keeping the practice engaging and visually appealing.

#### 2. Day Words 📅  
- Explore curated vocabulary **organized by day**. This feature helps you build your vocabulary progressively, with each day introducing a set of new words along with examples and additional details to reinforce your learning.

#### 3. Grammar Part 📖  
- Dive into grammar with tables. For example, the conditionals section provides clear explanations and examples, helping you understand complex grammar rules in a straightforward manner.

#### 4. Score Section 📊🏆  
- Track your progress with the **dynamic scoreboard**. With it, you can effectively keep track of your points and monitor your improvements over time.

---

## Installation
1. **Clone or Download** this repository (or the single `.html` file with the inline script).
2. **Open** the `.html` file in any modern web browser (Chrome, Firefox, Edge, Safari, etc.).
3. **No server needed** – it works purely with HTML, CSS, and JavaScript.

---

## Usage

### Self-hosted

1. **Open** the website (e.g., `index.html`) in your browser.
2. **Browse** through the days. For example, you might see headings like **Day 1**, **Day 2**, etc.
3. **Read** the words listed under each day.  
4. *(If using flipping cards)* **Click** on a card to flip it and see the translation or definition.  
5. **Learn** each day’s words at your own pace.

### Managed hosting

1. **Go** to the following link and enjoy (https://lucaanza.github.io/English-Word/) 

---

## Data Structure
The vocabulary is stored in a **JavaScript array of objects** called `daysData`. Each object in this array represents a **Day**, and includes:
  ```js
  varData = [
   {
    dayLabel: "Day 1",
    words: [
      { 
         word: "Exempted",
         translation: "🇮🇹 Esonerato",
         example: [
               { ex1: "He was exempted from the exam due to illness." },
               { ex2: "We are exempted from paying the entrance fee." },
               { ex3: "The law exempts minors from certain obligations." }
         ]
      },
      {},...
    ]
   },
   {Day2},{Day3},...{DayN}
  ]
  ```
- **`dayLabel`**: The day’s title (e.g., "Day 1").  
- **`words`**: An array of `word` objects, each with:
  - **word**: The English term/phrase.
  - **translation**: An explanation in English plus an Italian translation (with an Italian flag icon).

You can **add, remove, or modify** days and words as you see fit.

---

## Customization
1. **Styling**  
   - Modify the CSS in the `<style>` section to change the layout, colors, fonts, etc.
2. **Translations/Definitions**  
   - Adjust or expand the definitions in the `daysData` if you want more detailed explanations or synonyms.
3. **Number of Days**  
   - Add more day objects to `daysData` or remove any you don’t need.

---

**Happy Learning!**  
If you have any questions or suggestions, feel free to reach out or open an issue in the repository. Enjoy learning English with **English World**!