# 🧰 DAY 0 — Prompt Library

> คลัง Prompt ฉบับ Workshop รวม **30+ Prompt Cards** แบ่งตามภารกิจ เพื่อให้ครูและนักเรียนเลือกใช้ได้ทันที  
> แนวทาง: **Copy → เปลี่ยนข้อความใน `[ ]` → Run → ตรวจ → ปรับ → สอนต่อ**

---

## 🧭 Prompt Map

| Pack | เหมาะกับ | ตัวอย่าง |
|---|---|---|
| **Starter Cards** | ทุกคน | Explain, Transform, Review |
| **Learning Games** | ประถม–มัธยม | Multiple Choice, Matching, Sorting, Sequencing |
| **Visual & Story** | สื่อ/วิดีโอ | Character, Storyboard, Image, Motion |
| **AR & Gesture** | เกมกล้อง/AR | Camera AR, Hand Tracking, Pinch, AR ยิงธนู |
| **Review & Teach** | ตรวจงาน/สอนต่อ | Safety, Age Adaptation, Debug, Teach Back |
| **Marketing & Brand** | ธุรกิจ/การตลาด | Demand, Competitor, Positioning, Persona, USP, Content |

---

# หมวด A — Starter Prompt Cards

## Card 01 — Explain: อธิบายเรื่องยากให้เข้าใจง่าย
```text
ROLE:
คุณคือครูที่อธิบายเรื่องยากให้เข้าใจง่าย

CONTEXT:
หัวข้อ: [เรื่อง]
ผู้เรียน: [ระดับชั้น]

TASK:
อธิบายหัวข้อนี้ภายใน 5 ประโยค

FORMAT:
1. คำอธิบาย
2. ตัวอย่างใกล้ตัว 2 ตัวอย่าง
3. คำถามเช็กความเข้าใจ 2 ข้อ

CHECK:
ระบุ 3 จุดที่ควรตรวจสอบกับหนังสือเรียนหรือแหล่งข้อมูลที่เชื่อถือได้
```

#### 📦 Assets ที่ใช้
- [`lesson-food-chain.md`](assets/examples/lesson-food-chain.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
ROLE:
คุณคือครูที่อธิบายเรื่องยากให้เข้าใจง่าย

CONTEXT:
หัวข้อ: โซ่อาหาร
ผู้เรียน: ป.5

TASK:
อธิบายหัวข้อนี้ภายใน 5 ประโยค

FORMAT:
1. คำอธิบาย
2. ตัวอย่างใกล้ตัว 2 ตัวอย่าง
3. คำถามเช็กความเข้าใจ 2 ข้อ

CHECK:
ระบุ 3 จุดที่ควรตรวจสอบกับหนังสือเรียนหรือแหล่งข้อมูลที่เชื่อถือได้
```


## Card 02 — Transform: เปลี่ยนบทเรียนเป็นกิจกรรม
```text
เปลี่ยนเนื้อหาเรื่อง [หัวข้อ] สำหรับ [ระดับชั้น]
ให้เป็นกิจกรรมการเรียนรู้ 15 นาที

ต้องมี:
- Learning Goal
- วิธีเล่น
- สิ่งที่ผู้เรียนต้องทำ
- Feedback เมื่อถูก/ผิด
- วิธีสรุปบทเรียน
- วิธีปรับเป็นระดับง่าย/ยาก
```

#### 📦 Assets ที่ใช้
- [`lesson-food-chain.md`](assets/examples/lesson-food-chain.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
เปลี่ยนเนื้อหาเรื่อง โซ่อาหาร สำหรับ ป.5
ให้เป็นกิจกรรมการเรียนรู้ 15 นาที

ต้องมี:
- Learning Goal
- วิธีเล่น
- สิ่งที่ผู้เรียนต้องทำ
- Feedback เมื่อถูก/ผิด
- วิธีสรุปบทเรียน
- วิธีปรับเป็นระดับง่าย/ยาก
```


## Card 03 — Two Ages: เนื้อหาเดียว 2 ช่วงวัย
```text
นำเนื้อหานี้:
[วางเนื้อหา]

สร้าง 2 เวอร์ชัน:
A) ป.4–ป.6 — ประโยคสั้น ตัวอย่างใกล้ตัว กติกาน้อย
B) ม.1–ม.3 — เพิ่มเหตุผล การตัดสินใจ และคำศัพท์สำคัญ

ทำตารางเปรียบเทียบว่า:
- ภาษาเปลี่ยนอย่างไร
- งานที่ให้ผู้เรียนทำต่างกันอย่างไร
- วิธีประเมินต่างกันอย่างไร
```

#### 📦 Assets ที่ใช้
- [`lesson-food-chain.md`](assets/examples/lesson-food-chain.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
นำเนื้อหานี้:
ใช้เนื้อหาจากไฟล์ lesson-food-chain.md ที่แนบมา

สร้าง 2 เวอร์ชัน:
A) ป.4–ป.6 — ประโยคสั้น ตัวอย่างใกล้ตัว กติกาน้อย
B) ม.1–ม.3 — เพิ่มเหตุผล การตัดสินใจ และคำศัพท์สำคัญ

ทำตารางเปรียบเทียบว่า:
- ภาษาเปลี่ยนอย่างไร
- งานที่ให้ผู้เรียนทำต่างกันอย่างไร
- วิธีประเมินต่างกันอย่างไร
```


## Card 04 — Fact Check
```text
ตรวจคำตอบต่อไปนี้:
[วางคำตอบจาก AI]

แยกเป็น:
1. ข้อเท็จจริงที่ตรวจสอบได้
2. ข้อความที่เป็นการตีความ
3. จุดที่ไม่แน่ใจ
4. คำสำคัญที่ควรค้นเพิ่ม
5. สิ่งที่ครูควรตรวจสอบก่อนนำไปใช้
ห้ามเดาข้อมูลที่ไม่มีหลักฐาน
```

#### 📦 Assets ที่ใช้
- [`sample-ai-answer.md`](assets/examples/sample-ai-answer.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
ตรวจคำตอบต่อไปนี้:
ใช้ข้อความทั้งหมดจากไฟล์ sample-ai-answer.md ที่แนบมา

แยกเป็น:
1. ข้อเท็จจริงที่ตรวจสอบได้
2. ข้อความที่เป็นการตีความ
3. จุดที่ไม่แน่ใจ
4. คำสำคัญที่ควรค้นเพิ่ม
5. สิ่งที่ครูควรตรวจสอบก่อนนำไปใช้
ห้ามเดาข้อมูลที่ไม่มีหลักฐาน
```


## Card 05 — Image Prompt
```text
สร้าง Image Prompt ภาษาอังกฤษสำหรับสื่อการสอนเรื่อง [หัวข้อ]
ผู้เรียนระดับ [ชั้น]

ต้องมี:
- Subject
- Action
- Environment
- Composition
- Lighting
- Educational visual style
- Age appropriate
- No text in image
- No logo / watermark
- Negative Prompt สำหรับสิ่งที่ไม่ต้องการ
```

#### 📦 Assets ที่ใช้
- [`lesson-food-chain.md`](assets/examples/lesson-food-chain.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
สร้าง Image Prompt ภาษาอังกฤษสำหรับสื่อการสอนเรื่อง โซ่อาหารในทุ่งนา
ผู้เรียนระดับ ป.5

ต้องมี:
- Subject
- Action
- Environment
- Composition
- Lighting
- Educational visual style
- Age appropriate
- No text in image
- No logo / watermark
- Negative Prompt สำหรับสิ่งที่ไม่ต้องการ
```


## Card 06 — Motion Prompt
```text
จากภาพ/ฉากนี้:
[อธิบายฉาก]

สร้าง Motion Prompt ความยาว 5–8 วินาที
ระบุ:
- Camera movement
- Subject movement
- Environmental movement
- Timing
- Mood
- สิ่งที่ต้องคงเดิมจากภาพต้นฉบับ
ห้ามเพิ่มตัวละครหรือวัตถุใหม่ที่ไม่ได้ระบุ
```

#### 📦 Assets ที่ใช้
- [`story-seed-phishing.md`](assets/examples/story-seed-phishing.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
จากภาพ/ฉากนี้:
น้องไบต์ยืนหน้าจออีเมลเตือนบัญชีถูกระงับ ชี้ไปที่โดเมนผู้ส่งที่สะกดผิด สีหน้าเริ่มสงสัย

สร้าง Motion Prompt ความยาว 5–8 วินาที
ระบุ:
- Camera movement
- Subject movement
- Environmental movement
- Timing
- Mood
- สิ่งที่ต้องคงเดิมจากภาพต้นฉบับ
ห้ามเพิ่มตัวละครหรือวัตถุใหม่ที่ไม่ได้ระบุ
```


## Card 07 — Code
```text
สร้าง Web App การเรียนรู้เรื่อง [หัวข้อ]
ด้วย HTML/CSS/JavaScript

เงื่อนไข:
- Responsive: Desktop / Tablet / Mobile
- ตัวอักษรอ่านง่าย
- ครูแก้ข้อมูลในตัวแปร JavaScript ได้ง่าย
- มี Start / Progress / Feedback / Result / Restart
- ใช้ได้บน Static Hosting เช่น GitHub Pages
- ใส่ comment จุดที่ครูควรแก้
```

#### 📦 Assets ที่ใช้
- [`web-game-spec.md`](assets/examples/web-game-spec.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
สร้าง Web App การเรียนรู้เรื่อง AI Safety Quest
ด้วย HTML/CSS/JavaScript

เงื่อนไข:
- Responsive: Desktop / Tablet / Mobile
- ตัวอักษรอ่านง่าย
- ครูแก้ข้อมูลในตัวแปร JavaScript ได้ง่าย
- มี Start / Progress / Feedback / Result / Restart
- ใช้ได้บน Static Hosting เช่น GitHub Pages
- ใส่ comment จุดที่ครูควรแก้
```


## Card 08 — Teach Back
```text
สรุปผลงานนี้เป็นบทสอน 5 นาที

โครง:
1 นาที — WHY: เรียนรู้อะไร
1 นาที — PROMPT: Prompt สำคัญ
1 นาที — BUILD: ส่วนที่แก้ไขได้
1 นาที — TEST: วิธีทดสอบ
1 นาที — SAFETY: สิ่งที่ต้องระวัง

ใช้ภาษาที่นักเรียนสามารถนำไปสอนเพื่อนต่อได้
```

#### 📦 Assets ที่ใช้
- [`web-game-spec.md`](assets/examples/web-game-spec.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
ใช้ผลงานเกมจากไฟล์ web-game-spec.md เป็นบริบท

สรุปผลงานนี้เป็นบทสอน 5 นาที

โครง:
1 นาที — WHY: เรียนรู้อะไร
1 นาที — PROMPT: Prompt สำคัญ
1 นาที — BUILD: ส่วนที่แก้ไขได้
1 นาที — TEST: วิธีทดสอบ
1 นาที — SAFETY: สิ่งที่ต้องระวัง

ใช้ภาษาที่นักเรียนสามารถนำไปสอนเพื่อนต่อได้
```


---

## 🎮 ไปต่อ
สำหรับ Prompt เกมโดยเฉพาะ ให้เปิดเอกสาร **DAY 0 — Game Prompt Pack**  
สำหรับภาพ/Storyboard ให้เปิด **DAY 0 — Visual & Story Pack**  
สำหรับ AR/กล้อง/ท่าทางมือ ให้เปิด **DAY 0 — AR & Gesture Pack**


---

## 📈 Business / Marketing
เปิดเอกสาร **Marketing & Brand Strategy Prompt Pack** สำหรับ Workflow ตั้งแต่ Research จนถึง KV และ Jingle
