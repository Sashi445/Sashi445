# Hi, I'm Sashidhar Motte 👋

### Applied AI/ML Engineer | Full-Stack Developer | Digital Craftsman

I build intelligent systems that solve real problems, combining deep expertise in AI/ML with full-stack development to create products people love. From ideation to deployment, I craft experiences that blend innovation with practicality.

I'm a CS grad from the University at Buffalo focused on AI/ML.

---

### What I Work On

- **Agentic AI & LLMs:** Multi-agent systems, tool-use and function calling, RAG, fine-tuning (LoRA/QLoRA, PEFT), RLHF-style training (GRPO/PPO), LangChain, LlamaIndex.
- **Computer Vision:** Change detection, object detection, segmentation, face recognition, CLIP and vision-language models.
- **ML Engineering:** Python, PyTorch, model training & evaluation, quantization, on-device/edge inference, ONNX, MLOps, Docker.

---

### Featured Projects

#### [weave-cv — Resume-Tailoring Agent (2.8k+ PyPI downloads)](https://github.com/Sashi445/weave-cv) 

A local-first CLI agent that tailors your resume to a job posting **without inventing anything new** — no fabricated metrics, no inflated scope. Point it at a job URL and your master `.tex` resume, and it reads both, decides what to lead with, rewords bullets to mirror the posting's language, verifies its own output against the original, and compiles a retargeted PDF. Built on a **LangGraph** state machine with concurrent JD/resume analysis, **Pydantic**-typed agent boundaries, and a two-pass verification layer (deterministic stable-ID diff + a narrow LLM faithfulness check that retries on drift). Provider-agnostic (OpenAI, Anthropic, Gemini, Groq, xAI, DeepSeek), agent/tool boundaries served over **MCP**, LaTeX rendering via **Tectonic**. Published to **PyPI** with a GitHub Actions CI/CD pipeline using OIDC trusted publishing — **2.8k+ downloads**.

`pip install weave-cv` 

[![PyPI Downloads](https://static.pepy.tech/badge/weave-cv)](https://pepy.tech/project/weave-cv)


#### [DarkWatch — Satellite Change Detection](https://github.com/Sashi445/dark-watch)

A two-stage pipeline that compares Sentinel-1 radar images years apart to spot what changed on the ground — and then identifies it (vehicles, planes, infrastructure). Built the whole SAR preprocessing chain from scratch (no SNAP), trained a **Siamese ResNet + UNet** change detector (**F1 0.80 / IoU 0.66**), and layered **YOLO11** on top for object detection. Wrapped it in a React + FastAPI dashboard with a before/after view on a 3D globe.

#### [LLM Fact-Checking via Reinforcement Learning](https://github.com/Sashi445/search-r1-implementation-RL)

Enhanced the fact-checking capabilities of Large Language Models by implementing RL loops to verify and ground model outputs against factual datasets.

<!-- #### 🖼️ [Face Studio & Image Indexing](https://github.com/Sashi445/image-indexing-app)

Built a comprehensive face recognition and clustering pipeline using **InsightFace** and **DBSCAN**. Developed a system for image feature extraction and knowledge graph creation using **CLIP** and custom-trained VLMs. -->

<!-- #### 🎨 [No-Code UI Generation Tool](https://github.com/your-repo-link)

Developed a low-latency UI generation tool using **GANs (VAE)**, allowing users to generate functional frontend components with minimal computational overhead. -->

#### [Speech-to-Text & Translation Engine](https://github.com/Sashi445/speech_to_text_dl)

Built a custom STT engine and an English-to-French translation model from scratch, including a video captioning system—all without relying on external APIs.

---

### Currently into

- Agentic systems — getting LLMs to plan, use tools, and run multi-step workflows without going off the rails.
- Unsupervised face clustering and large-scale image feature indexing.
- Newer CV work: SAM 2, depth estimation, and vision-language models.

---

### Technical Skills

| Category              | Technologies                                                             |
| :-------------------- | :----------------------------------------------------------------------- |
| **Languages**         | Python, JavaScript, TypeScript, Java, C, C++, SQL                        |
| **AI/ML**             | PyTorch, TensorFlow, HuggingFace, OpenCV, scikit-learn, ONNX             |
| **LLMs & Agents**     | LangChain, LlamaIndex, RAG, LoRA/QLoRA, PEFT, GRPO/PPO, function calling |
| **Frontend**          | React, Next.js, TypeScript, Redux, TailwindCSS, Vite, GSAP               |
| **Backend**           | Node.js, Express, Spring Boot, FastAPI, Kafka, MongoDB, PostgreSQL       |
| **Tools & Platforms** | Linux, Docker, AWS, Git, CI/CD, MLOps                                    |

---

### Connect with Me

- **Portfolio:** [sashidharmotte.netlify.app](https://sashidharmotte.netlify.app/)
- **LinkedIn:** [/in/sashidharmotte](https://www.linkedin.com/in/sashidharmotte)
- **Location:** Buffalo, NY

---

_"From ideation to deployment, I craft experiences that blend innovation with practicality."_
