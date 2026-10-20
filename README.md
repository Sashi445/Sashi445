# Hi, I'm Sashi 👋

**Applied AI/ML Engineer · Full-Stack Developer**

I build products end to end, from the ML model to the backend to the UI that ships. MS in CS (AI/ML) from the University at Buffalo. Previously a full-stack engineer at Aspora (YC W22).

---

### 🔨 Building now: StoryBoard

A privacy-first media library that finds photos and videos from plain-language descriptions. Search runs on-device, the backend handles uploads and cloud imports at scale, and you can tag photos by voice. Launching on the App Store soon. Details are under Experience.

---

### Featured Projects

#### [weave-cv](https://github.com/Sashi445/weave-cv): resume-tailoring agent · [![PyPI Downloads](https://static.pepy.tech/badge/weave-cv)](https://pepy.tech/project/weave-cv)

A local-first CLI that tailors a LaTeX resume to a job posting **without inventing anything**. A LangGraph pipeline analyzes the job and the resume, rewrites bullets to match the posting, then verifies every claim against the original using stable bullet IDs plus an LLM faithfulness check that retries on drift. Works with OpenAI, Anthropic, Gemini, Groq, xAI, and DeepSeek. Published to PyPI through GitHub Actions with OIDC trusted publishing.

```bash
pip install weave-cv
```

#### [DarkWatch](https://github.com/Sashi445/dark-watch): satellite change detection

Compares Sentinel-1 radar images years apart to find what changed on the ground, then identifies it. I built the SAR preprocessing from scratch (calibration, speckle filtering, sub-pixel co-registration), trained a Siamese ResNet + UNet change detector (**F1 0.80 / IoU 0.66**, up from 0.59), and ran YOLO11 on flagged regions. Includes a React + FastAPI dashboard with before/after views on a 3D globe.

#### More

- [**LLM fact-checking with RL**](https://github.com/Sashi445/search-r1-implementation-RL): RL training loops that ground model outputs against factual data.
- [**Speech-to-text & translation**](https://github.com/Sashi445/speech_to_text_dl): STT and English→French translation models built from scratch, plus video captioning, with no external APIs.

---

### 💼 Experience

**AI Engineer, University at Buffalo** (Oct 2025–present)
- **Natural-language photo search:** built privacy-first search that finds photos from plain-language descriptions, indexing six signals per image (RAM tags, InsightFace faces, GIT captions, conditional OCR, color, EXIF).
- **Hybrid retrieval:** combined BM25 keyword matching with MiniLM semantic search over FAISS and SQLite. Trained a lightweight text encoder on synthetic queries generated from photo metadata, and logged query feedback for future fine-tuning.
- **On-device ML:** quantized the search model to under 6MB so search runs on the phone, with a hybrid cloud-device sync that keeps photos private.
- **Cloud media backend:** designed the FastAPI + Supabase + GCS backend. Clients upload straight to storage with signed URLs, confirmed through Pub/Sub. Imports from Google Drive, Dropbox, and Box over OAuth PKCE.
- **Library & data integrity:** built folders, tags, and search on transactional Postgres functions for cycle-safe moves and all-or-nothing bulk edits, serving search over 100K items in 25–40ms.
- **AI voice tagging:** added voice tagging with gpt-4o-transcribe + gpt-4o-mini, turning a spoken description into categorized tags that reuse each user's existing vocabulary.

**Fullstack Engineer, Aspora (YC W22)** (Nov 2023–Nov 2024)
- Led the rebuild of Alphadesk, the core ops platform (React + Spring Boot), handling KYC and support for 150K+ users and 10–15K queries a day.
- Owned the NRI Compliance Tracker from concept to launch, capturing 3,000+ leads.
- Built Vite/Rollup build tooling and a GenAI CMS content pipeline that contributed to a 5x increase in web traffic.

---

### 🧰 Tech Stack

| Area | Tools |
| :-- | :-- |
| **Languages** | Python, TypeScript, JavaScript, Java, SQL, C/C++ |
| **ML / Vision** | PyTorch, HuggingFace, ONNX, quantization, YOLO, SAM, CLIP, InsightFace, OpenCV |
| **LLMs & Agents** | LangGraph, LangChain, RAG, tool calling, LoRA/QLoRA, vLLM |
| **Retrieval** | FAISS, BM25, hybrid search, pgvector, sentence-transformers |
| **Frontend & Mobile** | React, React Native, Expo, Next.js, TailwindCSS, Vite |
| **Backend** | FastAPI, Spring Boot, Node.js, PostgreSQL, Supabase, Kafka, WebSockets |
| **Cloud & DevOps** | GCP (GCS, Pub/Sub), AWS, Docker, GitHub Actions |

---

### 📫 Reach me

[Portfolio](https://sashidharmotte.netlify.app/) · [LinkedIn](https://www.linkedin.com/in/sashidharmotte) · sashidharmotte@gmail.com · Buffalo, NY (open to relocating)
