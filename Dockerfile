FROM node:alpine 
ENV PORT 3000
EXPOSE 3000

# Copy Sopurce and Install deps
COPY ./ ./
RUN npm install

#Build the app
RUN npm run build 

CMD ["npm" ,"start"]

