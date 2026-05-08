FROM node:22

WORKDIR /app

COPY package*.json ./
# Prisma needs the schema to generate the client
COPY prisma ./prisma/ 

RUN npm install
# Generate the client for the LINUX environment inside this image
RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]