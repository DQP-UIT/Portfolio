# Portfolio Website

A modern and responsive portfolio website built with **Next.js**, **Tailwind CSS**, and **Three.js**. This project showcases your skills, projects, and contact information in an interactive and visually appealing way.

## Features

- **Responsive Design**: Fully responsive layout for all devices.
- **Interactive Background**: A dynamic Three.js background for a unique user experience.
- **Smooth Navigation**: Scroll-based navigation with smooth transitions.
- **Contact Form**: Integrated contact form with EmailJS for direct communication.
- **Custom Animations**: Type animations and interactive elements.

---

## Demo

You can view the live demo of the project [here](#).

---

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Three.js**: 3D rendering library for the interactive background.
- **EmailJS**: Service for sending emails directly from the contact form.
- **React Icons**: Icon library for modern and customizable icons.

---

## Installation

Follow these steps to set up the project locally:

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/portfolio.git
2. Navigate to the project directory:
    cd portfolio
3. Install dependencies:
    npm install
    # or
    yarn install
4. Start the development server:
    npm run dev
    # or
    yarn dev
5. Open your browser and navigate to:
    http://localhost:3000

### Customization

#### Update Personal Information
- Open the `Header.tsx` file and update the `categories` array with your desired navigation links.
- Update the `Home.tsx`, `About.tsx`, `Project.tsx`, and `Contact.tsx` files with your personal information, projects, and contact details.

#### Change Background
- Replace the video file in the `public/` directory (e.g., `blackhole.webm`) with your own video.
- Update the `src/components/Background.tsx` file if needed.
