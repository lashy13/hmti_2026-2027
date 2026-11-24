# Gunakan image resmi Node.js
FROM node:18-alpine

# Tentukan direktori kerja di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin semua sisa file project ke dalam container
COPY . .

# Port yang digunakan aplikasi
EXPOSE 3000

# Perintah untuk menjalankan server
CMD ["npm", "start"]