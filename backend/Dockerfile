# Use the official Node.js 16 image as a parent image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of your app's source code
COPY . .

# Build your Strapi app
RUN npm run build

# Expose the port Strapi runs on
EXPOSE 1337

# Run the app
CMD ["npm", "start"]