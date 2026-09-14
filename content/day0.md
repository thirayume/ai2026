# 🚀 DAY 0 — AI Creator & AR Game Workshop
## เวิร์กช็อป 4 ชั่วโมงสำหรับ “ครู + นักเรียนแกนนำ” เพื่อเรียนรู้และนำไปถ่ายทอดต่อ

> **แนวคิดหลัก:** ไม่เน้นจำชื่อเครื่องมือ แต่ฝึก “คิดเป็น → สั่ง AI เป็น → ตรวจเป็น → สร้างเป็น → สอนต่อเป็น”

---

## 1) กลุ่มเป้าหมาย

- ครูระดับประถมศึกษาและมัธยมศึกษา
- นักเรียนแกนนำ / ชุมนุมคอมพิวเตอร์ / Digital Leader
- ผู้เริ่มต้นที่ยังไม่เคยเขียนโปรแกรมก็เข้าร่วมได้
- แนะนำทำงานเป็นทีม 3–5 คน โดยมี **ครู 1 คน + นักเรียน 2–4 คน** ต่อทีม (ถ้าจัดได้)

### เป้าหมายปลายทาง
เมื่อจบ 4 ชั่วโมง ผู้เข้าอบรมควรสามารถ:

1. อธิบาย AI Generative แบบง่ายและข้อจำกัดสำคัญได้
2. เขียน Prompt แบบมีโครงสร้างเพื่อสร้างเนื้อหา ภาพ Storyboard และเกม
3. สร้างต้นแบบเกมการเรียนรู้ที่เล่นบน Web Browser ได้
4. ทดลองเกมแบบ AR ที่ใช้กล้องเป็นฉากหลัง
5. ปรับเนื้อหาเดียวกันให้เหมาะกับ **ประถม** และ **มัธยม**
6. ใช้หลัก “ตรวจสอบก่อนเชื่อ” และไม่ใส่ข้อมูลส่วนบุคคลที่ไม่จำเป็น
7. สรุปกระบวนการเป็น Mini Lesson 5 นาทีเพื่อกลับไปสอนเพื่อนหรือห้องเรียนของตนเอง

---

# 2) โครงสร้างเวลา 4 ชั่วโมง

| เวลา | ช่วง | เป้าหมาย | ผลงานที่ต้องได้ |
|---|---|---|---|
| 00:00–00:20 | **Mission 1 — AI รู้จักเราแค่ไหน?** | เข้าใจ AI, Prompt, Hallucination และความปลอดภัย | Prompt แรก + กติกา AI Safety |
| 00:20–01:00 | **Mission 2 — Prompt Power** | ฝึก Prompt Framework และการปรับระดับชั้น | Prompt 2 เวอร์ชัน: ประถม/มัธยม |
| 01:00–01:40 | **Mission 3 — จากบทเรียน → ภาพ → Storyboard** | เปลี่ยนเนื้อหาเป็นสื่อภาพ/เรื่องเล่า | Character / Scene / Storyboard 4–6 ฉาก |
| 01:40–01:50 | **พัก 10 นาที** |  |  |
| 01:50–02:35 | **Mission 4 — สร้างเกมการเรียนรู้ด้วย AI** | ออกแบบ Game Loop + Gamification | Web Game Prototype |
| 02:35–03:25 | **Mission 5 — AR Game Challenge** | ใช้กล้อง + Overlay สร้างประสบการณ์ AR | AR Word Hunt หรือเกม AR ของทีม |
| 03:25–03:50 | **Mission 6 — Improve, Test, Teach** | Test → Debug → ปรับ UX → อธิบายให้คนอื่นทำตาม | รุ่นปรับปรุง + Prompt ที่ใช้ |
| 03:50–04:00 | **Showcase & Exit Ticket** | แชร์สิ่งที่สร้างและสิ่งที่จะนำไปสอนต่อ | Pitch 60 วินาที + แผนสอนต่อ |

> **หลักการจัดเวลา:** 30% อธิบาย / 70% ลงมือทำ

---

# 3) เตรียมก่อนเริ่ม Workshop

## อุปกรณ์ต่อทีม
- Laptop/Chromebook 1 เครื่อง (แนะนำ Chrome/Edge รุ่นใหม่)
- Internet
- Webcam
- โทรศัพท์ 1 เครื่องสำหรับทดสอบ Responsive
- AI Assistant ที่ผู้จัดเตรียม/อนุญาต
- Text Editor หรือ Online IDE ที่ Preview HTML ได้
- Repository ของ AI Workshop Hub ชุดนี้

## ไฟล์ในชุด Workshop
```text
/
├─ index.html
├─ app.js
├─ style.css
├─ content/
│  ├─ day0.md
│  ├─ facilitator-guide.md
│  └─ prompt-cards.md
├─ examples/
│  ├─ ar-word-hunt.html
│  └─ interactive-quiz.html
└─ assets/day0/
   ├─ 01-workshop-map.png
   ├─ 02-prompt-formula.png
   ├─ 03-ar-game-loop.png
   ├─ 04-challenge-cards.png
   ├─ 05-ai-safety-check.png
   └─ workshop-intro.mp4
```

---

# 4) Mission 1 — AI รู้จักเราแค่ไหน? (20 นาที)

## Mini Demo: “คำตอบเดียว เชื่อได้เลยไหม?”
ให้ผู้สอนถาม AI ด้วยคำถามเดียวกัน 2–3 ครั้ง แล้วเปรียบเทียบคำตอบ

### ตัวอย่าง
```text
อธิบายคำว่า "แรงเสียดทาน" ให้เด็ก ป.5 เข้าใจใน 3 ประโยค
พร้อมยกตัวอย่างจากชีวิตประจำวัน 2 ตัวอย่าง
```

จากนั้นถามต่อ:

```text
ตรวจคำตอบของตัวเองอีกครั้ง
แยกเป็น:
1) ข้อเท็จจริง
2) ตัวอย่าง
3) จุดที่ควรตรวจสอบกับหนังสือเรียนหรือแหล่งอ้างอิง
```

## 5 กติกา AI Safety สำหรับนักเรียน
1. **ไม่ใส่ข้อมูลส่วนบุคคลที่ไม่จำเป็น** เช่น รหัสผ่าน เลขบัตร ที่อยู่ เบอร์โทร
2. **AI อาจตอบผิดได้** ต้องตรวจสอบข้อเท็จจริงสำคัญ
3. **ภาพ/เสียงจาก AI อาจไม่ใช่ของจริง**
4. **ให้เครดิตแหล่งข้อมูลและคนทำงาน** เมื่อมีการนำข้อมูลผู้อื่นมาใช้
5. **AI ช่วยคิด ไม่ใช่คิดแทนทั้งหมด** ผู้เรียนต้องอธิบายสิ่งที่สร้างได้

ใช้ภาพ `assets/day0/05-ai-safety-check.png` เป็นสไลด์สรุป

---

# 5) Mission 2 — Prompt Power (40 นาที)

## Prompt Framework: R-C-T-F-C

**R — Role**: ให้ AI รับบทอะไร  
**C — Context**: กำลังสอนใคร เรื่องอะไร  
**T — Task**: ต้องการให้ทำอะไร  
**F — Format**: ต้องการผลลัพธ์รูปแบบใด  
**C — Constraints / Check**: ข้อจำกัด + วิธีตรวจคุณภาพ

ดูภาพ `assets/day0/02-prompt-formula.png`

### Prompt Template กลาง
```text
ROLE:
คุณคือ [บทบาท]

CONTEXT:
ฉันกำลังสอนเรื่อง [หัวข้อ]
ผู้เรียนระดับ [ชั้น/ช่วงวัย]
ความรู้เดิมของผู้เรียนคือ [ระบุ]

TASK:
ช่วยสร้าง [สิ่งที่ต้องการ]

FORMAT:
ให้ผลลัพธ์เป็น [ตาราง / เกม / Storyboard / HTML / Quiz]

CONSTRAINTS:
- ใช้ภาษาที่เหมาะกับวัย
- ระยะเวลาไม่เกิน [x] นาที
- ระบุคำตอบ/เฉลย
- หลีกเลี่ยงข้อมูลส่วนบุคคล
- ถ้าไม่แน่ใจ ให้บอกว่า "ควรตรวจสอบ"

QUALITY CHECK:
ตรวจว่าผลลัพธ์ตรงตามจุดประสงค์การเรียนรู้หรือไม่
และระบุ 3 จุดที่ครูควรตรวจสอบก่อนนำไปใช้
```

#### 📦 Assets ที่ใช้
- [`lesson-food-chain.md`](assets/examples/lesson-food-chain.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
ROLE:
คุณคือ ครูวิทยาศาสตร์และนักออกแบบกิจกรรมการเรียนรู้

CONTEXT:
ฉันกำลังสอนเรื่อง โซ่อาหาร
ผู้เรียนระดับ ป.5
ความรู้เดิมของผู้เรียนคือ ผู้เรียนรู้จักพืชและสัตว์แล้ว แต่ยังสับสนบทบาทผู้ผลิต/ผู้บริโภค

TASK:
ช่วยสร้าง กิจกรรมเกมจัดลำดับโซ่อาหาร 15 นาที

FORMAT:
ให้ผลลัพธ์เป็น ตารางกิจกรรม + คำถามท้ายกิจกรรม 5 ข้อ

CONSTRAINTS:
- ใช้ภาษาที่เหมาะกับวัย
- ระยะเวลาไม่เกิน 15 นาที
- ระบุคำตอบ/เฉลย
- หลีกเลี่ยงข้อมูลส่วนบุคคล
- ถ้าไม่แน่ใจ ให้บอกว่า "ควรตรวจสอบ"

QUALITY CHECK:
ตรวจว่าผลลัพธ์ตรงตามจุดประสงค์การเรียนรู้หรือไม่
และระบุ 3 จุดที่ครูควรตรวจสอบก่อนนำไปใช้
```


## Challenge: “หัวข้อเดียว — สองวัย”
เลือก 1 หัวข้อ เช่น
- ระบบสุริยะ
- คำกริยา
- เศษส่วน
- Food Chain
- Internet Safety
- AI เบื้องต้น

แล้วสร้าง Prompt 2 รุ่น:

### A) ประถม
- กติกาน้อย
- ข้อความสั้น
- ตัวอักษรใหญ่
- ใช้ภาพและการจับคู่
- Feedback ทันที
- 5–8 ข้อ

### B) มัธยม
- เพิ่มเหตุผล/การตัดสินใจ
- มีระดับความยาก
- ให้ผู้เล่นแก้ปัญหา
- มีคะแนน/เวลา/Combo
- 8–15 ข้อ
- ให้ผู้เล่นอธิบายเหตุผลหลังจบเกม

---

# 6) Mission 3 — จากบทเรียน → ภาพ → Storyboard (40 นาที)

เอกสารตัวอย่างที่แนบมามีแนวคิดสำคัญเรื่อง **Character Continuity** คือการกำหนดหน้าตา รูปร่าง เสื้อผ้า สี และมุมมองให้ตัวละครคงที่เมื่อต้องใช้ซ้ำหลายฉาก

## Step 1 — สร้าง Educational Mascot
> สำหรับ Workshop ไม่จำเป็นต้องใช้ภาพบุคคลจริง สามารถสร้าง Mascot สมมติได้ เพื่อลดประเด็นความเป็นส่วนตัว

```text
สร้างตัวละครมาสคอต 3D สำหรับสื่อการเรียนรู้
ชื่อ: "น้องไบต์"
บทบาท: ผู้ช่วยเรียนรู้เรื่อง Digital Safety
กลุ่มเป้าหมาย: นักเรียนประถมปลาย
ลักษณะ: หุ่นยนต์ตัวเล็ก เป็นมิตร สีฟ้า-ขาว กระเป๋าเป้สีเหลือง
ต้องคงรูปร่าง สี เครื่องแต่งกาย และสัดส่วนเหมือนกันทุกภาพ
ขอ Character Sheet:
1) front
2) 3/4
3) side
4) back
5) happy
6) surprised
พื้นหลังเรียบ ไม่มีข้อความ ไม่มีลายน้ำ
```

#### 📦 Assets ที่ใช้
- [`character-brief-byte.md`](assets/examples/character-brief-byte.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
สร้างตัวละครมาสคอต 3D สำหรับสื่อการเรียนรู้
ชื่อ: "น้องไบต์"
บทบาท: ผู้ช่วยเรียนรู้เรื่อง Digital Safety
กลุ่มเป้าหมาย: นักเรียนประถมปลาย
ลักษณะ: หุ่นยนต์ตัวเล็ก เป็นมิตร สีฟ้า-ขาว กระเป๋าเป้สีเหลือง
ต้องคงรูปร่าง สี เครื่องแต่งกาย และสัดส่วนเหมือนกันทุกภาพ
ขอ Character Sheet:
1) front
2) 3/4
3) side
4) back
5) happy
6) surprised
พื้นหลังเรียบ ไม่มีข้อความ ไม่มีลายน้ำ

ใช้ character-brief-byte.md เป็น Character Truth Sheet และต้องคงสี รูปร่าง กระเป๋าเป้ และดวงตาเหมือนเดิมทุกมุม
```


## Step 2 — สร้าง Storyboard 4–6 ฉาก
เวอร์ชันเต็มในเอกสารตัวอย่างใช้โครงสร้าง เปิดเรื่อง → ปัญหา → เรียนรู้ → แก้ปัญหา → สรุป และกำหนดข้อมูลกล้อง/การเคลื่อนไหวอย่างชัดเจน

### Prompt สำหรับ Workshop
```text
ROLE:
คุณคือผู้กำกับแอนิเมชันและครูผู้สอน

INPUT:
หัวข้อ: "รู้ทัน Phishing"
กลุ่มเป้าหมาย: ม.1–ม.3
ตัวละครหลัก: น้องไบต์

TASK:
สร้าง Storyboard 6 ฉาก ความยาวรวม 60–90 วินาที
โครงเรื่อง: Hook → Problem → Clue → Decision → Solution → Lesson

แต่ละฉากให้มี:
- Scene
- Narration
- Action
- Emotion
- Camera Shot
- Key Lesson
- Image Prompt (English)
- Motion Prompt (English)

RULES:
- ตัวละครต้องคงเอกลักษณ์เดิมทุกฉาก
- ภาษากระชับ
- ไม่มีข้อมูลส่วนบุคคลจริง
- บทเรียนสุดท้ายต้องมี Checklist 3 ข้อ
```

#### 📦 Assets ที่ใช้
- [`story-seed-phishing.md`](assets/examples/story-seed-phishing.md)
- [`character-brief-byte.md`](assets/examples/character-brief-byte.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
ROLE:
คุณคือผู้กำกับแอนิเมชันและครูผู้สอน

INPUT:
หัวข้อ: "รู้ทัน Phishing"
กลุ่มเป้าหมาย: ม.1–ม.3
ตัวละครหลัก: น้องไบต์

TASK:
สร้าง Storyboard 6 ฉาก ความยาวรวม 60–90 วินาที
โครงเรื่อง: Hook → Problem → Clue → Decision → Solution → Lesson

แต่ละฉากให้มี:
- Scene
- Narration
- Action
- Emotion
- Camera Shot
- Key Lesson
- Image Prompt (English)
- Motion Prompt (English)

RULES:
- ตัวละครต้องคงเอกลักษณ์เดิมทุกฉาก
- ภาษากระชับ
- ไม่มีข้อมูลส่วนบุคคลจริง
- บทเรียนสุดท้ายต้องมี Checklist 3 ข้อ

ใช้ story-seed-phishing.md เป็นเนื้อเรื่องหลัก และ character-brief-byte.md เป็น Character Reference ห้ามเพิ่มเหตุการณ์ที่เปลี่ยน Key Lesson
```


## Step 3 — ทำ “ภาพนิ่งให้คิดเป็นวิดีโอ”
ให้แต่ละทีมเลือก 1 ฉาก แล้วเขียน Motion Prompt เช่น:

```text
Slow push-in camera, the small blue-and-white robot mascot
points at a suspicious email on a floating screen.
Subtle blinking warning icon, classroom background,
friendly educational tone, smooth motion, 5 seconds.
```

#### 📦 Assets ที่ใช้
- [`story-seed-phishing.md`](assets/examples/story-seed-phishing.md)
- [`character-brief-byte.md`](assets/examples/character-brief-byte.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
Slow push-in camera, the small blue-and-white robot mascot
points at a suspicious email on a floating screen.
Subtle blinking warning icon, classroom background,
friendly educational tone, smooth motion, 5 seconds.

Source of Truth: character-brief-byte.md
Scene context: story-seed-phishing.md
Lock character identity, costume colors and classroom layout.
```


> ไม่จำเป็นต้อง Generate Video จริงทุกทีม หากเวลา/เครดิตจำกัด ให้ใช้ Storyboard + Motion Prompt เป็นผลงาน

---

# 7) Mission 4 — สร้างเกมการเรียนรู้ด้วย AI (45 นาที)

เอกสารตัวอย่างเกม Interactive ใช้แนวคิด **Adventure + Quiz + Score + Time + Lives + Feedback** และรองรับเกมย่อย เช่น Drag & Drop, Matching, Phishing, Virus และ AI Quiz

## Game Design Canvas — 6 ช่อง
ให้ทีมตอบก่อนสั่ง AI:

1. **Learning Goal** — ผู้เล่นต้องเรียนรู้อะไร?
2. **Player Action** — ผู้เล่นทำอะไร?
3. **Rule** — ชนะ/แพ้/ได้คะแนนอย่างไร?
4. **Feedback** — ทำถูก/ผิดแล้วเห็นอะไร?
5. **Progress** — เกมยากขึ้นอย่างไร?
6. **Reflection** — หลังเล่น ผู้เรียนอธิบายอะไรได้?

## ตัวเลือกเกมตามวัย

### ประถม
- Matching
- Sorting
- Memory
- Catch the correct answer
- Sequencing

### มัธยม
- Quiz Adventure
- Cybersecurity Decision Game
- Simulation
- Escape Room
- AI Fact Check Challenge

## Prompt: เกม Web แบบง่าย
```text
ROLE:
คุณคือ Game Designer + ครู + Front-end Developer

CONTEXT:
สร้างเกมสำหรับนักเรียน [ระดับชั้น]
หัวข้อ [หัวข้อ]
จุดประสงค์การเรียนรู้ [ระบุ]

TASK:
สร้างเกม Web แบบ Interactive เล่นได้ทั้งมือถือและคอมพิวเตอร์
ใช้ HTML/CSS/JavaScript ในไฟล์เดียว

GAME LOOP:
- Start
- แสดงภารกิจ
- เล่น 8 ข้อ
- ตอบถูก +10 พร้อม feedback
- ตอบผิดแสดงเฉลยสั้น ๆ
- มี progress 1/8
- จบเกมแสดงคะแนน + สิ่งที่ควรทบทวน

UX:
- ตัวอักษรใหญ่
- ปุ่มชัดเจน
- Responsive
- สีอ่านง่าย
- ไม่ให้ Animation บังเนื้อหา
- มีปุ่มเล่นใหม่

CONTENT:
สร้างคำถามและเฉลยให้เหมาะกับวัย
แต่ให้ครูสามารถแก้รายการคำถามในตัวแปร JavaScript ได้ง่าย

OUTPUT:
ส่งโค้ด HTML ฉบับเดียว พร้อม comment อธิบายส่วนที่ครูควรแก้
```

#### 📦 Assets ที่ใช้
- [`web-game-spec.md`](assets/examples/web-game-spec.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
ROLE:
คุณคือ Game Designer + ครู + Front-end Developer

CONTEXT:
สร้างเกมสำหรับนักเรียน ป.6–ม.2
หัวข้อ AI Safety
จุดประสงค์การเรียนรู้ ผู้เรียนแยกข้อมูลส่วนบุคคล, Phishing และข้อมูลที่ควร Fact Check ได้

TASK:
สร้างเกม Web แบบ Interactive เล่นได้ทั้งมือถือและคอมพิวเตอร์
ใช้ HTML/CSS/JavaScript ในไฟล์เดียว

GAME LOOP:
- Start
- แสดงภารกิจ
- เล่น 8 ข้อ
- ตอบถูก +10 พร้อม feedback
- ตอบผิดแสดงเฉลยสั้น ๆ
- มี progress 1/8
- จบเกมแสดงคะแนน + สิ่งที่ควรทบทวน

UX:
- ตัวอักษรใหญ่
- ปุ่มชัดเจน
- Responsive
- สีอ่านง่าย
- ไม่ให้ Animation บังเนื้อหา
- มีปุ่มเล่นใหม่

CONTENT:
สร้างคำถามและเฉลยให้เหมาะกับวัย
แต่ให้ครูสามารถแก้รายการคำถามในตัวแปร JavaScript ได้ง่าย

OUTPUT:
ส่งโค้ด HTML ฉบับเดียว พร้อม comment อธิบายส่วนที่ครูควรแก้
```


### ทดลองทันที
เปิดไฟล์ `interactive-quiz.html`

ภารกิจ 5 นาที:
- เปลี่ยนชื่อเกม
- เปลี่ยนคำถามอย่างน้อย 2 ข้อ
- เปลี่ยนข้อความ Feedback
- ทดสอบบนมือถือ 1 ครั้ง

---

# 8) Mission 5 — AR Game Challenge (50 นาที)

ต้นแบบ AR ในเอกสารอ้างอิงใช้ **กล้องจริง + Three.js + MediaPipe Hands + Game Logic** โดยให้มือซ้ายควบคุมคันธนู มือขวาดึง/ปล่อย และยิงเฉพาะคำกริยา

สำหรับ Workshop 4 ชั่วโมง เราใช้แนวคิดเดียวกันแต่ลดความซับซ้อนเป็น **Camera AR + Floating Learning Objects + Tap/Click** เพื่อให้ทุกทีมสร้างสำเร็จได้ก่อน แล้วค่อยเปิด “Advanced Challenge” สำหรับผู้เรียนที่พร้อม

## AR คืออะไรในกิจกรรมนี้?
- ภาพจากกล้องจริงเป็น Background
- มีวัตถุการเรียนรู้วางทับบนภาพกล้อง
- ผู้เล่นต้องโต้ตอบกับวัตถุ
- เกมตอบสนองด้วยคะแนน/Feedback

### Demo พร้อมใช้
เปิดไฟล์ `ar-word-hunt.html`

1. กด **เปิดกล้อง**
2. อนุญาต Webcam
3. เลือกคำที่เป็น “คำกริยา”
4. สังเกตคะแนนและ Feedback

## Challenge A — Primary: AR Word Hunt
เปลี่ยนหมวดเนื้อหาเป็น:
- สัตว์ / ไม่ใช่สัตว์
- อาหารมีประโยชน์
- รูปทรง
- คำกริยา
- Safety / Unsafe

## Challenge B — Secondary: AR Decision Hunt
เปลี่ยนเป็น:
- Phishing / Safe Email
- Fact / Opinion
- Renewable / Non-renewable
- Hardware / Software
- AI / Not AI

## Prompt สร้าง AR Web Game เวอร์ชัน Workshop
```text
ROLE:
คุณคือ Web AR Game Designer และครู

TASK:
สร้างเกม "AR Learning Hunt" ด้วย HTML/CSS/JavaScript ในไฟล์เดียว

CORE:
- ใช้ getUserMedia เปิดกล้องเป็นพื้นหลังเต็มจอ
- สร้างคำ/การ์ดลอยบนจอเป็น HTML Overlay
- ผู้เล่นแตะหรือคลิกคำตอบ
- มี Target Category 1 หมวด
- ถูก +10, ผิด -5 แต่คะแนนไม่ต่ำกว่า 0
- เล่น 10 รอบ
- มี Score, Round, Feedback
- มี Start / Restart
- Responsive สำหรับมือถือ
- ถ้ากล้องใช้งานไม่ได้ ให้มีโหมด Background สำรอง

CONTENT:
หัวข้อ: [หัวข้อ]
ระดับชั้น: [ระดับ]
รายการคำถูก: [...]
รายการคำหลอก: [...]

SAFETY & UX:
- ขอ Permission กล้องเมื่อผู้ใช้กดปุ่มเท่านั้น
- ไม่บันทึกภาพหรือวิดีโอ
- ไม่อัปโหลด Camera Stream
- ตัวอักษรใหญ่ อ่านง่าย
- อธิบาย comment จุดที่ครูเปลี่ยนคำศัพท์ได้

OUTPUT:
HTML ไฟล์เดียวที่ Copy แล้วรันได้
```

#### 📦 Assets ที่ใช้
- [`ar-verb-words.json`](assets/examples/ar-verb-words.json)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
ROLE:
คุณคือ Web AR Game Designer และครู

TASK:
สร้างเกม "AR Learning Hunt" ด้วย HTML/CSS/JavaScript ในไฟล์เดียว

CORE:
- ใช้ getUserMedia เปิดกล้องเป็นพื้นหลังเต็มจอ
- สร้างคำ/การ์ดลอยบนจอเป็น HTML Overlay
- ผู้เล่นแตะหรือคลิกคำตอบ
- มี Target Category 1 หมวด
- ถูก +10, ผิด -5 แต่คะแนนไม่ต่ำกว่า 0
- เล่น 10 รอบ
- มี Score, Round, Feedback
- มี Start / Restart
- Responsive สำหรับมือถือ
- ถ้ากล้องใช้งานไม่ได้ ให้มีโหมด Background สำรอง

CONTENT:
หัวข้อ: คำกริยา
ระดับชั้น: ป.5
รายการคำถูก: อ่านรายการจากไฟล์ ar-verb-words.json ที่แนบมา
รายการคำหลอก: อ่านรายการจากไฟล์ ar-verb-words.json ที่แนบมา

SAFETY & UX:
- ขอ Permission กล้องเมื่อผู้ใช้กดปุ่มเท่านั้น
- ไม่บันทึกภาพหรือวิดีโอ
- ไม่อัปโหลด Camera Stream
- ตัวอักษรใหญ่ อ่านง่าย
- อธิบาย comment จุดที่ครูเปลี่ยนคำศัพท์ได้

OUTPUT:
HTML ไฟล์เดียวที่ Copy แล้วรันได้

CONTENT:
รายการคำถูกและคำหลอกให้อ่านจาก ar-verb-words.json
TEST:
แตะคำ “นอน” ต้องได้ +10 และเปลี่ยนรอบอัตโนมัติ
```


## Advanced Challenge — Gesture AR
สำหรับทีมมัธยม/ครูคอมพิวเตอร์ที่ต้องการต่อยอด:

```text
เพิ่ม MediaPipe Hands:
- ตรวจจับมือ 1–2 มือ
- Pinch = เลือกวัตถุ
- Open Palm = ยืนยัน
- แสดงสถานะ tracking
- ถ้า tracking หลุด ให้เกมยังทำงานต่อได้
- มีปุ่มสลับ mirrored camera
```

#### 📦 Assets ที่ใช้
- [`ar-verb-words.json`](assets/examples/ar-verb-words.json)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
เพิ่ม MediaPipe Hands:
- ตรวจจับมือ 1–2 มือ
- Pinch = เลือกวัตถุ
- Open Palm = ยืนยัน
- แสดงสถานะ tracking
- ถ้า tracking หลุด ให้เกมยังทำงานต่อได้
- มีปุ่มสลับ mirrored camera

นำ Gesture นี้ไปใช้กับ AR Word Hunt คำกริยา โดยอ่านข้อมูลจาก ar-verb-words.json และต้องมี Mouse/Touch fallback
```


> หากต้องการต่อยอดเป็น “AR ยิงธนู” ให้เพิ่ม Three.js, ฟิสิกส์ลูกธนู, Gesture State และ Collision Detection ในภายหลัง ไม่ควรใช้เป็นงานบังคับของผู้เริ่มต้นในเวลา 4 ชั่วโมง

---

# 9) Mission 6 — Improve, Test, Teach (25 นาที)

## Test Matrix 2×2
แต่ละทีมทดสอบกับคน 2 กลุ่ม:

| Tester | ต้องสังเกต |
|---|---|
| นักเรียน/เพื่อน | เข้าใจกติกาภายใน 30 วินาทีหรือไม่ |
| ครู/ผู้สอน | เนื้อหาถูกต้องและแก้ไขได้ง่ายหรือไม่ |

ทดสอบอย่างน้อย:
- Desktop
- Mobile
- กล้องอนุญาต/ไม่อนุญาต
- ตอบถูก
- ตอบผิด
- เล่นจนจบ
- กด Restart

## Prompt ให้ AI ช่วย Review
```text
ตรวจเกมต่อไปนี้ในฐานะ:
1) ครูผู้สอน
2) นักเรียนประถม
3) นักเรียนมัธยม
4) UX Tester

รายงานเป็นตาราง:
- จุดที่ดี
- จุดที่สับสน
- ความเสี่ยงด้านเนื้อหา
- ความเสี่ยงด้าน Privacy
- Bug ที่เป็นไปได้
- สิ่งที่ควรแก้ก่อนใช้จริง

จากนั้นจัดลำดับ Fix เป็น P0 / P1 / P2
```

#### 📦 Assets ที่ใช้
- [`sample-buggy-game.js`](assets/examples/sample-buggy-game.js)
- [`web-game-spec.md`](assets/examples/web-game-spec.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
ตรวจเกมต่อไปนี้ในฐานะ:
1) ครูผู้สอน
2) นักเรียนประถม
3) นักเรียนมัธยม
4) UX Tester

รายงานเป็นตาราง:
- จุดที่ดี
- จุดที่สับสน
- ความเสี่ยงด้านเนื้อหา
- ความเสี่ยงด้าน Privacy
- Bug ที่เป็นไปได้
- สิ่งที่ควรแก้ก่อนใช้จริง

จากนั้นจัดลำดับ Fix เป็น P0 / P1 / P2

เกมที่จะตรวจ: web-game-spec.md
โค้ดตัวอย่างที่มี Bug: sample-buggy-game.js
ให้ชี้ Root Cause ของการกดซ้ำและคะแนนติดลบ
```


---

# 10) Train-the-Trainer — สูตรสอนต่อ 5 นาที

ผู้เข้าร่วมทุกทีมต้องสามารถสอนคนอื่นด้วยโครงนี้:

### 1 นาที — WHY
“เกมนี้ช่วยให้เรียนรู้อะไร?”

### 1 นาที — PROMPT
อธิบาย Prompt Framework R-C-T-F-C

### 1 นาที — BUILD
ชี้ 3 จุดที่แก้ได้:
- Content
- Rules
- UI

### 1 นาที — TEST
สาธิตตอบถูก/ผิด + ทดสอบมือถือ

### 1 นาที — SAFETY
พูดให้ครบ:
- AI อาจผิด
- ไม่ใส่ข้อมูลส่วนบุคคล
- ตรวจแหล่งข้อมูล
- กล้องใช้เฉพาะเมื่อจำเป็น
- ผู้เรียนต้องอธิบายสิ่งที่สร้างได้

---

# 11) Exit Ticket

ตอบ 4 ข้อก่อนจบ:

1. วันนี้ฉันสร้างอะไรได้สำเร็จ?
2. Prompt ส่วนใดที่ช่วยให้งานดีขึ้นมากที่สุด?
3. ฉันจะตรวจสอบคำตอบของ AI อย่างไร?
4. ภายใน 7 วัน ฉันจะนำกิจกรรมนี้ไปสอนต่อให้ใคร?

---

# 12) Rubric สำหรับ Showcase (20 คะแนน)

| ด้าน | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| Learning Goal | ไม่ชัด | พอเห็น | ชัด | ชัดและวัดได้ |
| Prompt Quality | กว้าง | มีบางส่วน | มีโครงสร้าง | มีโครงสร้าง + Check |
| Game/AR Interaction | ไม่ทำงาน | ทำได้บางส่วน | เล่นได้ | เล่นได้และลื่นไหล |
| Age Appropriate | ไม่เหมาะ | ต้องแก้มาก | เหมาะ | ปรับได้ 2 ช่วงวัย |
| Safety & Explainability | ไม่กล่าวถึง | กล่าวบางส่วน | ครบหลัก | ครบ + สอนต่อได้ |

---

# 13) Prompt Bank — พร้อมใช้

## A. Prompt “เปลี่ยนบทเรียนเป็นเกม”
```text
เปลี่ยนเนื้อหาเรื่อง [หัวข้อ] เป็นเกมการเรียนรู้
กลุ่มเป้าหมาย [ระดับชั้น]
สร้าง:
1) Learning Goal
2) Game Loop
3) กติกา
4) 10 ตัวอย่างคำถาม/วัตถุ
5) Feedback ถูก/ผิด
6) วิธีปรับเป็นระดับง่ายและยาก
7) วิธีวัดผลหลังเล่น
```

#### 📦 Assets ที่ใช้
- [`lesson-food-chain.md`](assets/examples/lesson-food-chain.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
เปลี่ยนเนื้อหาเรื่อง โซ่อาหาร เป็นเกมการเรียนรู้
กลุ่มเป้าหมาย ป.5
สร้าง:
1) Learning Goal
2) Game Loop
3) กติกา
4) 10 ตัวอย่างคำถาม/วัตถุ
5) Feedback ถูก/ผิด
6) วิธีปรับเป็นระดับง่ายและยาก
7) วิธีวัดผลหลังเล่น
```


## B. Prompt “ปรับภาษาให้เหมาะกับวัย”
```text
นำเนื้อหานี้: [วางเนื้อหา]
สร้าง 2 เวอร์ชัน:
A) ป.4–ป.6 — ประโยคสั้น ตัวอย่างใกล้ตัว
B) ม.1–ม.3 — เพิ่มเหตุผลและคำศัพท์สำคัญ

ห้ามลดทอนสาระจนผิดความหมาย
ทำตารางเปรียบเทียบคำศัพท์ที่เปลี่ยน
```

#### 📦 Assets ที่ใช้
- [`lesson-food-chain.md`](assets/examples/lesson-food-chain.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
นำเนื้อหานี้: ใช้เนื้อหาทั้งหมดจากไฟล์ lesson-food-chain.md ที่แนบมา
สร้าง 2 เวอร์ชัน:
A) ป.4–ป.6 — ประโยคสั้น ตัวอย่างใกล้ตัว
B) ม.1–ม.3 — เพิ่มเหตุผลและคำศัพท์สำคัญ

ห้ามลดทอนสาระจนผิดความหมาย
ทำตารางเปรียบเทียบคำศัพท์ที่เปลี่ยน
```


## C. Prompt “สร้าง Challenge Cards”
```text
สร้าง Challenge การใช้ AI จำนวน 6 ใบ
สำหรับครูและนักเรียนแกนนำ
แต่ละใบมี:
- Mission
- Input
- Constraint
- Expected Output
- Bonus
ใช้เวลาใบละ 10–15 นาที
ครอบคลุม: Prompt, Image, Storyboard, Game, AR, Fact Check
```

#### 📦 Assets ที่ใช้
- [`challenge-topic-list.md`](assets/examples/challenge-topic-list.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
สร้าง Challenge การใช้ AI จำนวน 6 ใบ
สำหรับครูและนักเรียนแกนนำ
แต่ละใบมี:
- Mission
- Input
- Constraint
- Expected Output
- Bonus
ใช้เวลาใบละ 10–15 นาที
ครอบคลุม: Prompt, Image, Storyboard, Game, AR, Fact Check

เลือกหัวข้อจาก challenge-topic-list.md ให้ครบทั้ง Primary และ Secondary อย่างน้อยกลุ่มละ 2 ใบ
```


## D. Prompt “Reflection”
```text
ถามฉันทีละ 1 คำถาม เพื่อช่วย Reflection หลังทำเกม
รวม 5 คำถาม
เน้น:
- ฉันเรียนรู้อะไร
- AI ช่วยตรงไหน
- AI ทำผิดตรงไหน
- ฉันแก้อะไรเอง
- ฉันจะสอนต่ออย่างไร
```

#### 📦 Assets ที่ใช้
- [`web-game-spec.md`](assets/examples/web-game-spec.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
ถามฉันทีละ 1 คำถาม เพื่อช่วย Reflection หลังทำเกม
รวม 5 คำถาม
เน้น:
- ฉันเรียนรู้อะไร
- AI ช่วยตรงไหน
- AI ทำผิดตรงไหน
- ฉันแก้อะไรเอง
- ฉันจะสอนต่ออย่างไร

บริบท: ฉันเพิ่งสร้างเกม AI Safety Quest ตาม web-game-spec.md และทดลองบนมือถือแล้ว
```


---

# 14) แนวทางต่อยอดหลัง Workshop

### Track Primary
Prompt → Image → Matching/Sorting → Camera AR Tap Game

### Track Secondary
Prompt → Storyboard → Web Game → Camera AR → Gesture Control → 3D/VR

### Track Teacher
Lesson Objective → Prompt Bank → Rubric → Student Project → Showcase → Peer Teaching

---

# 15) หมายเหตุสำหรับผู้จัด

- อย่าบังคับให้ทุกทีมสร้าง Gesture AR สำเร็จใน 4 ชั่วโมง
- เป้าหมายหลักคือ **ทุกทีมต้องมี Prototype ที่เล่นได้ + Prompt ที่อธิบายได้ + สอนต่อได้**
- ใช้ AR แบบกล้อง + Overlay เป็น Core; ใช้ MediaPipe/Three.js เป็น Advanced
- หาก Internet/AI มีปัญหา ให้ใช้ไฟล์ Demo ในชุดนี้ต่อ Workshop ได้
- แบ่งทีมแบบคละความสามารถ ช่วยลดช่องว่างระหว่างผู้เรียน
- ให้ครูตรวจ “ความถูกต้องทางเนื้อหา” ก่อน Publish ทุกครั้ง

---

## Source Adaptation Notes

เนื้อหา Day 0 นี้คัดแนวคิดจากเอกสารตัวอย่างที่แนบมา ได้แก่:
- การรักษาความต่อเนื่องของตัวละครสำหรับงานภาพ/วิดีโอ
- Storyboard ที่ระบุ Scene, Action, Emotion, Camera, Image Prompt และ Motion Prompt
- Interactive Learning Game ที่มี Quiz, Score, Time, Lives, Feedback และ Gamification
- AR Game ที่ใช้กล้อง, Three.js/MediaPipe และกติกาการโต้ตอบ
- AI Workflow แบบ Idea → Prompt → Image/Video/Code → Test → Deploy

โดยลดความซับซ้อนให้เหมาะกับ Workshop รวม 4 ชั่วโมง และแยก **Core / Advanced** เพื่อรองรับทั้งประถมและมัธยม
