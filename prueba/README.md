# Versión web (PC y celular)

Publicada en https://rodrigopedettitrabajos-hub.github.io/estado-de-cuenta-app/ (repo público `estado-de-cuenta-app`, GitHub Pages).

Esta carpeta es lo que se publica en internet para poder instalar la página en un celular Android
como si fuera una app (ícono en la pantalla de inicio, abre a pantalla completa, funciona sin internet).

| Archivo | Qué es |
|---|---|
| `manifest.webmanifest` | Nombre, ícono y colores de la app. |
| `sw.js` | Guarda la página para abrirla sin internet. Con internet trae siempre la última. No guarda extractos. |
| `version.json` | Lo escribe `publicar_web.py`: marca de la última publicación. La página abierta lo revisa y, si hay versión nueva, se recarga sola (sin extracto abierto) o muestra «Hay una versión nueva». |
| `prueba/` | Página de prueba (copia del `_test`) para probar cambios en internet antes de sacar versión. No darla a clientes. |
| `icon-192.png`, `icon-512.png` | Ícono. |

**Al pasar una versión a producción** también se publica acá:
`python tools/publicar_web.py "Estado de Cuenta V0.xx.html" ../estado-de-cuenta-app`, y commit + push en ese repo.
La página la guarda como `index.html`. Los celulares la toman solos la próxima vez que la abren con internet.

**Por qué hace falta publicarla:** Android solo deja instalar una página que viene de una dirección `https://`.
Abierta desde un archivo no se puede. La carpeta no tiene datos: los extractos se abren en el celular
(«Cargar CSV» o «Actualizar» desde HIOFFICE) y no salen de ahí. **Nunca poner CSV en esta carpeta.**

**Link para clientes:** https://rodrigopedettitrabajos-hub.github.io/estado-de-cuenta-app/ (siempre la última versión).
**Prueba:** `python tools/publicar_web.py "Test/Estado de Cuenta_test.html" ../estado-de-cuenta-app/prueba` → https://rodrigopedettitrabajos-hub.github.io/estado-de-cuenta-app/prueba/

**Instalar (celular o PC con Chrome/Edge):** abrir la dirección en Chrome → botón «Instalar como app» (o menú ⋮ →
«Instalar app» / «Agregar a la pantalla principal»).

Abierta con doble clic en la PC, la página funciona igual que siempre (lo de la app se activa solo en internet).
