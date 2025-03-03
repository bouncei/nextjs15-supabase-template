# Next.js 15 Starter Template

A **modern, production-ready Next.js 15** template with **Zustand, Supabase, TailwindCSS, ShadCN, and Framer Motion** for smooth development. Open for collaboration!

- 🌟 **Zustand** for global state management
- 🔥 **Supabase** for backend services
- 🎨 **TailwindCSS** for styling
- 🛠️ **ShadCN** for UI components
- 🎭 **Framer Motion** for animations

## 🚀 Features

- Full **Next.js 15** support (including Partial Prerendering & Server Actions)
- Optimized performance and best practices
- Dark mode support 🌙
- Built-in authentication and authorization with **Supabase**
- Beautiful UI with **ShadCN** components
- Smooth animations with **Framer Motion**
- Scalable and easy-to-maintain codebase

## 📦 Installation and Setup

### 1. Clone this repository and install dependencies:

```bash
git clone https://github.com/bouncei/nextjs15-supabase-template.git
cd nextjs15-supabase-template

npm install or yarn install
```

### 2. 🛠 Environment Variables

Create a .env.local file in the root of your project and add the following:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_KEY=your-supabase-key

MAX_IMAGE_SIZE_MB=your-bucket-image-size
MAX_VIDEO_SIZE_MB=your-bucket-video-size
BUCKET_NAME=your-bucket-name
```

Replace the placeholders with your actual Supabase credentials and bucket settings.

### 3. Start the development server:

```bash
npm run dev or yarn dev
```

Your application will be available at [http://localhost:3000](http://localhost:3000)

### 4. Build for production:

```bash
npm run build or yarn build
```

Your application will be built for production and ready to be deployed.

### 5. Start the production server:

```bash
npm run start or yarn start
```

## 🏗️ Project Structure

```bash
nextjs15-supabase-template/
├── public/                 # Static assets
├── app/                  # Next.js pages
├── components/             # Reusable UI components
├── hooks/                  # Custom hooks
├── constants/                  # Utility functions
├── stores/                  # Zustand store
├── lib/                    # Supabase client and other libraries
├── .env.local              # Environment variables
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # TailwindCSS configuration
├── postcss.config.js       # PostCSS configuration
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## 🤝 Contributing

Want to contribute? Follow these steps:

1. Fork this repository
2. Create a new branch for your feature or bug fix
3. Commit your changes with a clear and descriptive commit message
4. Push your changes to your forked repository
5. Create a pull request to this repository

## 🌟 Show Your Support

Give a ⭐ if you like this project! Also, feel free to contribute and make this template even better! 🚀
