# Republisher

## Configuration

Create .env file and set open api key

```shell
cp .env-template .env
```

## Docker

### Installation

```shell
docker build -t republisher .
```

### Usage

**Url**

```shell
docker run --rm -it --env-file .env republisher --url "https://www.example.com"
```

**Headline**

```shell
docker run --rm -it --env-file .env republisher --headline "Headline text"
```

## Local

### Installation

```shell
npm run build
```

### Usage

```shell
node --env-file=.env dist/republish.js --url "https://www.example.com"
```