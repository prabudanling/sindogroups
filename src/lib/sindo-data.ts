// ===================================================================
// SINDO GROUPS — Centralized content data (Indonesian + English)
// Source: Company profile (compro-sindo-.pdf, 23 pages) + business card + official letter
// ===================================================================

export type Lang = "id" | "en";
export type Bi = { id: string; en: string };

export const company = {
  legalName: "PT Solusi Investasi Indonesia",
  legalNameCn: "印尼投资解决方案公司",
  brand: "SINDO GROUPS",
  tagline: { id: "Ekosistem Korporasi Terintegrasi", en: "Integrated Corporate Ecosystem" } as Bi,
  taglineAlt: { id: "Solusi Investasi untuk Indonesia Maju", en: "Investment Solutions for a Prosperous Indonesia" } as Bi,
  motto: { id: "Kejujuran dan kepercayaan", en: "Honesty and Trust" } as Bi,
  mottoCn: "诚信，可靠",
  slogan: {
    id: "Dari struktur yang jelas menuju pertumbuhan yang bernilai.",
    en: "From clear structure to valuable growth.",
  } as Bi,
  scope: { id: "Strategi • Hukum • Teknologi • Operasi • Kemitraan • Investasi", en: "Strategy • Law • Technology • Operations • Partnership • Investment" } as Bi,
  horizon: "2026–2030",
  address: "Apartemen Regatta Tower Dubai #11C, Pantai Mutiara, Pluit, Penjaringan, Jakarta Utara 14450",
  phones: ["(021) 29196545", "+62 813-8575-6922", "+62 813-8575-6924"],
  emails: ["ptsolusiinvestasiindonesia@gmail.com", "williamhui838@gmail.com"],
  whatsapp: "6281385756922",
  founded: "13 Juli 2026",
};

export const navLinks: { id: string; label: Bi }[] = [
  { id: "tentang", label: { id: "Tentang", en: "About" } },
  { id: "filosofi", label: { id: "Filosofi", en: "Philosophy" } },
  { id: "struktur", label: { id: "Struktur", en: "Structure" } },
  { id: "bidang-usaha", label: { id: "Bidang Usaha", en: "Business" } },
  { id: "smart-port", label: { id: "Smart Port", en: "Smart Port" } },
  { id: "mitra", label: { id: "Mitra", en: "Partners" } },
  { id: "roadmap", label: { id: "Roadmap", en: "Roadmap" } },
  { id: "tata-kelola", label: { id: "Tata Kelola", en: "Governance" } },
  { id: "kontak", label: { id: "Kontak", en: "Contact" } },
];

export const stats: { value: string; label: Bi }[] = [
  { value: "2026–2030", label: { id: "Horizon Strategis", en: "Strategic Horizon" } },
  { value: "21+", label: { id: "Mitra Strategis", en: "Strategic Partners" } },
  { value: "6", label: { id: "Bidang Prioritas", en: "Priority Sectors" } },
  { value: "12", label: { id: "Solusi Smart Port", en: "Smart Port Solutions" } },
  { value: "7", label: { id: "Simpul Ekosistem Digital", en: "Digital Ecosystem Nodes" } },
  { value: "6", label: { id: "Pilar Tata Kelola", en: "Governance Pillars" } },
];

export const about = {
  eyebrow: { id: "Tentang Sindo Groups", en: "About Sindo Groups" } as Bi,
  title: { id: "Ekosistem bisnis yang terintegrasi dan siap berkembang", en: "An integrated business ecosystem ready to grow" } as Bi,
  paragraphs: [
    {
      id: "SINDO GROUPS dikembangkan sebagai ekosistem korporasi yang menghubungkan struktur perusahaan, modal, teknologi, operasi, tata kelola, dan kemitraan. Pendekatannya adalah membangun usaha yang terukur, efisien, dan dapat dikembangkan lintas sektor.",
      en: "SINDO GROUPS is developed as a corporate ecosystem that connects company structure, capital, technology, operations, governance, and partnership. The approach is to build businesses that are measurable, efficient, and scalable across sectors.",
    } as Bi,
    {
      id: "SINDO GROUPS membangun jaringan kerja sama dengan perusahaan dan profesional dari berbagai negara untuk memperkuat teknologi, konektivitas, kemaritiman, energi, logistik, infrastruktur, dan investasi.",
      en: "SINDO GROUPS builds a cooperation network with companies and professionals from various countries to strengthen technology, connectivity, maritime, energy, logistics, infrastructure, and investment.",
    } as Bi,
  ],
  pillars: [
    { key: "Fokus", value: { id: "Investasi · Kerja sama usaha · Teknologi · Infrastruktur", en: "Investment · Business cooperation · Technology · Infrastructure" } as Bi },
    { key: "Prinsip", value: { id: "Integritas · Data · Efisiensi · Kolaborasi", en: "Integrity · Data · Efficiency · Collaboration" } as Bi },
    { key: "Kekuatan", value: { id: "Jaringan usaha dan mitra strategis", en: "Business network and strategic partners" } as Bi },
    { key: "Arah", value: { id: "Pertumbuhan jangka panjang dan penciptaan nilai", en: "Long-term growth and value creation" } as Bi },
  ],
};

export const values = {
  eyebrow: { id: "Filosofi dan Nilai", en: "Philosophy & Values" } as Bi,
  title: { id: "Tiga pilar yang menjadi dasar setiap keputusan", en: "Three pillars underlying every decision" } as Bi,
  pillars: [
    {
      icon: "shield",
      name: "INTEGRITAS",
      desc: {
        id: "Kepatuhan hukum, transparansi, dokumentasi, dan tanggung jawab menjadi dasar hubungan dengan investor, mitra, dan pemangku kepentingan.",
        en: "Legal compliance, transparency, documentation, and accountability form the foundation of relationships with investors, partners, and stakeholders.",
      } as Bi,
    },
    {
      icon: "cpu",
      name: "TEKNOLOGI",
      desc: {
        id: "Pemanfaatan data, otomasi, internet untuk berbagai perangkat, kecerdasan buatan, dan sistem terintegrasi untuk meningkatkan kualitas keputusan serta efisiensi operasi.",
        en: "Leveraging data, automation, IoT, artificial intelligence, and integrated systems to improve decision quality and operational efficiency.",
      } as Bi,
    },
    {
      icon: "leaf",
      name: "KEBERLANJUTAN",
      desc: {
        id: "Pengembangan diarahkan pada produktivitas, efisiensi sumber daya, keselamatan, dan nilai ekonomi jangka panjang.",
        en: "Development is directed toward productivity, resource efficiency, safety, and long-term economic value.",
      } as Bi,
    },
  ],
  keywords: ["KEPERCAYAAN", "DATA", "EFISIENSI", "TATA KELOLA", "SKALA"],
  integration: ["INTEGRASI", "INOVASI", "KOLABORASI"],
};

export const structure = {
  eyebrow: { id: "Struktur Sindo Groups", en: "Sindo Groups Structure" } as Bi,
  title: { id: "Fungsi utama yang saling menguatkan", en: "Core functions that reinforce each other" } as Bi,
  center: "SINDO GROUPS",
  functions: [
    {
      name: "PERLINDUNGAN HUKUM",
      nameEn: "Legal Protection",
      entity: "MGS Konsultan Hukum",
      desc: { id: "Perlindungan hukum, dokumentasi, kontrak, perizinan, dan pajak.", en: "Legal protection, documentation, contracts, permits, and tax." } as Bi,
      accent: "gold",
    },
    {
      name: "INVESTASI & KERJA SAMA",
      nameEn: "Investment & Cooperation",
      entity: "PT Sindo Makmur Nusantara",
      desc: { id: "Pengembangan aset dan usaha melalui kemitraan serta kajian kelayakan.", en: "Asset and business development through partnerships and feasibility studies." } as Bi,
      accent: "teal",
    },
    {
      name: "MESIN MODAL",
      nameEn: "Capital Engine",
      entity: "KSP Sindo Nusa Sentosa",
      desc: { id: "Penyediaan modal dan pembiayaan untuk pertumbuhan usaha.", en: "Capital provision and financing for business growth." } as Bi,
      accent: "navy",
    },
    {
      name: "PELAKSANAAN PORTOFOLIO",
      nameEn: "Portfolio Execution",
      entity: "Pengembangan dan operasi",
      desc: { id: "Pelaksanaan proyek dan operasi portofolio secara terukur.", en: "Project execution and portfolio operations, measurably." } as Bi,
      accent: "maroon",
    },
    {
      name: "DATA & TEKNOLOGI",
      nameEn: "Data & Technology",
      entity: "Data · Otomasi · AI · Dasbor",
      desc: { id: "Data, otomasi, kecerdasan buatan, dan dasbor terintegrasi.", en: "Data, automation, artificial intelligence, and integrated dashboards." } as Bi,
      accent: "gold",
    },
  ],
};

export const leadership = {
  eyebrow: { id: "Kepemimpinan", en: "Leadership" } as Bi,
  title: { id: "Pimpinan Perusahaan", en: "Company Leadership" } as Bi,
  members: [
    {
      name: "William Onggono",
      nameCn: "王若辉",
      role: { id: "Komisaris Utama", en: "President Commissioner" } as Bi,
      roleAlt: "Commissioner / CEO",
    },
    {
      name: "Jepin Taman Purba, S.H.",
      nameCn: "",
      role: { id: "Direktur Utama", en: "President Director" } as Bi,
      roleAlt: "CEO",
    },
  ],
};

export const legal = {
  eyebrow: { id: "Identitas Hukum", en: "Legal Identity" } as Bi,
  title: { id: "Fondasi hukum yang terverifikasi", en: "A verified legal foundation" } as Bi,
  items: [
    { label: { id: "Akta Pendirian", en: "Deed of Establishment" } as Bi, value: "Nomor 33 · 13 Juli 2026", sub: "Notaris Restu Muhamad Aldie, S.H., M.Kn." },
    { label: { id: "Pengesahan Badan Hukum", en: "Legal Entity Approval" } as Bi, value: "AHU-0056160.AH.01.01.TAHUN 2026", sub: { id: "16 Juli 2026 · Kemenkumham RI", en: "16 July 2026 · Ministry of Law & Human Rights" } as Bi },
    { label: "Daftar Perseroan", value: "AHU-0164251.AH.01.11.TAHUN 2026", sub: "" },
    { label: { id: "Nomor Induk Berusaha (NIB)", en: "Business Identification Number" } as Bi, value: "1707260172236", sub: { id: "Perizinan Berbasis Risiko · 17 Juli 2026", en: "Risk-Based Licensing · 17 July 2026" } as Bi },
    { label: { id: "Administrasi Pajak", en: "Tax Administration" } as Bi, value: "Wajib Pajak Badan", sub: { id: "PT Solusi Investasi Indonesia · sejak 16 Juli 2026", en: "PT Solusi Investasi Indonesia · since 16 July 2026" } as Bi },
    { label: { id: "Bentuk Badan", en: "Entity Form" } as Bi, value: "Perseroan Terbatas (PT)", sub: "" },
  ],
  note: { id: "Data hukum diverifikasi terhadap dokumen resmi sebelum transaksi atau publikasi.", en: "Legal data is verified against official documents before transactions or publication." } as Bi,
};

export const ecosystemNodes = [
  { name: "DATA", icon: "database" },
  { name: "INVESTASI", icon: "trending-up" },
  { name: "LOGISTIK", icon: "truck" },
  { name: "ENERGI / AWAN", icon: "zap" },
  { name: "INFRASTRUKTUR / TEKNOLOGI", icon: "building-2" },
  { name: "KEAMANAN SIBER / IoT", icon: "shield-check" },
  { name: "MARITIM", icon: "anchor" },
];

export const businessSectors = {
  eyebrow: { id: "Bidang Usaha", en: "Business Sectors" } as Bi,
  title: { id: "Enam bidang prioritas pengembangan", en: "Six priority development sectors" } as Bi,
  subtitle: { id: "Satu jaringan digital untuk menghubungkan usaha, teknologi, mitra, dan investasi dalam satu ekosistem.", en: "One digital network connecting business, technology, partners, and investment in a single ecosystem." } as Bi,
  sectors: [
    {
      icon: "anchor",
      name: { id: "Logistik & Kemaritiman", en: "Logistics & Maritime" } as Bi,
      desc: { id: "Ekosistem kapal, terminal, bongkar muat, gudang, transportasi lanjutan, dan data rantai pasok. Digitalisasi untuk visibilitas, efisiensi, dan koordinasi.", en: "Ecosystem of ships, terminals, loading/unloading, warehouses, advanced transport, and supply-chain data. Digitalization for visibility, efficiency, and coordination." } as Bi,
      image: "/images/logistics-ship.jpg",
      accent: "gold",
    },
    {
      icon: "zap",
      name: { id: "Energi & Konektivitas", en: "Energy & Connectivity" } as Bi,
      desc: { id: "Sistem energi surya mandiri untuk perangkat komunikasi, kamera, jaringan nirkabel, sensor, dan perangkat IoT di lokasi yang membutuhkan pasokan listrik mandiri.", en: "Self-sufficient solar energy systems for communication devices, cameras, wireless networks, sensors, and IoT devices in locations needing independent power." } as Bi,
      image: "/images/energy-solar.jpg",
      accent: "teal",
    },
    {
      icon: "plane",
      name: { id: "Mobilitas & Pemantauan", en: "Mobility & Monitoring" } as Bi,
      desc: { id: "Pesawat tanpa awak (UAV/Drone) untuk inspeksi aset, pemetaan, pemantauan kawasan, tanggap cepat, dan dukungan logistik.", en: "Unmanned aerial vehicles (UAV/Drone) for asset inspection, mapping, area monitoring, rapid response, and logistics support." } as Bi,
      image: "/images/mobility-drone.jpg",
      accent: "navy",
    },
    {
      icon: "building",
      name: { id: "Kota & Desa Cerdas", en: "Smart City & Village" } as Bi,
      desc: { id: "Integrasi layanan, sensor, pusat kendali, dan data wilayah untuk tata kelola kawasan yang lebih cerdas dan terhubung.", en: "Integration of services, sensors, control centers, and regional data for smarter, connected area governance." } as Bi,
      image: "/images/ecosystem-bg.jpg",
      accent: "maroon",
    },
    {
      icon: "bot",
      name: { id: "Industri & Otomasi", en: "Industry & Automation" } as Bi,
      desc: { id: "Robotika, kendaraan utilitas, pemantauan aset, dan efisiensi operasi untuk kawasan industri, pelabuhan, dan area berisiko.", en: "Robotics, utility vehicles, asset monitoring, and operational efficiency for industrial zones, ports, and high-risk areas." } as Bi,
      image: "/images/robotics.jpg",
      accent: "gold",
    },
    {
      icon: "trending-up",
      name: { id: "Investasi & Kerja Sama", en: "Investment & Cooperation" } as Bi,
      desc: { id: "Pengembangan aset dan usaha melalui kemitraan, kajian kelayakan, dan uji tuntas lintas sektor dan batas negara.", en: "Asset and business development through partnerships, feasibility studies, and due diligence across sectors and borders." } as Bi,
      image: "/images/hero-port.jpg",
      accent: "teal",
    },
  ],
  digitalLayers: [
    { name: { id: "Data dan Integrasi", en: "Data & Integration" } as Bi, desc: { id: "Data aset, operasi, peta wilayah, sensor, dan sistem bisnis.", en: "Asset, operation, regional map, sensor, and business system data." } as Bi },
    { name: { id: "Sensor dan Perangkat", en: "Sensors & Devices" } as Bi, desc: { id: "Pemantauan kondisi, lokasi, energi, dan lingkungan.", en: "Monitoring of condition, location, energy, and environment." } as Bi },
    { name: { id: "Kecerdasan Buatan (AI)", en: "Artificial Intelligence" } as Bi, desc: { id: "Analisis pola, anomali, prediksi, dan dukungan keputusan.", en: "Pattern, anomaly, prediction analysis, and decision support." } as Bi },
  ],
  digitalFlow: ["DATA", "KECERDASAN", "PUSAT KENDALI", "TINDAKAN"],
  digitalFlowNote: { id: "Tujuan: keputusan lebih cepat, operasi lebih terukur, dan pengawasan lebih baik.", en: "Goal: faster decisions, more measurable operations, and better oversight." } as Bi,
};

export const smartPort = {
  eyebrow: { id: "Solusi Teknologi Pelabuhan", en: "Port Technology Solutions" } as Bi,
  title: { id: "12 solusi smart port bersama GalaxyLink", en: "12 smart port solutions with GalaxyLink" } as Bi,
  subtitle: { id: "Portofolio teknologi dari mitra utama GalaxyLink (Tiongkok • Hong Kong) untuk pelabuhan cerdas, otomasi, dan ekosistem digital.", en: "Technology portfolio from key partner GalaxyLink (China • Hong Kong) for smart ports, automation, and digital ecosystems." } as Bi,
  solutions: [
    { icon: "anchor", name: "Pelabuhan Cerdas", nameEn: "Smart Port", desc: { id: "Pengelolaan pelabuhan berbasis data, sensor, otomasi, dan pengambilan keputusan terpadu.", en: "Data-, sensor-, automation-, and integrated-decision-based port management." } as Bi },
    { icon: "leaf", name: "Pelabuhan Hijau & Rendah Karbon", nameEn: "Green & Low-Carbon Port", desc: { id: "Integrasi energi terbarukan, kendaraan listrik, penyimpanan energi, listrik darat, dan pengelolaan beban.", en: "Renewable energy, electric vehicles, energy storage, shore power, and load management integration." } as Bi },
    { icon: "cpu", name: "Terminal Otomatis", nameEn: "Automated Terminal", desc: { id: "Operasi jarak jauh, pemantauan otomatis, alarm, dan kendali produksi terminal.", en: "Remote operation, automatic monitoring, alarms, and terminal production control." } as Bi },
    { icon: "monitor", name: "Pusat Kendali Terpadu", nameEn: "Integrated Control Center", desc: { id: "Pemantauan kondisi pelabuhan, peralatan, lalu lintas, dan kegiatan operasional dalam satu pusat.", en: "Monitoring of port conditions, equipment, traffic, and operational activities in one center." } as Bi },
    { icon: "box", name: "Kembaran Digital 3D", nameEn: "3D Digital Twin", desc: { id: "Visualisasi tiga dimensi untuk simulasi peralatan, posisi personel, dan kondisi lingkungan.", en: "3D visualization for equipment simulation, personnel position, and environmental conditions." } as Bi },
    { icon: "calendar", name: "Pengaturan Produksi Cerdas", nameEn: "Smart Production Scheduling", desc: { id: "Model pelabuhan, kapasitas, kebutuhan, jadwal kapal, rencana produk, dan pengaturan produksi.", en: "Port model, capacity, demand, ship schedule, product plan, and production scheduling." } as Bi },
    { icon: "zap", name: "Pengelolaan Energi", nameEn: "Energy Management", desc: { id: "Pemantauan energi, pengelolaan beban, dan dukungan efisiensi penggunaan energi.", en: "Energy monitoring, load management, and energy efficiency support." } as Bi },
    { icon: "plug", name: "Listrik Darat Kapal", nameEn: "Shore Power", desc: { id: "Pasokan listrik untuk kapal saat bersandar melalui peralatan dan sistem khusus (Cold Ironing).", en: "Power supply for ships at berth via specialized equipment and systems (Cold Ironing)." } as Bi },
    { icon: "fuel", name: "Pemantauan Bahan Bakar Kapal", nameEn: "Ship Fuel Monitoring", desc: { id: "Perangkat dan sistem pemantauan konsumsi bahan bakar untuk efisiensi pelayaran.", en: "Devices and systems monitoring fuel consumption for sailing efficiency." } as Bi },
    { icon: "ship", name: "Pengaturan Lalu Lintas Kapal", nameEn: "Vessel Traffic Management", desc: { id: "Sistem pemantauan dan pengaturan lalu lintas kapal di kawasan pelabuhan.", en: "Systems for monitoring and managing vessel traffic in port areas." } as Bi },
    { icon: "activity", name: "Pemantauan Operasi", nameEn: "Operations Monitoring", desc: { id: "Sarana tampilan untuk memantau kondisi dan kegiatan operasi terminal.", en: "Display tools to monitor terminal operational conditions and activities." } as Bi },
    { icon: "wifi", name: "Konektivitas & Data", nameEn: "Connectivity & Data", desc: { id: "Penggabungan data, perangkat, jaringan, dan sistem operasi untuk ekosistem digital.", en: "Combining data, devices, networks, and operating systems into a digital ecosystem." } as Bi },
  ],
  architecture: {
    title: { id: "Arsitektur Pelabuhan Cerdas", en: "Smart Port Architecture" } as Bi,
    steps: [
      { no: "01", name: "PERSEPSI", nameEn: "Perception", desc: { id: "Sensor dan perangkat mengumpulkan data lapangan secara waktu nyata.", en: "Sensors and devices collect real-time field data." } as Bi },
      { no: "02", name: "KOGNISI", nameEn: "Cognition", desc: { id: "Data dianalisis untuk menemukan pola, kondisi, dan hubungan antarobjek.", en: "Data is analyzed to find patterns, conditions, and object relationships." } as Bi },
      { no: "03", name: "KEPUTUSAN", nameEn: "Decision", desc: { id: "Sistem menghasilkan rekomendasi dan keputusan operasional.", en: "The system generates recommendations and operational decisions." } as Bi },
      { no: "04", name: "PELAKSANAAN", nameEn: "Execution", desc: { id: "Peralatan cerdas, robot, dan sistem kendali menjalankan keputusan.", en: "Smart equipment, robots, and control systems execute decisions." } as Bi },
      { no: "05", name: "EVALUASI", nameEn: "Evaluation", desc: { id: "Data hasil operasi kembali menjadi masukan untuk perbaikan berkelanjutan.", en: "Operation result data feeds back for continuous improvement." } as Bi },
    ],
    stack: ["Sensor", "Internet of Things (IoT)", "Komputasi Tepi (Edge)", "Kecerdasan Buatan (AI)", "Pemetaan", "Sistem Informasi", "Otomasi", "Visualisasi 3D", "Pusat Kendali"],
  },
};

export const services = {
  eyebrow: { id: "Layanan", en: "Services" } as Bi,
  title: { id: "Klaster layanan terintegrasi", en: "Integrated service clusters" } as Bi,
  items: [
    { icon: "anchor", name: { id: "Smart Port & Otomasi Pelabuhan", en: "Smart Port & Port Automation" } as Bi, desc: { id: "Pengembangan & operasi pelabuhan cerdas, terminal otomatis, pusat kendali terpadu, kembaran digital 3D.", en: "Smart port development & operation, automated terminals, integrated control center, 3D digital twin." } as Bi },
    { icon: "leaf", name: { id: "Energi Pelabuhan & Maritim", en: "Port & Maritime Energy" } as Bi, desc: { id: "Listrik darat kapal (shore power), pemantauan bahan bakar, pengelolaan energi, pelabuhan hijau rendah karbon.", en: "Shore power, fuel monitoring, energy management, green low-carbon port." } as Bi },
    { icon: "ship", name: { id: "Manajemen Lalu Lintas & Operasi", en: "Traffic & Operations Management" } as Bi, desc: { id: "Pengaturan lalu lintas kapal, pemantauan operasi terminal, pengaturan produksi cerdas.", en: "Vessel traffic management, terminal operation monitoring, smart production scheduling." } as Bi },
    { icon: "truck", name: { id: "Logistik & Kemaritiman", en: "Logistics & Maritime" } as Bi, desc: { id: "Ekosistem kapal, terminal, bongkar muat, gudang, transportasi lanjutan, data rantai pasok.", en: "Ship, terminal, loading, warehouse, advanced transport, supply-chain data ecosystem." } as Bi },
    { icon: "zap", name: { id: "Energi & Konektivitas Off-grid", en: "Off-grid Energy & Connectivity" } as Bi, desc: { id: "Sistem energi surya mandiri untuk komunikasi, kamera, jaringan nirkabel, sensor, IoT.", en: "Self-sufficient solar energy for communication, cameras, wireless networks, sensors, IoT." } as Bi },
    { icon: "plane", name: { id: "Mobilitas Udara (UAV/Drone)", en: "Air Mobility (UAV/Drone)" } as Bi, desc: { id: "Inspeksi aset, pemetaan, pemantauan kawasan, tanggap cepat, dukungan logistik.", en: "Asset inspection, mapping, area monitoring, rapid response, logistics support." } as Bi },
    { icon: "bot", name: { id: "Robotika & Kendaraan Otonom", en: "Robotics & Autonomous Vehicles" } as Bi, desc: { id: "Inspeksi, pengangkutan material, operasi kawasan industri/pelabuhan/area berisiko.", en: "Inspection, material transport, industrial/port/high-risk area operations." } as Bi },
    { icon: "database", name: { id: "Data, IoT, & AI", en: "Data, IoT & AI" } as Bi, desc: { id: "Integrasi data aset/operasi, sensor & perangkat, AI untuk pola/anomali/prediksi/dukungan keputusan.", en: "Asset/operation data integration, sensors & devices, AI for pattern/anomaly/prediction/decision support." } as Bi },
    { icon: "building", name: { id: "Kota & Desa Cerdas", en: "Smart City & Village" } as Bi, desc: { id: "Integrasi layanan, sensor, pusat kendali, dan data wilayah.", en: "Service, sensor, control center, and regional data integration." } as Bi },
    { icon: "trending-up", name: { id: "Investasi & Kerja Sama", en: "Investment & Cooperation" } as Bi, desc: { id: "Pengembangan aset/usaha melalui kemitraan, kajian kelayakan, uji tuntas.", en: "Asset/business development through partnerships, feasibility studies, due diligence." } as Bi },
    { icon: "scale", name: { id: "Hukum & Kepatuhan", en: "Legal & Compliance" } as Bi, desc: { id: "Perlindungan hukum, dokumentasi, kontrak, perizinan, pajak (via MGS Konsultan Hukum).", en: "Legal protection, documentation, contracts, permits, tax (via MGS Konsultan Hukum)." } as Bi },
    { icon: "wallet", name: { id: "Mesin Modal & Pembiayaan", en: "Capital Engine & Financing" } as Bi, desc: { id: "Penyediaan modal dan pembiayaan (via KSP Sindo Nusa Sentosa).", en: "Capital provision and financing (via KSP Sindo Nusa Sentosa)." } as Bi },
  ],
};

export const partners = {
  eyebrow: { id: "Mitra Strategis", en: "Strategic Partners" } as Bi,
  title: { id: "Jaringan kerja sama lintas negara", en: "Cross-border cooperation network" } as Bi,
  subtitle: { id: "SINDO GROUPS membangun jaringan dengan perusahaan dan profesional dari berbagai negara untuk memperkuat teknologi, konektivitas, kemaritiman, energi, logistik, infrastruktur, dan investasi.", en: "SINDO GROUPS builds a network with companies and professionals from various countries to strengthen technology, connectivity, maritime, energy, logistics, infrastructure, and investment." } as Bi,
  groups: [
    {
      key: "domestic",
      label: { id: "Mitra Dalam Negeri", en: "Domestic Partners" } as Bi,
      items: [
        { name: "PT. Rehulina Pinta Jaya", field: "Jakarta" },
        { name: "CV. Stevanny Muliana", field: "Jakarta" },
        { name: "CV. Berkat Japlistev Aman", field: "Depok, Jawa Barat" },
        { name: "CV. Ainaayya Berkah Jaya", field: "Depok, Jawa Barat" },
        { name: "CV. Sibuttuon Jaya Abadi", field: "Bogor, Jawa Barat" },
        { name: "CV. Hasoman Aman Jaya", field: "Dairi, Sumatra" },
      ],
    },
    {
      key: "international",
      label: { id: "Mitra Grup Luar Negeri", en: "International Group Partners" } as Bi,
      items: [
        { name: "LINTASARTA", field: { id: "Teknologi & konektivitas", en: "Technology & connectivity" } as Bi, desc: { id: "Konektivitas data, jaringan komunikasi, layanan digital, dan infrastruktur teknologi.", en: "Data connectivity, communication networks, digital services, tech infrastructure." } as Bi },
        { name: "Sholin Pipe Indonesia", field: { id: "Solusi perpipaan & industri", en: "Piping & industrial solutions" } as Bi, desc: { id: "Solusi perpipaan, peralatan industri, dukungan teknis, pengembangan proyek.", en: "Piping solutions, industrial equipment, technical support, project development." } as Bi },
        { name: "Dongrui Electric", field: { id: "Kelistrikan & otomasi", en: "Electrical & automation" } as Bi, desc: { id: "Solusi kelistrikan, otomasi, pemantauan, peralatan industri & pelabuhan.", en: "Electrical, automation, monitoring, industrial & port equipment solutions." } as Bi },
        { name: "Dongrui Electric International", field: { id: "Pengembangan proyek", en: "Project development" } as Bi, desc: { id: "Jaringan pemasok, teknologi, layanan teknis, pengembangan proyek industri & infrastruktur.", en: "Supplier network, technology, technical services, industrial & infrastructure project development." } as Bi },
        { name: "China Railway Group", field: { id: "Konstruksi & infrastruktur", en: "Construction & infrastructure" } as Bi, desc: { id: "Pembangunan infrastruktur, transportasi, konstruksi, proyek strategis berskala besar.", en: "Infrastructure, transport, construction, large-scale strategic projects." } as Bi },
        { name: "Sapta Asien Mid-East", field: { id: "Investasi & jasa perusahaan", en: "Investment & corporate services" } as Bi, desc: { id: "Investasi, jasa perusahaan, pengadaan, pengembangan proyek dan jaringan usaha.", en: "Investment, corporate services, procurement, project and business network development." } as Bi },
        { name: "China Mobile Communications Group", field: { id: "Komunikasi & teknologi digital", en: "Communications & digital tech" } as Bi, desc: { id: "Komunikasi, pusat data, komputasi awan, IoT, kota pintar, konektivitas digital.", en: "Communications, data centers, cloud computing, IoT, smart cities, digital connectivity." } as Bi },
        { name: "Universitas Sains dan Teknologi Tiongkok", field: { id: "Ilmu pengetahuan & inovasi", en: "Science & innovation" } as Bi, desc: { id: "Riset, inovasi teknologi, pengembangan talenta, hilirisasi pengetahuan.", en: "Research, tech innovation, talent development, knowledge downstreaming." } as Bi },
        { name: "Jaringan Profesional Internasional", field: { id: "Kerja sama lintas negara", en: "Cross-border cooperation" } as Bi, desc: { id: "Pimpinan, konsultan, manajer proyek, dan profesional internasional.", en: "Leaders, consultants, project managers, and international professionals." } as Bi },
      ],
    },
    {
      key: "card",
      label: { id: "Mitra Luar Negeri (Jejaring Kartu Nama)", en: "International Partners (Card Network)" } as Bi,
      items: [
        { name: "Hunan Fengyue Import & Export Co., Ltd.", field: { id: "Perdagangan & rantai pasok internasional", en: "International trade & supply chain" } as Bi },
        { name: "GalaxyLink", field: { id: "Teknologi komunikasi satelit & konektivitas", en: "Satellite comms & connectivity tech" } as Bi, featured: true },
        { name: "Ding Shan Resources Co. Limited", field: { id: "Sumber daya & perdagangan", en: "Resources & trading" } as Bi },
        { name: "Shammah Technology Consulting", field: { id: "Perdagangan · Konsultasi · Investment Banking", en: "Trading · Consulting · Investment Banking" } as Bi },
        { name: "Xinxing Cathay International Group", field: { id: "Industri, infrastruktur & rantai pasok", en: "Industry, infrastructure & supply chain" } as Bi },
        { name: "Shandong Leina Safety Technology Co., Ltd.", field: { id: "Teknologi keselamatan", en: "Safety technology" } as Bi },
      ],
    },
  ],
};

export const roadmap = {
  eyebrow: { id: "Peta Jalan 2026–2030", en: "Roadmap 2026–2030" } as Bi,
  title: { id: "Lima tahun menuju ekosistem matang", en: "Five years toward a mature ecosystem" } as Bi,
  phases: [
    { year: "2026", phase: { id: "FONDASI", en: "FOUNDATION" } as Bi, focus: { id: "Konsolidasi hukum, organisasi, data, dan sistem.", en: "Consolidation of legal, organization, data, and systems." } as Bi, accent: "gold" },
    { year: "2027", phase: { id: "KONSOLIDASI", en: "CONSOLIDATION" } as Bi, focus: { id: "Penguatan jaringan, kemitraan, dan proyek percontohan (pelabuhan cerdas, pusat kendali, energi, otomasi).", en: "Strengthening networks, partnerships, and pilot projects (smart port, control center, energy, automation)." } as Bi, accent: "teal" },
    { year: "2028", phase: { id: "PENGEMBANGAN SKALA", en: "SCALE DEVELOPMENT" } as Bi, focus: { id: "Peningkatan otomasi, kecerdasan buatan, portofolio, dan perluasan sistem ke proyek & kawasan lain.", en: "Automation, AI, portfolio enhancement, and system expansion to other projects & areas." } as Bi, accent: "navy" },
    { year: "2029", phase: { id: "INTEGRASI", en: "INTEGRATION" } as Bi, focus: { id: "Integrasi lintas sektor dan kemitraan regional serta dunia. Replikasi solusi ke pelabuhan, kawasan maritim, industri, dan infrastruktur strategis.", en: "Cross-sector integration and regional/global partnerships. Replicating solutions to ports, maritime areas, industry, and strategic infrastructure." } as Bi, accent: "maroon" },
    { year: "2030", phase: { id: "REALISASI NILAI", en: "VALUE REALIZATION" } as Bi, focus: { id: "Ekosistem matang, operasi terukur, dan penciptaan nilai. Jaringan proyek teknologi & kemitraan yang menghubungkan Indonesia dengan pasar regional.", en: "Mature ecosystem, measurable operations, and value creation. A technology project & partnership network connecting Indonesia with regional markets." } as Bi, accent: "gold" },
  ],
  banner: ["TERPERCAYA", "BERBASIS TEKNOLOGI", "EFISIEN", "SIAP INVESTASI"],
};

export const governance = {
  eyebrow: { id: "Tata Kelola & Kesiapan Investasi", en: "Governance & Investment Readiness" } as Bi,
  title: { id: "Enam dimensi tata kelola yang terukur", en: "Six measurable governance dimensions" } as Bi,
  equation: ["PERTUMBUHAN", "+", "PENGENDALIAN", "+", "TRANSPARANSI", "=", "KEPERCAYAAN"],
  dimensions: [
    { icon: "scale", name: { id: "Tata Kelola", en: "Governance" } as Bi, scope: { id: "Kewenangan · dokumentasi · jejak pemeriksaan", en: "Authority · documentation · audit trail" } as Bi },
    { icon: "shield-check", name: { id: "Kepatuhan", en: "Compliance" } as Bi, scope: { id: "Kontrak · perizinan · peraturan · pajak", en: "Contracts · permits · regulations · tax" } as Bi },
    { icon: "alert-triangle", name: { id: "Risiko", en: "Risk" } as Bi, scope: { id: "Identifikasi · mitigasi · pemantauan", en: "Identification · mitigation · monitoring" } as Bi },
    { icon: "wallet", name: { id: "Keuangan", en: "Finance" } as Bi, scope: { id: "Arus kas · struktur modal · pelaporan", en: "Cash flow · capital structure · reporting" } as Bi },
    { icon: "lock", name: { id: "Teknologi", en: "Technology" } as Bi, scope: { id: "Keamanan data · akses · keberlanjutan sistem", en: "Data security · access · system sustainability" } as Bi },
    { icon: "handshake", name: { id: "Kemitraan", en: "Partnership" } as Bi, scope: { id: "Uji tuntas · ukuran kinerja · hak & kewajiban", en: "Due diligence · performance metrics · rights & obligations" } as Bi },
  ],
};

export const projects = {
  eyebrow: { id: "Proyek & Inisiatif", en: "Projects & Initiatives" } as Bi,
  title: { id: "Implementasi nyata di lapangan", en: "Real-world implementation" } as Bi,
  items: [
    {
      tag: { id: "Kemitraan Pemerintah", en: "Government Partnership" } as Bi,
      title: { id: "Pengadaan Alat Pemadam Kebakaran Modern", en: "Procurement of Modern Fire Extinguishing Equipment" } as Bi,
      desc: { id: "Permohonan dukungan & kerja sama kepada Wakil Presiden RI untuk pengadaan alat pemadam kebakaran modern yang efektif, efisien, dan ramah lingkungan — mencakup procurement, instalasi, pelatihan, dan after-sales service untuk institusi pemerintah dan fasilitas publik.", en: "Request for support & cooperation to the Vice President of Indonesia for modern, effective, efficient, and eco-friendly fire extinguishing equipment — covering procurement, installation, training, and after-sales service for government institutions and public facilities." } as Bi,
      meta: { id: "Surat No. 005/ex/Sindo/8/2026 · 26 Agustus 2026", en: "Letter No. 005/ex/Sindo/8/2026 · 26 August 2026" } as Bi,
    },
    {
      tag: { id: "Smart Port Pilot", en: "Smart Port Pilot" } as Bi,
      title: { id: "Pilot Project Pelabuhan Cerdas GalaxyLink", en: "GalaxyLink Smart Port Pilot Project" } as Bi,
      desc: { id: "Studi kelayakan dan penerapan awal pelabuhan cerdas, pusat kendali, energi, dan otomasi pada 2027 — diperluas ke proyek & kawasan lain pada 2028, direplikasi ke pelabuhan, kawasan maritim, industri, dan infrastruktur strategis pada 2029.", en: "Feasibility study and initial deployment of smart port, control center, energy, and automation in 2027 — expanded to other projects & areas in 2028, replicated to ports, maritime areas, industry, and strategic infrastructure in 2029." } as Bi,
      meta: { id: "Roadmap GalaxyLink 2027–2029", en: "GalaxyLink Roadmap 2027–2029" } as Bi,
    },
    {
      tag: { id: "Portofolio Teknologi", en: "Technology Portfolio" } as Bi,
      title: { id: "Implementasi Teknologi Pelabuhan Terdokumentasi", en: "Documented Port Technology Implementation" } as Bi,
      desc: { id: "Pusat kendali pelabuhan terpadu, peralatan listrik darat kapal, pemantauan konsumsi bahan bakar kapal, pemantauan energi, pengelolaan operasi terminal, dan terminal otomatis.", en: "Integrated port control center, shore power equipment, ship fuel consumption monitoring, energy monitoring, terminal operation management, and automated terminals." } as Bi,
      meta: { id: "Bersumber dari materi teknis GalaxyLink", en: "Sourced from GalaxyLink technical materials" } as Bi,
    },
  ],
};

export const contact = {
  eyebrow: { id: "Hubungi Kami", en: "Contact Us" } as Bi,
  title: { id: "Mari bangun pertumbuhan yang bernilai bersama", en: "Let's build valuable growth together" } as Bi,
  subtitle: { id: "Tim SINDO GROUPS siap mendiskusikan kerja sama, investasi, dan solusi teknologi untuk kebutuhan Anda.", en: "The SINDO GROUPS team is ready to discuss cooperation, investment, and technology solutions for your needs." } as Bi,
  formLabels: {
    name: { id: "Nama Lengkap", en: "Full Name" } as Bi,
    email: { id: "Email", en: "Email" } as Bi,
    phone: { id: "Telepon / WhatsApp", en: "Phone / WhatsApp" } as Bi,
    organization: { id: "Organisasi / Perusahaan", en: "Organization / Company" } as Bi,
    interest: { id: "Bidang Minat", en: "Area of Interest" } as Bi,
    message: { id: "Pesan", en: "Message" } as Bi,
    submit: { id: "Kirim Pesan", en: "Send Message" } as Bi,
    success: { id: "Terima kasih! Pesan Anda telah kami terima. Tim kami akan segera menghubungi Anda.", en: "Thank you! Your message has been received. Our team will contact you shortly." } as Bi,
    error: { id: "Maaf, terjadi kesalahan. Silakan coba lagi atau hubungi kami via WhatsApp.", en: "Sorry, an error occurred. Please try again or contact us via WhatsApp." } as Bi,
  },
  interestOptions: [
    { id: "Smart Port & Otomasi", en: "Smart Port & Automation" },
    { id: "Logistik & Kemaritiman", en: "Logistics & Maritime" },
    { id: "Energi & Konektivitas", en: "Energy & Connectivity" },
    { id: "Investasi & Kerja Sama", en: "Investment & Cooperation" },
    { id: "Mobilitas Udara (UAV/Drone)", en: "Air Mobility (UAV/Drone)" },
    { id: "Lainnya", en: "Other" },
  ],
};
