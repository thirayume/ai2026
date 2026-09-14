# 🎮 DAY 0 — Game Prompt Pack

> คัดและปรับจากตัวอย่าง Prompt เกมที่แนบมา ให้เหมาะกับ Workshop และแก้ `[ ]` ได้ทันที

# หมวด B — Learning Game Prompt Cards

## Card G01 — Multiple Choice
```text
สร้างเกม Multiple Choice เรื่อง “[เรื่อง]”
สำหรับผู้เรียนระดับ [ระดับชั้น] จำนวน [จำนวน] ข้อ

- คำถามแบบ 4 ตัวเลือก
- ภาษาเหมาะกับวัย กระชับ และถูกต้องตามเนื้อหา
- ระบุคำตอบที่ถูกต้อง
- มีคำอธิบายหลังตอบ
- ตอบถูก +10
- แสดง Progress
- จบเกมสรุปคะแนนและหัวข้อที่ควรทบทวน
```

#### 📦 Assets ที่ใช้
- [`lesson-food-chain.md`](assets/examples/lesson-food-chain.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
สร้างเกม Multiple Choice เรื่อง “โซ่อาหาร”
สำหรับผู้เรียนระดับ ป.5 จำนวน 8 ข้อ

- คำถามแบบ 4 ตัวเลือก
- ภาษาเหมาะกับวัย กระชับ และถูกต้องตามเนื้อหา
- ระบุคำตอบที่ถูกต้อง
- มีคำอธิบายหลังตอบ
- ตอบถูก +10
- แสดง Progress
- จบเกมสรุปคะแนนและหัวข้อที่ควรทบทวน
```


## Card G02 — Matching
```text
สร้างเกม Matching เรื่อง “[เรื่อง]”
สำหรับผู้เรียนระดับ [ระดับชั้น] จำนวน [จำนวน] คู่

จับคู่:
[คำสำคัญ/ภาพ/แนวคิด]
กับ
[ความหมาย/หน้าที่/คำอธิบาย]

เงื่อนไข:
- สุ่มตำแหน่งใหม่ทุกครั้ง
- Feedback ทันที
- มีคะแนน
- เมื่อจับครบ ให้สรุปความรู้สำคัญ
```

#### 📦 Assets ที่ใช้
- [`lesson-food-chain.md`](assets/examples/lesson-food-chain.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
สร้างเกม Matching เรื่อง “โซ่อาหาร”
สำหรับผู้เรียนระดับ ป.5 จำนวน 6 คู่

จับคู่:
ผู้ผลิต, ผู้บริโภค, ผู้ย่อยสลาย, หญ้า, กบ, งู
กับ
ความหมายหรือบทบาทที่ถูกต้องในโซ่อาหาร

เงื่อนไข:
- สุ่มตำแหน่งใหม่ทุกครั้ง
- Feedback ทันที
- มีคะแนน
- เมื่อจับครบ ให้สรุปความรู้สำคัญ
```


## Card G03 — Flashcards
```text
สร้าง Flashcards เรื่อง “[เรื่อง]”
สำหรับผู้เรียนระดับ [ระดับชั้น] จำนวน [จำนวน] ใบ

ด้านหน้า:
- คำถามหรือคำสำคัญ

ด้านหลัง:
- คำตอบ
- คำอธิบายสั้น
- ตัวอย่าง 1 ตัวอย่าง

เพิ่มปุ่ม:
รู้แล้ว / ต้องทบทวน
และสรุปจำนวนบัตรที่ต้องทบทวนเมื่อจบ
```

#### 📦 Assets ที่ใช้
- [`lesson-food-chain.md`](assets/examples/lesson-food-chain.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
สร้าง Flashcards เรื่อง “โซ่อาหาร”
สำหรับผู้เรียนระดับ ป.5 จำนวน 8 ใบ

ด้านหน้า:
- คำถามหรือคำสำคัญ

ด้านหลัง:
- คำตอบ
- คำอธิบายสั้น
- ตัวอย่าง 1 ตัวอย่าง

เพิ่มปุ่ม:
รู้แล้ว / ต้องทบทวน
และสรุปจำนวนบัตรที่ต้องทบทวนเมื่อจบ
```


## Card G04 — Memory Tiles
```text
สร้างเกม Memory Tiles เรื่อง “[เรื่อง]”
จำนวน [จำนวน] คู่

จับคู่:
[คำศัพท์ ↔ ความหมาย / ภาพ ↔ คำ / แนวคิด ↔ ตัวอย่าง]

ต้องมี:
- จำนวนครั้งที่เปิด
- เวลา
- จำนวนคู่ที่พบ
- Animation พลิกการ์ด
- Feedback เมื่อจับคู่สำเร็จ
```

#### 📦 Assets ที่ใช้
- [`lesson-food-chain.md`](assets/examples/lesson-food-chain.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
สร้างเกม Memory Tiles เรื่อง “โซ่อาหาร”
จำนวน 6 คู่

จับคู่:
คำศัพท์ ↔ ความหมาย

ต้องมี:
- จำนวนครั้งที่เปิด
- เวลา
- จำนวนคู่ที่พบ
- Animation พลิกการ์ด
- Feedback เมื่อจับคู่สำเร็จ
```


## Card G05 — Sorting
```text
สร้างเกม Sorting เรื่อง “[เรื่อง]”
สำหรับ [ระดับชั้น]

หมวด:
1. [หมวด 1]
2. [หมวด 2]
3. [หมวด 3]

สร้างรายการอย่างน้อย [จำนวน] รายการ
ให้ผู้เรียนลากหรือแตะเพื่อจัดหมวด
ตอบผิดให้เด้งกลับและอธิบายสั้น ๆ
```

#### 📦 Assets ที่ใช้
- [`lesson-food-chain.md`](assets/examples/lesson-food-chain.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
สร้างเกม Sorting เรื่อง “การจำแนกสิ่งมีชีวิต”
สำหรับ ป.5

หมวด:
1. ผู้ผลิต
2. ผู้บริโภค
3. ผู้ย่อยสลาย

สร้างรายการอย่างน้อย 12 รายการ
ให้ผู้เรียนลากหรือแตะเพื่อจัดหมวด
ตอบผิดให้เด้งกลับและอธิบายสั้น ๆ
```


## Card G06 — Sequencing
```text
สร้างเกม Sequencing เรื่อง “[เรื่อง]”
ให้ผู้เรียนเรียง [เหตุการณ์/ขั้นตอน/กระบวนการ]
จำนวน [จำนวน] ขั้น

ต้องมี:
- การ์ดที่สลับลำดับ
- ปุ่มตรวจคำตอบ
- Feedback
- แสดงลำดับที่ถูกต้องเมื่อจบ
- สรุปเหตุผลว่าทำไมลำดับนี้จึงถูก
```

#### 📦 Assets ที่ใช้
- [`lesson-food-chain.md`](assets/examples/lesson-food-chain.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
สร้างเกม Sequencing เรื่อง “โซ่อาหารในทุ่งนา”
ให้ผู้เรียนเรียง ลำดับการถ่ายทอดพลังงานจากดวงอาทิตย์ไปยังผู้ล่าระดับสูง
จำนวน 6 ขั้น

ต้องมี:
- การ์ดที่สลับลำดับ
- ปุ่มตรวจคำตอบ
- Feedback
- แสดงลำดับที่ถูกต้องเมื่อจบ
- สรุปเหตุผลว่าทำไมลำดับนี้จึงถูก
```


## Card G07 — Fill in the Blank
```text
สร้างเกม Fill in the Blank เรื่อง “[เรื่อง]”
จำนวน [จำนวน] ข้อ สำหรับ [ระดับชั้น]

แต่ละข้อ:
- ประโยคสั้น
- ช่องว่าง 1 จุด
- Hint 1 ข้อ
- เฉลย
- คำอธิบายหลังตอบ

รองรับภาษาไทยและมือถือ
```

#### 📦 Assets ที่ใช้
- [`lesson-food-chain.md`](assets/examples/lesson-food-chain.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
สร้างเกม Fill in the Blank เรื่อง “โซ่อาหาร”
จำนวน 8 ข้อ สำหรับ ป.5

แต่ละข้อ:
- ประโยคสั้น
- ช่องว่าง 1 จุด
- Hint 1 ข้อ
- เฉลย
- คำอธิบายหลังตอบ

รองรับภาษาไทยและมือถือ
```


## Card G08 — Word Search / Crossword
```text
สร้างเกม Word Search หรือ Crossword เรื่อง “[เรื่อง]”
จำนวน [จำนวน] คำ

แต่ละคำต้องมี:
- คำศัพท์
- ความหมาย/คำใบ้
- ระดับความยาก

เมื่อพบคำ:
- Highlight
- เพิ่มคะแนน
- แสดงความหมายสั้น ๆ
```

#### 📦 Assets ที่ใช้
- [`lesson-food-chain.md`](assets/examples/lesson-food-chain.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
สร้างเกม Word Search หรือ Crossword เรื่อง “โซ่อาหาร”
จำนวน 10 คำ

แต่ละคำต้องมี:
- คำศัพท์
- ความหมาย/คำใบ้
- ระดับความยาก

เมื่อพบคำ:
- Highlight
- เพิ่มคะแนน
- แสดงความหมายสั้น ๆ
```


## Card G09 — Web Quiz Adventure
```text
ROLE:
คุณคือ Game Designer + ครู + Front-end Developer

สร้างเกม Adventure เรื่อง [หัวข้อ]
สำหรับ [ระดับชั้น]

GAME LOOP:
Start → Mission → Question → Feedback → Progress → Result

ระบบ:
- 8–10 ข้อ
- คะแนน
- พลังชีวิต 3
- Progress
- Combo แบบง่าย
- Feedback ถูก/ผิด
- Result + สิ่งที่ควรทบทวน

OUTPUT:
HTML/CSS/JavaScript ที่เปิดบน GitHub Pages ได้
```

#### 📦 Assets ที่ใช้
- [`web-game-spec.md`](assets/examples/web-game-spec.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
ROLE:
คุณคือ Game Designer + ครู + Front-end Developer

สร้างเกม Adventure เรื่อง AI Safety
สำหรับ ป.6

GAME LOOP:
Start → Mission → Question → Feedback → Progress → Result

ระบบ:
- 8–10 ข้อ
- คะแนน
- พลังชีวิต 3
- Progress
- Combo แบบง่าย
- Feedback ถูก/ผิด
- Result + สิ่งที่ควรทบทวน

OUTPUT:
HTML/CSS/JavaScript ที่เปิดบน GitHub Pages ได้
```


## Card G10 — Cybersecurity Decision Game
```text
สร้างเกม Decision Game เรื่อง “รู้ทัน Phishing”
สำหรับ ม.1–ม.3

สร้างสถานการณ์ 8 เหตุการณ์ เช่น:
- Email ขอรหัสผ่าน
- Link แปลก
- QR ไม่ทราบที่มา
- ไฟล์แนบ
- ข้อความเร่งด่วน
- เว็บไซต์ Login ปลอม

ผู้เล่นเลือก:
SAFE / SUSPICIOUS / DANGEROUS

หลังตอบ:
- เฉลย
- Red Flags
- สิ่งที่ควรทำจริง
```

#### 📦 Assets ที่ใช้
- [`sample-phishing-email.md`](assets/examples/sample-phishing-email.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
สร้างเกม Decision Game เรื่อง “รู้ทัน Phishing”
สำหรับ ม.1–ม.3

สร้างสถานการณ์ 8 เหตุการณ์ เช่น:
- Email ขอรหัสผ่าน
- Link แปลก
- QR ไม่ทราบที่มา
- ไฟล์แนบ
- ข้อความเร่งด่วน
- เว็บไซต์ Login ปลอม

ผู้เล่นเลือก:
SAFE / SUSPICIOUS / DANGEROUS

หลังตอบ:
- เฉลย
- Red Flags
- สิ่งที่ควรทำจริง

ใช้สถานการณ์จากไฟล์ sample-phishing-email.md ที่แนบมาเป็นหนึ่งใน 8 เหตุการณ์ และสร้างเหตุการณ์จำลองเพิ่มเติมให้ครบ 8 โดยห้ามใช้ข้อมูลจริง
```


## Card G11 — AI Fact Check Challenge
```text
สร้างเกม AI Fact Check Challenge
แสดงข้อความจาก AI ครั้งละ 1 ข้อ

ผู้เล่นต้องเลือก:
- น่าเชื่อถือ
- ต้องตรวจเพิ่ม
- มีข้อมูลผิด

แต่ละข้อให้มี:
- หลักฐานที่ต้องหา
- คำค้นแนะนำ
- Explanation
- คะแนนจากความถูกต้อง + เหตุผล
```

#### 📦 Assets ที่ใช้
- [`sample-ai-answer.md`](assets/examples/sample-ai-answer.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
สร้างเกม AI Fact Check Challenge
แสดงข้อความจาก AI ครั้งละ 1 ข้อ

ผู้เล่นต้องเลือก:
- น่าเชื่อถือ
- ต้องตรวจเพิ่ม
- มีข้อมูลผิด

แต่ละข้อให้มี:
- หลักฐานที่ต้องหา
- คำค้นแนะนำ
- Explanation
- คะแนนจากความถูกต้อง + เหตุผล

ใช้ข้อความใน sample-ai-answer.md เป็นข้อแรก และสร้างข้อความจำลองเพิ่มให้ครบ 8 ข้อ โดยระบุชัดว่าเป็น Mock Data
```


## Card G12 — Gesture Choice Game
```text
สร้างเกมตอบคำถามผ่าน Webcam
ใช้ MediaPipe Hands

การเลือก:
- ชู 1 นิ้ว = ตัวเลือกซ้าย
- ชู 2 นิ้ว = ตัวเลือกขวา
- ต้องค้าง 1.2 วินาทีเพื่อยืนยัน

เพิ่ม:
- Progress ring ขณะค้างมือ
- Mouse fallback
- Timer
- Feedback
- State: START / QUESTION / REVEAL / RESULT
```

#### 📦 Assets ที่ใช้
- [`web-game-spec.md`](assets/examples/web-game-spec.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
สร้างเกมตอบคำถามผ่าน Webcam
ใช้ MediaPipe Hands

การเลือก:
- ชู 1 นิ้ว = ตัวเลือกซ้าย
- ชู 2 นิ้ว = ตัวเลือกขวา
- ต้องค้าง 1.2 วินาทีเพื่อยืนยัน

เพิ่ม:
- Progress ring ขณะค้างมือ
- Mouse fallback
- Timer
- Feedback
- State: START / QUESTION / REVEAL / RESULT

หัวข้อคำถาม: AI Safety สำหรับ ม.1 จำนวน 6 ข้อ ใช้เมาส์เป็น fallback หากกล้องไม่พร้อม
```


## Card G13 — Pinch Drag & Drop
```text
เพิ่มระบบ MediaPipe Hands:
- Pinch นิ้วโป้ง + นิ้วชี้ = หยิบ
- กางนิ้ว = ปล่อย
- ลากการ์ดไปยังเป้าหมาย
- Correct = ล็อกการ์ด
- Wrong = เด้งกลับ
- มี Mouse/Touch fallback
- แปลงพิกัด Camera ↔ Screen ให้แม่นยำ
```

#### 📦 Assets ที่ใช้
- [`lesson-food-chain.md`](assets/examples/lesson-food-chain.md)

#### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
เพิ่มระบบ MediaPipe Hands:
- Pinch นิ้วโป้ง + นิ้วชี้ = หยิบ
- กางนิ้ว = ปล่อย
- ลากการ์ดไปยังเป้าหมาย
- Correct = ล็อกการ์ด
- Wrong = เด้งกลับ
- มี Mouse/Touch fallback
- แปลงพิกัด Camera ↔ Screen ให้แม่นยำ

Use case: ลากการ์ดสิ่งมีชีวิตไปยังหมวด ผู้ผลิต / ผู้บริโภค / ผู้ย่อยสลาย สำหรับ ป.5
```

