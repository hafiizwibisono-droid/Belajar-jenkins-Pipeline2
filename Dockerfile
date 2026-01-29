# Base image nginx ringan
FROM nginx:alpine

# Hapus halaman default nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy aplikasi kamu ke nginx
COPY web/ /usr/share/nginx/html/

# Set permission biar bisa dibaca nginx
RUN chmod -R 755 /usr/share/nginx/html

# Expose port 80
EXPOSE 80
