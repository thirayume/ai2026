# 🎵 Music & MV Production — Suno + Google Flow

> Production Workflow สำหรับสร้าง **เพลงต้นฉบับจาก Reference Mood → Suno → Music Video ใน Google Flow**  
> Reference ใน Workshop: `https://www.youtube.com/watch?v=xpgKD7RDPfU`

## สำคัญก่อนเริ่ม

เราจะใช้เพลงอ้างอิงเพื่อศึกษา **คุณลักษณะระดับสูง** เช่น จังหวะ พลังงาน เครื่องดนตรี โครงสร้าง และ Mood เท่านั้น  
เพลงใหม่ต้องมี **เนื้อร้อง ทำนอง Hook และการเรียบเรียงที่เป็นต้นฉบับ** ไม่สร้างสำเนาของเพลงอ้างอิง

หากเครื่องมือวิเคราะห์ไม่สามารถเปิดเสียงจาก YouTube URL ได้ ให้ตอบว่าเข้าถึงไม่ได้และ **ห้ามเดา BPM / Key / Genre / Instrument**

---

# Workflow

`Reference DNA → Song Brief → Original Lyrics → Suno Style → Generate → Select/Edit → Export → Flow Music → MV → QA`

### 📦 Assets พร้อมใช้

- [`reference-track.md`](assets/examples/music-mv/reference-track.md)
- [`music-reference-dna-template.md`](assets/examples/music-mv/music-reference-dna-template.md)
- [`ai-workshop-song-brief.md`](assets/examples/music-mv/ai-workshop-song-brief.md)
- [`ai-workshop-original-lyrics.md`](assets/examples/music-mv/ai-workshop-original-lyrics.md)
- [`suno-style-original-demo.md`](assets/examples/music-mv/suno-style-original-demo.md)
- [`flow-character-bible.md`](assets/examples/music-mv/flow-character-bible.md)
- [`flow-mv-storyboard.csv`](assets/examples/music-mv/flow-mv-storyboard.csv)
- [`flow-master-mv-prompt.md`](assets/examples/music-mv/flow-master-mv-prompt.md)
- [`mv-qa-checklist.md`](assets/examples/music-mv/mv-qa-checklist.md)

---

# MV01 — วิเคราะห์ Reference Song โดยไม่ลอกเพลง

### ✅ Prompt พร้อมใช้

```text
คุณคือ Music Producer + Music Arrangement Analyst

วิเคราะห์เพลงอ้างอิงจาก YouTube URL นี้:
https://www.youtube.com/watch?v=xpgKD7RDPfU

เป้าหมาย:
ฉันต้องการสร้างเพลงใหม่ที่ให้อารมณ์และพลังงานในทิศทางใกล้เคียง
แต่ต้องเป็นเพลงต้นฉบับ ไม่คัดลอกงานเดิม

วิเคราะห์เฉพาะคุณลักษณะระดับสูง:
1. Genre family
2. Subgenre / production era
3. Tempo band โดยประมาณ
4. Meter / rhythmic feel
5. Energy curve
6. Main instrumentation
7. Drum character
8. Bass character
9. Harmonic density
10. Vocal format เช่น solo / group / call-response
11. Vocal texture โดยห้ามเลียนแบบตัวตนนักร้อง
12. Song structure
13. หลักการสร้าง Hook
14. Mix / ambience / stereo space
15. Emotional arc

จากนั้นสร้าง:
A) Style DNA 8–12 คำสำหรับใช้กับ Suno
B) Arrangement Blueprint แบบเป็นส่วน Intro / Verse / Pre / Chorus / Bridge / Outro
C) สิ่งที่ต้องหลีกเลี่ยงเพื่อไม่ให้เพลงใหม่ใกล้ต้นฉบับเกินไป

ห้าม:
- คัดลอกเนื้อร้อง
- ถอดหรือสร้างทำนองเดิม
- สร้าง Hook ที่เหมือนเดิม
- เลียนเสียงนักร้องเฉพาะบุคคล
- คัดลอก chord progression/arrangement ที่โดดเด่นแบบแทบเหมือน

ถ้าคุณไม่สามารถเข้าถึงเสียงของ URL ได้ ให้ตอบเพียงว่า
“ไม่สามารถตรวจฟัง Reference Audio จาก URL นี้ได้”
และไม่ต้องเดารายละเอียดทางดนตรี
```

---

# MV02 — สร้าง Song Brief ต้นฉบับ

### 📦 Asset
`assets/examples/music-mv/ai-workshop-song-brief.md`

### ✅ Prompt พร้อมใช้

```text
คุณคือ Executive Music Producer

ใช้ไฟล์ ai-workshop-song-brief.md เป็น Source of Truth
และใช้ผล Style DNA จากขั้น MV01 เฉพาะคุณลักษณะระดับสูง

ออกแบบ Production Brief สำหรับเพลงต้นฉบับชื่อ
“คิดเป็น สร้างเป็น”

ต้องระบุ:
1. Core emotion
2. Tempo target/range
3. Vocal format
4. Instrument palette
5. Energy curve
6. Song structure
7. Chorus design principle
8. Target length 1:20–1:50
9. จุดที่ MV ควรเปลี่ยนพลังงาน
10. รายการสิ่งที่ห้ามเลียนจาก Reference

หาก Style DNA ขัดกับ Message ของ Workshop
ให้รักษา Message ของ Workshop เป็นลำดับแรก
```

---

# MV03 — เนื้อร้องต้นฉบับสำหรับ Suno

### 📦 Asset
`assets/examples/music-mv/ai-workshop-original-lyrics.md`

### ✅ Prompt พร้อมใช้

```text
คุณคือ Thai Pop Songwriter + Brand Song Editor

ตรวจและเกลาเนื้อร้องในไฟล์ ai-workshop-original-lyrics.md

เป้าหมาย:
- เป็นเพลงต้นฉบับ
- ร้องง่าย
- ภาษาไทยเป็นธรรมชาติ
- Hook “คิดเป็น สร้างเป็น” จำได้หลังฟังครั้งแรก
- สื่อว่ามนุษย์ยังเป็นผู้ตรวจและตัดสินใจ
- ความยาวรวมเหมาะกับเพลงประมาณ 1:20–1:50

รักษา Message:
คิดเป็น → สั่ง AI เป็น → ตรวจเป็น → สร้างเป็น → สอนต่อเป็น

ห้ามนำคำ เนื้อร้อง หรือวลีเด่นจากเพลง Reference มาใช้

ส่ง:
1. Lyrics ฉบับ Final แบ่ง Section
2. Alternate Hook 2 แบบ
3. จุดที่ควรร้องแบบ Group Vocal
```

---

# MV04 — Suno Custom Mode: สร้างเพลง

### 📦 Assets
- `ai-workshop-original-lyrics.md`
- `suno-style-original-demo.md`
- Style DNA จาก MV01 ถ้ามี

### ✅ Prompt / วิธีใช้พร้อมทำ

```text
SUNO CUSTOM MODE

TITLE:
คิดเป็น สร้างเป็น

LYRICS:
ใช้เนื้อร้องจากไฟล์ ai-workshop-original-lyrics.md

STYLE OF MUSIC:
ใช้ Style DNA ที่ได้จาก MV01 แล้วเขียนใหม่เป็นคำบรรยายด้าน Production
โดยเก็บเฉพาะ genre family, energy, instrumentation, vocal format,
rhythmic feel, arrangement shape และ mix character

ถ้ายังไม่มีผลวิเคราะห์ Reference ให้ใช้ Style นี้แทน:

Modern Thai motivational electro-pop, around 112 BPM, uplifting and youthful,
bright plucky synths, warm piano accents, punchy clean kick and snare,
rounded bass, subtle future-pop textures, cinematic risers,
confident mixed-gender lead and group vocals, clear Thai diction,
catchy call-and-response chorus, polished radio mix,
short intro, verse-pre-chorus-anthemic chorus structure,
energetic but friendly, no rap, no aggressive trap hats,
no imitation of an existing melody or singer.

GENERATION GOAL:
สร้าง 2–4 เวอร์ชัน แล้วเลือกจาก:
1. Hook จำง่าย
2. ภาษาไทยชัด
3. Chorus ยกพลังขึ้นชัดเจน
4. Instrument ไม่กลบเสียงร้อง
5. Ending ใช้ตัดจบ MV ได้สะอาด
```

### Production Note

ใน Suno รุ่นปัจจุบันสามารถใช้ **Custom Mode** ใส่ Lyrics + Style ได้ และควรใช้โมเดลหลักรุ่นใหม่สำหรับ Final Generation ส่วนรุ่นเร็วเหมาะกับการ Iterate

---

# MV05 — Suno Revision / Producer Pass

### ✅ Prompt พร้อมใช้

```text
ช่วยทำ Producer Revision ของเพลง “คิดเป็น สร้างเป็น”

สิ่งที่ต้องปรับ:
- Intro ไม่เกิน 4–8 bars
- Verse ต้องเข้าคำเร็ว
- Pre-Chorus ยก tension ขึ้นชัด
- Chorus ต้องรู้สึกใหญ่กว่า Verse
- ทำ Group Vocal ชัดในคำ “คิดเป็น สร้างเป็น”
- Bridge ลด density ชั่วคราวเพื่อให้ข้อความ “ก่อนจะเชื่อ ลองถามอีกครั้ง” เด่น
- Final Chorus ใหญ่ขึ้น แต่ไม่เพิ่มเสียงจนรก
- Outro จบสะอาดสำหรับ Music Video

รักษาเนื้อร้องและทำนองใหม่ของเพลงนี้
ห้ามดึง Melody หรือ Hook จาก Reference มาใส่
```

---

# MV06 — Export เพลงจาก Suno → เตรียมเข้า Google Flow

### Checklist

1. เลือก Version Final
2. ตรวจ Lyrics / คำออกเสียง
3. Export Audio คุณภาพสูงที่สุดที่บัญชีรองรับ
4. ตั้งชื่อไฟล์ เช่น `ai-workshop-kid-pen-sang-pen-final.wav`
5. เก็บ Lyrics Final และ Style Prompt ไว้ใน Project
6. ใช้เฉพาะ Track ที่คุณมีสิทธิ์นำไปทำ MV

> ไม่ควรดาวน์โหลดเพลง Reference จาก YouTube แล้วอัปโหลดเข้า Suno เพื่อทำสำเนา  
> Workflow นี้ใช้ Reference เพื่อวิเคราะห์ Mood/Production เท่านั้น

---

# MV07 — ทำ MV โดยตรงด้วย Google Flow Music

Google Flow Music สามารถใช้ **ไฟล์เพลงของคุณเป็น Audio Reference สำหรับ Music Video** ได้

### 📦 Assets
- Final audio จาก Suno
- `flow-character-bible.md`
- `flow-master-mv-prompt.md`
- `flow-mv-storyboard.csv`

### ✅ Master Prompt พร้อมใช้

```text
ใช้ไฟล์เพลงต้นฉบับ “คิดเป็น สร้างเป็น” ที่ฉันอัปโหลดเป็น Master Audio

สร้าง Music Video แบบ Cinematic Educational Film
เกี่ยวกับครูและนักเรียนแกนนำในประเทศไทย
ที่เรียนรู้ AI ผ่านการ Prompt, Fact Check, Storyboard, Web Game, AR และ Teach Back

Narrative:
1. เริ่มจากความสงสัยและคำถาม
2. ทดลอง Prompt
3. ตรวจคำตอบ AI แทนการเชื่อทันที
4. เปลี่ยนไอเดียเป็น Storyboard
5. สร้างและทดลอง Web Game
6. ทดลอง AR
7. Debug และช่วยกันแก้
8. นำเสนอผลงาน
9. สอนต่อให้เพื่อน
10. จบด้วยภาพ 6 Mission ของ Workshop เชื่อมต่อกัน

Visual:
- realistic modern Thai classroom
- premium cinematic commercial quality
- navy / white / cyan / soft green
- warm skin tone
- energetic during chorus
- calm reflective shots during bridge
- natural facial expressions
- smooth camera movement
- consistent characters and wardrobe

Continuity:
ใช้ flow-character-bible.md เป็นข้อกำหนดตัวละคร
รักษาใบหน้า ผม เสื้อผ้า อายุ สัดส่วน และห้องเรียนให้ต่อเนื่อง

Editing:
ตัดภาพตาม Section และ Energy ของ Master Audio
ไม่จำเป็นต้องตัดทุก Beat
ใช้ Montage เร็วขึ้นใน Chorus
ใช้ Close-up ช้าลงใน Bridge

Text:
หลีกเลี่ยง Generated Thai Text ที่อ่านไม่ได้
เว้นพื้นที่สะอาดสำหรับใส่ Title/Subtitles ในขั้น Final Edit

Originality:
ห้ามคัดลอก Shot, Choreography, Character, Storyboard หรือ Visual Sequence
จาก Music Video อ้างอิงแบบ Shot-for-shot
```

### ขั้นตอนใน Flow Music

`Music videos → New music video → Add → Audio → เลือกเพลง Suno → ใส่ Prompt → Generate`

---

# MV08 — Flow แบบควบคุม Scene ละเอียด

ถ้าต้องการกำกับมากกว่าการให้ Flow Music ทำทั้ง MV ให้ใช้ Shot Plan จาก
`flow-mv-storyboard.csv`

### ✅ Prompt สำหรับแต่ละ Shot

```text
Create an 8-second cinematic shot for an original educational music video.

PROJECT:
AI Workshop Hub — “คิดเป็น สร้างเป็น”

CHARACTERS:
Use the attached character references and preserve exact continuity.

SCENE:
Teacher and student team review an AI answer on a transparent interface.
They do not trust it immediately; they compare it with a trusted source and mark a clear check symbol.

CAMERA:
medium over-the-shoulder shot, slow controlled push-in

LIGHT:
clean morning classroom light with subtle cyan practical accents

PERFORMANCE:
natural, focused, collaborative, not exaggerated

STYLE:
premium realistic educational commercial, cinematic depth of field,
navy-white-cyan palette, warm natural skin tones

CONTINUITY:
same teacher, same student, same wardrobe, same classroom layout

AVOID:
generated Thai text, logos, extra fingers, identity drift,
new background characters, copied shots from an existing music video
```

ทำซ้ำโดยเปลี่ยนเฉพาะ SCENE / CAMERA ตาม `flow-mv-storyboard.csv`

---

# MV09 — Character & Scene Consistency

### ✅ Prompt พร้อมใช้

```text
คุณคือ Music Video Continuity Supervisor

ใช้ flow-character-bible.md และ Flow Clips ที่สร้างทั้งหมด

ตรวจทีละ Scene:
1. Face identity
2. Hair
3. Wardrobe
4. Age
5. Body proportions
6. Classroom geography
7. Light direction
8. Color palette
9. Props
10. Story continuity

จัดผล:
PASS / REGENERATE / CAN FIX IN EDIT

หากต้อง Regenerate ให้เขียน Prompt แก้เฉพาะจุด
โดยห้ามเปลี่ยนสิ่งที่ผ่านแล้ว
```

---

# MV10 — Final MV QA

### 📦 Asset
`assets/examples/music-mv/mv-qa-checklist.md`

### ✅ Prompt พร้อมใช้

```text
คุณคือ Music Video Director + QA Editor

ตรวจ Master Audio และ Final Music Video ของ “คิดเป็น สร้างเป็น”

ตรวจ:
1. Audio start/end
2. Song structure
3. Visual sync กับ Energy
4. Narrative continuity
5. Character consistency
6. AI artifacts
7. Generated text errors
8. Privacy / real-school identity
9. Copyright / reference similarity risk
10. 16:9 master
11. Mobile crop
12. Ending / CTA / Logo-safe area

รายงานเป็น:
PASS
FIX BEFORE PUBLISH
REGENERATE

พร้อม Timecode ของทุกจุดที่ต้องแก้
```

---

# 🎬 Recommended Production Path

### เร็วที่สุด
`Suno → Export Audio → Google Flow Music → Add Audio → Generate MV`

### คุมภาพมากขึ้น
`Suno → Storyboard → Character References → Flow 8s Scenes → Scenebuilder/Edit → Final`

### สำหรับ Workshop
1. ให้ผู้เรียนวิเคราะห์ Reference DNA
2. สร้างเพลงต้นฉบับสั้น 60–90 วินาที
3. เลือก 4–6 Scene สำคัญ
4. สร้าง MV ใน Flow Music
5. ตรวจ Originality + Safety ก่อน Publish
