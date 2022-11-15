FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install -g lite-server
COPY ./ .
CMD [ "npm", "run", "test"]  
EXPOSE 3001
