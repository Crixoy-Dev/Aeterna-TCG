# 🏛️ BLUEPRINT: AETERNA (NEXO DE CARTAS)

Este documento es el mapa maestro de Aeterna. Define la arquitectura actual y los siguientes pasos para que cualquier IA pueda continuar el desarrollo sin perder el hilo.

## 1. VISION GENERAL
Aeterna es un juego de cartas que fusiona mecánicas de TCG tradicional (1v1) con un modo Auto-battler (Campos de Guerra).
- **Enfoque técnico:** Portabilidad total. Solución de "Instalación Cero" para usuarios sin Node.js.
- **Modo Online:** Peer-to-Peer (P2P) directo entre navegadores.

## 2. STACK TECNOLÓGICO (PORTABLE)
- **Framework:** Vanilla JavaScript (ES6+). Optimizado para máxima compatibilidad sin dependencias pesadas.
- **Estilos:** Tailwind CSS (Play CDN) + Custom CSS.
- **Networking:** PeerJS (WebRTC) para conectividad P2P.
- **Renderizado:** Manipulación directa del DOM para evitar errores de hidratación/carga en entornos restringidos.

## 3. ARQUITECTURA DEL PROYECTO
El juego reside en un único archivo maestro: `Aeterna_Online.html`.
- **Estructura de Datos:**
  - `Card`: { id, name, freq, cost, atk, def, text }
  - `GameState`: Controla la pantalla activa (MENU, 1V1_LOBBY, CAMPOS_DE_GUERRA).
  - `Connection`: Gestiona el "ID de Nexo" para el modo multijugador.

## 4. ESTADO ACTUAL (HITO 1 - Completado)
- [x] Sistema de diseño premium definido (Colores de Frecuencia, Glassmorphism).
- [x] Configuración de PeerJS para conectividad P2P.
- [x] Creación del Menú Principal con navegación fluida.
- [x] Implementación de Sub-modos: 1v1 (CPU/Amigo) y Campos de Guerra (CPU/Amigo).
- [x] Estructura base del tablero 1v1 y la Taberna (CG).

## 5. SIGUIENTES PASOS (HITO 2 - Lógica de Juego)
1. **Motor de Cartas 1v1:**
   - [ ] Implementar el "Drag & Drop" para jugar cartas desde la mano al tablero.
   - [ ] Sistema de Orbes: Al inicio de turno, mostrar selector de Frecuencia (Blanco, Azul, Rojo, Verde, Negro).
   - [ ] Sincronización de datos vía PeerJS (enviar jugada al oponente).
2. **IA Básica (Modo CPU):**
   - [ ] El oponente CPU debe jugar cartas si tiene orbes suficientes.
3. **Modo Campos de Guerra (Fase Inicial):**
   - [ ] Generación aleatoria de unidades en la Taberna según el nivel.
   - [ ] Mecánica de compra y venta de unidades.

## 6. REGLAS CORE (Para la IA)
- **Orbes:** 1 nuevo cada turno, el jugador elige el color.
- **Combate:** Criaturas bloquean (MTG), daño permanente (HS).
- **Pila:** LIFO (Last In, First Out).
