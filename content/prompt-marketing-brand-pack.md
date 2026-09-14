# 📈 Marketing & Brand Strategy Prompt Pack

> Workflow สำหรับทำ **Research → Strategy → Persona → Pain → USP → Content → KV → Jingle**  
> ใช้ได้กับ ChatGPT, Gemini, Claude หรือ AI ที่เหมาะกับงานแต่ละขั้น  
> **สำคัญ:** Card ที่ต้องใช้ “ข้อมูลล่าสุด + ลิงก์อ้างอิง” ควรใช้ AI ที่เปิด Web/Search ได้

## 🧭 Workflow

**Setup AI → Research Demand → Research Competitor → Business Brain → Brand Value → Positioning → Persona → Pain Point → USP → 10 Topics → Sale Content → Polish → KV → Jingle**

### 📦 ชุด Assets ตัวอย่าง
- [`marketing-brand-brief-baanbrew.md`](assets/examples/marketing-brand-brief-baanbrew.md)
- [`marketing-product-offer-baanbrew.md`](assets/examples/marketing-product-offer-baanbrew.md)
- [`marketing-customer-voice-baanbrew.csv`](assets/examples/marketing-customer-voice-baanbrew.csv)
- [`marketing-brand-tone-baanbrew.md`](assets/examples/marketing-brand-tone-baanbrew.md)
- [`marketing-research-demand-simulated.md`](assets/examples/marketing-research-demand-simulated.md)
- [`marketing-research-competitor-simulated.md`](assets/examples/marketing-research-competitor-simulated.md)
- [`marketing-business-brain-simulated.md`](assets/examples/marketing-business-brain-simulated.md)
- [`marketing-content-draft-baanbrew.md`](assets/examples/marketing-content-draft-baanbrew.md)
- [`marketing-product-mock-baanbrew.png`](assets/examples/marketing-product-mock-baanbrew.png)
- [`marketing-kv-brief.md`](assets/examples/marketing-kv-brief.md)
- [`marketing-jingle-brief.md`](assets/examples/marketing-jingle-brief.md)

![Mock Product — BaanBrew Drip](assets/examples/marketing-product-mock-baanbrew.png)

> Assets ชุด BaanBrew เป็น **Mock Data** ทั้งหมด ใช้เพื่อ Workshop เท่านั้น

---

# M00 — คำสั่งตั้งค่า AI เป็นนักการตลาด

## Template
```text
คุณคือ Brand Strategist + Marketing Consultant

วันนี้ฉันจะคุยเรื่องธุรกิจนี้ในแชทเดียว โฟกัส business brand เท่านั้น
ขอให้ค่อยๆ ทำความเข้าใจก่อน ยังไม่ต้องแนะนำอะไร
จนกว่าฉันจะเล่าข้อมูลแบรนด์ สินค้า ลูกค้า ตลาด คู่แข่ง และเป้าหมายครบ

ถ้าไม่ชัดให้ถามกลับได้
ถ้าจำเป็นต้องคาดการณ์ ให้ขึ้นต้นข้อความนั้นด้วยคำว่า “ข้อสันนิษฐาน:” และอธิบายเหตุผลที่คาดการณ์
ตอบไทยอ่านง่าย

ถ้าเข้าใจตอบว่า “โอเค รับทราบ”
```

### 📦 Assets ที่ใช้
- `marketing-brand-brief-baanbrew.md`
- `marketing-product-offer-baanbrew.md`
- `marketing-brand-tone-baanbrew.md`

### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
คุณคือ Brand Strategist + Marketing Consultant

วันนี้ฉันจะคุยเรื่องธุรกิจ BaanBrew Drip ซึ่งเป็น Mock Brand สำหรับ Workshop
โฟกัส business brand เท่านั้น

ขอให้ค่อยๆ ทำความเข้าใจก่อน ยังไม่ต้องแนะนำอะไร
จนกว่าฉันจะส่งข้อมูลครบ 3 ไฟล์:
1. marketing-brand-brief-baanbrew.md
2. marketing-product-offer-baanbrew.md
3. marketing-brand-tone-baanbrew.md

ถ้าไม่ชัดให้ถามกลับได้
ถ้าจำเป็นต้องคาดการณ์ ให้ขึ้นต้นข้อความนั้นด้วยคำว่า “ข้อสันนิษฐาน:” และอธิบายเหตุผลที่คาดการณ์
ห้ามเปลี่ยน Mock Data ให้กลายเป็นข้อเท็จจริงตลาด
ตอบไทยอ่านง่าย

ถ้าเข้าใจตอบว่า “โอเค รับทราบ”
```

---

# M01 — Research Demand

## Template
```text
คุณคือ Market Intelligence Specialist ช่วยทำ Research Demand

สำหรับ [สินค้า/บริการ]
ในตลาด [ประเทศ/พื้นที่]
กลุ่มลูกค้า [กลุ่มเป้าหมาย]

จากข้อมูลล่าสุด สรุป:
1) เทรนด์
2) ความต้องการ
3) Pain Point
4) พฤติกรรมซื้อ
5) คำค้น/คำพูดลูกค้า
6) เหตุผลที่ตัดสินใจซื้อ
7) โอกาสที่แบรนด์ควรใช้ต่อ

ไม่ต้องเขียนคอนเทนต์
พร้อมลิงก์อ้างอิง
```

### 📦 Assets ที่ใช้
- `marketing-brand-brief-baanbrew.md`
- `marketing-customer-voice-baanbrew.csv`
- สำหรับ Workshop แบบ Offline ใช้ `marketing-research-demand-simulated.md`

### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
คุณคือ Market Intelligence Specialist ช่วยทำ Research Demand

สำหรับสินค้า “กาแฟดริป Specialty แบบซองเดี่ยวพร้อมชง”
ในตลาดประเทศไทย โดยเน้นกรุงเทพฯ เชียงใหม่ ขอนแก่น และชลบุรี
กลุ่มลูกค้า: คนทำงานอายุ 25–40 ปี ที่ดื่มกาแฟที่บ้านหรือออฟฟิศ
ต้องการรสชาติดี แต่ให้ความสำคัญกับความสะดวกและเวลา

ใช้ข้อมูลล่าสุดที่เข้าถึงได้ ณ วันที่ทำ Research
ให้แยกชัดเจนว่าอะไรคือ:
- ข้อมูลจากแหล่งอ้างอิง
- ข้อสังเกตจากข้อมูล
- สมมติฐานที่ยังต้อง Validate

สรุป:
1) เทรนด์
2) ความต้องการ
3) Pain Point
4) พฤติกรรมซื้อ
5) คำค้น/คำพูดลูกค้า
6) เหตุผลที่ตัดสินใจซื้อ
7) โอกาสที่แบรนด์ควรใช้ต่อ

ห้ามเขียนคอนเทนต์ขาย
ห้ามแต่งตัวเลขที่หาแหล่งไม่ได้
แนบลิงก์อ้างอิงท้ายแต่ละประเด็นสำคัญ
และระบุวันที่เข้าถึงข้อมูล
```

> **Workshop Offline:** หากไม่มี Web Search ให้ใช้ `marketing-research-demand-simulated.md` และระบุในผลลัพธ์ว่าเป็นข้อมูลจำลอง

---

# M02 — Research Competitor

## Template
```text
คุณคือ Competitive Intelligence Analyst ช่วยวิเคราะห์คู่แข่ง

ของ [สินค้า/บริการ]
ในตลาด [ประเทศ/พื้นที่]

จากข้อมูลล่าสุด เลือกคู่แข่งหลัก 3-5 ราย สรุป:
1) เขาคือใคร
2) จุดขาย
3) ราคา/ข้อเสนอ
4) วิธีสื่อสาร
5) คอนเทนต์ที่ใช้
6) จุดแข็ง
7) จุดอ่อน
8) ช่องว่างที่แบรนด์เราควรเข้าไปยืน

พร้อมลิงก์อ้างอิง
```

### 📦 Assets ที่ใช้
- `marketing-brand-brief-baanbrew.md`
- `marketing-product-offer-baanbrew.md`
- Offline Workshop: `marketing-research-competitor-simulated.md`

### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
คุณคือ Competitive Intelligence Analyst

ช่วยวิเคราะห์คู่แข่งของสินค้า “กาแฟดริป Specialty แบบซองเดี่ยว”
ในตลาดประเทศไทย

เลือกคู่แข่งหลัก 3–5 รายจากหลักฐานที่ค้นพบจริง
โดยอธิบายเกณฑ์ที่ใช้เลือก เช่น:
- สินค้าอยู่ใน Product Category เดียวกัน
- Target Customer ใกล้เคียง
- ช่องทางขายทับซ้อน
- Search/Marketplace visibility

จากข้อมูลล่าสุด สรุป:
1) เขาคือใคร
2) จุดขาย
3) ราคา/ข้อเสนอ ณ วันที่ตรวจ
4) วิธีสื่อสาร
5) รูปแบบคอนเทนต์ที่ใช้
6) จุดแข็ง
7) จุดอ่อนที่เห็นจากหลักฐาน ไม่ใช่การเดา
8) ช่องว่างที่ BaanBrew Drip ควรพิจารณาเข้าไปยืน

ทำตารางเปรียบเทียบ
แยก Fact / Interpretation / Assumption
พร้อมลิงก์อ้างอิงและวันที่เข้าถึง
```

---

# M03 — Business & Brand Overview / Business Brain

## Template
```text
คุณคือ Chief Strategy Officer + Business Analyst

จากข้อมูลทั้งหมดในแชทนี้ ทั้งแบรนด์ สินค้า ลูกค้า Demand และ Competitor
ช่วยสังเคราะห์เป็น Business Brain
ไม่เอาสรุปทั่วไป

ตอบ:
1) ธุรกิจนี้คืออะไร
2) ลูกค้าหลัก
3) ตลาดต้องการอะไร
4) คู่แข่งขายอะไร
5) จุดแข็งแบรนด์
6) โอกาสในตลาด
7) ประเด็นสำคัญที่ควรใช้หา USP
```

### 📦 Assets ที่ใช้
- `marketing-brand-brief-baanbrew.md`
- `marketing-product-offer-baanbrew.md`
- `marketing-research-demand-simulated.md`
- `marketing-research-competitor-simulated.md`
- `marketing-customer-voice-baanbrew.csv`

### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
คุณคือ Chief Strategy Officer + Business Analyst

ใช้ Assets 5 ไฟล์ที่แนบเป็นข้อมูลตั้งต้นของ Mock Brand BaanBrew Drip:
- Brand Brief
- Product Offer
- Simulated Demand Research
- Simulated Competitor Research
- Customer Voice

ช่วยสังเคราะห์เป็น Business Brain โดยไม่ทำ Summary แบบกว้าง

ตอบ:
1) ธุรกิจนี้คืออะไร ในประโยคที่ทีมใช้ตรงกันได้
2) ลูกค้าหลักและ Job-to-be-Done
3) ตลาดต้องการอะไร
4) Competitive Frame: ลูกค้ามีทางเลือกอะไรบ้าง
5) จุดแข็งที่มีข้อมูลรองรับ
6) โอกาสในตลาด
7) ประเด็นสำคัญที่ควรนำไป Validate ก่อนหา USP

หากข้อใดยังไม่มีหลักฐานเพียงพอ ให้ขึ้นต้นด้วย “ข้อสันนิษฐาน:” พร้อมระบุสิ่งที่ต้องตรวจสอบเพิ่ม
```

---

# M04 — Brand Value

## Template
```text
คุณคือ Brand Strategist

จาก Business Brain ด้านบน ช่วยสกัด Brand Value ของธุรกิจนี้

แบ่งเป็น:
1) คุณค่าที่ลูกค้าได้รับจริง
2) คุณค่าทางอารมณ์
3) คุณค่าที่ทำให้ต่างจากคู่แข่ง
4) คุณค่าที่แบรนด์ยืนหยัด

แล้วเลือก 3 Brand Value หลักที่ควรใช้สื่อสาร
เขียนให้เป็นภาษาคน สั้น คม เข้าใจง่าย
```

### 📦 Assets ที่ใช้
- `marketing-business-brain-simulated.md`
- `marketing-brand-tone-baanbrew.md`

### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
คุณคือ Brand Strategist

ใช้ marketing-business-brain-simulated.md และ marketing-brand-tone-baanbrew.md
ช่วยสกัด Brand Value ของ BaanBrew Drip

แบ่งเป็น:
1) Functional Value
2) Emotional Value
3) Differentiating Value
4) Brand Principle

จากนั้นเลือก 3 Brand Value หลัก
แต่ละข้อให้มี:
- คำสั้น 2–5 คำ
- ความหมาย 1 ประโยค
- หลักฐานหรือเหตุผลจาก Business Brain
- สิ่งที่แบรนด์ “ไม่ควรพูดเกินจริง”

ภาษาไทยต้องเป็นภาษาคน ไม่ใช้ศัพท์การตลาดเกินจำเป็น
```

---

# M05 — Brand Positioning

## Template
```text
คุณคือ Brand Positioning Strategist

จาก Business Brain และ Brand Value
ช่วยกำหนดจุดยืนแบรนด์นี้ในตลาด

ตอบ:
1) เราควรยืนตรงไหน
2) ต่างจากคู่แข่งอย่างไร
3) ลูกค้าควรจำเราเรื่องอะไร
4) Positioning Statement 1 ประโยค
5) คำที่ควรใช้/ไม่ควรใช้ในการสื่อสาร

ให้ชัดและใช้ต่อได้
```

### 📦 Assets ที่ใช้
- `marketing-business-brain-simulated.md`
- `marketing-brand-tone-baanbrew.md`

### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
คุณคือ Brand Positioning Strategist

จาก Business Brain ของ BaanBrew Drip
สมมติว่า Brand Value ที่ผ่านการเลือกแล้วคือ:
- กาแฟดีที่ไม่ซับซ้อน
- เช้าที่ง่ายขึ้น
- ลองก่อน ตัดสินใจอย่างมั่นใจ

ช่วยกำหนด Positioning โดยตอบ:
1) Market Space ที่ควรยืน
2) Competitive Contrast — ต่างอย่างไรโดยไม่โจมตีคู่แข่ง
3) Memory Structure — ลูกค้าควรจำเราเรื่องอะไร 1 อย่าง
4) Positioning Statement 1 ประโยค
5) 8 คำ/วลีที่ควรใช้
6) 8 คำ/วลีที่ควรหลีกเลี่ยง
7) สิ่งที่ยังต้อง Validate ก่อนประกาศ Positioning จริง
```

---

# M06 — Customer Persona หลัก

## Template
```text
คุณคือ Consumer Psychologist + Market Researcher

จาก Business Brain, Brand Value และ Positioning
ช่วยสร้าง Customer Persona หลัก 1 กลุ่มที่ควรโฟกัส

ระบุ:
1) เขาคือใคร
2) ไลฟ์สไตล์
3) ความต้องการ
4) ความกังวล
5) เหตุผลที่ซื้อ
6) สิ่งที่ทำให้ลังเล
7) ช่องทางที่เจอแบรนด์

ใช้ข้อมูลจริงเท่าที่มี ไม่แต่งลอยๆ
```

### 📦 Assets ที่ใช้
- `marketing-customer-voice-baanbrew.csv`
- `marketing-business-brain-simulated.md`

### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
คุณคือ Consumer Psychologist + Market Researcher

ใช้ marketing-customer-voice-baanbrew.csv
ร่วมกับ marketing-business-brain-simulated.md

สร้าง Persona หลัก 1 กลุ่ม
โดยห้ามสร้าง “ชื่อ อายุ อาชีพ รายได้” แบบเจาะจงถ้าไม่มีข้อมูลรองรับ
สามารถใช้ช่วงหรือคำอธิบายกว้างได้

ระบุ:
1) Context ของคนกลุ่มนี้
2) Lifestyle / Routine ที่เกี่ยวข้องกับกาแฟ
3) Functional Need
4) Emotional Need
5) ความกังวล
6) เหตุผลที่ซื้อ
7) สิ่งที่ทำให้ลังเล
8) ช่องทางที่ควรไป Research ต่อ
9) Evidence จาก Customer Voice
10) ข้อสันนิษฐานที่ยังต้อง Validate พร้อมเหตุผลและสิ่งที่ต้องตรวจเพิ่ม
```

---

# M07 — Customer Persona รอง / Alternative Persona

> Prompt “Customer Persona” ในรายการต้นฉบับซ้ำกัน 2 ครั้ง จึงเก็บแนวคิดเดิมไว้และใช้รอบที่สองเพื่อหา **Persona รอง** แทนการทำซ้ำผลลัพธ์เดิม

## Template
```text
คุณคือ Consumer Psychologist + Market Researcher

จาก Business Brain, Brand Value และ Positioning
ช่วยสร้าง Customer Persona รอง 1 กลุ่ม
ที่มีเหตุผลในการซื้อแตกต่างจาก Persona หลักอย่างมีนัยสำคัญ

ใช้ข้อมูลจริงเท่าที่มี ไม่แต่งลอยๆ

ระบุ:
1) เขาคือใคร
2) ไลฟ์สไตล์
3) ความต้องการ
4) ความกังวล
5) เหตุผลที่ซื้อ
6) สิ่งที่ทำให้ลังเล
7) ช่องทางที่เจอแบรนด์
8) ความต่างจาก Persona หลัก
```

### 📦 Assets ที่ใช้
- `marketing-customer-voice-baanbrew.csv`
- `marketing-product-offer-baanbrew.md`

### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
คุณคือ Consumer Psychologist + Market Researcher

Persona หลักของ BaanBrew คือ “คนทำงานที่ต้องการกาแฟดีแบบสะดวก”
ช่วยค้น Persona รองจาก Customer Voice และ Product Offer

ห้ามสร้าง Persona รองเพียงเพื่อให้มีอีกกลุ่ม
ต้องมี Evidence ว่า Motivation แตกต่างจาก Persona หลัก

ตัวอย่าง Hypothesis ที่ให้ตรวจ:
“ผู้ซื้อของฝาก/ของขวัญขนาดเล็กสำหรับเพื่อนร่วมงาน”

ระบุ:
- Evidence
- Need
- Anxiety
- Purchase Trigger
- Objection
- Channel
- ความต่างจาก Persona หลัก
- ถ้าหลักฐานไม่พอให้ตอบว่า “ยังไม่ควรสร้าง Persona รอง”
```

---

# M08 — Pain Point

## Template
```text
คุณคือ Customer Insight Analyst

จาก Persona ด้านบน ช่วยวิเคราะห์ Pain Point แบบลึก
ไม่ใช่ปัญหาผิวหน้า

แบ่งเป็น:
1) ปัญหาที่ลูกค้าพูดออกมา
2) ความกลัวที่ซ่อนอยู่
3) ความลังเลก่อนซื้อ
4) สิ่งที่เขาอยากได้จริง
5) ประโยคในใจลูกค้า 3 ประโยค

แล้วสรุป Pain ที่แบรนด์ควรใช้สื่อสารมากที่สุด
```

### 📦 Assets ที่ใช้
- `marketing-customer-voice-baanbrew.csv`
- Persona ที่ได้จาก M06/M07

### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
คุณคือ Customer Insight Analyst

จาก Persona หลักของ BaanBrew และ Customer Voice ที่แนบมา
วิเคราะห์ Pain Point โดยแยก “คำพูดจริงใน Mock Data” ออกจาก “การตีความ”

ตอบ:
1) Surface Pain
2) Hidden Anxiety
3) Purchase Friction
4) Desired Outcome
5) Inner Voice 3 ประโยค — ต้อง Paraphrase จาก Insight ห้ามปลอมเป็นคำพูดลูกค้าจริง
6) Pain ที่ควรใช้สื่อสารมากที่สุด
7) Pain ที่ไม่ควรขยายเกินหลักฐาน

สรุปเป็น Insight Statement:
“เมื่อ... ลูกค้ารู้สึก... เพราะ... เขาจึงต้องการ...”
```

---

# M09 — USP

## Template
```text
คุณคือ Brand Strategist + Sales Strategist

จาก Business Brain, Brand Value, Positioning, Persona และ Pain Point
ช่วยหา USP ที่ขายได้จริง

ต้องผ่าน 3 เงื่อนไข:
1) เราทำได้จริง
2) ลูกค้าต้องการจริง
3) คู่แข่งยังสื่อสารไม่ชัด

เสนอ 3 ตัวเลือกพร้อมเหตุผล
แล้วเลือกข้อที่ดีที่สุด 1 ข้อ
```

### 📦 Assets ที่ใช้
- `marketing-product-offer-baanbrew.md`
- `marketing-research-competitor-simulated.md`
- `marketing-customer-voice-baanbrew.csv`

### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
คุณคือ Brand Strategist + Sales Strategist

ช่วยสร้าง USP ให้ BaanBrew Drip
จากข้อมูลสินค้า, Customer Voice และ Competitor Research จำลอง

ทดสอบ USP ทุกตัวเลือกด้วย Scorecard 1–5:
A. Brand can prove it
B. Customer relevance
C. Competitive distinctiveness
D. Easy to understand
E. Can be communicated repeatedly

เสนอ 3 USP
แต่ละตัวเลือกต้องมี:
- USP phrase
- Evidence
- Risk / claim ที่ต้องพิสูจน์เพิ่ม
- ตัวอย่างข้อความ 1 ประโยค

จากนั้นเลือก 1 ข้อที่ดีที่สุด
หากเงื่อนไข “คู่แข่งยังสื่อสารไม่ชัด” ยังไม่มี Research จริง
ให้ระบุชัดเจนว่า “ต้อง Validate Competitor” พร้อมบอกข้อมูลที่ยังขาด
```

---

# M10 — 10 Topic Content

## Template
```text
คุณคือ Content Strategist

จาก USP, Persona และ Pain Point
ช่วยคิด 10 หัวข้อคอนเทนต์สำหรับ Social Media
ที่ไม่ใช่หัวข้อทั่วไป แต่ดึง insight จริงของลูกค้าออกมา

แต่ละหัวข้อมี:
1) ชื่อหัวข้อ
2) มุมเล่าเรื่อง
3) เหตุผลที่ลูกค้าสนใจ
4) เป้าหมายโพสต์ เช่น รู้จัก เชื่อใจ หรืออยากซื้อ
```

### 📦 Assets ที่ใช้
- `marketing-brand-tone-baanbrew.md`
- `marketing-customer-voice-baanbrew.csv`
- USP ที่ผ่าน M09

### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
คุณคือ Content Strategist

บริบท BaanBrew:
Persona = คนทำงานที่อยากดื่มกาแฟดีแต่ไม่อยากมีขั้นตอนเยอะ
Pain = เช้าเร่งรีบ + กลัวซื้อกาแฟออนไลน์แล้วรสไม่ถูกใจ
USP สำหรับ Workshop = “กาแฟดีที่เริ่มง่ายจากชุดทดลอง”

คิด 10 Content Topics
ห้ามใช้หัวข้อทั่วไปแบบ:
- 5 ประโยชน์ของกาแฟ
- รู้หรือไม่
- โปรโมชั่นประจำเดือน

แต่ละหัวข้อให้มี:
1) Topic
2) Customer tension/insight
3) Angle
4) Format: Photo / Carousel / Short Video / Text
5) Funnel goal: Awareness / Trust / Consideration / Conversion
6) CTA ที่ไม่ Hard Sell
```

---

# M11 — Sale Content สำหรับ Facebook

## Template
```text
คุณคือ Sales Copywriter + Storyteller

จาก 10 หัวข้อด้านบน
เลือก 1 หัวข้อที่เหมาะที่สุด

แล้วเขียน Sale Content สำหรับ Facebook ให้จบในตัว
ใช้ภาษาไทยอ่านง่าย เหมือนแบรนด์เข้าใจลูกค้า ไม่ยัดเยียดขาย

ต้องโยง:
- Persona
- Pain Point
- Brand Value
- USP

มี:
- Hook เปิดเรื่อง
- เนื้อหาโน้มน้าว
- CTA ชัดเจน
```

### 📦 Assets ที่ใช้
- `marketing-brand-tone-baanbrew.md`
- `marketing-product-offer-baanbrew.md`
- `marketing-content-draft-baanbrew.md`

### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
คุณคือ Sales Copywriter + Storyteller

หัวข้อที่เลือก:
“กาแฟดีไม่ควรทำให้เช้าคุณยุ่งกว่าเดิม”

Brand:
BaanBrew Drip — Mock Brand

Persona:
คนทำงานที่มีเวลาเตรียมตัวช่วงเช้าน้อย

Pain:
อยากได้รสชาติดีกว่ากาแฟสำเร็จรูป
แต่ไม่อยากมีเครื่องและขั้นตอนเยอะ

Brand Value:
ง่าย / ดื่มได้ทุกวัน / ไม่ทำให้ Specialty Coffee ดูเข้าถึงยาก

USP สำหรับ Workshop:
กาแฟดีที่เริ่มง่ายจากชุดทดลอง

Offer:
Trial 3 ซอง 99 บาท — เป็น Mock Offer สำหรับ Workshop

เขียน Facebook Sale Content:
- Hook ไม่เกิน 2 บรรทัด
- Body อ่านบนมือถือได้
- ไม่กล่าวอ้างเกินข้อมูล
- ไม่เร่ง FOMO
- CTA = “ลองเริ่มจากชุดทดลอง”
```

---

# M12 — เกลา Content พร้อมโพสต์

## Template
```text
คุณคือ Storytelling Editor + Sales Copywriter

ช่วยเกลาคอนเทนต์นี้ให้เป็นภาษาไทยที่ลื่น เป็นมนุษย์
และขายแบบไม่ยัดเยียด

อ่านแล้วรู้สึกว่าแบรนด์เข้าใจลูกค้า
ไม่ใช่กำลังสอนหรือขายใส่เขา

รักษา:
- USP
- Pain Point
- Brand Tone
- CTA

ปรับ:
- Hook ให้คม
- เรื่องเล่าให้ไหล
- จบให้ชวนตัดสินใจ
```

### 📦 Assets ที่ใช้
- `marketing-content-draft-baanbrew.md`
- `marketing-brand-tone-baanbrew.md`

### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
คุณคือ Storytelling Editor + Sales Copywriter

ช่วยเกลา marketing-content-draft-baanbrew.md
โดยยึด marketing-brand-tone-baanbrew.md เป็น Tone Guide

เป้าหมาย:
- อ่านแล้วเป็นมนุษย์
- ไม่ฟังเหมือนบทเรียน
- ไม่ใช้ศัพท์กาแฟยากเกินไป
- ไม่ Hard Sell
- คง Mock Offer 3 ซอง 99 บาท
- CTA ชัด แต่ไม่กดดัน

ส่ง 3 ส่วน:
1) ฉบับพร้อมโพสต์
2) Hook ทางเลือก 3 แบบ
3) เหตุผลสั้นๆ ว่าปรับอะไร โดยไม่อธิบายยาว
```

---

# M13 — KV Advertorial

## Template
```text
คุณคือ Creative Director + Art Director + Brand Strategist

จากข้อมูลทั้งหมดในแชทนี้และคอนเทนต์ล่าสุด
ช่วยสร้างภาพ KV Advertorial สำหรับโพสต์ Facebook 4:5 ทันที

ไม่ต้องถามกลับ
ไม่ต้องอธิบาย
และไม่ต้องส่ง prompt

ใช้ Key Message ไทยสั้นมาก 3-5 คำให้สะดุดตา
ภาพต้องเข้าใจใน 3 วินาที
สื่อ USP, Pain Point และอารมณ์แบรนด์
ดูน่าเชื่อถือ ดึงดูด พร้อมโพสต์
```

### 📦 Assets ที่ใช้
- `marketing-product-mock-baanbrew.png`
- `marketing-kv-brief.md`
- `marketing-brand-tone-baanbrew.md`

### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
คุณคือ Creative Director + Art Director + Brand Strategist

ใช้ภาพ marketing-product-mock-baanbrew.png เป็น Mock Product Reference
และใช้ marketing-kv-brief.md + marketing-brand-tone-baanbrew.md

สร้าง KV Advertorial 4:5 สำหรับ Facebook

Key Message:
“กาแฟดี ไม่ต้องยุ่ง”

Scene:
โต๊ะทำงานตอนเช้า แสงอบอุ่น
เห็น Drip Bag กำลังชงบนแก้ว
Laptop และสมุดเป็นองค์ประกอบรอง
Product เด่นที่สุด

Mood:
Warm, calm productivity, trustworthy, premium but approachable

Rules:
- เข้าใจภาพใน 3 วินาที
- ไม่มีราคาในภาพ
- ไม่มี claim ที่พิสูจน์ไม่ได้
- Key Message ภาษาไทย 3–5 คำเท่านั้น
- หากระบบสร้างภาษาไทยในภาพไม่แม่น ให้สร้างพื้นที่ว่างสำหรับวางข้อความภายหลัง
- ห้ามสร้างโลโก้ใหม่หรือเปลี่ยนรูปร่างผลิตภัณฑ์จาก Reference
```

> สำหรับระบบที่รองรับ Image Generation โดยตรง ให้แนบ `marketing-product-mock-baanbrew.png` ไปพร้อม Prompt

---

# M14 — Brand Jingle for Suno

## Template
```text
คุณคือ Brand Jingle Producer + นักแต่งเพลงโฆษณาไทย

จากข้อมูลแบรนด์ทั้งหมดในแชทนี้
ช่วยสร้างจิงเกิ้ลภาษาไทยสำหรับ Suno
ยาวประมาณ 1 นาที

เน้นท่อนฮุกติดหู
ใช้เป็นเสียงเปิดแบรนด์ได้
สะท้อน Brand Value, USP และอารมณ์แบรนด์

ขอเฉพาะ:
- เนื้อร้อง
- Style Prompt สั้นๆ

ไม่เอา emoji
และไม่ต้องมี intro ยาว
```

### 📦 Assets ที่ใช้
- `marketing-jingle-brief.md`
- `marketing-brand-tone-baanbrew.md`
- USP จาก M09

### ✅ ตัวอย่าง Prompt พร้อมใช้
```text
คุณคือ Brand Jingle Producer + นักแต่งเพลงโฆษณาไทย

แบรนด์ Mock: BaanBrew Drip

Brand Value:
- กาแฟดีที่ไม่ซับซ้อน
- เช้าที่ง่ายขึ้น
- เป็นมิตรกับคนที่ไม่ใช่ Coffee Expert

USP สำหรับ Workshop:
“กาแฟดี ไม่ต้องยุ่ง”

สร้างจิงเกิ้ลภาษาไทยสำหรับ Suno ความยาวประมาณ 1 นาที

ต้องการ:
- Hook จำง่ายและร้องซ้ำได้
- ไม่ใช้คำโฆษณาเกินจริง เช่น ดีที่สุด อันดับหนึ่ง
- Mood เช้า อบอุ่น สดใส
- Brand name ไม่ต้องถูกพูดทุกบรรทัด
- ใช้ Phrase “กาแฟดี ไม่ต้องยุ่ง” เป็น Hook ได้

ส่งเฉพาะ:
1. Lyrics แบ่ง Verse / Hook / Outro
2. Style Prompt ภาษาอังกฤษไม่เกิน 250 ตัวอักษร

ไม่มี emoji และไม่มีคำอธิบายอื่น
```

---


---

## 🎵 ต่อจาก Brand Jingle → ทำเพลงเต็มและ MV

หากต้องการพัฒนา Jingle ให้เป็นเพลงเต็ม หรือสร้าง Music Video จากเพลงที่สร้างใน Suno
ให้เปิด **Music & MV Production Pack** ซึ่งมี Workflow:

`Reference Analysis → Original Song → Suno → Export Audio → Google Flow Music → MV → QA`


# ✅ Final Brand Workflow Check

หลังทำ M00–M14 ให้ใช้ Prompt นี้ตรวจความสอดคล้อง:

```text
คุณคือ Brand Consistency Auditor

ตรวจผลลัพธ์ทั้งหมดตั้งแต่:
Research Demand → Competitor → Business Brain → Brand Value → Positioning
→ Persona → Pain Point → USP → Content → KV → Jingle

ทำตาราง:
องค์ประกอบ / สอดคล้องหรือไม่ / หลักฐาน / สิ่งที่ขัดกัน / สิ่งที่ต้อง Validate

ตรวจเป็นพิเศษ:
1. USP สอดคล้องกับ Evidence หรือไม่
2. Content ขยาย Claim เกิน Research หรือไม่
3. Persona ถูกแต่งลอยๆ หรือไม่
4. KV สื่อ Brand Value เดียวกับ Copy หรือไม่
5. Jingle สื่อ Positioning เดียวกันหรือไม่

ห้ามแก้ข้อมูลให้เองก่อนรายงานความขัดแย้ง
```


---

## 🌐 ต่อจาก Brand Strategy → Landing Page

หากต้องการแปลง Business Brain, Positioning, Persona, USP และ Brand Tone
ให้เป็นเว็บไซต์พร้อม Preview ให้เปิด **Web & Landing Page Production — Claude Artifacts**

Workflow:
`Marketing Strategy → Landing Page Structure → Claude Artifact → Responsive QA → GitHub Pages`
