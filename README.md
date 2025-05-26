# 🎮 Solitario-React

Una implementación moderna del clásico juego de Solitario (Klondike) construido con React y JavaScript.

## 🚀 Características

- Interfaz de usuario moderna y responsive
- Animaciones fluidas de las cartas
- Reglas completas del Solitario Klondike
- Diseño intuitivo drag-and-drop
- Compatibilidad con dispositivos móviles y escritorio

## 🛠️ Tecnologías

- React 19
- Vite
- CSS3 personalizado
- PropTypes para validación de tipos

## ⚙️ Instalación

1. Clona el repositorio:
```sh
git clone https://github.com/ziilgc/Solitario-React.git
```

2. Instala las dependencias:
```sh
cd Solitario-React
npm install
```

3. Inicia el servidor de desarrollo:
```sh
npm run dev
```

## 🎯 Cómo jugar

1. Las cartas se distribuyen en 7 pilas del tableau
2. El objetivo es mover todas las cartas a las fundaciones, ordenadas por palo y en orden ascendente
3. En el tableau, las cartas deben colocarse en orden descendente y alternando colores
4. Use el mazo (stock) para robar nuevas cartas cuando se quede sin movimientos

## 🔧 Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la versión de producción

## 📝 Reglas del juego

- Las cartas en las fundaciones deben colocarse comenzando por el As
- En el tableau, las cartas deben alternarse entre rojas y negras
- Solo los Reyes pueden colocarse en espacios vacíos del tableau
- Las cartas ocultas se revelan automáticamente cuando quedan expuestas

## 👨‍💻 Autor

- Angel Sánchez Moreno

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría realizar.
