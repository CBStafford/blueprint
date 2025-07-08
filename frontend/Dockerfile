FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies including Next.js globally and Tailwind CSS
RUN npm install
RUN npm install -g next
RUN npm install tailwindcss postcss autoprefixer
RUN npx tailwindcss init -p

# Copy the rest of the codebase
COPY . .

# Expose port
EXPOSE 3000

# Start development server
CMD ["npm", "run", "dev"]