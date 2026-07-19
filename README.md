# 021 Projects — Website Redesign

A modern redesign of the [021 Projects](https://021projects.co.za/) website — a Cape Town & Johannesburg-based construction and renovation company specialising in painting, waterproofing, ceilings, partitions, flooring, tiling and brick laying.

Built with **React**, **Vite** and **Tailwind CSS**.


## Tech stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- PostCSS + Autoprefixer

## Project structure

```
COMPANY-PROJECT-1/
├── public/
├── src/
│   ├── assets/              # project photos, images
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── RulerDivider.jsx
│   │   ├── WhyUs.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Getting started

Clone the repository and install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173` by default.



## Content sections

| Section    | Purpose                                                              |
|------------|-----------------------------------------------------------------------|
| Hero       | Company positioning and key facts (founded, location, focus)         |
| Why Us     | Responsive, Quality, and Support — the company's core commitments     |
| Services   | Painting, waterproofing, ceilings, partitions, flooring, tiling, brick laying |
| Our Work   | Photo gallery of completed site work, plus accredited applicator list |
| Contact    | Office address, phone, email, and a contact form                     |

## Notes for future work

- Wire up the contact form to an email service or backend endpoint (it currently has no submit handler).
- Consider adding a dedicated Services or Gallery detail page as the project grows.

## Live Deployed URL
https://mpho09.github.io/company-project-1/


