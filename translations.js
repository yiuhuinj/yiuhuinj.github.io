/* ===========================
   Lightbox 放大弹窗
   =========================== */
(function () {
  var box = document.getElementById('lightbox');
  if (!box) return;
  var bigImg = box.querySelector('.lb-img');
  var closeBtn = box.querySelector('.lb-close');

  function open(src) {
    bigImg.src = src;
    box.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function close() {
    box.hidden = true;
    bigImg.src = '';
    document.body.style.overflow = '';
  }

  var cert = document.querySelector('.cert-img');
  if (cert) cert.addEventListener('click', function () { open(cert.src); });

  document.addEventListener('click', function (e) {
    if (e.target.classList && e.target.classList.contains('gallery-item')) {
      open(e.target.src);
    }
  });

  closeBtn.addEventListener('click', close);
  box.addEventListener('click', function (e) {
    if (e.target === box) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !box.hidden) close();
  });
})();

/* ===========================
   6 语言翻译字典
   =========================== */
var I18N = {
  "zh-CN": {
    lang_label: "中文",
    hero_title: "2026级准大一新生 · 物流管理（中外合作办学）",
    hero_tag: "四川外国语大学 · 共青团员 · CFA 提前修习",
    section_basic: "基本信息",
    section_education: "教育经历",
    section_projects: "项目经验",
    section_skills: "技能栈",
    section_interests: "兴趣特长",
    section_gallery: "个人作品",
    section_contact: "联系方式",
    label_name: "姓名",
    label_age: "年龄",
    label_identity: "身份",
    label_political: "政治面貌",
    label_school: "就读院校专业",
    label_school2: "就读院校",
    label_phone: "联系电话",
    label_email: "电子邮箱",
    value_identity: "2026级准大一新生",
    value_political: "共青团员",
    value_school: "四川外国语大学 · 物流管理专业（中外合作办学）",
    value_school2: "四川外国语大学 · 物流管理专业（中外合作办学）",
    edu_title: "四川外国语大学 · 物流管理专业（中外合作办学）",
    edu_in_progress: "在读",
    edu_p1: "2026级中外合作办学方向在读，同步修习中外双语物流课程，具备外语应用优势与国际物流视野，提前规划大学全周期学习路径。",
    edu_p2: "已通过推免通道提前参与 CFA 项目系统学习，搭建金融基础知识框架，构建跨领域复合能力基础。",
    proj1_title: "校园二手图书自主实践项目",
    proj1_role: "学生自主发起 · 全链路独立执行",
    proj1_p1: "独立完成高中及周边校园二手图书全链路运营：选品、货源对接、线下点位、客户沟通，服务师生百余人，完成全部计划销量。",
    proj1_p2: "在客户沟通中灵活响应个性化需求，积累一线对接经验与问题快速解决能力。",
    proj2_title: "多岗位暑期全职实践",
    proj2_date: "多个学年暑假期间",
    proj2_role: "一线实操 · 基层岗位轮岗",
    proj2_p1: "长期利用寒暑假参与不同类型全职暑期工，深耕一线执行，适应职场节奏，练就不推诿、强执行力的工作风格，能快速上手陌生任务。",
    skill1_cat: "证书 / AI 应用",
    skill1_desc: "持有阿里巴巴达摩院 AI 训练师官方证书，掌握 AI 数据处理与工具落地应用，能借助 AI 提升工作效率。",
    skill2_cat: "客户沟通",
    skill2_desc: "拥有直面需求、对接协调的实际经验，擅长快速捕捉对方核心诉求，完成顺畅的双向沟通。",
    skill3_cat: "基础应用",
    skill3_desc: "熟练使用 Office 办公三件套，具备清晰的文字整理与数据基础梳理能力。",
    interest1_cat: "📷 摄影",
    interest1_desc: "日常热爱记录生活与场景细节，掌握基础拍摄与修图技巧，可协助活动记录与素材整理。",
    interest2_cat: "🎵 音乐",
    interest2_desc: "长期热爱音乐，具备良好审美感知力，能活跃团队氛围，适配集体活动配合需求。",
    interest3_cat: "💪 健身",
    interest3_desc: "长期规律健身，拥有强健体魄与不服输的意志力，能适配高强度实践与志愿活动节奏。",
    gallery_tip: "点击图片可放大查看",
    btn_download: "下载 PDF 完整简历",
    download_tip: "点击按钮即可保存 PDF 文件到本地",
    alt_cert: "AI 训练师官方证书（点击放大）",
    alt_gallery: "摄影作品"
  },
  "en": {
    lang_label: "English",
    hero_title: "Incoming Freshman 2026 · Logistics Management (Sino-Foreign Program)",
    hero_tag: "Sichuan International Studies Univ. · CYL Member · CFA Preparatory Studies",
    section_basic: "Basic Info",
    section_education: "Education",
    section_projects: "Experience",
    section_skills: "Skills",
    section_interests: "Interests",
    section_gallery: "Personal Works",
    section_contact: "Contact",
    label_name: "Name",
    label_age: "Age",
    label_identity: "Status",
    label_political: "Political Status",
    label_school: "University & Major",
    label_school2: "University",
    label_phone: "Phone",
    label_email: "Email",
    value_identity: "Incoming Freshman 2026",
    value_political: "Communist Youth League Member",
    value_school: "Sichuan International Studies University · Logistics Management (Sino-Foreign Program)",
    value_school2: "Sichuan International Studies University · Logistics Management (Sino-Foreign Program)",
    edu_title: "Sichuan International Studies University · Logistics Management (Sino-Foreign Program)",
    edu_in_progress: "In Progress",
    edu_p1: "Enrolled in the 2026 Sino-Foreign cooperative program, taking bilingual logistics courses. Possesses foreign language advantages and an international logistics perspective.",
    edu_p2: "Qualified for the recommendation pathway and started systematic CFA program studies ahead of schedule.",
    proj1_title: "Campus Secondhand Book Independent Practice Project",
    proj1_role: "Student-Initiated · End-to-End Execution",
    proj1_p1: "Independently completed full-link operations for secondhand books: product selection, supplier coordination, offline points, customer communication. Served over one hundred teachers and students.",
    proj1_p2: "Flexibly responded to personalized needs in customer communication, accumulating frontline experience.",
    proj2_title: "Multi-Position Summer Full-Time Practice",
    proj2_date: "Summer Vacations of Multiple Academic Years",
    proj2_role: "Frontline Execution · Grassroots Rotation",
    proj2_p1: "Long-term participation in various full-time summer jobs. Adapted to workplace rhythm, developed a strong-execution work style, and quickly learns unfamiliar tasks.",
    skill1_cat: "Certificates / AI",
    skill1_desc: "Holder of Alibaba DAMO Academy official AI Trainer certificate. Proficient in AI data processing and tool application.",
    skill2_cat: "Client Communication",
    skill2_desc: "Practical experience in facing needs and coordination. Good at quickly capturing core demands.",
    skill3_cat: "Office Suite",
    skill3_desc: "Proficient in Office Suite (Word, PowerPoint, Excel). Has clear document organization and basic data sorting capabilities.",
    interest1_cat: "📷 Photography",
    interest1_desc: "Passionate about documenting life and scene details. Master basic shooting and editing skills.",
    interest2_cat: "🎵 Music",
    interest2_desc: "Long-term passion for music with good aesthetic perception. Can enliven team atmosphere.",
    interest3_cat: "💪 Fitness",
    interest3_desc: "Regular fitness routine. Strong body and a strong-willed spirit. Adapts to high-intensity rhythms.",
    gallery_tip: "Click any image to enlarge",
    btn_download: "Download Full Resume (PDF)",
    download_tip: "Click the button to save the PDF to your device",
    alt_cert: "AI Trainer Official Certificate (click to enlarge)",
    alt_gallery: "Photography work"
  },
  "fr": {
    lang_label: "Français",
    hero_title: "Étudiant entrant 2026 · Gestion logistique (programme sino-étranger)",
    hero_tag: "Univ. des Études Internationales du Sichuan · Membre LJC · Préparation CFA",
    section_basic: "Informations",
    section_education: "Formation",
    section_projects: "Expérience",
    section_skills: "Compétences",
    section_interests: "Centres d'intérêt",
    section_gallery: "Galerie",
    section_contact: "Contact",
    label_name: "Nom",
    label_age: "Âge",
    label_identity: "Statut",
    label_political: "Statut politique",
    label_school: "Université & Filière",
    label_school2: "Université",
    label_phone: "Téléphone",
    label_email: "E-mail",
    value_identity: "Étudiant entrant 2026",
    value_political: "Membre de la Ligue de la Jeunesse Communiste",
    value_school: "Université des Études Internationales du Sichuan · Gestion logistique (programme sino-étranger)",
    value_school2: "Université des Études Internationales du Sichuan · Gestion logistique (programme sino-étranger)",
    edu_title: "Université des Études Internationales du Sichuan · Gestion logistique (programme sino-étranger)",
    edu_in_progress: "En cours",
    edu_p1: "Inscrit au programme sino-étranger 2026, suit des cours de logistique bilingues. Dispose d'avantages linguistiques et d'une perspective internationale.",
    edu_p2: "Qualifié pour le parcours de recommandation et a commencé les études systématiques du programme CFA avant l'échéance.",
    proj1_title: "Projet pratique indépendant de livres d'occasion sur le campus",
    proj1_role: "Initié par l'étudiant · Exécution de bout en bout",
    proj1_p1: "A achevé indépendamment les opérations complètes de livres d'occasion: sélection, coordination fournisseurs, communication client. A servi plus d'une centaine d'enseignants et d'étudiants.",
    proj1_p2: "A répondu flexiblement aux besoins personnalisés, accumulant une expérience de premier contact.",
    proj2_title: "Stage estival à temps plein dans plusieurs postes",
    proj2_date: "Pendant les vacances d'été de plusieurs années académiques",
    proj2_role: "Exécution de terrain · Rotation de postes",
    proj2_p1: "Participation à long terme à divers emplois d'été à temps plein. S'est adapté au rythme du monde professionnel, a développé un style de travail exécutif.",
    skill1_cat: "Certificats / IA",
    skill1_desc: "Titulaire du certificat officiel de Formateur IA de l'Académie DAMO d'Alibaba. Maîtrise le traitement de données IA.",
    skill2_cat: "Communication client",
    skill2_desc: "Expérience pratique face aux besoins et à la coordination. Bonne capacité à saisir rapidement les demandes essentielles.",
    skill3_cat: "Suite Office",
    skill3_desc: "Maîtrise de la Suite Office (Word, PowerPoint, Excel). Capacités d'organisation de documents et de tri de données.",
    interest1_cat: "📷 Photographie",
    interest1_desc: "Passionné par la documentation de la vie et des détails de scènes. Maîtrise les techniques de base de prise de vue.",
    interest2_cat: "🎵 Musique",
    interest2_desc: "Passion de longue date pour la musique avec une bonne perception esthétique. Peut animer l'atmosphère d'équipe.",
    interest3_cat: "💪 Fitness",
    interest3_desc: "Routine de fitness régulière. Corps fort et esprit volontaire. S'adapte au rythme des pratiques intensives.",
    gallery_tip: "Cliquez sur une image pour l'agrandir",
    btn_download: "Télécharger le CV complet (PDF)",
    download_tip: "Cliquez sur le bouton pour enregistrer le PDF",
    alt_cert: "Certificat officiel de Formateur IA (cliquez pour agrandir)",
    alt_gallery: "Œuvre photographique"
  },
  "ja": {
    lang_label: "日本語",
    hero_title: "2026年度新入生予定 · 物流管理（中外合作プログラム）",
    hero_tag: "四川外国語大学 · 共青团員 · CFA 準備学習",
    section_basic: "基本情報",
    section_education: "学歴",
    section_projects: "経験",
    section_skills: "スキル",
    section_interests: "趣味・特技",
    section_gallery: "ギャラリー",
    section_contact: "連絡先",
    label_name: "氏名",
    label_age: "年齢",
    label_identity: "身分",
    label_political: "政治的身分",
    label_school: "大学・専攻",
    label_school2: "大学",
    label_phone: "電話番号",
    label_email: "メール",
    value_identity: "2026年度新入生予定",
    value_political: "共青团員",
    value_school: "四川外国語大学 · 物流管理専攻（中外合作プログラム）",
    value_school2: "四川外国語大学 · 物流管理専攻（中外合作プログラム）",
    edu_title: "四川外国語大学 · 物流管理専攻（中外合作プログラム）",
    edu_in_progress: "在学中",
    edu_p1: "2026年度中外合作プログラムに在籍し、バイリンガル物流コースを履修。語学力の強みと国際物流の視点を持つ。",
    edu_p2: "推薦ルートを通過し、CFAプログラムの体系的学習を前倒しで開始。",
    proj1_title: "キャンパス中古書籍自主実践プロジェクト",
    proj1_role: "学生主導 · 全リンク独立実行",
    proj1_p1: "中古書籍全リンク運営を独立して実施：商品選定、供給元調整、顧客対応。100名以上の教師・学生にサービス提供。",
    proj1_p2: "顧客コミュニケーションにおいて個別ニーズに柔軟に対応し、現場経験を蓄積。",
    proj2_title: "複数ポジション夏季フルタイム実践",
    proj2_date: "複数年度の夏休み期間",
    proj2_role: "現場実行 · 基层ローテーション",
    proj2_p1: "長期的に多様な夏季アルバイトに従事。職場リズムに適応し、強い実行力のある働き方を身につける。",
    skill1_cat: "資格 / AI応用",
    skill1_desc: "アリババダモ院AIトレーナー公式資格保有。AIデータ処理とツール活用を習得。",
    skill2_cat: "顧客コミュニケーション",
    skill2_desc: "ニーズに直面し調整する実務経験あり。相手の核心的な要求を迅速に捉えるのが得意。",
    skill3_cat: "基本アプリケーション",
    skill3_desc: "Office三種類（Word、PowerPoint、Excel）を熟练に使用。明確な文章整理と基本的なデータ整理能力あり。",
    interest1_cat: "📷 写真",
    interest1_desc: "日常的に生活や場面の細部を記録するのが好き。基本的な撮影と画像加工技術を習得。",
    interest2_cat: "🎵 音楽",
    interest2_desc: "長期的に音楽を愛好し、良好な審美的感受性を持つ。チームの雰囲気を盛り上げられる。",
    interest3_cat: "💪 フィットネス",
    interest3_desc: "長期的に規則正しくトレーニングを実施。強健な体と不屈の意志力。",
    gallery_tip: "クリックで写真を拡大表示",
    btn_download: "PDF完全版履歴書をダウンロード",
    download_tip: "ボタンをクリックするとPDFが保存されます",
    alt_cert: "AIトレーナー公式資格（クリックで拡大）",
    alt_gallery: "写真作品"
  },
  "ru": {
    lang_label: "Русский",
    hero_title: "Будущий первокурсник 2026 · Логистический менеджмент (китайско-иностранная программа)",
    hero_tag: "Сычуаньский университет международных исследований · Член ЛКСМ · Подготовка к CFA",
    section_basic: "Основная информация",
    section_education: "Образование",
    section_projects: "Опыт",
    section_skills: "Навыки",
    section_interests: "Интересы",
    section_gallery: "Галерея",
    section_contact: "Контакты",
    label_name: "ФИО",
    label_age: "Возраст",
    label_identity: "Статус",
    label_political: "Политический статус",
    label_school: "Университет и специальность",
    label_school2: "Университет",
    label_phone: "Телефон",
    label_email: "Электронная почта",
    value_identity: "Будущий первокурсник 2026",
    value_political: "Член Коммунистической лиги молодёжи",
    value_school: "Сычуаньский университет международных исследований · Логистический менеджмент (китайско-иностранная программа)",
    value_school2: "Сычуаньский университет международных исследований · Логистический менеджмент (китайско-иностранная программа)",
    edu_title: "Сычуаньский университет международных исследований · Логистический менеджмент (китайско-иностранная программа)",
    edu_in_progress: "В процессе",
    edu_p1: "Зачислен по китайско-иностранной программе 2026 года, изучает двуязычные курсы логистики. Обладает преимуществами в иноязычном применении.",
    edu_p2: "Прошёл по рекомендованному пути и начал системное изучение программы CFA.",
    proj1_title: "Самостоятельный проект практики подержанных книг на кампусе",
    proj1_role: "Инициатор-студент · Полный цикл независимо",
    proj1_p1: "Самостоятельно осуществил полный цикл операций с подержанными книгами. Обслужил более ста преподавателей и студентов.",
    proj1_p2: "Гибко реагировал на индивидуальные потребности, накопил опыт работы на передовой.",
    proj2_title: "Летняя полная занятость на нескольких должностях",
    proj2_date: "Летние каникулы нескольких учебных лет",
    proj2_role: "Работа на передовой · Ротация на базовых должностях",
    proj2_p1: "Долгосрочно участвует в различных летних полных вакансиях. Адаптируется к ритму работы, выработал сильную исполнительность.",
    skill1_cat: "Сертификаты / ИИ",
    skill1_desc: "Обладатель официального сертификата тренера ИИ Академии DAMO Alibaba. Владеет обработкой данных ИИ.",
    skill2_cat: "Общение с клиентами",
    skill2_desc: "Практический опыт работы с потребностями и координации. Умеет быстро выделять ключевые требования.",
    skill3_cat: "Офисные приложения",
    skill3_desc: "Свободно владеет Office Suite (Word, PowerPoint, Excel). Чёткие навыки整理 документов и базовой обработки данных.",
    interest1_cat: "📷 Фотография",
    interest1_desc: "Ежедневно любит документировать детали жизни и сцен. Владеет базовыми приёмами съёмки.",
    interest2_cat: "🎵 Музыка",
    interest2_desc: "Долгосрочная любовь к музыке с хорошим эстетическим восприятием. Может оживлять атмосферу команды.",
    interest3_cat: "💪 Фитнес",
    interest3_desc: "Регулярные тренировки. Крепкое телосложение и непреклонная воля. Адаптируется к интенсивным практикам.",
    gallery_tip: "Нажмите на изображение для увеличения",
    btn_download: "Скачать полное резюме (PDF)",
    download_tip: "Нажмите кнопку, чтобы сохранить PDF на устройство",
    alt_cert: "Официальный сертификат тренера ИИ (нажмите для увеличения)",
    alt_gallery: "Личная работа"
  },
  "ar": {
    lang_label: "العربية",
    hero_title: "طالب مستقبلي 2026 · إدارة الخدمات اللوجستية (برنامج صيني-أجنبي)",
    hero_tag: "جامعة سيتشوان للدراسات الدولية · عضو رابطة الشباب الشيوعي · دراسة CFA المبكرة",
    section_basic: "المعلومات الأساسية",
    section_education: "التعليم",
    section_projects: "الخبرة",
    section_skills: "المهارات",
    section_interests: "الاهتمامات",
    section_gallery: "الأعمال الشخصية",
    section_contact: "الاتصال",
    label_name: "الاسم",
    label_age: "العمر",
    label_identity: "الحالة",
    label_political: "الحالة السياسية",
    label_school: "الجامعة والتخصص",
    label_school2: "الجامعة",
    label_phone: "الهاتف",
    label_email: "البريد الإلكتروني",
    value_identity: "طالب مستقبلي 2026",
    value_political: "عضو رابطة الشباب الشيوعي",
    value_school: "جامعة سيتشوان للدراسات الدولية · إدارة الخدمات اللوجستية (برنامج صيني-أجنبي)",
    value_school2: "جامعة سيتشوان للدراسات الدولية · إدارة الخدمات اللوجستية (برنامج صيني-أجنبي)",
    edu_title: "جامعة سيتشوان للدراسات الدولية · إدارة الخدمات اللوجستية (برنامج صيني-أجنبي)",
    edu_in_progress: "قيد الدراسة",
    edu_p1: "مسجل في برنامج 2026 الصيني-الأجنبي، يدرس مقررات لوجستية ثنائية اللغة. يتمتع بمزايا التطبيق اللغوي الأجنبي.",
    edu_p2: "مؤهل لمسار التوصية وبدأ الدراسة المنهجية لبرنامج CFA قبل الموعد المحدد.",
    proj1_title: "مشروع الممارسة المستقلة للكتب المستعملة في الحرم الجامعي",
    proj1_role: "مبادرة طالب · تنفيذ كامل السلسلة",
    proj1_p1: "أنجز بشكل مستقل العمليات الكاملة للكتب المستعملة. خدم أكثر من مئة معلم وطالب.",
    proj1_p2: "استجاب بمرونة للاحتياجات المخصصة في التواصل مع العملاء، اكتسب خبرة في التعامل الميداني.",
    proj2_title: "الممارسة الصيفية بدوام كامل في وظائف متعددة",
    proj2_date: "فترات العطلة الصيفية لعدة سنوات أكاديمية",
    proj2_role: "تنفيذ ميداني · دوران الوظائف الأساسية",
    proj2_p1: "شارك على المدى الطويل في وظائف صيفية بدوام كامل متنوعة. يتكيف مع إيقاع العمل، طور أسلوب عمل تنفيذي قوي.",
    skill1_cat: "الشهادات / تطبيقات الذكاء الاصطناعي",
    skill1_desc: "حامل شهادة مدرب الذكاء الاصطناعي الرسمية من دامو أكاديمي. يتقن معالجة بيانات الذكاء الاصطناعي.",
    skill2_cat: "التواصل مع العملاء",
    skill2_desc: "خبرة عملية في مواجهة الاحتياجات والتنسيق. جيد في استيعاب المطالب الأساسية بسرعة.",
    skill3_cat: "التطبيقات الأساسية",
    skill3_desc: "يتقن مجموعة Office (Word، PowerPoint، Excel). لديه قدرات واضحة في تنظيم النصوص.",
    interest1_cat: "📷 التصوير",
    interest1_desc: "يحب توثيق الحياة وتفاصيل المشاهد يومياً. يتقن أساسيات التصوير والتعديل.",
    interest2_cat: "🎵 الموسيقى",
    interest2_desc: "شغف طويل الأمد بالموسيقى مع إدراك جمالي جيد. يمكنه تنشيط جو الفريق.",
    interest3_cat: "💪 اللياقة البدنية",
    interest3_desc: "تمارين لياقة بدنية منتظمة. بنية قوية وإرادة قوية. يتكيف مع إيقاع الممارسات المكثفة.",
    gallery_tip: "انقر على أي صورة لتكبيرها",
    btn_download: "تحميل السيرة الذاتية الكاملة (PDF)",
    download_tip: "انقر على الزر لحفظ ملف PDF على جهازك",
    alt_cert: "شهادة مدرب الذكاء الاصطناعي الرسمية (انقر للتكبير)",
    alt_gallery: "عمل شخصي"
  }
};

/* ===========================
   语言切换引擎 — 全局函数（供 onclick 调用）
   =========================== */
(function () {
  var STORAGE_KEY = 'resume_lang';
  var DEFAULT_LANG = 'zh-CN';
  var SUPPORTED = ['zh-CN', 'en', 'fr', 'ja', 'ru', 'ar'];

  function getLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch(e) {}
    var nav = (navigator.language || '').toLowerCase();
    if (nav.indexOf('zh') === 0) return DEFAULT_LANG;
    if (nav.indexOf('en') === 0) return 'en';
    if (nav.indexOf('fr') === 0) return 'fr';
    if (nav.indexOf('ja') === 0) return 'ja';
    if (nav.indexOf('ru') === 0) return 'ru';
    if (nav.indexOf('ar') === 0) return 'ar';
    return DEFAULT_LANG;
  }

  function applyLang(lang) {
    var dict = I18N[lang] || I18N[DEFAULT_LANG];

    document.querySelectorAll('[data-i18n-key]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-key');
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var mapping = el.getAttribute('data-i18n-attr');
      var parts = mapping.split('|');
      if (dict[parts[1]]) el.setAttribute(parts[0], dict[parts[1]]);
    });

    document.querySelectorAll('.lang-option').forEach(function (opt) {
      opt.classList.toggle('is-active', opt.getAttribute('onclick') && opt.getAttribute('onclick').indexOf("'" + lang + "'") !== -1);
    });

    var isRTL = lang === 'ar';
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.body.classList.toggle('is-rtl', isRTL);

    try { localStorage.setItem(STORAGE_KEY, lang); } catch(e) {}
  }

  function updateToggleLabel(lang) {
    var dict = I18N[lang] || I18N[DEFAULT_LANG];
    var labelEl = document.querySelector('.lang-btn-label');
    if (labelEl && dict.lang_label) labelEl.textContent = dict.lang_label;
  }

  // 暴露全局函数
  window.toggleLangMenu = function () {
    var menu = document.getElementById('langMenu');
    var toggle = document.getElementById('langToggle');
    if (menu.hasAttribute('hidden')) {
      menu.removeAttribute('hidden');
      toggle.setAttribute('aria-expanded', 'true');
    } else {
      menu.setAttribute('hidden', '');
      toggle.setAttribute('aria-expanded', 'false');
    }
  };

  window.chooseLang = function (lang) {
    applyLang(lang);
    updateToggleLabel(lang);
    var menu = document.getElementById('langMenu');
    var toggle = document.getElementById('langToggle');
    menu.setAttribute('hidden', '');
    toggle.setAttribute('aria-expanded', 'false');
  };

  // 点击外部关闭
  document.addEventListener('click', function (e) {
    var menu = document.getElementById('langMenu');
    var toggle = document.getElementById('langToggle');
    if (!menu || menu.hasAttribute('hidden')) return;
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      menu.setAttribute('hidden', '');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Esc 关闭
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      var menu = document.getElementById('langMenu');
      var toggle = document.getElementById('langToggle');
      if (menu && !menu.hasAttribute('hidden')) {
        menu.setAttribute('hidden', '');
        toggle.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // 初始化
  var currentLang = getLang();
  applyLang(currentLang);
  updateToggleLabel(currentLang);
})();
