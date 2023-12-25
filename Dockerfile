# Crear imagen: docker build -t <nombre_imagen> .
# Correr imagen: docker run -p 3000:3000 <nombre_imagen>

# Fetching the latest node image on apline linux
FROM node:20-alpine AS builder

# Declaring env

# Setting up the work directory
WORKDIR /app

# Installing dependencies
COPY ./package.json ./
RUN npm install

# Copying all the files in our project
COPY . .

# Building our application
RUN npm run build

# Fetching the latest nginx image
FROM nginx

# Copying built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Copying our nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
