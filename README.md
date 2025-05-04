# API Usuarios - Node.js + Express + PostgreSQL

Este proyecto es una API REST básica construida con **Node.js**, **Express** y **PostgreSQL**.  
Está preparada para ejecutarse tanto **localmente en contenedores Docker** como **en la nube con AWS Elastic Beanstalk y RDS**.

---

## Tecnologías usadas

- Node.js
- Express
- PostgreSQL
- Docker & Docker Compose
- AWS Elastic Beanstalk (EC2)
- Amazon RDS (PostgreSQL)
- EB CLI & AWS CLI

---

## Cómo ejecutar localmente (Docker)

> Asegúrate de tener **Docker y Docker Compose** instalados en tu máquina.

### 1. Clona el repositorio

```bash
git clone https://github.com/luz-caballero/api-usuarios.git
cd api-usuarios
```

### 2. Copia el archivo de entorno

```bash
cp .env.example .env
```

### 3. Levanta los contenedores

```bash
docker-compose up --build
```

### La API esta disponible en: http://localhost:8080


## ☁️ Despliegue en AWS (Elastic Beanstalk + RDS)

### 1. Requisitos previos
- Tener una cuenta en AWS
- Tener configurado `aws configure` y `eb init`
- Tener una base de datos PostgreSQL en RDS
- Configurar `.ebextensions/db.config` con tu cadena de conexion `DATABASE_URL`

### 2. Despliegue paso a paso

#### a) Crear el entorno (si aun no existe)

```bash
eb create apiusuarios-env
```

#### b) Actualizar la app

```bash
eb deploy
```

#### c) Abrir en el navegador

```bash
eb open
```

---





























