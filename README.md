# 🦸‍♂️ SuperHeroes App - MEAN Stack

Una aplicación web completa para explorar superhéroes de Marvel y DC Comics, desarrollada con el stack MEAN (MongoDB, Express.js, React.js, Node.js).

## 🚀 Demo en Vivo

- **Frontend**: [SuperHeroes App](https://spa-react-heroes.vercel.app)
- **API**: [Heroes API](https://spa-heroes-service.vercel.app)

## 📋 Características

### ✨ Funcionalidades Principales
- 📱 **Responsive Design** - Optimizado para móviles, tablets y desktop
- 🔍 **Búsqueda Inteligente** - Busca por nombre, biografía o casa editorial
- 🎯 **Filtros Dinámicos** - Filtra héroes por Marvel o DC
- 📖 **Vista Detallada** - Información completa de cada superhéroe
- ⚡ **Carga Rápida** - Optimizado con Vite para máximo rendimiento
- 🎨 **Interfaz Moderna** - Diseño limpio con Bootstrap 5

### 🛠️ Características Técnicas
- **Frontend**: React 18 + Vite 5 + Bootstrap 4
- **Backend**: Node.js + Express.js + MongoDB
- **Routing**: React Router DOM
- **Estado**: React Hooks (useState, useEffect)
- **API**: RESTful API con endpoints CRUD
- **Responsive**: Mobile-first design
- **Optimización**: Lazy loading de imágenes

## 🛠️ Tecnologías Utilizadas

### Frontend
```json
{
  "react": "^18.3.1",
  "react-router-dom": "^6.28.2",
  "bootstrap": "^4.6.2",
  "react-bootstrap": "^1.6.7",
  "vite": "^5.4.19"
}
```

### Backend (API)
```json
{
  "node": ">=18.0.0",
  "express": "^4.21.2",
  "mongoose": "^8.15.0",
  "cors": "^2.8.5"
}
```

## 📦 Instalación y Configuración

### Prerrequisitos
- Node.js >= 18.0.0
- pnpm 11.5.2 (`npm install -g pnpm`)

### Instalación

```bash
git clone https://github.com/cmurestudillos/spa-react.git
cd spa-react
pnpm install
pnpm dev
```

Abre `http://localhost:5173` en el navegador.

## 🏗️ Estructura del Proyecto

```
src/
├── assets/                 # Recursos estáticos
│   ├── css/               # Estilos CSS
│   └── img/               # Imágenes y logos
├── components/            # Componentes React
│   ├── heroes/           # Lista de héroes
│   ├── heroe/            # Detalle del héroe
│   └── shared/           # Componentes compartidos
│       ├── footer/       # Footer de la aplicación
│       ├── search/       # Componente de búsqueda
│       └── tarjeta/      # Card de héroe
├── routes/               # Configuración de rutas
│   └── Router.jsx        # Router principal
├── App.jsx              # Componente principal
└── main.jsx            # Punto de entrada
```

## 🌐 API Endpoints

### Base URL: `https://spa-heroes-service.vercel.app`

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/superheroes` | Obtiene todos los héroes |
| GET | `/api/superheroes/:id` | Obtiene un héroe por ID |

### Ejemplo de Respuesta
```json
{
  "_id": "68adc0afb8b0efbde1543731",
  "nombre": "Spider-Man",
  "bio": "Tras ser mordido por una araña radiactiva...",
  "img": "assets/img/spiderman.svg",
  "aparicion": "1962-08-01T00:00:00.000Z",
  "casa": "Marvel"
}
```

## 🔍 Funcionalidades de Búsqueda

La aplicación incluye un sistema de búsqueda avanzado que permite:

- **Búsqueda por nombre**: "Spider-Man", "Batman"
- **Búsqueda por biografía**: "araña radiactiva", "vigilante"
- **Búsqueda por casa editorial**: "Marvel", "DC"
- **Búsqueda en tiempo real**: Los resultados se actualizan mientras escribes
- **Manejo de casos**: No distingue entre mayúsculas y minúsculas

## 📱 Responsive Design

### Breakpoints de Bootstrap
- **Mobile**: < 576px (1 columna)
- **Tablet**: 576px - 991px (2 columnas)
- **Desktop**: >= 992px (3 columnas)

### Optimizaciones Móviles
- Imágenes optimizadas para diferentes densidades
- Touch-friendly buttons y controles
- Navegación simplificada
- Búsqueda adaptativa

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.


## 🙏 Agradecimientos

- **Marvel & DC Comics** por los increíbles personajes
- **Bootstrap** por el framework CSS
- **React Team** por la increíble librería
- **Vite** por la herramienta de desarrollo ultrarrápida
- **Vercel** por el hosting gratuito

---

⭐ **¿Te gustó el proyecto? ¡Dale una estrella en GitHub!**