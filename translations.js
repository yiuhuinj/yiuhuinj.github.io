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
    hero_title: "AI 训练师 · CFA 提前修习 · 跨领域学习者",
    hero_tag: "摄影 / 音乐 / 健身 · 实践驱动 · 持续成长",
    hero_intro_lead: "四川外国语大学物流管理（中外合作办学）2026级新生",
    hero_intro_rest: "，阿里巴巴达摩院 AI 训练师持证者。以实践驱动成长，正在探索物流、金融与 AI 的交叉可能。",
    section_basic: "基本信息",
    section_education: "教育经历",
    section_projects: "项目经验",
    section_skills: "技能栈",
    section_interests: "兴趣特长",
    section_intentions: "意向岗位",
    intention1_title: "校创新创业就业服务中心",
    intention1_desc: "希望加入创新创业就业服务中心，借助自身的实践能力和沟通优势，在校园创新创业活动中贡献组织与服务力量，同时拓展视野、积累经验。",
    intention2_title: "志愿者协会",
    intention2_desc: "怀揣服务热忱，愿投身校园公益与志愿服务，用行动传递温暖，提升自身的团队协作与社会责任感。",
    intention3_title: "校科协",
    intention3_desc: "对科技与创新充满兴趣，期待在校科协中参与科普活动与学术交流，拓展知识边界，提升科技素养与组织能力。",
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
    section_journey: "求学之路",
    journey_title: "四川外国语大学 · 物流管理专业（中外合作办学）",
    journey_in_progress: "在读",
    leader_badge: "现任",
    leader_title: "2026级年级长",
    leader_desc: "负责统筹年级事务，协调师生沟通，组织年级活动，搭建高效的信息传递与反馈机制，致力于营造积极向上的年级氛围。",
    journey_p1: "2026级中外合作办学方向在读，同步修习中外双语物流课程，具备外语应用优势与国际物流视野，提前规划大学全周期学习路径。",
    journey_p2: "已通过推免通道提前参与 CFA 项目系统学习，搭建金融基础知识框架，构建跨领域复合能力基础。",
    journey_p3: "积极投身学生工作，在实践中锻炼组织协调与领导力，为全面发展打下坚实基础。",
    note_basic: "大学的第一张名片",
    note_journey: "在川外，遇见更好的自己",
    note_projects: "实践是最好的老师",
    note_skills: "不断升级的装备库",
    note_intentions: "心之所向，素履以往",
    note_interests: "热爱生活，全面发展",
    note_gallery: "用镜头记录美好瞬间",
    note_contact: "期待与您的连接",
    motto_text: "保持饥饿，保持学习",
    motto_en: "STAY HUNGRY, STAY LEARNING",
    gallery_tip: "点击图片可放大查看",
    btn_download: "下载 PDF 完整简历",
    download_tip: "点击按钮即可保存 PDF 文件到本地",
    alt_cert: "AI 训练师官方证书（点击放大）",
    alt_gallery: "摄影作品"
  },
  "en": {
    lang_label: "English",
    hero_title: "AI Trainer · CFA Preparatory Studies · Cross-Disciplinary Learner",
    hero_tag: "Photography / Music / Fitness · Practice-Driven · Continuous Growth",
    hero_intro_lead: "An incoming 2026 freshman in Logistics Management (Sino-Foreign Program) at Sichuan International Studies University",
    hero_intro_rest: ", and a certified AI Trainer of Alibaba DAMO Academy. Driven by hands-on practice, exploring the intersection of logistics, finance, and AI.",
    section_basic: "Basic Info",
    section_education: "Education",
    section_projects: "Experience",
    section_skills: "Skills",
    section_interests: "Interests",
    section_intentions: "Target Positions",
    intention1_title: "Campus Innovation & Employment Service Center",
    intention1_desc: "Aspiring to join the Innovation & Employment Service Center, contributing organizational and service strength to campus innovation activities with practical and communication skills.",
    intention2_title: "Volunteer Association",
    intention2_desc: "With a passion for service, dedicated to campus public welfare and volunteer work, spreading warmth while enhancing teamwork and social responsibility.",
    intention3_title: "Campus Science & Technology Association",
    intention3_desc: "Full of interest in technology and innovation, looking forward to participating in science outreach and academic exchanges, broadening knowledge and improving tech literacy.",
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
    section_journey: "Academic Journey",
    journey_title: "Sichuan International Studies University · Logistics Management (Sino-Foreign Program)",
    journey_in_progress: "In Progress",
    leader_badge: "Current",
    leader_title: "Grade Leader of Class 2026",
    leader_desc: "Responsible for coordinating grade affairs, facilitating teacher-student communication, organizing grade activities, and building efficient information transmission and feedback mechanisms to foster a positive grade atmosphere.",
    journey_p1: "Enrolled in the 2026 Sino-Foreign cooperative program, taking bilingual logistics courses. Possesses foreign language advantages and an international logistics perspective.",
    journey_p2: "Qualified for the recommendation pathway and started systematic CFA program studies ahead of schedule.",
    journey_p3: "Actively involved in student work, honing organizational coordination and leadership skills in practice, laying a solid foundation for comprehensive development.",
    note_basic: "The first business card of university",
    note_journey: "Meet a better self at SISU",
    note_projects: "Practice is the best teacher",
    note_skills: "Constantly upgrading equipment library",
    note_intentions: "Where the heart leads, follow",
    note_interests: "Love life, comprehensive development",
    note_gallery: "Capture beautiful moments through the lens",
    note_contact: "Looking forward to connecting with you",
    motto_text: "Stay Hungry, Stay Learning",
    motto_en: "STAY HUNGRY, STAY LEARNING",
    gallery_tip: "Click any image to enlarge",
    btn_download: "Download Full Resume (PDF)",
    download_tip: "Click the button to save the PDF to your device",
    alt_cert: "AI Trainer Official Certificate (click to enlarge)",
    alt_gallery: "Photography work"
  },
  "fr": {
    lang_label: "Français",
    hero_title: "Formateur IA · Préparation CFA · Apprenant multidisciplinaire",
    hero_tag: "Photographie / Musique / Fitness · Orienté pratique · Amélioration continue",
    hero_intro_lead: "Étudiant de la promotion 2026 en Gestion Logistique (programme sino-étranger) à l'Université des Études Internationales du Sichuan",
    hero_intro_rest: ", titulaire du certificat de Formateur IA de l'Académie DAMO d'Alibaba. Guidé par la pratique, j'explore l'intersection de la logistique, de la finance et de l'IA.",
    section_basic: "Informations",
    section_education: "Formation",
    section_projects: "Expérience",
    section_skills: "Compétences",
    section_interests: "Centres d'intérêt",
    section_intentions: "Postes visés",
    intention1_title: "Centre d'innovation et d'emploi du campus",
    intention1_desc: "Souhaitant rejoindre le Centre d'innovation et d'emploi, apportant mes forces organisationnelles et de communication aux activités d'innovation du campus.",
    intention2_title: "Association de bénévoles",
    intention2_desc: "Animé par la passion du service, je souhaite me consacrer au bien-être public et au bénévolat, renforçant l'esprit d'équipe et la responsabilité sociale.",
    intention3_title: "Association scientifique du campus",
    intention3_desc: "Passionné par la science et l'innovation, je souhaite participer à des activités de vulgarisation et à des échanges académiques pour élargir mes connaissances.",
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
    section_journey: "Parcours académique",
    journey_title: "Université des Études Internationales du Sichuan · Gestion logistique (programme sino-étranger)",
    journey_in_progress: "En cours",
    leader_badge: "Actuel",
    leader_title: "Chef de promotion 2026",
    leader_desc: "Chargé de coordonner les affaires de la promotion, de faciliter la communication entre enseignants et étudiants, d'organiser des activités et de mettre en place des mécanismes efficaces de transmission d'informations et de retour d'expérience pour favoriser une atmosphère positive.",
    journey_p1: "Inscrit au programme sino-étranger 2026, suit des cours de logistique bilingues. Dispose d'avantages linguistiques et d'une perspective internationale.",
    journey_p2: "Qualifié pour le parcours de recommandation et a commencé les études systématiques du programme CFA avant l'échéance.",
    journey_p3: "Activement impliqué dans le travail étudiant, perfectionnant les compétences en coordination organisationnelle et en leadership, posant des bases solides pour un développement complet.",
    note_basic: "La première carte de visite de l'université",
    note_journey: "Rencontrer un meilleur soi-même à SISU",
    note_projects: "La pratique est le meilleur professeur",
    note_skills: "Bibliothèque d'équipement en constante évolution",
    note_intentions: "Là où le cœur mène, suivez",
    note_interests: "Aimer la vie, développement complet",
    note_gallery: "Capturer de beaux moments à travers l'objectif",
    note_contact: "Au plaisir de vous connecter",
    motto_text: "Restez affamé, restez apprenant",
    motto_en: "STAY HUNGRY, STAY LEARNING",
    gallery_tip: "Cliquez sur une image pour l'agrandir",
    btn_download: "Télécharger le CV complet (PDF)",
    download_tip: "Cliquez sur le bouton pour enregistrer le PDF",
    alt_cert: "Certificat officiel de Formateur IA (cliquez pour agrandir)",
    alt_gallery: "Œuvre photographique"
  },
  "ja": {
    lang_label: "日本語",
    hero_title: "AIトレーナー · CFA先行学習 · 分野横断型学習者",
    hero_tag: "写真 / 音楽 / フィットネス · 実践重視 · 継続的成長",
    hero_intro_lead: "四川外国語大学 物流管理専攻（中外合作プログラム）2026年度入学予定の新入生",
    hero_intro_rest: "。アリババDAMOアカデミー認定AIトレーナー。実践を軸に成長し、物流・金融・AIの交差する可能性を探求しています。",
    section_basic: "基本情報",
    section_education: "学歴",
    section_projects: "経験",
    section_skills: "スキル",
    section_interests: "趣味・特技",
    section_intentions: "希望ポジション",
    intention1_title: "キャンパスイノベーション・就職サービスセンター",
    intention1_desc: "イノベーション・就職サービスセンターに加入し、実践力とコミュニケーション力を活かしてキャンパスのイノベーション活動に貢献したいと考えています。",
    intention2_title: "ボランティア協会",
    intention2_desc: "サービスへの情熱を持ち、キャンパスの公益・ボランティア活動に身を捧げ、チームワークと社会的責任感を高めたいと思います。",
    intention3_title: "キャンパス科学技術協会",
    intention3_desc: "科学技術とイノベーションに強い関心を持ち、科普活動や学術交流に参加して知識を広げ、科学技術リテラシーを高めたいと期待しています。",
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
    section_journey: "学業の道",
    journey_title: "四川外国語大学 · 物流管理専攻（中外合作プログラム）",
    journey_in_progress: "在学中",
    leader_badge: "現任",
    leader_title: "2026年度学年リーダー",
    leader_desc: "学年業務の調整、教師と学生のコミュニケーション促進、学年活動の企画、効率的な情報伝達とフィードバックの仕組みの構築を担当し、前向きな学年の雰囲気作りに努める。",
    journey_p1: "2026年度中外合作プログラムに在籍し、バイリンガル物流コースを履修。語学力の強みと国際物流の視点を持つ。",
    journey_p2: "推薦ルートを通過し、CFAプログラムの体系的学習を前倒しで開始。",
    journey_p3: "学生工作に積極的に取り組み、実践の中で組織調整力とリーダーシップを磨き、全面的な発展のための堅実な基盤を築く。",
    note_basic: "大学の最初の名刺",
    note_journey: "SISUでより良い自分に出会う",
    note_projects: "実践は最高の先生",
    note_skills: "常にアップグレードされる装備庫",
    note_intentions: "心の向かうところ、素足で赴く",
    note_interests: "生活を愛し、全面的に発展",
    note_gallery: "レンズを通じて美しい瞬間を記録",
    note_contact: "ご連絡をお待ちしています",
    motto_text: "飢えを保ち、学びを保つ",
    motto_en: "STAY HUNGRY, STAY LEARNING",
    gallery_tip: "クリックで写真を拡大表示",
    btn_download: "PDF完全版履歴書をダウンロード",
    download_tip: "ボタンをクリックするとPDFが保存されます",
    alt_cert: "AIトレーナー公式資格（クリックで拡大）",
    alt_gallery: "写真作品"
  },
  "ru": {
    lang_label: "Русский",
    hero_title: "Тренер ИИ · Подготовка к CFA · Междисциплинарный учащийся",
    hero_tag: "Фотография / Музыка / Фитнес · Практико-ориентированный · Постоянное развитие",
    hero_intro_lead: "Первокурсник 2026 года по специальности «Управление логистикой» (совместная программа) Сычуаньского университета иностранных языков",
    hero_intro_rest: ", сертифицированный тренер ИИ академии DAMO Alibaba. Развиваюсь через практику и исследую пересечение логистики, финансов и ИИ.",
    section_basic: "Основная информация",
    section_education: "Образование",
    section_projects: "Опыт",
    section_skills: "Навыки",
    section_interests: "Интересы",
    section_intentions: "Желаемые позиции",
    intention1_title: "Центр инноваций и трудоустройства кампуса",
    intention1_desc: "Стремлюсь присоединиться к Центру инноваций и трудоустройства, чтобы внести организационный вклад в инновационную деятельность кампуса, используя свои практические и коммуникативные навыки.",
    intention2_title: "Ассоциация волонтёров",
    intention2_desc: "Со страстью к служению готов посвящать себя общественной и волонтёрской деятельности кампуса, укрепляя командный дух и социальную ответственность.",
    intention3_title: "Научно-техническая ассоциация кампуса",
    intention3_desc: "Интересуюсь наукой и инновациями, надеюсь участвовать в научно-популярных мероприятиях и академических обменах, расширяя знания и повышая техническую грамотность.",
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
    section_journey: "Академический путь",
    journey_title: "Сычуаньский университет международных исследований · Логистический менеджмент (китайско-иностранная программа)",
    journey_in_progress: "В процессе",
    leader_badge: "Текущий",
    leader_title: "Староста курса 2026",
    leader_desc: "Отвечает за координацию дел курса, содействие коммуникации между преподавателями и студентами, организацию мероприятий курса, создание эффективных механизмов передачи информации и обратной связи для формирования позитивной атмосферы.",
    journey_p1: "Зачислен по китайско-иностранной программе 2026 года, изучает двуязычные курсы логистики. Обладает преимуществами в иноязычном применении.",
    journey_p2: "Прошёл по рекомендованному пути и начал системное изучение программы CFA.",
    journey_p3: "Активно участвует в студенческой работе, оттачивая навыки организационной координации и лидерства на практике, закладывая прочный фундамент для всестороннего развития.",
    note_basic: "Первая визитная карточка университета",
    note_journey: "Встретьте лучшего себя в SISU",
    note_projects: "Практика — лучший учитель",
    note_skills: "Постоянно обновляемая библиотека навыков",
    note_intentions: "Куда ведёт сердце, туда и иди",
    note_interests: "Любить жизнь, всестороннее развитие",
    note_gallery: "Запечатлеть прекрасные моменты через объектив",
    note_contact: "С нетерпением жду вашего сообщения",
    motto_text: "Оставайся голодным, оставайся учёным",
    motto_en: "STAY HUNGRY, STAY LEARNING",
    gallery_tip: "Нажмите на изображение для увеличения",
    btn_download: "Скачать полное резюме (PDF)",
    download_tip: "Нажмите кнопку, чтобы сохранить PDF на устройство",
    alt_cert: "Официальный сертификат тренера ИИ (нажмите для увеличения)",
    alt_gallery: "Личная работа"
  },
  "es": {
    lang_label: "Español",
    hero_title: "Entrenador de IA · Estudio anticipado de CFA · Aprendiz multidisciplinario",
    hero_tag: "Fotografía / Música / Fitness · Orientado a la práctica · Crecimiento continuo",
    hero_intro_lead: "Estudiante de primer año (promoción 2026) en Gestión Logística (programa sino-extranjero) de la Universidad de Estudios Internacionales de Sichuan",
    hero_intro_rest: ", y Entrenador de IA certificado por la Academia DAMO de Alibaba. Impulsado por la práctica, exploro la intersección entre logística, finanzas e IA.",
    section_basic: "Información básica",
    section_education: "Educación",
    section_projects: "Experiencia",
    section_skills: "Habilidades",
    section_interests: "Intereses",
    section_intentions: "Puestos objetivo",
    intention1_title: "Centro de Innovación y Empleo del Campus",
    intention1_desc: "Aspiro a unirme al Centro de Innovación y Empleo, contribuyendo con mis habilidades prácticas y de comunicación a las actividades de innovación del campus, mientras amplío mi visión y acumulo experiencia.",
    intention2_title: "Asociación de Voluntarios",
    intention2_desc: "Con pasión por el servicio, dedicado al bienestar público y voluntariado del campus, difundiendo calidez y mejorando el trabajo en equipo y la responsabilidad social.",
    intention3_title: "Asociación de Ciencia y Tecnología del Campus",
    intention3_desc: "Interesado en la ciencia y la innovación, espero participar en actividades de divulgación científica e intercambios académicos para ampliar conocimientos y mejorar la alfabetización tecnológica.",
    section_gallery: "Obras personales",
    section_contact: "Contacto",
    label_name: "Nombre",
    label_age: "Edad",
    label_identity: "Estado",
    label_political: "Afiliación política",
    label_school: "Universidad y especialidad",
    label_school2: "Universidad",
    label_phone: "Teléfono",
    label_email: "Correo electrónico",
    value_identity: "Futuro estudiante de primer año 2026",
    value_political: "Miembro de la Liga de la Juventud Comunista",
    value_school: "Universidad de Estudios Internacionales de Sichuan · Gestión Logística (Programa Sino-Extranjero)",
    value_school2: "Universidad de Estudios Internacionales de Sichuan · Gestión Logística (Programa Sino-Extranjero)",
    edu_title: "Universidad de Estudios Internacionales de Sichuan · Gestión Logística (Programa Sino-Extranjero)",
    edu_in_progress: "En curso",
    edu_p1: "Matriculado en el programa cooperativo sino-extranjero 2026, cursando asignaturas bilingües de logística. Cuenta con ventajas en idiomas extranjeros y visión logística internacional.",
    edu_p2: "Calificado para la vía de recomendación y ha comenzado el estudio sistemático del programa CFA por adelantado.",
    proj1_title: "Proyecto práctico independiente de libros usados en el campus",
    proj1_role: "Iniciativa estudiantil · Ejecución integral independiente",
    proj1_p1: "Completó de forma independiente la operación integral de libros usados: selección de productos, coordinación de proveedores, puntos de venta offline, comunicación con clientes. Atendió a más de cien profesores y estudiantes.",
    proj1_p2: "Respondió con flexibilidad a necesidades personalizadas en la comunicación con los clientes, acumulando experiencia práctica de primera línea.",
    proj2_title: "Práctica veraniega a tiempo completo en múltiples puestos",
    proj2_date: "Vacaciones de verano de varios años académicos",
    proj2_role: "Ejecución de primera línea · Rotación en puestos operativos",
    proj2_p1: "Participación a largo plazo en diversos trabajos de verano a tiempo completo. Se adaptó al ritmo laboral, desarrollando un estilo de trabajo ejecutivo y de fuerte compromiso.",
    skill1_cat: "Certificados / Aplicación de IA",
    skill1_desc: "Poseedor del certificado oficial de Entrenador de IA de la Academia DAMO de Alibaba. Domina el procesamiento de datos de IA y la aplicación de herramientas.",
    skill2_cat: "Comunicación con clientes",
    skill2_desc: "Experiencia práctica en enfrentar necesidades y coordinar. Bueno para captar rápidamente las demandas centrales y lograr una comunicación bidireccional fluida.",
    skill3_cat: "Aplicaciones básicas",
    skill3_desc: "Manejo competente de la suite Office (Word, PowerPoint, Excel). Capacidad clara de organización de documentos y clasificación básica de datos.",
    interest1_cat: "📷 Fotografía",
    interest1_desc: "Apasionado por registrar la vida y los detalles de las escenas cotidianas. Domina técnicas básicas de fotografía y edición.",
    interest2_cat: "🎵 Música",
    interest2_desc: "Amor de larga data por la música con buena percepción estética. Puede dinamizar el ambiente del equipo.",
    interest3_cat: "💪 Fitness",
    interest3_desc: "Rutina de ejercicio regular. Cuerpo fuerte y voluntad inquebrantable. Se adapta a ritmos de práctica de alta intensidad.",
    section_journey: "Trayectoria académica",
    journey_title: "Universidad de Estudios Internacionales de Sichuan · Gestión Logística (Programa Sino-Extranjero)",
    journey_in_progress: "En curso",
    leader_badge: "Actual",
    leader_title: "Líder de promoción 2026",
    leader_desc: "Encargado de coordinar los asuntos de la promoción, facilitar la comunicación entre profesores y estudiantes, organizar actividades de la promoción y establecer mecanismos eficientes de transmisión de información y retroalimentación para fomentar un ambiente positivo.",
    journey_p1: "Matriculado en el programa cooperativo sino-extranjero 2026, cursando asignaturas bilingües de logística. Cuenta con ventajas en idiomas extranjeros y visión logística internacional.",
    journey_p2: "Calificado para la vía de recomendación y ha comenzado el estudio sistemático del programa CFA por adelantado.",
    journey_p3: "Participación activa en el trabajo estudiantil, perfeccionando habilidades de coordinación organizativa y liderazgo en la práctica, sentando bases sólidas para un desarrollo integral.",
    note_basic: "La primera tarjeta de presentación de la universidad",
    note_journey: "Encuentra un mejor yo en SISU",
    note_projects: "La práctica es el mejor maestro",
    note_skills: "Biblioteca de habilidades en constante actualización",
    note_intentions: "Donde el corazón guía, seguir",
    note_interests: "Amar la vida, desarrollo integral",
    note_gallery: "Capturar momentos hermosos a través del objetivo",
    note_contact: "Esperando con interés su contacto",
    motto_text: "Mantente hambriento, mantente aprendiendo",
    motto_en: "STAY HUNGRY, STAY LEARNING",
    gallery_tip: "Haga clic en la imagen para ampliarla",
    btn_download: "Descargar currículum completo (PDF)",
    download_tip: "Haga clic en el botón para guardar el PDF en su dispositivo",
    alt_cert: "Certificado oficial de Entrenador de IA (haga clic para ampliar)",
    alt_gallery: "Obra personal"
  },
  "ar": {
    lang_label: "العربية",
    hero_title: "مدرب ذكاء اصطناعي · دراسة CFA مبكرة · متعلم متعدد التخصصات",
    hero_tag: "تصوير / موسيقى / لياقة · مدفوع بالممارسة · نمو مستمر",
    hero_intro_lead: "طالب جديد (دفعة 2026) في تخصص إدارة اللوجستيات (برنامج تعاون صيني أجنبي) بجامعة سيتشوان للدراسات الدولية",
    hero_intro_rest: "، وحاصل على شهادة مدرب ذكاء اصطناعي من أكاديمية DAMO التابعة لعلي بابا. أتعلم من خلال الممارسة وأستكشف تقاطع اللوجستيات والمالية والذكاء الاصطناعي.",
    section_basic: "المعلومات الأساسية",
    section_education: "التعليم",
    section_projects: "الخبرة",
    section_skills: "المهارات",
    section_interests: "الاهتمامات",
    section_intentions: "الوظائف المستهدفة",
    intention1_title: "مركز الابتكار والتوظيف بالحرم الجامعي",
    intention1_desc: "أسعى للانضمام إلى مركز الابتكار والتوظيف، للمساهمة بقواتي التنظيمية والخدمية في أنشطة الابتكار الجامعية بالاعتماد على مهاراتي العملية والاتصالية.",
    intention2_title: "جمعية المتطوعين",
    intention2_desc: "بشغف الخدمة، أتطلع للتفرغ للأعمال الخيرية والتطوعية الجامعية، لنشر الدفء وتعزيز روح الفريق والمسؤولية الاجتماعية.",
    intention3_title: "جمعية العلوم والتكنولوجيا الجامعية",
    intention3_desc: "مهتم بالعلم والابتكار، وآمل بالمشاركة في أنشطة النشر العلمي والتبادلات الأكاديمية لتوسيع معرفتي ورفع الثقافة التقنية.",
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
    section_journey: "المسيرة الأكاديمية",
    journey_title: "جامعة سيتشوان للدراسات الدولية · إدارة الخدمات اللوجستية (برنامج صيني-أجنبي)",
    journey_in_progress: "قيد الدراسة",
    leader_badge: "الحالي",
    leader_title: "قائد دفعة 2026",
    leader_desc: "مسؤول عن تنسيق شؤون الدفعة، وتسهيل التواصل بين المعلمين والطلاب، وتنظيم أنشطة الدفعة، وبناء آليات فعالة لنقل المعلومات والتغذية الراجعة لخلق جو إيجابي.",
    journey_p1: "مسجل في برنامج 2026 الصيني-الأجنبي، يدرس مقررات لوجستية ثنائية اللغة. يتمتع بمزايا التطبيق اللغوي الأجنبي.",
    journey_p2: "مؤهل لمسار التوصية وبدأ الدراسة المنهجية لبرنامج CFA قبل الموعد المحدد.",
    journey_p3: "يشارك بنشاط في العمل الطلابي، ويصقل مهارات التنسيق التنظيمي والقيادة في الممارسة، ويضع أسساً متينة للتنمية الشاملة.",
    note_basic: "أول بطاقة عمل للجامعة",
    note_journey: "التقِ بنفس أفضل في SISU",
    note_projects: "الممارسة هي أفضل معلم",
    note_skills: "مكتبة المهارات المحدثة باستمرار",
    note_intentions: "حيثما يقود القلب، اتبع",
    note_interests: "أحب الحياة، تنمية شاملة",
    note_gallery: "التقط اللحظات الجميلة من خلال العدسة",
    note_contact: "نتطلع إلى تواصلكم",
    motto_text: "ابق جائعاً، ابق متعلماً",
    motto_en: "STAY HUNGRY, STAY LEARNING",
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
  var SUPPORTED = ['zh-CN', 'en', 'fr', 'ja', 'ru', 'es', 'ar'];

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
    if (nav.indexOf('es') === 0) return 'es';
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
