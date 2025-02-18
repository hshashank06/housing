FROM node:current-alpine

LABEL org.opencontainers.image.title="Home Stays" \
      org.opencontainers.image.description="Home Stays web application to select rooms" \
      org.opencontainers.image.authors="Shashank"

# Create a directory for the application
RUN mkdir -p /usr/src/app

# Set the working directory
WORKDIR /usr/src/app

# Copy the application code to the container
COPY . /usr/src/app

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Start the application
ENTRYPOINT ["npm", "start"]