Nexton E-Commerce

Description
This project is a front-end only e-commerce application built using Next.js. It was initialized with create-next-app as a base template and aims to implement a responsive and interactive user interface for an e-commerce store optimized for search engines. The project is based on a UI design available on Figma, which includes elements such as product pages, shopping cart, and navigation menus.
Currently, the project is in its early stages and contains the basic Next.js structure. It can be extended to include features like product displays, cart management, or integration with an external API to fetch data (such as the provided backend API).
Planned Key Features:

Dynamic product and category pages based on the Figma design.
Support for Server-Side Rendering (SSR) to enhance performance.
Responsive design for mobile devices.
Interactive animations using libraries like Framer Motion and GSAP.
Integration with an external API for fetching product, user, and order data.

You can start development by editing files in the app/ directory based on the Figma design.
UI Design
The project is built based on a user interface design available on Figma:

Design Link: Ecommerce Website UI Design (Figma)
The design includes elements such as:
Homepage for showcasing products.
Product detail pages.
Shopping cart and checkout interface.
Responsive navigation menus.


The goal is to translate this design into a functional UI using Next.js and the listed UI libraries.

Backend API
To support the front-end, the project can be integrated with an API collection available on Postman:

API Collection Link: E-Commerce API (Postman)
This collection includes endpoints for managing products, users, orders, and authentication.
How to Use:
Import the collection into Postman to test the API.
In the front-end, use libraries like axios or @tanstack/react-query to make HTTP requests to these endpoints.
Example endpoints (based on common e-commerce APIs):
Fetch products: GET /api/products (use React Query for caching).
User login: POST /api/auth/login (with Formik and Yup for validation).


Ensure the base URL is configured in environment variables (e.g., NEXT_PUBLIC_API_URL).



If the API requires authentication (e.g., JWT tokens), store them in Redux or localStorage for subsequent requests.
Technologies Used
The project leverages a modern stack of libraries and tools to build an interactive and engaging user interface:
Dependencies

Next.js (15.5.2): A React framework for building web applications with support for Server-Side Rendering and Static Site Generation.
React (19.1.0): JavaScript library for building interactive user interfaces.
React DOM (19.1.0): For interacting with the DOM in the web environment.
@reduxjs/toolkit (2.9.0): Simplified state management with Redux (ideal for managing cart or user state).
react-redux (9.2.0): Connects Redux with React components.
@tanstack/react-query (5.85.5): For managing asynchronous data fetching (e.g., API calls for products).
axios (1.11.0): Library for making HTTP requests (for API integration).
formik (2.4.6): For managing forms and simplifying data validation (e.g., login forms).
yup (1.7.0): Schema validation for forms.
@radix-ui/react- (various)*: Accessible UI components, including:
@radix-ui/react-accordion (1.2.12): For collapsible sections (e.g., product categories).
@radix-ui/react-dialog (1.1.15): For dialog modals (e.g., login popup).
@radix-ui/react-label (2.1.7): For form input labels.
@radix-ui/react-navigation-menu (1.2.14): For navigation menus.
@radix-ui/react-select (2.2.6): For interactive dropdowns (e.g., product filters).
@radix-ui/react-slot (1.2.3): For component customization.


framer-motion (12.23.12) and motion (12.23.12): For creating interactive animations and transitions (e.g., product page transitions).
gsap (3.13.0): Advanced animation library.
lucide (0.542.0) and lucide-react (0.542.0): Lightweight icon library tailored for React (for product and navigation icons).
swiper (11.2.10): For creating interactive sliders (e.g., featured product carousels).
next-themes (0.4.6): For managing themes (e.g., dark/light mode).
react-spinners (0.17.0): Components for loading spinners during API data fetching.
sonner (2.0.7): For displaying elegant toast notifications (e.g., success/error messages).
class-variance-authority (0.7.1): For dynamic CSS variants (with Tailwind).
clsx (2.1.1): For conditionally joining CSS class names.
tailwind-merge (3.3.1): For merging Tailwind CSS classes efficiently.

Dev Dependencies

tailwindcss (4): CSS framework for rapid and responsive UI design (based on Figma).
@tailwindcss/postcss (4): PostCSS processor for Tailwind CSS.
tw-animate-css (1.3.7): Library for adding animations to Tailwind CSS.

Requirements

Node.js v18 or higher.
Package manager like npm, yarn, pnpm, or bun.
Postman (optional) for testing the API.

Installation and Running

Clone the repository:
git clone https://github.com/Amrr-Maherr/nexton-e-commerce.git
cd nexton-e-commerce


Install dependencies:
npm install
# or
yarn install
# or
pnpm install
# or
bun install


Run the development server:
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

(Uses Turbopack for faster development).

Open your browser at: http://localhost:3000 to view the application.


The app supports hot reloading during development. Start by editing app/page.js to customize the homepage based on the Figma design.
Deployment
The easiest way to deploy the app is using the Vercel Platform (created by Next.js developers).

Create an account on Vercel.
Connect the repository to Vercel via GitHub.
For more details, refer to Next.js deployment documentation.

Alternative platforms: Netlify, AWS, or Heroku.
Contributing

Fork the repository.
Create a new branch: git checkout -b feature-branch.
Make changes and commit: git commit -m "Add feature".
Push the branch: git push origin feature-branch.
Create a Pull Request.

We welcome contributions to implement more Figma pages or enhance API integration!
Learn More

Next.js Official Documentation.
Next.js GitHub Repository.
Other resources: React Docs, Vercel Fonts, Postman Documentation.

License
This project is licensed under the MIT License (default for Next.js, can be modified).
For any questions, reach out via GitHub Issues.