# Use Node.js base image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package files first (to optimize Docker caching)
COPY package.json package-lock.json /usr/src/app/

# Install dependencies
RUN npm install

# Copy the public folder explicitly
COPY Portfolioserver /usr/src/app/Portfolioserver

# Debug: List the contents of the public folder to confirm the copy
RUN ls -R /usr/src/app/Portfolioserver

# Copy the rest of the project (excluding node_modules if using .dockerignore)
COPY . /usr/src/app/

# Expose the port
EXPOSE 7777

# Start the server
CMD ["npm", "run", "start"]