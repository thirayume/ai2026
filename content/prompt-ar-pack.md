# 🥽 DAY 0 — AR & Gesture Prompt Pack

> เริ่มจาก Camera AR แบบง่ายก่อน แล้วค่อยเพิ่ม Hand Tracking / 3D

# หมวด D — AR Prompt Cards

## Card AR01 — Camera AR Learning Hunt
```text
ROLE:
คุณคือ Web AR Game Designer และครู

สร้างเกม “AR Learning Hunt”
ด้วย HTML/CSS/JavaScript

CORE:
- getUserMedia เปิดกล้องหลังผู้ใช้กดปุ่ม
- Camera เป็น background
- HTML Overlay เป็นคำ/การ์ดลอย
- Tap/Click เพื่อเลือก
- ถูก +10
- ผิด -5 แต่คะแนนไม่ต่ำกว่า 0
- 10 รอบ
- Score / Round / Feedback
- Start / Restart
- Responsive
- Camera denied → fallback background

PRIVACY:
ไม่บันทึกหรืออัปโหลด Camera Stream
```

## Card AR02 — Gesture AR: Pinch to Select
```text
ต่อยอดเกม AR เดิมด้วย MediaPipe Hands

Gesture:
- Pinch = เลือกวัตถุ
- Open Palm = ยืนยัน
- แสดง Cursor ที่ตำแหน่งมือ
- แสดง Tracking Status
- ใช้ Smoothing ลดมือสั่น
- ถ้า Tracking หลุดชั่วคราว เกมต้องไม่ Reset
- มี Mouse/Touch fallback
```

## Card AR03 — AR ยิงธนูสู้คำกริยา (Advanced)
```text
สร้างเกม AR “ยิงธนูสู้คำกริยา”

Technology:
- HTML/CSS/JavaScript
- Three.js
- MediaPipe Hands
- Web Audio API

Control:
- มือซ้าย = ตำแหน่งคันธนู
- มือขวากำ = เริ่มดึง
- แบมือ = ปล่อยลูกธนู
- แรงยิงสัมพันธ์กับระยะดึง

Game:
- ผลไม้ 3 ลูกต่อรอบ
- คำกริยา 1
- คำนามหลอก 2
- ยิงกริยา +10
- ยิงคำหลอก -5
- คะแนนไม่ต่ำกว่า 0
- มี HUD, เวลา, รอบ, Tracking status

UX:
- ตัวอักษรใหญ่
- Feedback ไม่บังผู้เล่นนาน
- ปุ่มสลับมือ
- Restart
```

## Card AR04 — AR Science Classification
```text
เปลี่ยน AR Learning Hunt เป็นเกมวิทยาศาสตร์

หัวข้อ: [สัตว์มีกระดูกสันหลัง / สถานะของสสาร / ระบบสุริยะ / ฯลฯ]
Target category: [หมวดที่ถูกต้อง]
Correct items: [...]
Decoys: [...]

เมื่อผู้เรียนเลือก:
- แสดง Correct / Incorrect
- อธิบายเหตุผล 1 ประโยค
- เก็บคะแนน
- จบเกมมี Reflection 2 คำถาม
```

## Card AR05 — AR Cyber Decision
```text
สร้าง AR Decision Hunt เรื่อง Cyber Safety

การ์ดลอย:
- SAFE
- SUSPICIOUS
- DANGEROUS

สถานการณ์:
Email, QR, Password, Link, Attachment, Login Page

ผู้เล่นแตะคำตอบ
แล้วแสดง Red Flags ที่ควรสังเกต
```

## Card AR06 — Pinch Drag Learning Objects
```text
สร้าง AR Drag & Drop ผ่านกล้อง

MediaPipe Hands:
- Pinch = จับ
- Move = ลาก
- Release = วาง

Use case:
ลาก [คำศัพท์/ภาพ/อุปกรณ์] ไปลง [หมวด/ตำแหน่ง]

ต้องมี:
- Coordinate mapping
- Snap target
- Wrong → return
- Correct → lock
- Score
- Touch/Mouse fallback
```

## Card AR07 — 3D Jenga Gesture Challenge
```text
สร้าง 3D Web Game เรียงบล็อก
ใช้ Three.js + Physics + MediaPipe Hands

Gesture:
- Pinch = หยิบบล็อก
- บิดข้อมือ = หมุน
- Release = วาง

Game:
- วางบล็อกซ้อนให้สูง
- Gravity / Collision
- บล็อกตกเกิน [จำนวน] = Game Over
- แสดงคะแนนและความสูง
- Mouse fallback
```

## Card AR08 — AR Debug Prompt
```text
ตรวจโค้ด AR ต่อไปนี้:
[วางโค้ด/ปัญหา]

ทดสอบเชิงเหตุผล:
1. Camera permission
2. Pointer/Touch
3. MediaPipe loading
4. Coordinate mapping
5. State lock
6. Double click/tap
7. Score update
8. Auto next
9. Mobile viewport
10. Camera denied fallback

ส่ง:
- Root cause
- Fix
- โค้ดส่วนที่ต้องเปลี่ยน
- Test cases
```
