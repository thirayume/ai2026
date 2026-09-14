# ✅ DAY 0 — Review, Safety & Teach Prompt Pack

# หมวด E — Quality / Safety / Train-the-Trainer

## Card R01 — AI Safety Check
```text
ตรวจผลงานนี้ก่อนใช้กับนักเรียน:
[วางเนื้อหา/Prompt/โค้ด]

ตรวจ:
- Personal data
- Accuracy
- Bias / inappropriate content
- Copyright / attribution
- Camera / microphone permission
- External links
- สิ่งที่ AI สร้างขึ้นและอาจไม่จริง

จัดระดับ:
PASS / FIX BEFORE USE / DO NOT USE
```

#### 📦 Assets ที่ใช้
- [`sample-buggy-game.js`](assets/examples/sample-buggy-game.js)
- [`web-game-spec.md`](assets/examples/web-game-spec.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
ตรวจผลงานนี้ก่อนใช้กับนักเรียน:
ใช้ไฟล์ sample-buggy-game.js และ web-game-spec.md ที่แนบมาเป็นผลงานที่จะตรวจ

ตรวจ:
- Personal data
- Accuracy
- Bias / inappropriate content
- Copyright / attribution
- Camera / microphone permission
- External links
- สิ่งที่ AI สร้างขึ้นและอาจไม่จริง

จัดระดับ:
PASS / FIX BEFORE USE / DO NOT USE
```


## Card R02 — Age Appropriate Review
```text
ตรวจผลงานนี้ในมุม:
1. นักเรียน ป.4–ป.6
2. นักเรียน ม.1–ม.3

ประเมิน:
- ภาษา
- ความยาว
- Cognitive load
- Button/UI size
- Game rules
- Feedback
- Safety

เสนอ Version Primary และ Secondary
```

#### 📦 Assets ที่ใช้
- [`web-game-spec.md`](assets/examples/web-game-spec.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
ตรวจผลงานนี้ในมุม:
1. นักเรียน ป.4–ป.6
2. นักเรียน ม.1–ม.3

ประเมิน:
- ภาษา
- ความยาว
- Cognitive load
- Button/UI size
- Game rules
- Feedback
- Safety

เสนอ Version Primary และ Secondary

ผลงานที่ตรวจ: เกม AI Safety Quest จาก web-game-spec.md กลุ่มเป้าหมายปัจจุบัน ป.6–ม.2 ให้เสนอ 2 รุ่นแยกเป็น ป.4–ป.6 และ ม.1–ม.3
```


## Card R03 — UX Test
```text
ทำหน้าที่เป็น UX Tester

ตรวจเกมนี้:
[รายละเอียด/โค้ด]

Test:
- Desktop
- Tablet
- Mobile
- Touch
- Keyboard
- Camera allow
- Camera deny
- Correct answer
- Wrong answer
- End game
- Restart

จัด Bug:
P0 = ใช้งานไม่ได้
P1 = กระทบการเรียนรู้
P2 = ปรับปรุง UX
```

#### 📦 Assets ที่ใช้
- [`sample-buggy-game.js`](assets/examples/sample-buggy-game.js)
- [`web-game-spec.md`](assets/examples/web-game-spec.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
ทำหน้าที่เป็น UX Tester

ตรวจเกมนี้:
เกม AI Safety Quest ตาม web-game-spec.md และโค้ดตัวอย่าง sample-buggy-game.js

Test:
- Desktop
- Tablet
- Mobile
- Touch
- Keyboard
- Camera allow
- Camera deny
- Correct answer
- Wrong answer
- End game
- Restart

จัด Bug:
P0 = ใช้งานไม่ได้
P1 = กระทบการเรียนรู้
P2 = ปรับปรุง UX
```


## Card R04 — AI Code Reviewer
```text
Review โค้ดนี้ในฐานะ:
- ครู
- Front-end Developer
- Privacy Reviewer
- Accessibility Reviewer

รายงาน:
1. Bug
2. Content risk
3. Privacy risk
4. Accessibility
5. Mobile issue
6. Quick wins
7. สิ่งที่ต้องแก้ก่อน Publish
```

#### 📦 Assets ที่ใช้
- [`sample-buggy-game.js`](assets/examples/sample-buggy-game.js)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
Review โค้ดนี้ในฐานะ:
- ครู
- Front-end Developer
- Privacy Reviewer
- Accessibility Reviewer

รายงาน:
1. Bug
2. Content risk
3. Privacy risk
4. Accessibility
5. Mobile issue
6. Quick wins
7. สิ่งที่ต้องแก้ก่อน Publish

โค้ดที่จะ Review คือ sample-buggy-game.js ให้ชี้บรรทัด/Logic ที่ทำให้คะแนนติดลบและกดซ้ำได้ พร้อมเสนอ Fix
```


## Card R05 — Reflection
```text
ถามฉันทีละ 1 คำถาม รวม 5 คำถาม:
- ฉันเรียนรู้อะไร
- AI ช่วยตรงไหน
- AI ทำผิดตรงไหน
- ฉันแก้อะไรเอง
- ฉันจะสอนต่ออย่างไร

อย่าเฉลยแทนฉัน
```

#### 📦 Assets ที่ใช้
- [`web-game-spec.md`](assets/examples/web-game-spec.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
ถามฉันทีละ 1 คำถาม รวม 5 คำถาม:
- ฉันเรียนรู้อะไร
- AI ช่วยตรงไหน
- AI ทำผิดตรงไหน
- ฉันแก้อะไรเอง
- ฉันจะสอนต่ออย่างไร

อย่าเฉลยแทนฉัน

บริบท Reflection: ผู้เรียนเพิ่งสร้าง AI Safety Quest ตาม web-game-spec.md และทดลองบนมือถือแล้ว
```


## Card R06 — Teach Back 5 Minutes
```text
เปลี่ยนผลงานนี้เป็นแผนสอนเพื่อน 5 นาที

1. WHY
2. PROMPT
3. BUILD
4. TEST
5. SAFETY

แต่ละช่วงให้มี:
- สิ่งที่จะพูด
- สิ่งที่จะสาธิต
- คำถามถามผู้เรียน 1 ข้อ
```

#### 📦 Assets ที่ใช้
- [`web-game-spec.md`](assets/examples/web-game-spec.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
เปลี่ยนผลงานนี้เป็นแผนสอนเพื่อน 5 นาที

1. WHY
2. PROMPT
3. BUILD
4. TEST
5. SAFETY

แต่ละช่วงให้มี:
- สิ่งที่จะพูด
- สิ่งที่จะสาธิต
- คำถามถามผู้เรียน 1 ข้อ

ผลงานที่จะสอนต่อ: AI Safety Quest จาก web-game-spec.md
```


## Card R07 — Improve Prompt
```text
วิเคราะห์ Prompt นี้:
[วาง Prompt]

แยก:
- Role
- Context
- Task
- Format
- Constraints
- Quality Check

บอกส่วนที่ขาด
แล้วเขียน Prompt ฉบับปรับปรุง
โดยไม่เปลี่ยนวัตถุประสงค์เดิม
```

#### 📦 Assets ที่ใช้
- [`sample-weak-prompt.md`](assets/examples/sample-weak-prompt.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
วิเคราะห์ Prompt นี้:
ใช้ Prompt ในไฟล์ sample-weak-prompt.md ที่แนบมา

แยก:
- Role
- Context
- Task
- Format
- Constraints
- Quality Check

บอกส่วนที่ขาด
แล้วเขียน Prompt ฉบับปรับปรุง
โดยไม่เปลี่ยนวัตถุประสงค์เดิม
```

