<div align="center">
  <h1>⚡ NexusFlow</h1>
  <p><strong>AI-Powered Workflow Automation Platform</strong></p>
  <p>Crea, gestiona y monitorea flujos de trabajo inteligentes con agentes de IA generativa, integraciones en tiempo real y observabilidad completa.</p>

  ![Next.js](https://img.shields.io/badge/Next.js_15-black?style=flat-square&logo=next.js)
  ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
  ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)
  ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
  ![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
</div>

---

## ¿Qué es NexusFlow?

NexusFlow resuelve un problema real: los equipos pierden horas configurando automatizaciones entre herramientas que no se hablan entre sí. NexusFlow unifica todo en una sola plataforma con un builder visual drag-and-drop, agentes de IA que entienden el contexto del negocio, y observabilidad completa de cada ejecución.

> Construido en solitario como proyecto de portafolio para demostrar arquitectura de nivel enterprise, decisiones técnicas justificadas y dominio del stack moderno 2025-2026.

---

## Demo

> 🚧 Deploy en Vercel próximamente — [ver roadmap](#roadmap)

---

## Arquitectura

NexusFlow sigue una arquitectura **event-driven** de tres capas:

**Capa Cliente**
Next.js 15 App Router · React 19 Server Components · Zustand · TanStack Query

**Capa Plataforma (Core)**
Supabase (PostgreSQL + RLS + Realtime) · Edge Functions · Event Bus · Agentes IA (Langchain.js + GPT-4o) · RAG con pgvector

**Capa Integraciones**
Make · Slack · Stripe · OpenAI · Email · Webhooks externos

**Patrones aplicados:**
- **Event-Driven Architecture** — desacople total entre ejecución y UI
- **BFF (Backend for Frontend)** — Next.js API Routes como capa intermedia
- **Row Level Security** — seguridad multitenant a nivel de base de datos
- **RAG Pipeline** — agentes con contexto del usuario via pgvector
- **Webhook Adapter Pattern** — integraciones bidireccionales con validación HMAC
- **Observer Pattern** — Supabase Realtime para actualizaciones en vivo

---

## Stack tecnológico

| Capa | Tecnología | Decisión técnica |
|------|-----------|-----------------|
| Framework | Next.js 15 (App Router) | SSR + Server Components + BFF pattern en un solo proyecto |
| UI | React 19 + TypeScript | Type-safety end-to-end, Server Components para performance |
| Estilos | Tailwind CSS v4 | Utility-first con design tokens, máxima velocidad de UI |
| Base de datos | Supabase (PostgreSQL) | RLS nativo, Realtime, Auth y Storage — reduce ops sin perder control |
| Auth | Supabase Auth + RLS | Seguridad a nivel de fila en DB, no solo en middleware |
| IA | Langchain.js + GPT-4o | Agentes con tool calling, RAG sobre documentos del usuario |
| Vector DB | pgvector (Supabase) | Embeddings en la misma DB — evita latencia de servicio externo |
| Estado | Zustand + TanStack Query | Estado global liviano + server state con cache automático |
| Observabilidad | OpenTelemetry + Sentry | Trazas distribuidas y error tracking de producción |
| CI/CD | GitHub Actions + Vercel | Deploy automático en cada push a main |
| Testing | Vitest + Playwright | Unit tests + E2E completo |

---

## Features implementados

- [x] Dashboard con métricas en tiempo real
- [x] Sistema de workflow cards con estados (activo/pausado/error)
- [x] Autenticación con email y Google OAuth
- [x] Layout multitenant con sidebar navegable
- [ ] Builder drag-and-drop de workflows (en progreso)
- [ ] Motor de ejecución event-driven
- [ ] Agentes de IA con RAG pipeline
- [ ] Webhooks bidireccionales con validación HMAC
- [ ] Rate limiting con Upstash Redis
- [ ] Observabilidad con OpenTelemetry
- [ ] Suite de tests E2E con Playwright

---

## Instalación local

```bash
# Clonar el repositorio
git clone https://github.com/gerindiz/nexusflow.git
cd nexusflow

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus credenciales de Supabase

# Arrancar en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

### Variables de entorno requeridas

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## Roadmap

### Fase 1 — Fundamentos ✅
- Setup Next.js 15 + TypeScript + Tailwind
- Dashboard con layout, métricas y workflow cards
- Páginas de auth (login + registro)
- Deploy en GitHub

### Fase 2 — Base de datos + Auth 🔄
- Supabase: schema multitenant con RLS
- Auth real con email y Google OAuth
- CRUD de workflows persistido

### Fase 3 — Motor de IA
- Integración Langchain.js + GPT-4o
- Pipeline RAG con pgvector
- Streaming de respuestas via SSE

### Fase 4 — Robustez
- Webhooks bidireccionales con HMAC
- Rate limiting con Upstash Redis
- OpenTelemetry + Sentry

### Fase 5 — Producción
- Suite Playwright E2E
- GitHub Actions CI/CD
- Deploy público en Vercel

---

## Decisiones de arquitectura

**¿Por qué Supabase en lugar de Prisma + PostgreSQL directo?**
Supabase ofrece RLS nativo a nivel de DB, Realtime vía WebSockets y Auth integrado. Para un proyecto en solitario, esto elimina la necesidad de gestionar un servidor de autenticación separado sin sacrificar control sobre el esquema de datos.

**¿Por qué Next.js 15 App Router en lugar de Vite + Express?**
El App Router permite colocar lógica de servidor (Server Components, API Routes) junto al cliente en el mismo proyecto, implementando el patrón BFF sin infraestructura adicional. El resultado es menos latencia y un bundle de cliente más pequeño.

**¿Por qué pgvector en lugar de Pinecone?**
Al usar pgvector dentro de Supabase, los embeddings viven en la misma base de datos que los datos del usuario. Esto elimina una red de llamadas entre servicios y simplifica las queries con JOIN directo entre datos relacionales y vectoriales.

---

## Licencia

MIT © [gerindiz](https://github.com/gerindiz)
