# Versión para instalar en el celular (Android) — en prueba

Esta carpeta es lo que se publica en internet para poder instalar la página en un celular Android
como si fuera una app (ícono en la pantalla de inicio, abre a pantalla completa, funciona sin internet).

| Archivo | Qué es |
|---|---|
| `index.html` | Copia exacta de `Test/Estado de Cuenta_test.html` (al publicar una versión, copiar esa versión acá). |
| `manifest.webmanifest` | Nombre, ícono y colores de la app. |
| `sw.js` | Guarda la página en el celular para abrirla sin internet. Con internet trae siempre la última. No guarda extractos. |
| `icon-192.png`, `icon-512.png` | Ícono. |

**Por qué hace falta publicarla:** Android solo deja instalar una página que viene de una dirección `https://`.
Abierta desde un archivo no se puede. La carpeta no tiene datos: los extractos se abren en el celular
(«Cargar CSV» o «Actualizar» desde HIOFFICE) y no salen de ahí. **Nunca poner CSV en esta carpeta.**

**Instalar en el celular:** abrir la dirección en Chrome → botón «Instalar en el celular» (o menú ⋮ →
«Instalar app» / «Agregar a la pantalla principal»).

Abierta con doble clic en la PC, la página funciona igual que siempre (lo de la app se activa solo en internet).
