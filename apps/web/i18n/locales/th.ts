import type { Dictionary } from "../dictionaries";
import type { DeepPartial } from "../merge";

export const th: DeepPartial<Dictionary> = {
  header: { languageMenu: { ariaLabel: "เปลี่ยนภาษา" } },
  breadcrumb: { home: "หน้าแรก" },
  tool: {
    processedClient: "ประมวลผลในเบราว์เซอร์ของคุณ — ไม่มีการอัปโหลดไฟล์เลย",
    faqHeading: "คำถามที่พบบ่อย",
    relatedHeading: "เครื่องมือที่เกี่ยวข้อง",
    metaTitleSuffix: "— เครื่องมือออนไลน์ฟรี",
  },
  article: {
    tocHeading: "สารบัญ",
    readingTime: "อ่าน {minutes} นาที",
    readingTimeOne: "อ่าน 1 นาที",
    readingTimeTwo: "อ่าน 2 นาที",
    published: "เผยแพร่เมื่อ {date}",
    updated: "อัปเดตเมื่อ {date}",
    relatedHeading: "บทความที่เกี่ยวข้อง",
    previousArticle: "ก่อนหน้า",
    nextArticle: "ถัดไป",
    ctaDefaultHeading: "พร้อมลองใช้ {tool} หรือยัง?",
    ctaCompressPdfButtonLabel: "บีบอัด PDF ฟรี",
  },
  card: { comingSoon: "เร็ว ๆ นี้" },
  home: {
    heroHighlight: "PDF",
    heroSubtitle: "เครื่องมือ PDF ฟรี รวดเร็ว และใช้งานง่าย",
    toolPicker: {
      trigger: "เลือกเครื่องมือ PDF",
      ariaLabel: "เมนูเครื่องมือ PDF",
      loadMore: "เครื่องมือเพิ่มเติม",
      allShown: "แสดงเครื่องมือทั้งหมดแล้ว",
    },
    features: { devices: "ใช้งานได้ทุกอุปกรณ์", fast: "รวดเร็ว", secure: "ปลอดภัย" },
  },
  footer: {
    rights: "สงวนลิขสิทธิ์",
    privacyNote: "ไฟล์ได้รับการประมวลผลอย่างปลอดภัยและจะไม่ถูกเก็บไว้นานเกินความจำเป็น",
    moreCount: "อีก {count} รายการ",
    company: "บริษัท",
    legal: "กฎหมาย",
    aboutUs: "เกี่ยวกับเรา",
    contactUs: "ติดต่อเรา",
    blog: "บล็อก",
    faq: "คำถามที่พบบ่อย",
    privacyPolicy: "นโยบายความเป็นส่วนตัว",
    termsOfService: "ข้อกำหนดการให้บริการ",
    cookiePolicy: "นโยบายคุกกี้",
  },
  staticPages: {
    note: "หน้านี้เป็นเนื้อหาชั่วคราว — เนื้อหาฉบับเต็มจะมาเร็ว ๆ นี้",
    aboutUs: {
      title: "เกี่ยวกับเรา",
      intro:
        "TAMPDF คือชุดเครื่องมือออนไลน์ฟรีที่สร้างขึ้นเพื่อให้งานไฟล์ในชีวิตประจำวัน — การรวม แยก บีบอัด และแปลงไฟล์ PDF รูปภาพ และเอกสาร — เป็นเรื่องรวดเร็ว ปลอดภัย และง่ายดาย",
    },
    contactUs: {
      title: "ติดต่อเรา",
      intro: "มีคำถาม พบข้อผิดพลาด หรืออยากแนะนำเครื่องมือใหม่ใช่ไหม? เรายินดีรับฟังความคิดเห็นของคุณ",
    },
    blog: { title: "บล็อก", intro: "เรากำลังจัดทำบทความเกี่ยวกับรูปแบบไฟล์ เคล็ดลับเพิ่มประสิทธิภาพ และอัปเดตผลิตภัณฑ์" },
    faq: {
      title: "คำถามที่พบบ่อย",
      intro: "คำตอบทั่วไปเกี่ยวกับ TAMPDF จะเผยแพร่ที่นี่เร็ว ๆ นี้ ในระหว่างนี้ แต่ละเครื่องมือมีคำถามที่พบบ่อยของตัวเอง",
    },
    privacyPolicy: {
      title: "นโยบายความเป็นส่วนตัว",
      intro: "นโยบายความเป็นส่วนตัวฉบับเต็มของเรา ซึ่งอธิบายวิธีที่ TAMPDF จัดการไฟล์และข้อมูลของคุณอย่างละเอียด กำลังอยู่ระหว่างจัดทำและจะเผยแพร่ที่นี่เร็ว ๆ นี้",
    },
    termsOfService: {
      title: "ข้อกำหนดการให้บริการ",
      intro: "ข้อกำหนดการให้บริการนี้ควบคุมการใช้งานเครื่องมือและเว็บไซต์ของ TAMPDF ของคุณ รวมถึงการปฏิเสธการรับประกันและการจำกัดความรับผิด",
    },
    cookiePolicy: {
      title: "นโยบายคุกกี้",
      intro: "รายละเอียดเกี่ยวกับคุกกี้และเทคโนโลยีที่คล้ายกันที่ TAMPDF ใช้จะเผยแพร่ที่นี่เร็ว ๆ นี้",
    },
  },
  dropzone: {
    browse: "หรือคลิกเพื่อเลือกไฟล์",
    defaultLabel: "ลากและวางไฟล์ของคุณที่นี่",
    unsupportedType: "{name} ไม่ใช่ประเภทไฟล์ที่รองรับและถูกข้ามไป",
    unsupportedTypePlural: "{count} ไฟล์ไม่ใช่ประเภทที่รองรับและถูกข้ามไป",
    tooLarge: "{name} มีขนาดใหญ่เกินไป (สูงสุด {max}) และถูกข้ามไป",
    tooLargePlural: "{count} ไฟล์มีขนาดใหญ่เกินไป (สูงสุด {max}) และถูกข้ามไป",
    maxFilesReached: "คุณเพิ่มไฟล์ครบจำนวนสูงสุด {max} ไฟล์สำหรับเครื่องมือนี้แล้ว",
    maxFilesExceeded: "เครื่องมือนี้อนุญาตสูงสุด {max} ไฟล์ต่อครั้ง จึงเพิ่มไฟล์ของคุณได้เพียง {added} ไฟล์",
  },
  fileList: { moveUp: "ย้ายขึ้น", moveDown: "ย้ายลง", remove: "ลบ {name}" },
  result: {
    ready: "ไฟล์ของคุณพร้อมแล้ว",
    download: "ดาวน์โหลด",
    startOver: "เริ่มใหม่",
    smaller: "เล็กลง",
    originalSize: "ขนาดต้นฉบับ",
    newSize: "ขนาดใหม่",
    reducedBy: "ลดลง",
    spaceSaved: "พื้นที่ที่ประหยัดได้",
  },
  notFound: {
    title: "ไม่พบหน้านี้",
    description: "หน้าที่คุณกำลังค้นหาไม่มีอยู่หรืออาจถูกย้ายไปแล้ว",
    cta: "กลับหน้าแรก",
  },
};
