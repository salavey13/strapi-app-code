# Full-Stack Strapi and Next.js Application

This project is a full-stack application using Strapi as the backend CMS and Next.js as the frontend framework. It includes configurations for PostgreSQL database, Redis caching, and Nginx as a reverse proxy and for handling SSL/TLS.

## Prerequisites

- Docker and Docker Compose
- Node.js (v16 or later)
- npm (v7 or later)

## Getting Started

1. Clone the repository:

   ```
   git clone github.com/salavey13/strapi-nextjs
   cd strapi-nextjs
   ```

2. Set up Strapi:

   ```
   node scripts/setup-strapi.js
   ```

   This script will guide you through the initial Strapi setup. Follow the prompts to create your admin user.

3. Set up environment variables:
   Copy the `.env.example` file to `.env` in both the `frontend` and `backend` directories and update the values as needed.

4. Start the development servers:
   In one terminal, start the Strapi backend:

   ```
   cd backend
   npm run develop
   ```

   In another terminal, start the Next.js frontend:

   ```
   cd frontend
   npm run dev
   ```

5. Access the application:
   - Frontend: http://localhost:3000
   - Strapi Admin: http://localhost:1337/admin

## Project Structure

- `frontend/`: Next.js frontend application
- `backend/`: Strapi backend application
- `nginx/`: Nginx configuration
- `docker-compose.yml`: Docker Compose configuration file
- `scripts/`: Helper scripts for setup and development

## Development

To run the project in development mode, follow steps 4 and 5 from the "Getting Started" section.

## Deployment

The project is configured to be deployed using Docker Compose. To deploy:

1. Ensure all environment variables are correctly set in the `.env` files.
2. Build and run the Docker containers:
   ```
   docker-compose up --build
   ```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
