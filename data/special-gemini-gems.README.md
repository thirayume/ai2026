# Special Gemini Gems — Data Source

หน้า **Special Gemini Gems** อ่านรายการจากไฟล์:

`data/special-gemini-gems.json`

## เพิ่ม Gem ใหม่

เพิ่ม object ใหม่ใน `items`:

```json
{
  "id": "my-new-gem",
  "title": "ชื่อ Gem",
  "description": "คำอธิบายสั้น ๆ",
  "category": "Storyboard",
  "icon": "fa-wand-magic-sparkles",
  "url": "https://gemini.google.com/gem/...",
  "order": 30,
  "enabled": true
}
```

### Fields

- `id` — ค่าไม่ซ้ำกัน
- `title` — ชื่อที่แสดงบนหน้าเว็บ
- `description` — คำอธิบาย
- `category` — ป้ายหมวด
- `icon` — Font Awesome icon เช่น `fa-heart-pulse`
- `url` — External URL (http/https)
- `order` — ตัวเลขสำหรับเรียงลำดับ
- `enabled` — `true` แสดง, `false` ซ่อน

ไม่จำเป็นต้องแก้ `index.html` หรือ `app.js` เมื่อเพิ่มรายการใหม่
เพียงแก้ JSON แล้ว Push ขึ้น GitHub Pages
