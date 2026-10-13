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
   7 语言翻译字典
   =========================== */
var I18N = {
  "zh-CN": {
    "lang_label": "中文",
    "hero_title": "年级长 · 院学生会宣传部 · AI 训练师 · CFA 提前修习",
    "hero_tag": "求职意向：物流 / 供应链方向实习 · 可接受异地外派",
    "hero_intro_lead": "四川外国语大学物流管理（中外合作办学）2026级新生",
    "hero_intro_rest": "，阿里巴巴达摩院 AI 训练师持证者。以实践驱动成长，正在探索物流、金融与 AI 的交叉可能。",
    "section_basic": "基本信息",
    "section_projects": "项目经验",
    "section_skills": "技能栈",
    "section_interests": "兴趣特长",
    "section_intentions": "求职意向",
    "intention1_title": "物流 / 供应链实习生",
    "intention1_desc": "希望从物流运营、仓储管理、供应链协调等岗位切入，将中外合作双语课程所学与国际物流视野应用于实际业务；可接受异地及外派实习安排。",
    "intention2_title": "新媒体 / 宣传实习生",
    "intention2_desc": "依托学生会宣传部实操经验，可胜任公众号运营、活动文案、宣传策划类岗位，出稿快、能独立闭环。",
    "section_gallery": "个人作品",
    "label_name": "姓名",
    "label_political": "政治面貌",
    "label_school": "就读院校专业",
    "label_phone": "联系电话",
    "label_email": "电子邮箱",
    "value_political": "共青团员",
    "value_school": "四川外国语大学 · 物流管理（中外合作办学）· 本科（2026级）",
    "proj1_title": "校园二手图书自主实践项目",
    "proj1_role": "学生自主发起 · 全链路独立执行",
    "proj1_p1": "<strong>服务师生 100 余人，100% 完成计划销量。</strong>独立完成二手图书「选品 — 货源对接 — 线下点位 — 客户沟通」全链路运营，全程自主决策、自负盈亏。",
    "proj1_p2": "<strong>直面个性化需求，锻炼快速解决问题的能力。</strong>针对师生指定书目、预算差异等诉求灵活调货与沟通，积累一线客户对接经验。",
    "proj2_title": "多岗位假期全职实践",
    "proj2_date": "多个学年寒暑假",
    "proj2_role": "一线实操 · 基层岗位轮岗",
    "proj2_p1": "<strong>多类岗位均可快速上手、稳定交付。</strong>长期利用寒暑假参与不同类型全职实践，适应职场节奏，形成不推诿、强执行的工作风格，陌生任务能快速上手。",
    "skill1_cat": "文案写作",
    "skill1_desc": "能独立撰写公众号推文、新闻通讯稿、广播稿等宣传文案，成稿规范、可直接发布；现任院学生会宣传部成员，负责活动写稿。",
    "skill2_cat": "办公应用",
    "skill2_desc": "熟练使用 Word、Excel、PowerPoint，能完成文档排版、基础数据统计与汇报演示制作。",
    "skill3_cat": "设计影像",
    "skill3_desc": "掌握摄影与基础修图、排版，可承担活动拍摄、图片处理与简单宣传物料制作。",
    "interest1_cat": "📷 摄影",
    "interest1_desc": "日常热爱记录生活与场景细节，掌握基础拍摄与修图技巧，可协助活动记录与素材整理。",
    "interest2_cat": "🎵 音乐",
    "interest2_desc": "长期热爱音乐，具备良好审美感知力，能活跃团队氛围，适配集体活动配合需求。",
    "interest3_cat": "💪 健身",
    "interest3_desc": "长期规律健身，拥有强健体魄与不服输的意志力，能适配高强度实践与志愿活动节奏。",
    "section_journey": "求学之路",
    "journey_title": "四川外国语大学 · 物流管理专业（中外合作办学）",
    "leader_badge": "现任",
    "leader_title": "2026级年级长",
    "leader_desc": "统筹全年级日常事务，担任师生沟通对接枢纽。负责年级通知传达、信息汇总与活动组织，在多任务并行中锻炼协调与执行能力。",
    "journey_p1": "2026级中外合作办学方向在读，同步修习中外双语物流课程，具备外语应用优势与国际物流视野，提前规划大学全周期学习路径。",
    "journey_p2": "已通过推免通道提前参与 CFA 项目系统学习，搭建金融基础知识框架，构建跨领域复合能力基础。",
    "note_basic": "大学的第一张名片",
    "note_journey": "在川外，遇见更好的自己",
    "note_projects": "实践是最好的老师",
    "note_skills": "不断升级的装备库",
    "note_intentions": "心之所向，素履以往",
    "note_interests": "热爱生活，全面发展",
    "note_gallery": "用镜头记录美好瞬间",
    "motto_text": "保持饥饿，保持学习",
    "motto_en": "STAY HUNGRY, STAY LEARNING",
    "gallery_tip": "点击图片可放大查看",
    "btn_download": "下载 PDF 完整简历",
    "download_tip": "点击按钮即可保存 PDF 文件到本地",
    "alt_cert": "AI 训练师官方证书（点击放大）",
    "alt_gallery": "摄影作品",
    "label_birth": "出生日期",
    "label_zodiac": "星座",
    "value_zodiac": "双子座",
    "label_origin": "籍贯",
    "value_origin": "四川宜宾",
    "journey_grad": "预计毕业",
    "leader2_badge": "现任",
    "leader2_title": "院学生会宣传部成员",
    "leader2_desc": "独立承担学院新生趣味运动会全套宣传稿件，覆盖全院新生。完成公众号预热推文、赛后新闻通讯稿、班级群转发文案及现场广播稿，保障活动宣传全流程落地。",
    "skill4_cat": "AI 应用（证书）",
    "skill4_desc": "持有阿里巴巴达摩院 AI 训练师官方证书，能借助 AI 工具辅助写作与数据处理，提升工作效率。"
  },
  "en": {
    "lang_label": "English",
    "hero_title": "Grade Leader · Student Union Publicity Dept. · AI Trainer · CFA Preparatory",
    "hero_tag": "Seeking: Logistics / Supply Chain Internship · Open to Relocation",
    "hero_intro_lead": "An incoming 2026 freshman in Logistics Management (Sino-Foreign Program) at Sichuan International Studies University",
    "hero_intro_rest": ", and a certified AI Trainer of Alibaba DAMO Academy. Driven by hands-on practice, exploring the intersection of logistics, finance, and AI.",
    "section_basic": "Basic Info",
    "section_projects": "Experience",
    "section_skills": "Skills",
    "section_interests": "Interests",
    "section_intentions": "Career Objective",
    "intention1_title": "Logistics / Supply Chain Intern",
    "intention1_desc": "Aiming at logistics operations, warehousing and supply chain coordination roles to apply bilingual coursework and an international logistics vision in real business; open to relocation and field assignments.",
    "intention2_title": "New Media / Publicity Intern",
    "intention2_desc": "Backed by hands-on experience in the Student Union Publicity Department, capable of WeChat operation, event copywriting and campaign planning with fast, independent delivery.",
    "section_gallery": "Personal Works",
    "label_name": "Name",
    "label_political": "Political Status",
    "label_school": "University & Major",
    "label_phone": "Phone",
    "label_email": "Email",
    "value_political": "Communist Youth League Member",
    "value_school": "Sichuan International Studies University · Logistics Management (Sino-Foreign Program) · Undergraduate (Class of 2026)",
    "proj1_title": "Campus Secondhand Book Independent Practice Project",
    "proj1_role": "Student-Initiated · End-to-End Execution",
    "proj1_p1": "<strong>Served 100+ teachers and students, achieving 100% of the planned sales target.</strong> Independently ran the full chain of secondhand book operations — selection, sourcing, offline sales points and customer communication — with full ownership of decisions and results.",
    "proj1_p2": "<strong>Handled personalized demands, sharpening rapid problem-solving skills.</strong> Flexibly adjusted stock and negotiated for requests such as specific titles and budget differences, gaining frontline customer experience.",
    "proj2_title": "Full-Time Holiday Practice across Multiple Positions",
    "proj2_date": "Winter & summer vacations of multiple years",
    "proj2_role": "Frontline Execution · Grassroots Rotation",
    "proj2_p1": "<strong>Ramped up quickly and delivered steadily across different roles.</strong> Long-term participation in various full-time holiday jobs; adapted to workplace rhythm with a strong-execution, no-excuses work style and fast onboarding for unfamiliar tasks.",
    "skill1_cat": "Copywriting",
    "skill1_desc": "Independently writes WeChat articles, news releases and broadcast scripts that are publication-ready; currently responsible for event copywriting in the Student Union Publicity Department.",
    "skill2_cat": "Office Suite",
    "skill2_desc": "Proficient in Word, Excel and PowerPoint for document formatting, basic data statistics and presentation decks.",
    "skill3_cat": "Design & Imaging",
    "skill3_desc": "Skilled in photography, basic retouching and layout; capable of event shooting, image processing and simple promotional material production.",
    "interest1_cat": "📷 Photography",
    "interest1_desc": "Passionate about documenting life and scene details. Master basic shooting and editing skills.",
    "interest2_cat": "🎵 Music",
    "interest2_desc": "Long-term passion for music with good aesthetic perception. Can enliven team atmosphere.",
    "interest3_cat": "💪 Fitness",
    "interest3_desc": "Regular fitness routine. Strong body and a strong-willed spirit. Adapts to high-intensity rhythms.",
    "section_journey": "Academic Journey",
    "journey_title": "Sichuan International Studies University · Logistics Management (Sino-Foreign Program)",
    "leader_badge": "Current",
    "leader_title": "Grade Leader of Class 2026",
    "leader_desc": "Coordinates daily affairs for the entire grade as the liaison hub between faculty and students — announcements, information collection and activity organization, sharpening coordination and execution under multitasking.",
    "journey_p1": "Enrolled in the 2026 Sino-Foreign cooperative program, taking bilingual logistics courses. Possesses foreign language advantages and an international logistics perspective.",
    "journey_p2": "Qualified for the recommendation pathway and started systematic CFA program studies ahead of schedule.",
    "note_basic": "The first business card of university",
    "note_journey": "Meet a better self at SISU",
    "note_projects": "Practice is the best teacher",
    "note_skills": "Constantly upgrading equipment library",
    "note_intentions": "Where the heart leads, follow",
    "note_interests": "Love life, comprehensive development",
    "note_gallery": "Capture beautiful moments through the lens",
    "motto_text": "Stay Hungry, Stay Learning",
    "motto_en": "STAY HUNGRY, STAY LEARNING",
    "gallery_tip": "Click any image to enlarge",
    "btn_download": "Download Full Resume (PDF)",
    "download_tip": "Click the button to save the PDF to your device",
    "alt_cert": "AI Trainer Official Certificate (click to enlarge)",
    "alt_gallery": "Photography work",
    "label_birth": "Date of Birth",
    "label_zodiac": "Zodiac",
    "value_zodiac": "Gemini",
    "label_origin": "Hometown",
    "value_origin": "Yibin, Sichuan",
    "journey_grad": "Expected Graduation",
    "leader2_badge": "Current",
    "leader2_title": "Member, Publicity Department of the Student Union",
    "leader2_desc": "Independently produced the full set of promotional materials for the freshman fun sports meet, reaching all freshmen of the college — WeChat preview article, post-event news release, class-group repost copy and on-site broadcast scripts.",
    "skill4_cat": "AI Application (Certified)",
    "skill4_desc": "Holder of the official AI Trainer certificate from Alibaba DAMO Academy; uses AI tools to assist writing and data processing, improving efficiency."
  },
  "fr": {
    "lang_label": "Français",
    "hero_title": "Responsable de promotion · Communication de l'association étudiante · Formateur IA · Préparation CFA",
    "hero_tag": "Objectif : stage en logistique / supply chain · Ouvert à la mobilité",
    "hero_intro_lead": "Étudiant de la promotion 2026 en Gestion Logistique (programme sino-étranger) à l'Université des Études Internationales du Sichuan",
    "hero_intro_rest": ", titulaire du certificat de Formateur IA de l'Académie DAMO d'Alibaba. Guidé par la pratique, j'explore l'intersection de la logistique, de la finance et de l'IA.",
    "section_basic": "Informations",
    "section_projects": "Expérience",
    "section_skills": "Compétences",
    "section_interests": "Centres d'intérêt",
    "section_intentions": "Objectif professionnel",
    "intention1_title": "Stagiaire logistique / supply chain",
    "intention1_desc": "Vise des postes en opérations logistiques, entreposage et coordination supply chain pour appliquer les cours bilingues et la vision internationale ; ouvert à la mobilité et à l'expatriation.",
    "intention2_title": "Stagiaire nouveaux médias / communication",
    "intention2_desc": "Fort de l'expérience du département communication, capable de gérer un compte WeChat, la rédaction d'événements et la planification de campagnes, rapidement et en autonomie.",
    "section_gallery": "Galerie",
    "label_name": "Nom",
    "label_political": "Statut politique",
    "label_school": "Université & Filière",
    "label_phone": "Téléphone",
    "label_email": "E-mail",
    "value_political": "Membre de la Ligue de la Jeunesse Communiste",
    "value_school": "Université des Études Internationales du Sichuan · Gestion logistique (programme sino-étranger) · Licence (promotion 2026)",
    "proj1_title": "Projet pratique indépendant de livres d'occasion sur le campus",
    "proj1_role": "Initié par l'étudiant · Exécution de bout en bout",
    "proj1_p1": "<strong>Plus de 100 enseignants et étudiants servis, objectif de ventes atteint à 100 %.</strong> A géré seul toute la chaîne : sélection, approvisionnement, points de vente et communication client, en autonomie et à ses risques.",
    "proj1_p2": "<strong>A répondu à des demandes personnalisées, développant une capacité de résolution rapide.</strong> Ajustement flexible des stocks et négociation pour les titres demandés ou les écarts de budget.",
    "proj2_title": "Expériences à temps plein multi-postes pendant les vacances",
    "proj2_date": "Vacances d'hiver et d'été de plusieurs années",
    "proj2_role": "Exécution de terrain · Rotation de postes",
    "proj2_p1": "<strong>Prise de poste rapide et livraison stable dans des rôles variés.</strong> Participation de longue date à divers emplois de vacances à temps plein ; adaptation au rythme professionnel avec un style d'exécution rigoureux.",
    "skill1_cat": "Rédaction",
    "skill1_desc": "Rédige seul articles WeChat, comptes rendus et scripts d'annonces prêts à publier ; actuellement chargé de la rédaction au département communication de l'association étudiante.",
    "skill2_cat": "Bureautique",
    "skill2_desc": "Maîtrise Word, Excel et PowerPoint : mise en page de documents, statistiques de base et présentations.",
    "skill3_cat": "Design & image",
    "skill3_desc": "Photographie, retouche de base et mise en page ; capable de couvrir des événements et de produire des supports simples.",
    "interest1_cat": "📷 Photographie",
    "interest1_desc": "Passionné par la documentation de la vie et des détails de scènes. Maîtrise les techniques de base de prise de vue.",
    "interest2_cat": "🎵 Musique",
    "interest2_desc": "Passion de longue date pour la musique avec une bonne perception esthétique. Peut animer l'atmosphère d'équipe.",
    "interest3_cat": "💪 Fitness",
    "interest3_desc": "Routine de fitness régulière. Corps fort et esprit volontaire. S'adapte au rythme des pratiques intensives.",
    "section_journey": "Parcours académique",
    "journey_title": "Université des Études Internationales du Sichuan · Gestion logistique (programme sino-étranger)",
    "leader_badge": "Actuel",
    "leader_title": "Chef de promotion 2026",
    "leader_desc": "Coordonne les affaires quotidiennes de toute la promotion et sert de relais entre enseignants et étudiants : annonces, collecte d'informations et organisation d'activités, développant coordination et exécution en multitâche.",
    "journey_p1": "Inscrit au programme sino-étranger 2026, suit des cours de logistique bilingues. Dispose d'avantages linguistiques et d'une perspective internationale.",
    "journey_p2": "Qualifié pour le parcours de recommandation et a commencé les études systématiques du programme CFA avant l'échéance.",
    "note_basic": "La première carte de visite de l'université",
    "note_journey": "Rencontrer un meilleur soi-même à SISU",
    "note_projects": "La pratique est le meilleur professeur",
    "note_skills": "Bibliothèque d'équipement en constante évolution",
    "note_intentions": "Là où le cœur mène, suivez",
    "note_interests": "Aimer la vie, développement complet",
    "note_gallery": "Capturer de beaux moments à travers l'objectif",
    "motto_text": "Restez affamé, restez apprenant",
    "motto_en": "STAY HUNGRY, STAY LEARNING",
    "gallery_tip": "Cliquez sur une image pour l'agrandir",
    "btn_download": "Télécharger le CV complet (PDF)",
    "download_tip": "Cliquez sur le bouton pour enregistrer le PDF",
    "alt_cert": "Certificat officiel de Formateur IA (cliquez pour agrandir)",
    "alt_gallery": "Œuvre photographique",
    "label_birth": "Date de naissance",
    "label_zodiac": "Signe",
    "value_zodiac": "Gémeaux",
    "label_origin": "Origine",
    "value_origin": "Yibin, Sichuan",
    "journey_grad": "Diplôme prévu",
    "leader2_badge": "Actuel",
    "leader2_title": "Membre du département communication de l'association étudiante",
    "leader2_desc": "A produit seul l'ensemble des supports de communication du meeting sportif des nouveaux : article de teasing WeChat, compte rendu, message de relais pour les groupes de classe et scripts d'annonces, touchant toute la promotion.",
    "skill4_cat": "IA (certifié)",
    "skill4_desc": "Titulaire du certificat officiel de Formateur IA de l'Académie DAMO d'Alibaba ; utilise l'IA pour assister rédaction et traitement de données."
  },
  "ja": {
    "lang_label": "日本語",
    "hero_title": "学年長 · 学生会宣伝部 · AIトレーナー · CFA先行学習",
    "hero_tag": "希望：物流／サプライチェーン実習 · 転勤・派遣可能",
    "hero_intro_lead": "四川外国語大学 物流管理専攻（中外合作プログラム）2026年度入学予定の新入生",
    "hero_intro_rest": "。アリババDAMOアカデミー認定AIトレーナー。実践を軸に成長し、物流・金融・AIの交差する可能性を探求しています。",
    "section_basic": "基本情報",
    "section_projects": "経験",
    "section_skills": "スキル",
    "section_interests": "趣味・特技",
    "section_intentions": "希望職種",
    "intention1_title": "物流／サプライチェーン インターン",
    "intention1_desc": "物流オペレーション・倉庫管理・サプライチェーン調整などの職種を希望。バイリンガル課程と国際物流の視野を実務に活かす。転勤・派遣可能。",
    "intention2_title": "ニューメディア／広報インターン",
    "intention2_desc": "学生会宣伝部の実務経験を活かし、WeChat運用・イベント文案・広報企画を迅速かつ自立して遂行可能。",
    "section_gallery": "ギャラリー",
    "label_name": "氏名",
    "label_political": "政治的身分",
    "label_school": "大学・専攻",
    "label_phone": "電話番号",
    "label_email": "メール",
    "value_political": "共青团員",
    "value_school": "四川外国語大学 · 物流管理（中外合作プログラム）· 本科（2026年度入学）",
    "proj1_title": "キャンパス中古書籍自主実践プロジェクト",
    "proj1_role": "学生主導 · 全リンク独立実行",
    "proj1_p1": "<strong>教職員・学生100名以上に提供し、計画販売数を100%達成。</strong>選定・仕入れ・販売拠点・顧客対応の全工程を単独運営し、意思決定と損益を自己完結。",
    "proj1_p2": "<strong>個別要望に直面し、迅速な問題解決力を鍛錬。</strong>指定書籍や予算差への柔軟な在庫調整と交渉を通じ、現場の顧客対応経験を蓄積。",
    "proj2_title": "複数職種の長期休暇フルタイム実践",
    "proj2_date": "複数年度の寒暑假",
    "proj2_role": "現場実行 · 基层ローテーション",
    "proj2_p1": "<strong>多様な職種で即戦力として安定した成果を交付。</strong>長期にわたり各種フルタイム実践に従事し、職場のリズムに適応。責任感の強い実行型の働き方を体得。",
    "skill1_cat": "ライティング",
    "skill1_desc": "WeChat記事・ニュース稿・アナウンス原稿を単独執筆し、そのまま公開可能な品質に仕上げる。現在大学学生会宣伝部で広報ライティングを担当。",
    "skill2_cat": "オフィス",
    "skill2_desc": "Word・Excel・PowerPointを使いこなし、文書作成・基礎データ集計・プレゼン資料制作が可能。",
    "skill3_cat": "デザイン・映像",
    "skill3_desc": "写真撮影と基礎的なレタッチ・レイアウトを習得。イベント撮影や簡単な広報物制作が可能。",
    "interest1_cat": "📷 写真",
    "interest1_desc": "日常的に生活や場面の細部を記録するのが好き。基本的な撮影と画像加工技術を習得。",
    "interest2_cat": "🎵 音楽",
    "interest2_desc": "長期的に音楽を愛好し、良好な審美的感受性を持つ。チームの雰囲気を盛り上げられる。",
    "interest3_cat": "💪 フィットネス",
    "interest3_desc": "長期的に規則正しくトレーニングを実施。強健な体と不屈の意志力。",
    "section_journey": "学業の道",
    "journey_title": "四川外国語大学 · 物流管理専攻（中外合作プログラム）",
    "leader_badge": "現任",
    "leader_title": "2026年度学年リーダー",
    "leader_desc": "学年全体の日常業務を統括し、教員と学生間の連絡窓口を担当。通知伝達・情報集約・活動運営を担い、マルチタスク環境で調整力と実行力を強化。",
    "journey_p1": "2026年度中外合作プログラムに在籍し、バイリンガル物流コースを履修。語学力の強みと国際物流の視点を持つ。",
    "journey_p2": "推薦ルートを通過し、CFAプログラムの体系的学習を前倒しで開始。",
    "note_basic": "大学の最初の名刺",
    "note_journey": "SISUでより良い自分に出会う",
    "note_projects": "実践は最高の先生",
    "note_skills": "常にアップグレードされる装備庫",
    "note_intentions": "心の向かうところ、素足で赴く",
    "note_interests": "生活を愛し、全面的に発展",
    "note_gallery": "レンズを通じて美しい瞬間を記録",
    "motto_text": "飢えを保ち、学びを保つ",
    "motto_en": "STAY HUNGRY, STAY LEARNING",
    "gallery_tip": "クリックで写真を拡大表示",
    "btn_download": "PDF完全版履歴書をダウンロード",
    "download_tip": "ボタンをクリックするとPDFが保存されます",
    "alt_cert": "AIトレーナー公式資格（クリックで拡大）",
    "alt_gallery": "写真作品",
    "label_birth": "生年月日",
    "label_zodiac": "星座",
    "value_zodiac": "ふたご座",
    "label_origin": "出身地",
    "value_origin": "四川省宜賓",
    "journey_grad": "卒業見込み",
    "leader2_badge": "現任",
    "leader2_title": "学生会宣伝部 部員",
    "leader2_desc": "新入生スポーツイベントの広報物を一式単独で制作。公式WeChat予告記事、終了後ニュース稿、クラスグループ転送文、会場アナウンス原稿を完成し、学部の新入生全員に届けた。",
    "skill4_cat": "AI活用（資格）",
    "skill4_desc": "アリババ・ダモアカデミー認定AIトレーナー資格を保有。AIツールで執筆・データ処理を支援し、作業効率を向上。"
  },
  "ru": {
    "lang_label": "Русский",
    "hero_title": "Староста курса · Пресс-центр студсоюза · Тренер ИИ · Подготовка к CFA",
    "hero_tag": "Цель: стажировка в логистике / цепочках поставок · Готов к переезду",
    "hero_intro_lead": "Первокурсник 2026 года по специальности «Управление логистикой» (совместная программа) Сычуаньского университета иностранных языков",
    "hero_intro_rest": ", сертифицированный тренер ИИ академии DAMO Alibaba. Развиваюсь через практику и исследую пересечение логистики, финансов и ИИ.",
    "section_basic": "Основная информация",
    "section_projects": "Опыт",
    "section_skills": "Навыки",
    "section_interests": "Интересы",
    "section_intentions": "Карьерная цель",
    "intention1_title": "Стажёр по логистике / цепочкам поставок",
    "intention1_desc": "Ориентирован на операции, складирование и координацию цепочек поставок, чтобы применять двуязычную программу и международный взгляд на практике; готов к переезду и командировкам.",
    "intention2_title": "Стажёр новых медиа / PR",
    "intention2_desc": "Опираясь на опыт пресс-центра студсоюза, может вести WeChat-аккаунт, тексты мероприятий и планирование кампаний — быстро и автономно.",
    "section_gallery": "Галерея",
    "label_name": "ФИО",
    "label_political": "Политический статус",
    "label_school": "Университет и специальность",
    "label_phone": "Телефон",
    "label_email": "Электронная почта",
    "value_political": "Член Коммунистической лиги молодёжи",
    "value_school": "Сычуаньский университет международных исследований · Логистический менеджмент (китайско-иностранная программа) · бакалавриат (набор 2026 г.)",
    "proj1_title": "Самостоятельный проект практики подержанных книг на кампусе",
    "proj1_role": "Инициатор-студент · Полный цикл независимо",
    "proj1_p1": "<strong>Обслужил более 100 преподавателей и студентов, выполнив план продаж на 100%.</strong> Самостоятельно вёл полный цикл: отбор, закупка, точки продаж и общение с клиентами — с полной ответственностью за решения и результат.",
    "proj1_p2": "<strong>Работал с индивидуальными запросами, развив навык быстрого решения проблем.</strong> Гибко корректировал ассортимент и договаривался по конкретным названиям и бюджетам.",
    "proj2_title": "Полная занятость на разных должностях в каникулы",
    "proj2_date": "Зимние и летние каникулы нескольких лет",
    "proj2_role": "Работа на передовой · Ротация на базовых должностях",
    "proj2_p1": "<strong>Быстро осваивался и стабильно выполнял задачи на разных ролях.</strong> Многолетнее участие в разнообразной сезонной работе; адаптация к рабочему ритму, ответственный исполнительный стиль.",
    "skill1_cat": "Копирайтинг",
    "skill1_desc": "Самостоятельно пишет статьи для WeChat, пресс-релизы и сценарии объявлений, готовые к публикации; сейчас отвечает за тексты в пресс-центре студсоюза.",
    "skill2_cat": "Офисные программы",
    "skill2_desc": "Уверенно владеет Word, Excel и PowerPoint: оформление документов, базовая статистика и презентации.",
    "skill3_cat": "Дизайн и съёмка",
    "skill3_desc": "Фотография, базовая ретушь и вёрстка; может снимать мероприятия и готовить простые промо-материалы.",
    "interest1_cat": "📷 Фотография",
    "interest1_desc": "Ежедневно любит документировать детали жизни и сцен. Владеет базовыми приёмами съёмки.",
    "interest2_cat": "🎵 Музыка",
    "interest2_desc": "Долгосрочная любовь к музыке с хорошим эстетическим восприятием. Может оживлять атмосферу команды.",
    "interest3_cat": "💪 Фитнес",
    "interest3_desc": "Регулярные тренировки. Крепкое телосложение и непреклонная воля. Адаптируется к интенсивным практикам.",
    "section_journey": "Академический путь",
    "journey_title": "Сычуаньский университет международных исследований · Логистический менеджмент (китайско-иностранная программа)",
    "leader_badge": "Текущий",
    "leader_title": "Староста курса 2026",
    "leader_desc": "Координирует повседневные дела всего курса, выступая связующим звеном между преподавателями и студентами: объявления, сбор информации и организация мероприятий, развивая координацию и исполнительность.",
    "journey_p1": "Зачислен по китайско-иностранной программе 2026 года, изучает двуязычные курсы логистики. Обладает преимуществами в иноязычном применении.",
    "journey_p2": "Прошёл по рекомендованному пути и начал системное изучение программы CFA.",
    "note_basic": "Первая визитная карточка университета",
    "note_journey": "Встретьте лучшего себя в SISU",
    "note_projects": "Практика — лучший учитель",
    "note_skills": "Постоянно обновляемая библиотека навыков",
    "note_intentions": "Куда ведёт сердце, туда и иди",
    "note_interests": "Любить жизнь, всестороннее развитие",
    "note_gallery": "Запечатлеть прекрасные моменты через объектив",
    "motto_text": "Оставайся голодным, оставайся учёным",
    "motto_en": "STAY HUNGRY, STAY LEARNING",
    "gallery_tip": "Нажмите на изображение для увеличения",
    "btn_download": "Скачать полное резюме (PDF)",
    "download_tip": "Нажмите кнопку, чтобы сохранить PDF на устройство",
    "alt_cert": "Официальный сертификат тренера ИИ (нажмите для увеличения)",
    "alt_gallery": "Личная работа",
    "label_birth": "Дата рождения",
    "label_zodiac": "Знак зодиака",
    "value_zodiac": "Близнецы",
    "label_origin": "Родной город",
    "value_origin": "Ибинь, Сычуань",
    "journey_grad": "Ожидаемый выпуск",
    "leader2_badge": "Сейчас",
    "leader2_title": "Член пресс-центра студенческого союза",
    "leader2_desc": "Самостоятельно подготовил полный комплект материалов для спортивного праздника первокурсников: анонс в WeChat, итоговый пресс-релиз, текст для репоста и сценарии объявлений — охват весь курс.",
    "skill4_cat": "ИИ (сертификат)",
    "skill4_desc": "Обладатель официального сертификата тренера ИИ Академии DAMO Alibaba; применяет ИИ-инструменты для текстов и обработки данных."
  },
  "es": {
    "lang_label": "Español",
    "hero_title": "Delegado de curso · Dept. de Comunicación de la Asociación · Entrenador de IA · Estudio anticipado de CFA",
    "hero_tag": "Objetivo: prácticas en logística / cadena de suministro · Disponible para reubicación",
    "hero_intro_lead": "Estudiante de primer año (promoción 2026) en Gestión Logística (programa sino-extranjero) de la Universidad de Estudios Internacionales de Sichuan",
    "hero_intro_rest": ", y Entrenador de IA certificado por la Academia DAMO de Alibaba. Impulsado por la práctica, exploro la intersección entre logística, finanzas e IA.",
    "section_basic": "Información básica",
    "section_projects": "Experiencia",
    "section_skills": "Habilidades",
    "section_interests": "Intereses",
    "section_intentions": "Objetivo profesional",
    "intention1_title": "Becario de logística / cadena de suministro",
    "intention1_desc": "Orientado a operaciones logísticas, almacenamiento y coordinación de la cadena de suministro para aplicar los estudios bilingües y la visión internacional; disponible para reubicación y expatriación.",
    "intention2_title": "Becario de nuevos medios / comunicación",
    "intention2_desc": "Con la experiencia del Departamento de Comunicación, puede gestionar cuentas de WeChat, textos de eventos y planificación de campañas, de forma rápida y autónoma.",
    "section_gallery": "Obras personales",
    "label_name": "Nombre",
    "label_political": "Afiliación política",
    "label_school": "Universidad y especialidad",
    "label_phone": "Teléfono",
    "label_email": "Correo electrónico",
    "value_political": "Miembro de la Liga de la Juventud Comunista",
    "value_school": "Universidad de Estudios Internacionales de Sichuan · Gestión Logística (Programa Sino-Extranjero) · Grado (promoción 2026)",
    "proj1_title": "Proyecto práctico independiente de libros usados en el campus",
    "proj1_role": "Iniciativa estudiantil · Ejecución integral independiente",
    "proj1_p1": "<strong>Atendió a más de 100 profesores y estudiantes, cumpliendo el 100 % del plan de ventas.</strong> Gestionó de forma independiente toda la cadena: selección, abastecimiento, puntos de venta y comunicación con clientes, asumiendo decisiones y resultados.",
    "proj1_p2": "<strong>Respondió a demandas personalizadas, fortaleciendo la resolución rápida de problemas.</strong> Ajustó el stock y negoció con flexibilidad ante títulos específicos y presupuestos distintos.",
    "proj2_title": "Prácticas a tiempo completo en múltiples puestos durante vacaciones",
    "proj2_date": "Vacaciones de invierno y verano de varios años",
    "proj2_role": "Ejecución de primera línea · Rotación en puestos operativos",
    "proj2_p1": "<strong>Adaptación rápida y entrega estable en funciones diversas.</strong> Participación prolongada en distintos trabajos de vacaciones a tiempo completo; adaptación al ritmo laboral con un estilo ejecutivo y responsable.",
    "skill1_cat": "Redacción",
    "skill1_desc": "Redacta en solitario artículos de WeChat, crónicas y guiones de megafonía listos para publicar; actualmente redactor del Departamento de Comunicación de la Asociación de Estudiantes.",
    "skill2_cat": "Ofimática",
    "skill2_desc": "Maneja Word, Excel y PowerPoint: formato de documentos, estadísticas básicas y presentaciones.",
    "skill3_cat": "Diseño e imagen",
    "skill3_desc": "Fotografía, retoque básico y maquetación; puede cubrir eventos y elaborar material promocional sencillo.",
    "interest1_cat": "📷 Fotografía",
    "interest1_desc": "Apasionado por registrar la vida y los detalles de las escenas cotidianas. Domina técnicas básicas de fotografía y edición.",
    "interest2_cat": "🎵 Música",
    "interest2_desc": "Amor de larga data por la música con buena percepción estética. Puede dinamizar el ambiente del equipo.",
    "interest3_cat": "💪 Fitness",
    "interest3_desc": "Rutina de ejercicio regular. Cuerpo fuerte y voluntad inquebrantable. Se adapta a ritmos de práctica de alta intensidad.",
    "section_journey": "Trayectoria académica",
    "journey_title": "Universidad de Estudios Internacionales de Sichuan · Gestión Logística (Programa Sino-Extranjero)",
    "leader_badge": "Actual",
    "leader_title": "Líder de promoción 2026",
    "leader_desc": "Coordina los asuntos diarios de todo el curso como enlace entre profesores y estudiantes: avisos, recopilación de información y organización de actividades, desarrollando coordinación y ejecución en multitarea.",
    "journey_p1": "Matriculado en el programa cooperativo sino-extranjero 2026, cursando asignaturas bilingües de logística. Cuenta con ventajas en idiomas extranjeros y visión logística internacional.",
    "journey_p2": "Calificado para la vía de recomendación y ha comenzado el estudio sistemático del programa CFA por adelantado.",
    "note_basic": "La primera tarjeta de presentación de la universidad",
    "note_journey": "Encuentra un mejor yo en SISU",
    "note_projects": "La práctica es el mejor maestro",
    "note_skills": "Biblioteca de habilidades en constante actualización",
    "note_intentions": "Donde el corazón guía, seguir",
    "note_interests": "Amar la vida, desarrollo integral",
    "note_gallery": "Capturar momentos hermosos a través del objetivo",
    "motto_text": "Mantente hambriento, mantente aprendiendo",
    "motto_en": "STAY HUNGRY, STAY LEARNING",
    "gallery_tip": "Haga clic en la imagen para ampliarla",
    "btn_download": "Descargar currículum completo (PDF)",
    "download_tip": "Haga clic en el botón para guardar el PDF en su dispositivo",
    "alt_cert": "Certificado oficial de Entrenador de IA (haga clic para ampliar)",
    "alt_gallery": "Obra personal",
    "label_birth": "Fecha de nacimiento",
    "label_zodiac": "Signo",
    "value_zodiac": "Géminis",
    "label_origin": "Origen",
    "value_origin": "Yibin, Sichuan",
    "journey_grad": "Graduación prevista",
    "leader2_badge": "Actual",
    "leader2_title": "Miembro del Departamento de Comunicación de la Asociación de Estudiantes",
    "leader2_desc": "Produjo en solitario todo el material promocional del encuentro deportivo de nuevos estudiantes: artículo de anticipo en WeChat, crónica, texto de difusión y guiones de megafonía, llegando a toda la promoción.",
    "skill4_cat": "IA (certificado)",
    "skill4_desc": "Poseedor del certificado oficial de Entrenador de IA de la Academia DAMO de Alibaba; usa herramientas de IA para redacción y datos."
  },
  "ar": {
    "lang_label": "العربية",
    "hero_title": "قائد الصف · قسم الإعلام باتحاد الطلاب · مدرب ذكاء اصطناعي · دراسة CFA مبكرة",
    "hero_tag": "الهدف: تدريب في اللوجستيات / سلسلة التوريد · مستعد للانتقال",
    "hero_intro_lead": "طالب جديد (دفعة 2026) في تخصص إدارة اللوجستيات (برنامج تعاون صيني أجنبي) بجامعة سيتشوان للدراسات الدولية",
    "hero_intro_rest": "، وحاصل على شهادة مدرب ذكاء اصطناعي من أكاديمية DAMO التابعة لعلي بابا. أتعلم من خلال الممارسة وأستكشف تقاطع اللوجستيات والمالية والذكاء الاصطناعي.",
    "section_basic": "المعلومات الأساسية",
    "section_projects": "الخبرة",
    "section_skills": "المهارات",
    "section_interests": "الاهتمامات",
    "section_intentions": "الهدف المهني",
    "intention1_title": "متدرب لوجستيات / سلسلة توريد",
    "intention1_desc": "يستهدف وظائف العمليات اللوجستية والتخزين وتنسيق سلسلة التوريد لتطبيق الدراسة ثنائية اللغة والرؤية الدولية عملياً؛ مستعد للانتقال والإعارة.",
    "intention2_title": "متدرب وسائط جديدة / إعلام",
    "intention2_desc": "بفضل خبرته في قسم الإعلام الطلابي، يمكنه إدارة حسابات WeChat وكتابة محتوى الفعاليات وتخطيط الحملات بسرعة واستقلالية.",
    "section_gallery": "الأعمال الشخصية",
    "label_name": "الاسم",
    "label_political": "الحالة السياسية",
    "label_school": "الجامعة والتخصص",
    "label_phone": "الهاتف",
    "label_email": "البريد الإلكتروني",
    "value_political": "عضو رابطة الشباب الشيوعي",
    "value_school": "جامعة سيتشوان للدراسات الدولية · إدارة الخدمات اللوجستية (برنامج صيني-أجنبي) · بكالوريوس (دفعة 2026)",
    "proj1_title": "مشروع الممارسة المستقلة للكتب المستعملة في الحرم الجامعي",
    "proj1_role": "مبادرة طالب · تنفيذ كامل السلسلة",
    "proj1_p1": "<strong>خدم أكثر من 100 من الأساتذة والطلاب، محققاً 100% من خطة المبيعات.</strong> أدار بشكل مستقل السلسلة الكاملة: الاختيار والتوريد ونقاط البيع والتواصل مع العملاء، مع تحمل كامل للقرارات والنتائج.",
    "proj1_p2": "<strong>تعامل مع طلبات مخصصة، مما صقل قدرته على الحل السريع للمشكلات.</strong> عدّل المخزون بمرونة وتفاوض وفق العناوين والميزانيات المحددة.",
    "proj2_title": "ممارسات بدوام كامل في وظائف متعددة خلال العطل",
    "proj2_date": "العطل الشتوية والصيفية لعدة سنوات",
    "proj2_role": "تنفيذ ميداني · دوران الوظائف الأساسية",
    "proj2_p1": "<strong>تأقلم بسرعة وسلّم بثبات في أدوار متنوعة.</strong> شارك لسنوات في وظائف موسمية متنوعة بدوام كامل؛ تكيّف مع إيقاع العمل بأسلوب تنفيذي مسؤول.",
    "skill1_cat": "كتابة المحتوى",
    "skill1_desc": "يكتب بمفرده مقالات WeChat والتقارير الإخبارية ونصوص الإذاعة الجاهزة للنشر؛ يشغل حالياً مهام الكتابة في قسم الإعلام باتحاد الطلاب.",
    "skill2_cat": "البرامج المكتبية",
    "skill2_desc": "يتقن Word وExcel وPowerPoint: تنسيق المستندات والإحصاءات الأساسية والعروض التقديمية.",
    "skill3_cat": "التصميم والتصوير",
    "skill3_desc": "يجيد التصوير الفوتوغرافي والتعديل الأساسي والتنسيق؛ يمكنه تغطية الفعاليات وإنتاج مواد ترويجية بسيطة.",
    "interest1_cat": "📷 التصوير",
    "interest1_desc": "يحب توثيق الحياة وتفاصيل المشاهد يومياً. يتقن أساسيات التصوير والتعديل.",
    "interest2_cat": "🎵 الموسيقى",
    "interest2_desc": "شغف طويل الأمد بالموسيقى مع إدراك جمالي جيد. يمكنه تنشيط جو الفريق.",
    "interest3_cat": "💪 اللياقة البدنية",
    "interest3_desc": "تمارين لياقة بدنية منتظمة. بنية قوية وإرادة قوية. يتكيف مع إيقاع الممارسات المكثفة.",
    "section_journey": "المسيرة الأكاديمية",
    "journey_title": "جامعة سيتشوان للدراسات الدولية · إدارة الخدمات اللوجستية (برنامج صيني-أجنبي)",
    "leader_badge": "الحالي",
    "leader_title": "قائد دفعة 2026",
    "leader_desc": "ينسق الشؤون اليومية للصف بأكمله كحلقة وصل بين الأساتذة والطلاب: الإعلانات وجمع المعلومات وتنظيم الأنشطة، مما طور مهارات التنسيق والتنفيذ في بيئة متعددة المهام.",
    "journey_p1": "مسجل في برنامج 2026 الصيني-الأجنبي، يدرس مقررات لوجستية ثنائية اللغة. يتمتع بمزايا التطبيق اللغوي الأجنبي.",
    "journey_p2": "مؤهل لمسار التوصية وبدأ الدراسة المنهجية لبرنامج CFA قبل الموعد المحدد.",
    "note_basic": "أول بطاقة عمل للجامعة",
    "note_journey": "التقِ بنفس أفضل في SISU",
    "note_projects": "الممارسة هي أفضل معلم",
    "note_skills": "مكتبة المهارات المحدثة باستمرار",
    "note_intentions": "حيثما يقود القلب، اتبع",
    "note_interests": "أحب الحياة، تنمية شاملة",
    "note_gallery": "التقط اللحظات الجميلة من خلال العدسة",
    "motto_text": "ابق جائعاً، ابق متعلماً",
    "motto_en": "STAY HUNGRY, STAY LEARNING",
    "gallery_tip": "انقر على أي صورة لتكبيرها",
    "btn_download": "تحميل السيرة الذاتية الكاملة (PDF)",
    "download_tip": "انقر على الزر لحفظ ملف PDF على جهازك",
    "alt_cert": "شهادة مدرب الذكاء الاصطناعي الرسمية (انقر للتكبير)",
    "alt_gallery": "عمل شخصي",
    "label_birth": "تاريخ الميلاد",
    "label_zodiac": "البرج",
    "value_zodiac": "الجوزاء",
    "label_origin": "مسقط الرأس",
    "value_origin": "ييبين، سيتشوان",
    "journey_grad": "التخرج المتوقع",
    "leader2_badge": "حالياً",
    "leader2_title": "عضو قسم الإعلام في اتحاد الطلاب",
    "leader2_desc": "أعد بمفرده مجموعة المواد الترويجية الكاملة للقاء الرياضي الترفيهي للطلاب الجدد: مقال تشويقي على WeChat وتقرير إخباري ونص إعادة النشر ونصوص الإذاعة، وغطى جميع طلاب الكلية.",
    "skill4_cat": "الذكاء الاصطناعي (شهادة)",
    "skill4_desc": "حاصل على شهادة مدرب الذكاء الاصطناعي الرسمية من أكاديمية DAMO التابعة لعلي بابا؛ يستخدم أدوات الذكاء الاصطناعي لدعم الكتابة ومعالجة البيانات."
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
    var fallback = I18N[DEFAULT_LANG];

    document.querySelectorAll('[data-i18n-key]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-key');
      var val = dict[key] || fallback[key];
      if (val) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var mapping = el.getAttribute('data-i18n-attr');
      var parts = mapping.split('|');
      var val = dict[parts[1]] || fallback[parts[1]];
      if (val) el.setAttribute(parts[0], val);
    });

    document.querySelectorAll('.lang-option').forEach(function (opt) {
      opt.classList.toggle('is-active', opt.getAttribute('onclick') && opt.getAttribute('onclick').indexOf("'" + lang + "'") !== -1);
    });

    var isRTL = lang === 'ar';
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.body.classList.toggle('is-rtl', isRTL);

    try { localStorage.setItem(STORAGE_KEY, lang); } catch(e) {}

    // 语言切换后重算手风琴高度（内容长度可能变化）
    document.querySelectorAll('.accordion-section.is-open .accordion-content').forEach(function (content) {
      content.style.maxHeight = content.scrollHeight + 'px';
    });
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
