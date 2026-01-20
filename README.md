#  Mini application – Gestion de notes

Ce projet est une mini application  permettant de gérer des notes simples.

---

##  Fonctionnalités

### Backend

* Lister les notes (triées par date de création décroissante)
* Créer une note
* Supprimer une note
* Validation des données
* Réponses JSON cohérentes

### Frontend 

* Affichage de la liste des notes
* Création d’une note via un formulaire
* Suppression d’une note
* Gestion d’un état de chargement
* Gestion basique des erreurs

---

## Stack technique

### Backend

* Laravel 12
* API REST JSON
* Base de données SQLite

### Frontend

* **Vue.js 2** (Options API uniquement)
* Webpack
* Axios

---

## Architecture du projet

```
mini-notes/
├── backend/        # API Laravel
└── frontend/       # Application Vue.js
```

---

## ⚙️ Prérequis

* Windows 11
* PHP >= 8.5 (extensions : fileinfo, pdo_sqlite, sqlite3)
* Composer
* Node.js 18.20
* npm

---

## 🔧 Installation du backend (Laravel)

```bash
cd backend
composer install
```

### Configuration de la base de données


Configurer le fichier `.env` :

```env
DB_CONNECTION=sqlite
DB_DATABASE=database/database.sqlite
```

Lancer les migrations :

```bash
php artisan migrate
```


### Lancer le serveur backend

```bash
php artisan serve
```

API accessible sur :

```
http://127.0.0.1:8000/api
```

---

##  Endpoints API

| Méthode | URL             | Description                         |
| ------- | --------------- | ----------------------------------- |
| GET     | /api/notes      | Liste des notes (date décroissante) |
| POST    | /api/notes      | Création d’une note                 |
| DELETE  | /api/notes/{id} | Suppression d’une note              |



---

##  Installation du frontend (Vue.js 2)

```bash
cd frontend
npm install
```

### Lancer le serveur frontend

```bash
npm run dev
```

Application accessible sur :

```
http://localhost:8080
```
