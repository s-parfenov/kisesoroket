# Kisa's 40th Birthday Quiz

A fun, interactive quiz website to celebrate Kisa's 40th birthday!

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Vercel** (deployment)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Adding Questions

Edit `data/questions.ts` to add your quiz questions. Each question should have:
- `id`: Unique identifier
- `type`: Either `'image'` or `'text'`
- `media`: Image path (for image type) or text content (for text type)
- `question`: The question text
- `options`: Array of 4 answer options
- `correctAnswer`: Index (0-3) of the correct answer

### Adding Images

Place quiz images in the `public/images/` directory and reference them in your questions (e.g., `/images/crown.jpg`).

## Deployment

This project is configured for Vercel deployment. Simply:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy!

See `vercel.json` for deployment configuration.

## Project Structure

```
kisesoroket/
├── app/              # Next.js app directory
├── components/       # React components
├── data/            # Quiz questions data
├── types/           # TypeScript type definitions
├── public/          # Static assets (images)
└── ...
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

