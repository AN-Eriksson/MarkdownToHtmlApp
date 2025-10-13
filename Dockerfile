FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runtime
WORKDIR /app
RUN npm install -g serve@14.1.2
COPY --from=build /app/dist /app/dist
EXPOSE 80
CMD ["serve", "-s", "dist", "-l", "80"]