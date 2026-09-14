# 🛡️ MISSION 1 — AI Safety & Fact Check

> **Workshop Map:** 00:00–00:20 — เข้าใจ AI, Hallucination, Privacy และ “ตรวจสอบก่อนเชื่อ”

## เป้าหมาย
- รู้ว่า AI อาจตอบผิดหรือสร้างข้อมูลที่ไม่มีหลักฐาน
- ไม่ใส่ข้อมูลส่วนบุคคล/ข้อมูลลับโดยไม่จำเป็น
- แยก Fact / Interpretation / Assumption
- ตรวจผลงานก่อนนำไปใช้กับนักเรียน

### 📦 Assets ที่ใช้
- [`sample-ai-answer.md`](assets/examples/sample-ai-answer.md)
- [`sample-phishing-email.md`](assets/examples/sample-phishing-email.md)
- [`sample-buggy-game.js`](assets/examples/sample-buggy-game.js)
- [`safety-checklist.md`](content/safety-checklist.md)

---

## Prompt M1.1 — AI Safety Check
```text
คุณคือ AI Safety Reviewer สำหรับงานการศึกษา

ตรวจผลงานต่อไปนี้ก่อนใช้กับนักเรียน:
[วางเนื้อหา / Prompt / โค้ด / ผลลัพธ์จาก AI]

ตรวจ:
1. Personal data / Privacy
2. Accuracy และ Hallucination
3. Bias / inappropriate content
4. Copyright / attribution
5. Camera / microphone permission
6. External links
7. ข้อความหรือภาพที่ AI สร้างและอาจถูกเข้าใจว่าเป็นของจริง
8. สิ่งที่ผู้เรียนควรตรวจสอบด้วยตนเอง

จัดผลเป็นตาราง:
ประเด็น / สิ่งที่พบ / ความเสี่ยง / วิธีแก้ / ระดับ

ระดับ:
PASS / FIX BEFORE USE / DO NOT USE

ห้ามเดาข้อมูลที่ไม่มีหลักฐาน
```

### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
คุณคือ AI Safety Reviewer สำหรับงานการศึกษา

ตรวจไฟล์ sample-ai-answer.md ที่แนบมา
ซึ่งเป็นคำตอบจาก AI สำหรับกิจกรรม Fact Check ของนักเรียน ป.6–ม.2

ตรวจ:
1. ข้อเท็จจริงที่ผิดหรือควรตรวจเพิ่ม
2. ประโยคที่อาจทำให้ผู้เรียนเข้าใจผิด
3. คำค้นที่ควรใช้ตรวจสอบกับแหล่งอ้างอิง
4. ความเสี่ยงถ้าครูนำคำตอบนี้ไปใช้โดยไม่ตรวจ
5. วิธีแก้ก่อนนำเข้าสู่กิจกรรม

ส่งผลเป็นตาราง:
ข้อความ / สถานะ / เหตุผล / วิธีตรวจ / สิ่งที่ครูควรทำ

จากนั้นจัดระดับทั้งชิ้นงาน:
PASS / FIX BEFORE USE / DO NOT USE
```

---

## Prompt M1.2 — Fact / Interpretation / Assumption
```text
ตรวจข้อความต่อไปนี้:
[วางข้อความ]

แยกทุกประเด็นเป็น:
- FACT — มีข้อมูลรองรับและตรวจสอบได้
- INTERPRETATION — เป็นการตีความจากข้อมูล
- ASSUMPTION — ยังไม่มีข้อมูลรองรับเพียงพอ
- UNKNOWN — ข้อมูลไม่พอที่จะตัดสิน

สำหรับ FACT ให้บอกว่าควรตรวจจากแหล่งประเภทใด
สำหรับ ASSUMPTION/UNKNOWN ให้เสนอคำถามที่ต้องหาคำตอบเพิ่ม
```

### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
ใช้ไฟล์ sample-ai-answer.md
แยกทุกข้อความเป็น FACT / INTERPRETATION / ASSUMPTION / UNKNOWN

อย่าแก้คำตอบทันที
ให้บอกก่อนว่า “ควรตรวจอะไร” และ “ควรหาแหล่งประเภทใด”
เพื่อให้นักเรียนฝึกตรวจสอบด้วยตนเอง
```

---

## Prompt M1.3 — Privacy Before Prompting
```text
คุณคือ Privacy Checker

ก่อนส่งข้อมูลต่อไปนี้ให้ AI:
[วางข้อมูล]

ช่วยระบุ:
1. ข้อมูลส่วนบุคคล
2. ข้อมูลละเอียดอ่อน
3. ข้อมูลลับขององค์กร/โรงเรียน
4. ส่วนที่ควรลบหรือแทนด้วย Mock Data
5. เวอร์ชันข้อมูลที่ปลอดภัยกว่าสำหรับใช้ฝึกกับ AI

ห้ามทำซ้ำข้อมูลส่วนบุคคลที่ไม่จำเป็นในคำตอบ
```

> เปิด **CHECKLIST — AI Safety / Ethics / PDPA** เพื่อใช้เป็น Checklist ก่อนและหลัง Prompt ทุกครั้ง
