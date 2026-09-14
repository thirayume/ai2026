# 🌐 Web & Landing Page Production — Claude Artifacts

> Prompt Pack สำหรับสร้าง Landing Page / Single-page Website ด้วย AI  
> ตัวอย่างหลัก: **Aroma Specialty Coffee**  
> Workflow: `Brand Brief → Master Prompt → Artifact Preview → Responsive QA → GitHub Pages`

## 📦 Assets พร้อมใช้

- [`aroma-brand-brief.md`](assets/examples/landing-page/aroma-brand-brief.md)
- [`aroma-brand-style.md`](assets/examples/landing-page/aroma-brand-style.md)
- [`aroma-product-offer.md`](assets/examples/landing-page/aroma-product-offer.md)
- [`aroma-testimonials-mock.md`](assets/examples/landing-page/aroma-testimonials-mock.md)
- [`aroma-coffee-hero.svg`](assets/examples/landing-page/aroma-coffee-hero.svg)

![Aroma Coffee Hero Mock](assets/examples/landing-page/aroma-coffee-hero.svg)

> ข้อมูล Aroma และ Testimonials ในชุดนี้เป็น **Mock Data สำหรับ Workshop**  
> หากนำไปใช้จริง ต้องแทนที่รีวิวจำลองด้วยรีวิวจริงที่ได้รับอนุญาตก่อน Publish

---

# WEB01 — Master Prompt สำหรับ Claude

## เวอร์ชันต้นฉบับตาม Brief

```text
สวมบทบาทเป็น Senior Front-End Developer และ UI/UX Designer ระดับโลก

ฉันต้องการสร้างหน้า Landing Page (Single-page)
สำหรับโปรโมทแบรนด์ “Aroma Specialty Coffee”
(เมล็ดกาแฟคั่วพิเศษเพื่อคนทำงาน)

กรุณาเขียนโค้ดด้วย HTML และ Tailwind CSS (ผ่าน CDN)
รวบรวมอยู่ในไฟล์เดียวให้เสร็จสมบูรณ์

ใช้สีแบรนด์:
- Warm Cream #FDFBF7
- Deep Espresso #2C1E1B

โครงสร้างหน้าเว็บ:
1. Header
   - โลโก้แบรนด์
   - Home
   - Features
   - Testimonials
   - ปุ่ม “สั่งซื้อเลย”

2. Hero Section
   - Headline
   - Subtitle
   - CTA “สั่งซื้อ”
   - CTA “เรียนรู้เพิ่มเติม”

3. Features Grid
   - เมล็ดคัดมือ
   - คั่วสดใหม่
   - คาร์บอนต่ำ
   - Card ทันสมัย
   - Hover Effect

4. Testimonials
   - รีวิว 2 รายการ
   - จัดวางให้อ่านง่ายและน่าเชื่อถือ

5. Footer
   - ช่องทางติดต่อ
   - Copyright

Style:
- Minimalist
- Premium
- Clean
- Font Inter
- Responsive Desktop / Tablet / Mobile
- Mobile menu เปิด/ปิดด้วย JavaScript

สร้างผลลัพธ์ในรูปแบบ Artifact / Preview
หากสภาพแวดล้อมรองรับ
```

---

# WEB02 — Production Master Prompt พร้อมใช้

### ✅ ตัวอย่าง Prompt พร้อมใช้

```text
คุณคือ Senior Front-End Developer + UI/UX Designer
ที่เชี่ยวชาญ Responsive Landing Page, Conversion UX และ Accessibility

PROJECT:
สร้างหน้า Landing Page แบบ Single-page
สำหรับ Mock Brand “Aroma Specialty Coffee”

SOURCE OF TRUTH:
ใช้ข้อมูลจากไฟล์ที่แนบ:
1. aroma-brand-brief.md
2. aroma-brand-style.md
3. aroma-product-offer.md
4. aroma-testimonials-mock.md
5. aroma-coffee-hero.svg

TECHNOLOGY:
- HTML5
- Tailwind CSS ผ่าน CDN
- Vanilla JavaScript
- รวมทุกอย่างใน index.html ไฟล์เดียว
- ไม่ใช้ Build Step
- พร้อม Deploy บน GitHub Pages

BRAND:
- Warm Cream #FDFBF7
- Deep Espresso #2C1E1B
- Secondary Brown #7B5E57
- Highlight #C8956D
- Font: Inter ผ่าน Google Fonts พร้อม system fallback

PAGE STRUCTURE:

1) HEADER
- Wordmark “Aroma Specialty Coffee”
- Navigation: Home / Features / Testimonials
- CTA: “สั่งซื้อเลย”
- Sticky header
- Smooth scroll
- Mobile hamburger menu
- ปิด mobile menu เมื่อเลือกเมนูแล้ว
- aria-expanded และ keyboard accessible

2) HERO
- Premium headline สำหรับคนทำงาน
- Subtitle ไม่เกิน 2–3 บรรทัด
- Primary CTA: “สั่งซื้อเลย”
- Secondary CTA: “เรียนรู้เพิ่มเติม”
- ใช้ aroma-coffee-hero.svg เป็น Hero Visual
- ห้ามสร้าง Claim ที่ไม่มีใน Brand Brief

3) FEATURES
สร้าง 3 Cards:
- เมล็ดคัดมือ
- คั่วสดใหม่
- แนวทางลดผลกระทบคาร์บอน

แต่ละ Card:
- Icon แบบ inline SVG หรือ CSS
- Heading
- Description
- Subtle hover / focus effect
- ไม่มี Animation ที่รบกวนการอ่าน

4) PRODUCT / OFFER
แสดง Aroma Workday Blend 250g
ราคา Mock 390 บาท
Flavor: Chocolate / Caramel / Roasted Almond
Roast: Medium
แสดง Badge “Mock Workshop Data” เล็ก ๆ
เพื่อป้องกันการเข้าใจผิดว่าเป็นสินค้าจริง

5) TESTIMONIALS
ใช้ข้อมูลจาก aroma-testimonials-mock.md

สำคัญ:
Testimonials ชุดนี้เป็น Mock Data
ต้องแสดงคำว่า “ตัวอย่างรีวิวสำหรับ Prototype”
ห้ามเขียนว่าเป็น “ลูกค้าจริง”
ห้ามสร้างชื่อ บริษัท อาชีพ หรือคะแนนรีวิวเพิ่มเอง

6) FOOTER
- Email ตัวอย่าง: hello@example.com
- Social placeholders
- Copyright
- ข้อความ “Workshop Prototype — Mock Brand”

UI/UX:
- Minimalist premium
- Generous whitespace
- Clear hierarchy
- WCAG-friendly contrast
- Touch target อย่างน้อยประมาณ 44px
- Visible keyboard focus
- Responsive:
  * Mobile 360px+
  * Tablet
  * Desktop 1440px+
- ไม่มี horizontal overflow
- Hero ต้องอ่านง่ายบนมือถือ
- Navigation ใช้มือเดียวได้สะดวก

PERFORMANCE:
- ไม่มี framework JS
- ไม่มี external image dependency นอกจาก Asset ที่ให้
- ใช้ Tailwind CDN และ Google Font เท่าที่จำเป็น
- Lazy-load ภาพที่ไม่ใช่ Hero ถ้ามี
- JS ขนาดเล็กสำหรับ menu และ interaction เท่านั้น

OUTPUT:
1. สร้าง index.html ฉบับสมบูรณ์
2. ใส่ comment แบ่ง SECTION สำคัญ
3. ตรวจ HTML semantics
4. ตรวจ Desktop / Tablet / Mobile
5. สรุป Test Checklist หลังโค้ด

PREVIEW:
หากระบบรองรับ Claude Artifacts หรือ Live Preview
ให้สร้างเป็น Artifact ที่ Preview ได้ทันที
ถ้าไม่รองรับ ให้ส่ง index.html ที่ Copy ไปเปิดใน Browser ได้ทันที
```

---

# WEB03 — Prompt ปรับจาก Brand Strategy → Landing Page

### ✅ Prompt พร้อมใช้

```text
คุณคือ Brand Strategist + Conversion UX Designer + Front-End Developer

ฉันมีผลลัพธ์จาก Marketing Workflow แล้ว:
- Business Brain
- Brand Value
- Positioning
- Persona
- Pain Point
- USP
- Brand Tone
- Product Offer

ก่อนเขียนโค้ด:
1. สกัด Message Hierarchy
2. กำหนด Hero Promise
3. เลือก Proof / Benefit
4. กำหนด CTA
5. ระบุสิ่งที่ไม่ควร Claim

จากนั้นแปลงเป็น Landing Page Structure:
Header → Hero → Problem → Benefits → Product/Offer → Proof → FAQ → CTA → Footer

ทุก Section ให้ระบุ:
- Goal
- Message
- Supporting evidence
- CTA
- UI component

หลังฉันอนุมัติโครงสร้างแล้ว
จึงสร้าง HTML + Tailwind CSS + Vanilla JS แบบ Single-file
Responsive และ Deploy บน GitHub Pages ได้
```

---

# WEB04 — Responsive QA Prompt

### ✅ Prompt พร้อมใช้

```text
คุณคือ Senior Front-End QA + Accessibility Tester

ตรวจ Landing Page Aroma Specialty Coffee ที่สร้างแล้ว

ทดสอบอย่างน้อย:
- 360×800 Mobile
- 390×844 Mobile
- 768×1024 Tablet
- 1024×768 Tablet landscape
- 1366×768 Laptop
- 1440×900 Desktop

ตรวจ:
1. Horizontal overflow
2. Header / mobile menu
3. Hero readability
4. CTA size
5. Card wrapping
6. Image aspect ratio
7. Typography
8. Contrast
9. Keyboard navigation
10. Focus state
11. Smooth scrolling
12. Reduced motion
13. Link/button semantics
14. Testimonials disclaimer
15. Footer layout

จัด Bug:
P0 — ใช้งานไม่ได้
P1 — กระทบ Conversion/Accessibility
P2 — Visual polish

ส่ง:
- Issue
- Viewport
- Root cause
- Exact fix
- Code snippet
```

---

# WEB05 — Prompt แก้เว็บเดิมโดยไม่ทำใหม่ทั้งหมด

### ✅ Prompt พร้อมใช้

```text
คุณคือ Senior Front-End Refactoring Engineer

ฉันจะให้ index.html เดิมของ Aroma Specialty Coffee

เป้าหมาย:
ปรับเว็บเดิม ไม่สร้างใหม่จากศูนย์

ลำดับ:
1. วิเคราะห์โครงสร้างเดิม
2. ระบุสิ่งที่ควรเก็บไว้
3. ระบุ Bug / UX issue / Responsive issue
4. แก้เฉพาะส่วนที่จำเป็น
5. รักษา Brand Colors และ Content ที่ถูกต้อง
6. ห้ามลบ Section โดยไม่มีเหตุผล

หลังแก้:
- แสดงรายการส่วนที่เปลี่ยน
- ทดสอบ Mobile / Tablet / Desktop
- ตรวจ menu
- ตรวจ CTA
- ตรวจ keyboard
- ตรวจ horizontal overflow
- ตรวจว่าข้อมูล Mock ยังติด Label ชัดเจน

ส่ง index.html ฉบับเต็มหลังแก้
```

---

# WEB06 — Production Publish Checklist

```text
คุณคือ Web Release Manager

ตรวจ Landing Page ก่อน Publish จริง

CONTENT:
- Brand name ถูกต้อง
- Product / price ถูกต้อง
- Claim มีหลักฐาน
- รีวิวได้รับอนุญาต
- Mock data ถูกแทนแล้ว

TECH:
- Responsive
- HTTPS
- Links
- Mobile menu
- Images
- Favicon
- Metadata
- Open Graph
- Accessibility
- Performance
- No console error

PRIVACY:
- Form / analytics / cookies ถูกเปิดเผยอย่างเหมาะสม
- ไม่มี API key ใน Front-End
- ไม่มีข้อมูลส่วนบุคคลที่ไม่จำเป็น

DEPLOY:
- GitHub Pages path เป็น relative
- 404 asset = 0
- Service Worker version ถูกต้อง (ถ้าใช้)
- Hard refresh แล้วแสดง version ล่าสุด

สรุป:
READY TO PUBLISH / FIX BEFORE PUBLISH
```

---

## Recommended Workshop Workflow

`Marketing Pack → Brand Brain → WEB02 → Claude Artifact/Preview → WEB04 QA → Export index.html → GitHub Pages`

สำหรับผู้เรียน:
1. เปิด Assets
2. Copy WEB02
3. แนบ Assets ใน Claude
4. Generate Artifact
5. Preview มือถือ/เดสก์ท็อป
6. ใช้ WEB04 ตรวจ
7. Export / Copy index.html
8. Deploy GitHub Pages
