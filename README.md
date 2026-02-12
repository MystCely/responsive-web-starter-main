# Responsive Web Starter

A simple responsive landing page built with HTML, CSS, and JavaScript.

## What This Project Is

A front-end practice project with:

- responsive layout
- dark/light theme toggle
- mobile hamburger menu

## Features

- Responsive layout for desktop, tablet, and mobile
- Dark/light mode toggle with saved preference (`localStorage`)
- Mobile hamburger menu with right-side slide-in navigation
- Theme-aware logo switching (`logo-light` / `logo-dark`)
- Hero section optimized for small screens (image first on mobile)

## Stack

- HTML5
- CSS3 (media queries + CSS variables)
- Vanilla JavaScript

## Project Structure

```text
responsive-web-starter-main/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── resources/
    └── (images, icons, logos)
```

## Responsive Breakpoints

- Desktop: max layout width `1280px`
- Tablet: `<= 1024px`
- Mobile: `<= 640px`
- Small devices: `<= 360px` (extra compact spacing)

## Behavior Notes

- Theme state is stored in `localStorage` with key `theme`.
- Mobile menu closes on link click, `Escape`, or resize above mobile width.
