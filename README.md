# 🚀 Sprinta - Frontend Web App

[![Next.js](https://img.shields.io/badge/Next.js-16-black.svg?logo=next.js)](https://nextjs.org) [![React](https://img.shields.io/badge/React-19-blue.svg?logo=react)](https://react.dev) [![TypeScript](https://img.shields.io/badge/TypeScript-5-orange.svg)](https://typescriptlang.org) [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-green.svg?logo=tailwindcss)](https://tailwindcss.com)

**Sprinta Frontend** es la interfaz web moderna y responsive construida con **Next.js 16 (App Router)** que consume la [API del backend Laravel](https://github.com/Pablodb22/SprintaBackend). Ofrece una experiencia fluida para gestión de proyectos colaborativos.

## 🛠️ Tecnologías del Stack

| Componente | Tecnología | Versión |
|------------|------------|---------|
| **Framework** | Next.js (App Router) | 16.1.1 |
| **UI Library** | React + TypeScript | 19.x + 5.x |
| **CSS** | TailwindCSS + Bootstrap | 4.x + 5.3 |
| **Backend API** | Laravel 12 (RESTful) | PostgreSQL |
| **Despliegue** | Vercel | ✅ Optimizado |
| **Linting** | ESLint 9 | Configurado |

## ✨ Funcionalidades Principales

### 🎨 Dashboard Completo
- 📊 Vista principal con métricas
- 📋 Gestión de Proyectos y Tareas
- 👥 Sección de Equipo/Colaboradores
- ⚙️ Configuración de usuario

### 🔐 Autenticación
- **Login** moderno y seguro
- **Registro** de nuevos usuarios
- Persistencia con localStorage

### 📱 Gestión de Proyectos & Tareas
```
 /principal     → Dashboard principal
 /dashboard     → Panel completo
 /configuracion → Configuración
 /login         → Autenticación
 /registro      → Registro usuario
```

### 📡 Integración API Backend
- **ProyectosService**: CRUD proyectos
- **TareasService**: Gestión tareas
- **UsuarioService**: Perfil usuario
- Fetch optimizado con Suspense

## 🚀 Inicio Rápido

### 1. Clonar y Dependencias
```bash
git clone https://github.com/[tu-usuario]/sprinta-frontend.git
cd sprinta-frontend
npm install
```

### 2. Configurar API Backend
```bash
# En .env.local
NEXT_PUBLIC_API_URL="http://127.0.0.1:8000/api"
# O tu URL de producción
```

### 3. Desarrollo Local
```bash
npm run dev
# Abrir http://localhost:3000
```

### 4. Build & Producción
```bash
npm run build
npm start
```

## 🏗️ Estructura del Proyecto (App Router)
```
sprinta-frontend/
├── app/
│   ├── dashboard/          # Panel principal
│   ├── login/              # Autenticación
│   ├── principal/          # Home con Proyectos/Tareas/Equipo
│   ├── registro/           # Onboarding
│   ├── service/            # API Services (Proyectos/Tareas/Usuario)
│   └── Components/         # Skeleton, Navbar, Footer
├── public/                 # Assets estáticos
└── globals.css             # Tailwind + Custom styles
```

## 📱 Componentes UI Destacados
- **Navbar & Footer**: Responsive Bootstrap/Tailwind
- **Skeleton Loaders**: UX optimizada
- **ProyectosSection**: Cards interactivas
- **TareasSection**: Lista con estados
- **EquipoSection**: Avatares y roles

## 🚀 Despliegue en Vercel
1. Push a GitHub
2. Conectar con [Vercel](https://vercel.com)
3. Auto-despliegue ✅
4. Configurar `NEXT_PUBLIC_API_URL`

```bash
# Vercel CLI
npm i -g vercel
vercel --prod
```

## 🧪 Desarrollo & Testing
```bash
npm run lint          # ESLint + TypeScript
npm run build         # Verificar build
npm run dev           # Hot reload
```

## 🔄 Flujo Completo (Dev)
```bash
# Terminal 1: Backend
cd ../sprinta-backend
composer run dev

# Terminal 2: Frontend  
cd sprinta-frontend
npm run dev
```

## 🤝 Contribuir
1. Fork del repositorio
2. `git checkout -b feature/nueva-pantalla`
3. Commit: `git commit -m "feat: nueva funcionalidad"`
4. Push y Pull Request 🎉

## 📄 Licencia
[Licencia MIT](LICENSE) - ¡Únete al proyecto!

---

**Sprinta Frontend** - Gestión visual de proyectos con Next.js 16 ✨  
[![Next.js](https://nextjs.org/icons/nextjs-icon.svg)](https://nextjs.org)
