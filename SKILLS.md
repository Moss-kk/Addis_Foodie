# Engineering Skills & Technical Competencies
## Addis Foodies Platform Engineering

---

## 1. Core Technical Stack Competencies

### 1.1 Frontend Engineering
*   **Framework:** Next.js 14+ (App Router, Server Components, Server Actions)[cite: 1].
*   **Languages:** TypeScript (Strict mode enabled)[cite: 1].
*   **Styling:** Tailwind CSS, Shadcn UI, Radix UI primitives[cite: 1].
*   **State & Data Fetching:** TanStack Query (React Query) for async client state, Zustand for lightweight global state management[cite: 1].

### 1.2 Backend & Ingestion Engineering
*   **Runtime:** Node.js LTS[cite: 1].
*   **Database & ORM:** PostgreSQL + Prisma ORM (Relational modeling, migrations, raw query optimization)[cite: 1].
*   **Background Jobs:** Redis + BullMQ for resilient ingestion queues[cite: 1].
*   **APIs & Protocols:** RESTful API design, Instagram Graph API (Webhooks & Graph endpoints), Telegram Bot API[cite: 1].

---

## 2. Specialized Engineering Capabilities

    *   **Text Processing & Parsing:** Mastery of regular expressions (Regex) and heuristic rule engines for parsing unformatted social captions into structured JSON[cite: 1].
*   **SEO & Web Performance:** Mastery of Open Graph protocols, JSON-LD structured data schemas (`Restaurant`, `Review`, `Event`), Core Web Vitals optimization, and Image edge-compression[cite: 1].
*   **Security & DevOps:** Webhook signature verification (`X-Hub-Signature-256`), rate-limiting strategies, environment secret encryption, and CI/CD via GitHub Actions and Vercel Deployment[cite: 1].

# Cloudflare & Web Infrastructure Competencies
## Network Security, CDN Architecture, and Edge Computing

---

## 1. Core Cloudflare Platform Competencies

*   **WAF & DDoS Mitigation:** Proficient in configuring Cloudflare Web Application Firewall (WAF) rulesets (OWASP Core Rules, sensitivity presets) to defend against injection attacks (SQLi, XSS), L7 DDoS, and bot mitigation strategies[cite: 1].
*   **CDN & Caching Architecture:** Expert in Cloudflare's global edge network, optimizing cache-hit-ratios for ISR (Incremental Static Regeneration) content, utilizing Edge Cache TTL, Origin Shield, and cache-level configuration for media assets[cite: 1].
*   **DNS & Traffic Management:** Proficient in managing authoritative DNS (Cloudflare DNS), configuring dynamic DNS records (CNAME, A, MX), and utilizing Argo Smart Routing for optimal latency reduction[cite: 1].

## 2. Edge Computing & Serverless

*   **Cloudflare Workers:** Expert in deploying and managing serverless logic via Cloudflare Workers using JavaScript/TypeScript. Proficient in Workers KV for low-latency key-value storage, Workers Sites for static asset hosting, and Queue Workers for asynchronous job processing[cite: 1, 2].
*   **Edge Functions:** Proficient in developing and deploying Edge Functions (beta) for edge-side request processing, data fetching, and real-time personalization directly at the CDN layer[cite: 1].
*   **Wrangler CLI:** Expert in using the Wrangler CLI for local development, testing, and deployment of Workers applications to the Cloudflare Edge network[cite: 1].

## 3. Security & Compliance

*   **TLS/SSL Management:** Expert in configuring Cloudflare Universal SSL, custom origin certificates, and granular TLS settings (TLS 1.3 enforced, Minimum TLS Version, Origin CA Certificates) to secure data transit between browser, edge, and origin[cite: 1, 3].
*   **Rate Limiting:** Proficient in creating custom rate-limiting rules to protect origin servers from abuse, leveraging "Number of requests" and "Time window" parameters with custom error pages and bypass rules[cite: 1, 3].
*   **Cloudflare Access:** Proficient in configuring zero-trust access policies using Cloudflare Access (Zero Trust) to secure administrative backends and sensitive routes using identity providers (IdP) and device posture[cite: 1, 3].

## 4. Performance Optimization

*   **Image Optimization:** Proficient in configuring Cloudflare Image Resizing at the edge, utilizing automatic format selection (WebP/AVIF) and responsive image breakpoints to reduce bandwidth consumption by up to 35-40%[cite: 1, 4].
*   **Auto Minify & Brotli:** Expert in enabling "Auto Minify" (JavaScript, CSS, HTML) and Brotli compression at the edge to reduce asset file sizes and improve TTFB (Time to First Byte)[cite: 1].
*   **Browser Insights:** Proficient in utilizing Browser Insights and Web Analytics for real-time monitoring of page load performance and user experience metrics across the global edge network[cite: 1].

## 5. Network & Routing

*   **Load Balancing:** Proficient in configuring Cloudflare Load Balancing across multiple origins, implementing health checks, and configuring failover policies (Random, Least Requests, Geo Steering) to ensure high availability[cite: 1].
*   **Custom Hostnames & DNSSEC:** Expert in configuring custom SSL certificates via Cloudflare's Custom Hostnames feature and securing domains with DNSSEC validation[cite: 1].
*   **IP Access Rules:** Proficient in configuring strict IP Access Rules to whitelist or blacklist specific IP addresses and ranges at the edge for immediate threat mitigation[cite: 1].

## 6. Monitoring & Observability

*   **Logpush:** Proficient in configuring Logpush to export logs (access logs, firewall events, analytics) to external SIEM or storage providers (AWS S3, Google Cloud Storage) for compliance and analytics[cite: 1].
*   **Health Checks & Analytics:** Expert in configuring origin health checks and analyzing performance metrics through the Cloudflare Dashboard, leveraging real-time analytics and incident reports[cite: 1].