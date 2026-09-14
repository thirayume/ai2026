# AI Workshop Hub — Day 0 Edition

Static web app สำหรับ GitHub Pages พัฒนาต่อจากโครงเดิม **AI Workshop Hub + AI Bug Spotter** และเพิ่ม Day 0 สำหรับ Workshop ครู + นักเรียนแกนนำ 4 ชั่วโมง

## สิ่งที่มีในเวอร์ชันนี้

- **Day 0 Dashboard** — Timeline 6 Missions + Progress บันทึกใน `localStorage`
- **Dynamic Markdown Library** — โหลดจาก `content/manifest.json` แบบเดิม แต่เพิ่ม Day 0 / Prompt Cards / Facilitator Guide
- **Search + Section Filters** — ค้นเนื้อหาและ Prompt ในเอกสาร
- **Copy Prompt** — ปุ่ม Copy อัตโนมัติใน code block
- **AI Bug Spotter** — Single Player + Live Classroom (PeerJS) + ตัวอย่าง Hallucination/Privacy/Phishing/Prompt
- **AR / Game Lab** — Interactive Quiz + Camera AR Word Hunt ผ่าน iframe หรือเปิดแท็บใหม่
- **Workshop Assets** — ภาพสรุป, Prompt Formula, AI Safety, AR Game Loop และ Intro MP4
- **PWA shell** — มี Service Worker cache ไฟล์หลักสำหรับ fallback บางส่วน
- **GitHub Pages ready** — ใช้ Relative Path ทั้งหมด และมี `.nojekyll`


## Responsive UI v4

เวอร์ชันนี้ปรับหน้าเว็บใหม่สำหรับการใช้งานจริงบนหลายขนาดหน้าจอ:

- **Desktop ≥ 1180px** — Hero แบบ 2 คอลัมน์, Mission 3 คอลัมน์, Markdown Sidebar แบบ Sticky
- **Tablet 761–1179px** — Hero ปรับลง 1 คอลัมน์เมื่อพื้นที่ไม่พอ, Mission 2 คอลัมน์, คลังเอกสารปรับเป็นแนวนอน/ด้านบน
- **Mobile ≤ 760px** — เมนูหลักย้ายเป็น Bottom Navigation, Card/เกมเป็น 1 คอลัมน์, ปุ่มมี Touch Target ใหญ่ขึ้น
- รองรับ `viewport-fit=cover` และ Safe Area สำหรับมือถือที่มี Notch/Home Indicator
- Markdown table/code สามารถ scroll แนวนอนโดยไม่ดัน Layout
- AI Bug Spotter, Lobby, Leaderboard, Modal และ AR/Game Lab ปรับขนาดอัตโนมัติ
- ตัวอย่าง `interactive-quiz.html` และ `ar-word-hunt.html` ปรับ Responsive แยกด้วย
- รองรับ `prefers-reduced-motion` และ `prefers-contrast` เพื่อ Accessibility

### Breakpoints หลัก

```text
Desktop XL : > 1180px
Desktop/Tablet : 981–1180px
Tablet : 761–980px
Mobile : 481–760px
Small Mobile : <= 480px
Landscape Phone : height <= 520px
```

## โครงสร้าง

```text
/
├─ index.html
├─ style.css
├─ app.js
├─ manifest.webmanifest
├─ service-worker.js
├─ .nojekyll
├─ content/
│  ├─ manifest.json
│  ├─ day0.md
│  ├─ prompt-cards.md
│  ├─ facilitator-guide.md
│  ├─ day1-education.md
│  └─ day2-workplace.md
├─ data/
│  └─ spot-the-bug.json
├─ examples/
│  ├─ interactive-quiz.html
│  └─ ar-word-hunt.html
└─ assets/
   ├─ day0/
   └─ game/
```

## ทดลองในเครื่อง

> ไม่แนะนำดับเบิลคลิก `index.html` โดยตรง เพราะ Fetch/Camera/Service Worker บางฟีเจอร์ต้องใช้ HTTP/HTTPS

### Python

```bash
python -m http.server 8080
```

เปิด `http://localhost:8080`

### VS Code
ใช้ Live Server แล้วเปิดหน้า `index.html`

## Deploy GitHub Pages

1. แตก ZIP แล้ว Commit ไฟล์ทั้งหมดไว้ที่ root ของ repository
2. Push ไป GitHub
3. ไปที่ **Settings → Pages**
4. Source: **Deploy from a branch**
5. Branch: `main` / `(root)`
6. Save และรอ GitHub สร้าง URL

ระบบใช้ relative URLs จึงรองรับ URL แบบ:

```text
https://<username>.github.io/<repository>/
```

## Camera / AR

GitHub Pages ใช้ HTTPS อยู่แล้ว จึงรองรับ `getUserMedia()` บนอุปกรณ์/เบราว์เซอร์ที่อนุญาตกล้อง

- ผู้ใช้ต้องกดอนุญาต Camera
- Demo AR ในชุดนี้ไม่บันทึกหรืออัปโหลด Camera Stream
- ถ้าปฏิเสธ Camera ตัวอย่าง AR มี fallback background ให้ Workshop เดินต่อได้

## Live Classroom / PeerJS

หน้าเว็บทั้งหมดเป็น Static และไม่ต้องมี Backend ของโครงการ แต่ **Live Classroom** ใช้ PeerJS สำหรับการเชื่อมต่อแบบ peer-to-peer/signaling จึงต้องใช้อินเทอร์เน็ตและขึ้นกับบริการ PeerJS ภายนอก

Single Player, Markdown, และ Demo หลักยังใช้งานได้แม้ไม่ใช้ Multiplayer

## เพิ่มเนื้อหา Markdown ใหม่

1. วางไฟล์ `.md` ใน `content/`
2. เพิ่ม entry ใน `content/manifest.json`

```json
{
  "title": "หัวข้อใหม่",
  "file": "content/new-topic.md",
  "icon": "fa-book",
  "category": "Day 0",
  "tags": ["Prompt", "Game"]
}
```

## แก้คำถาม AI Bug Spotter

แก้ `data/spot-the-bug.json` โดยแต่ละข้อมี:

```json
{
  "category": "AI Fact Check",
  "promptContext": "โจทย์...",
  "aiOutput": "ข้อความจาก AI...",
  "options": [{"text":"A"},{"text":"B"},{"text":"C"},{"text":"D"}],
  "correctIndex": 1,
  "explanation": "คำอธิบาย"
}
```

ถ้าเป็น Photo Hunt ให้เพิ่ม `image` เช่น `assets/game/example.svg`

## จุดที่แก้ง่ายสำหรับ Workshop

- `content/day0.md` — เนื้อหาหลัก
- `content/prompt-cards.md` — Prompt Cards
- `data/spot-the-bug.json` — เกม Fact Checking
- `examples/interactive-quiz.html` — ตัวอย่างเกม Quiz
- `examples/ar-word-hunt.html` — ตัวอย่าง Camera AR


## v4.1 — Thai Rendering Fix

- แก้ปัญหาข้อความภาษาไทยใน PNG/MP4 ที่เคยแสดงเป็นสี่เหลี่ยม เนื่องจาก asset รุ่นก่อนใช้ฟอนต์ rasterization ที่ไม่มี Thai glyphs
- สร้าง Day 0 assets ใหม่ด้วยฟอนต์ที่รองรับภาษาไทย
- Prompt Formula และ AI Safety บนหน้า Dashboard เปลี่ยนเป็น Native HTML/CSS เพื่อให้คมชัด อ่านได้ และ Responsive ทุกขนาดจอ
- ยืนยันว่าไฟล์ HTML/CSS/JS/Markdown/JSON ใช้ UTF-8
- เพิ่ม Service Worker cache version ใหม่ เพื่อไม่ให้ browser ใช้ asset รุ่นเก่าจาก cache


## v4.2 — AR Interaction + Mission Deep Links + Gemini Build

- แก้ AR Word Hunt ให้ใช้ Pointer Events + Event Delegation เพื่อรองรับ Mouse / Touch / Stylus อย่างเสถียร
- แตะคำตอบแล้วล็อกการตอบซ้ำ แสดง Feedback และเปลี่ยนรอบอัตโนมัติ
- Mission Cards บนหน้า Day 0 คลิกได้ทั้งใบ และเปิด Prompt/กิจกรรมที่เกี่ยวข้องโดยตรง
- เพิ่ม Google AI Studio Build workflow ใน AR / Game Lab
- เพิ่ม AR Prompt พร้อม Copy และลิงก์ไป Google AI Studio Build
- แนะนำ Workflow: Import GitHub → Prompt Gemini → Live Preview → Test Camera → Push/Export กลับ GitHub


## v4.3 — Restored & Expanded Prompt Library

สาเหตุที่ Prompt Card ดูเหมือนหาย: v4.2 มีเพียง Starter Prompt Cards 8 ใบ และยังไม่ได้แยก Prompt จากเอกสารต้นทางทั้งหมดเข้า Sidebar

v4.3 เพิ่ม Prompt Library แบบแยก Pack:
- Starter Cards
- Learning Games
- Visual & Story
- AR & Gesture
- Review & Teach

รวมมากกว่า 30 Prompt Cards และ Mission Cards บนหน้า Day 0 จะเปิด Prompt Pack ที่ตรงกับ Mission โดยตรง


## v4.4 — Full Production + Marketing & Brand Strategy

เพิ่มและรวมจากระบบเดิมทั้งหมด:
- Day 0 Workshop 4 ชั่วโมง
- Prompt Library ที่มี Template + Assets + ตัวอย่าง Prompt พร้อมใช้
- Day 1 AI เพื่อการศึกษา
- Day 2 AI เพื่อการทำงานประจำ
- Game Prompt Pack
- Visual & Story Pack
- AR & Gesture Pack
- Review / Safety / Teach Pack
- AI Safety / Ethics / PDPA Checklist
- Marketing & Brand Strategy Pack
- Mock Workshop Assets
- Interactive Quiz
- AR Word Hunt
- AI Bug Spotter
- Gemini / Google AI Studio Build Workflow
- PWA / Service Worker / GitHub Pages

### Marketing Workflow
Research Demand → Research Competitor → Business Brain → Brand Value → Positioning → Persona → Pain Point → USP → 10 Topics → Content → Polish → KV → Jingle

Research Prompt ที่ต้องใช้ข้อมูลล่าสุดควรรันบน AI ที่มี Web/Search และต้องตรวจลิงก์/วันที่ข้อมูลก่อนใช้จริง
