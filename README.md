<div align="center">

# 🎓 StudyPlanner - Login Portal

### Aplicación de Login Institucional con Design Moderno

[![Angular](https://img.shields.io/badge/Angular-21.2.0-dd0031.svg?style=for-the-badge&logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6.svg?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Node](https://img.shields.io/badge/Node.js-20+-339933.svg?style=for-the-badge&logo=node.js)](https://nodejs.org/)

</div>

---

## 📋 Descripción

**StudyPlanner** es una aplicación de login institucional diseñada con Angular 21, que presenta una interfaz moderna con efecto **glassmorphism** y soporte de renderizado del lado del servidor (SSR). Este proyecto forma parte del Mini-proyecto 1 del curso y demuestra las mejores prácticas de desarrollo con Angular.

## ✨ Características

- 🎨 **Diseño Glassmorphism**: Interfaz moderna con efectos de vidrio esmerilado
- 🔐 **Formulario de Login**: Validación de correo institucional y contraseña
- ⚡ **Server-Side Rendering (SSR)**: Mejor rendimiento y SEO con Angular Universal
- 🧪 **Testing Integrado**: Suite de pruebas con Vitest
- 📱 **Responsive Design**: Adaptable a diferentes tamaños de pantalla
- 🚀 **Hot Reload**: Recarga automática durante el desarrollo

## 🛠️ Tecnologías

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Angular | 21.2.0 | Framework principal |
| TypeScript | 5.9 | Lenguaje de programación |
| Express | 5.1.0 | Servidor SSR |
| Vitest | 4.0.8 | Framework de testing |
| RxJS | 7.8.0 | Programación reactiva |
| Prettier | 3.8.1 | Formateo de código |

## 🚀 Inicio Rápido

### Prerrequisitos

```bash
Node.js 20+
npm 11.11.0+
```

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd PI_1FE
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm start
   ```

4. **Abrir en el navegador**
   
   Navega a `http://localhost:4200/` 🎉

## 📜 Scripts Disponibles

| Script | Comando | Descripción |
|--------|---------|-------------|
| 🚀 Desarrollo | `npm start` | Inicia el servidor de desarrollo |
| 🏗️ Build | `npm run build` | Compila el proyecto para producción |
| 👀 Watch | `npm run watch` | Compila en modo desarrollo con observación |
| 🧪 Test | `npm test` | Ejecuta las pruebas unitarias |
| 🖥️ SSR | `npm run serve:ssr:LoginAngular` | Inicia el servidor SSR |

## 📁 Estructura del Proyecto

```
PI_1FE/
├── 📂 src/
│   ├── 📂 app/
│   │   ├── app.ts              # Componente principal
│   │   ├── app.html            # Template del login
│   │   ├── app.css             # Estilos glassmorphism
│   │   ├── app.routes.ts       # Configuración de rutas
│   │   └── app.config.ts       # Configuración de la app
│   ├── main.ts                 # Entry point del cliente
│   ├── main.server.ts          # Entry point del servidor
│   ├── server.ts               # Configuración Express
│   └── styles.css              # Estilos globales
├── 📂 public/                  # Assets estáticos
├── angular.json                # Configuración de Angular
├── package.json                # Dependencias del proyecto
└── tsconfig.json               # Configuración de TypeScript
```

## 🎨 Interfaz de Usuario

El diseño incluye:
- ✅ Logo institucional 🎓
- ✅ Campo de correo institucional
- ✅ Campo de contraseña segura
- ✅ Botón de acceso al portal
- ✅ Enlace de ayuda para problemas de acceso

## 🔧 Desarrollo

### Generar Componentes

```bash
ng generate component nombre-del-componente
```

### Ver Comandos Disponibles

```bash
ng generate --help
```

### Build de Producción

```bash
ng build
```

Los artefactos de compilación se almacenarán en el directorio `dist/`.

## 🧪 Testing

El proyecto utiliza **Vitest** como runner de pruebas:

```bash
npm test
```

## 📝 Notas de Desarrollo

- 🔄 La aplicación se recarga automáticamente al modificar archivos
- 🎯 El modo estricto de TypeScript está habilitado
- 📦 El empaquetado está optimizado para producción
- 🌐 SSR mejora el rendimiento inicial y SEO

## 📚 Recursos Adicionales

- [Documentación de Angular](https://angular.dev/)
- [Angular CLI Reference](https://angular.dev/tools/cli)
- [Vitest Documentation](https://vitest.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 👨‍💻 Autor

Desarrollado como parte del Mini-proyecto 1 - FE

## 📄 Licencia

Este proyecto es de código privado para fines educativos.

---

<div align="center">

**¡Desarrollado con ❤️ usando Angular!**

</div>
