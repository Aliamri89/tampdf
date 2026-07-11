FROM node:20-bookworm-slim AS base

# LibreOffice (headless conversion engine) + fonts for accurate rendering.
# Only the Writer component is needed for PDF <-> Word conversion.
RUN apt-get update \
  && apt-get install -y --no-install-recommends \
    libreoffice-writer \
    fonts-liberation \
    fonts-dejavu \
  && rm -rf /var/lib/apt/lists/*

ENV SOFFICE_BINARY=soffice
WORKDIR /app

COPY package.json ./
RUN npm install --omit=dev

COPY tsconfig.json ./
COPY src ./src
RUN npm install typescript --no-save && npx tsc -p tsconfig.json && npm uninstall typescript

ENV NODE_ENV=production
ENV PORT=8787
EXPOSE 8787

CMD ["node", "dist/index.js"]
