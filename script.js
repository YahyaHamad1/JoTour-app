/*
 * JoTour - Discover Jordan
 * Copyright (c) 2025 AlMa'ali group
 * All rights reserved.
*/
// Translations for 10 languages
const translations = {
    en: {
        "header.title": "JoTour",
        "header.subtitle": "Discover Jordan's Hidden Gems",
        "menu.home": "Home",
        "menu.language": "Language",
        "menu.reels": "Reels",
        "hero.title": "Experience Jordan Like Never Before",
        "hero.subtitle": "Authentic tours • Local guides • Unforgettable memories",
        "hero.explore": "Explore Tours",
        "tours.title": "Popular Tours",
        "tours.petra": "Petra Full Day",
        "tours.petra_desc": "Ancient city carved in rose-red cliffs",
        "tours.wadi": "Wadi Rum Desert",
        "tours.wadi_desc": "Mars-like landscape with Bedouin culture",
        "tours.deadsea": "Dead Sea Relaxation",
        "tours.deadsea_desc": "Float in the saltiest sea on Earth",
        "tours.amman": "Amman City Tour",
        "tours.amman_desc": "Explore Jordan's vibrant capital city",
        "tours.jerash": "Jerash Ancient City",
        "tours.jerash_desc": "Walk through ancient Roman ruins",
        "tours.ajloun": "Ajloun Castle",
        "tours.ajloun_desc": "Discover the historic Ajloun Castle",
        "tours.guide": "Private guide",
        "tours.pickup": "Hotel pickup",
        "tours.lunch": "Lunch included",
        "tours.jeep": "Jeep safari",
        "tours.stars": "Stargazing",
        "tours.dinner": "Traditional dinner",
        "tours.spa": "Spa access",
        "tours.mud": "Mud treatment",
        "tours.resort": "Beach resort",
        "tours.city_tour": "City tour",
        "tours.citadel": "Citadel visit",
        "tours.local_lunch": "Local lunch",
        "tours.guided_tour": "Guided tour",
        "tours.entrance_fees": "Entrance fees",
        "tours.transportation": "Transportation",
        "tours.castle_tour": "Castle tour",
        "tours.nature_walk": "Nature walk",
        "tours.scenic_views": "Scenic views",
        "tours.book": "Book Now",
        "videos.title": "Experience Jordan Through Our Eyes",
        "videos.petra": "Petra Sunrise Magic",
        "videos.wadi": "Wadi Rum Adventure",
        "videos.deadsea": "Dead Sea Relaxation",
        "booking.title": "Book Your Tour",
        "booking.name": "Full Name",
        "booking.email": "Email",
        "booking.phone": "Phone Number",
        "booking.date": "Preferred Date",
        "booking.travelers": "Number of Travelers",
        "booking.person1": "1 Person",
        "booking.person2": "2 People",
        "booking.person3": "3 People",
        "booking.person4": "4 People",
        "booking.person5+": "5+ People",
        "booking.requests": "Special Requests",
        "booking.tour": "Tour",
        "booking.price": "Price",
        "booking.total": "Total",
        "booking.payment": "Payment Method",
        "booking.cash": "Cash on arrival",
        "booking.accept": "We accept USD, JOD, EUR as the way of payment. You will be given a receipt after payment.",
        "booking.complete": "Complete Booking",
        "whatsapp.service": "24 hours customer service"
    },
    es: {
        "header.title": "JoTour",
        "header.subtitle": "Descubre los Tesoros Escondidos de Jordania",
        "menu.home": "Inicio",
        "menu.language": "Idioma",
        "menu.reels": "Reels",
        "hero.title": "Experimenta Jordania Como Nunca Antes",
        "hero.subtitle": "Tours auténticos • Guías locales • Recuerdos inolvidables",
        "hero.explore": "Explorar Tours",
        "tours.title": "Tours Populares",
        "tours.petra": "Petra Día Completo",
        "tours.petra_desc": "Ciudad antigua tallada en acantilados de color rosa",
        "tours.wadi": "Desierto de Wadi Rum",
        "tours.wadi_desc": "Paisaje marciano con cultura beduina",
        "tours.deadsea": "Relajación en el Mar Muerto",
        "tours.deadsea_desc": "Flota en el mar más salado de la Tierra",
        "tours.amman": "Tour de la Ciudad de Ammán",
        "tours.amman_desc": "Explora la vibrante capital de Jordania",
        "tours.jerash": "Ciudad Antigua de Jerash",
        "tours.jerash_desc": "Camina por las antiguas ruinas romanas",
        "tours.ajloun": "Castillo de Ajloun",
        "tours.ajloun_desc": "Descubre el histórico Castillo de Ajloun",
        "tours.guide": "Guía privado",
        "tours.pickup": "Recogida en hotel",
        "tours.lunch": "Almuerzo incluido",
        "tours.jeep": "Safari en jeep",
        "tours.stars": "Observación de estrellas",
        "tours.dinner": "Cena tradicional",
        "tours.spa": "Acceso al spa",
        "tours.mud": "Tratamiento de barro",
        "tours.resort": "Resort playero",
        "tours.city_tour": "Tour de la ciudad",
        "tours.citadel": "Visita a la Ciudadela",
        "tours.local_lunch": "Almuerzo local",
        "tours.guided_tour": "Tour guiado",
        "tours.entrance_fees": "Tarifas de entrada",
        "tours.transportation": "Transporte",
        "tours.castle_tour": "Tour del castillo",
        "tours.nature_walk": "Paseo por la naturaleza",
        "tours.scenic_views": "Vistas panorámicas",
        "tours.book": "Reservar Ahora",
        "videos.title": "Experimenta Jordania a Través de Nuestros Ojos",
        "videos.petra": "Magia del Amanecer en Petra",
        "videos.wadi": "Aventura en Wadi Rum",
        "videos.deadsea": "Relajación en el Mar Muerto",
        "booking.title": "Reserva Tu Tour",
        "booking.name": "Nombre Completo",
        "booking.email": "Correo Electrónico",
        "booking.phone": "Número de Teléfono",
        "booking.date": "Fecha Preferida",
        "booking.travelers": "Número de Viajeros",
        "booking.person1": "1 Persona",
        "booking.person2": "2 Personas",
        "booking.person3": "3 Personas",
        "booking.person4": "4 Personas",
        "booking.person5+": "5+ Personas",
        "booking.requests": "Solicitudes Especiales",
        "booking.tour": "Tour",
        "booking.price": "Precio",
        "booking.total": "Total",
        "booking.payment": "Método de Pago",
        "booking.cash": "Efectivo al llegar",
        "booking.accept": "Aceptamos USD, JOD, EUR como método de pago. Se le entregará un recibo después del pago.",
        "booking.complete": "Completar Reserva",
        "whatsapp.service": "Servicio al cliente 24 horas"
    },
    fr: {
        "header.title": "JoTour",
        "header.subtitle": "Découvrez les Trésors Cachés de la Jordanie",
        "menu.home": "Accueil",
        "menu.language": "Langue",
        "menu.reels": "Reels",
        "hero.title": "Découvrez la Jordanie Comme Jamais Auparavant",
        "hero.subtitle": "Visites authentiques • Guides locaux • Souvenirs inoubliables",
        "hero.explore": "Explorer les Visites",
        "tours.title": "Visites Populaires",
        "tours.petra": "Pétra Journée Complète",
        "tours.petra_desc": "Ville antique taillée dans des falaises de couleur rose",
        "tours.wadi": "Désert de Wadi Rum",
        "tours.wadi_desc": "Paysage martien avec la culture bédouine",
        "tours.deadsea": "Détente à la Mer Morte",
        "tours.deadsea_desc": "Flotez sur la mer la plus salée de la Terre",
        "tours.amman": "Tour de la Ville d'Amman",
        "tours.amman_desc": "Explorez la capitale vibrante de la Jordanie",
        "tours.jerash": "Cité Antique de Jerash",
        "tours.jerash_desc": "Promenez-vous dans les ruines romaines antiques",
        "tours.ajloun": "Château d'Ajloun",
        "tours.ajloun_desc": "Découvrez le château historique d'Ajloun",
        "tours.guide": "Guide privé",
        "tours.pickup": "Navette hôtel",
        "tours.lunch": "Déjeuner inclus",
        "tours.jeep": "Safari en jeep",
        "tours.stars": "Observation des étoiles",
        "tours.dinner": "Dîner traditionnel",
        "tours.spa": "Accès au spa",
        "tours.mud": "Traitement à la boue",
        "tours.resort": "Station balnéaire",
        "tours.city_tour": "Tour de la ville",
        "tours.citadel": "Visite de la Citédelle",
        "tours.local_lunch": "Déjeuner local",
        "tours.guided_tour": "Visite guidée",
        "tours.entrance_fees": "Frais d'entrée",
        "tours.transportation": "Transport",
        "tours.castle_tour": "Tour du château",
        "tours.nature_walk": "Promenade dans la nature",
        "tours.scenic_views": "Vues panoramiques",
        "tours.book": "Réserver Maintenant",
        "videos.title": "Découvrez la Jordanie à Travers Nos Yeux",
        "videos.petra": "Magie du Lever de Soleil à Pétra",
        "videos.wadi": "Aventure à Wadi Rum",
        "videos.deadsea": "Détente à la Mer Morte",
        "booking.title": "Réservez Votre Visite",
        "booking.name": "Nom Complet",
        "booking.email": "E-mail",
        "booking.phone": "Numéro de Téléphone",
        "booking.date": "Date Préférée",
        "booking.travelers": "Nombre de Voyageurs",
        "booking.person1": "1 Personne",
        "booking.person2": "2 Personnes",
        "booking.person3": "3 Personnes",
        "booking.person4": "4 Personnes",
        "booking.person5+": "5+ Personnes",
        "booking.requests": "Demandes Spéciales",
        "booking.tour": "Visite",
        "booking.price": "Prix",
        "booking.total": "Total",
        "booking.payment": "Méthode de Paiement",
        "booking.cash": "Espèces à l'arrivée",
        "booking.accept": "Nous acceptons USD, JOD, EUR comme moyen de paiement. Vous recevrez un reçu après le paiement.",
        "booking.complete": "Compléter la Réservation",
        "whatsapp.service": "Service client 24h/24"
    },
    de: {
        "header.title": "JoTour",
        "header.subtitle": "Entdecke Jordans Verborgene Schätze",
        "menu.home": "Startseite",
        "menu.language": "Sprache",
        "menu.reels": "Reels",
        "hero.title": "Erlebe Jordanien Wie Nie Zuvor",
        "hero.subtitle": "Authentische Touren • Einheimische Führer • Unvergessliche Erinnerungen",
        "hero.explore": "Touren Erkunden",
        "tours.title": "Beliebte Touren",
        "tours.petra": "Petra Ganztägig",
        "tours.petra_desc": "Antike Stadt, in rosarote Felsen gemeißelt",
        "tours.wadi": "Wadi Rum Wüste",
        "tours.wadi_desc": "Mars-ähnliche Landschaft mit Beduinenkultur",
        "tours.deadsea": "Entspannung am Toten Meer",
        "tours.deadsea_desc": "Schwimme im salzigsten Meer der Erde",
        "tours.amman": "Amman Stadtrundfahrt",
        "tours.amman_desc": "Erkunde Jordans pulsierende Hauptstadt",
        "tours.jerash": "Antike Stadt Jerash",
        "tours.jerash_desc": "Spazieren Sie durch antike römische Ruinen",
        "tours.ajloun": "Ajloun Burg",
        "tours.ajloun_desc": "Entdecken Sie die historische Burg von Ajloun",
        "tours.guide": "Privatführer",
        "tours.pickup": "Hotelabholung",
        "tours.lunch": "Mittagessen inklusive",
        "tours.jeep": "Jeep-Safari",
        "tours.stars": "Sternenbeobachtung",
        "tours.dinner": "Traditionelles Abendessen",
        "tours.spa": "Spa-Zugang",
        "tours.mud": "Schlammbehandlung",
        "tours.resort": "Strandresort",
        "tours.city_tour": "Stadtrundfahrt",
        "tours.citadel": "Zitadellenbesuch",
        "tours.local_lunch": "Lokales Mittagessen",
        "tours.guided_tour": "Geführte Tour",
        "tours.entrance_fees": "Eintrittsgelder",
        "tours.transportation": "Transport",
        "tours.castle_tour": "Burgtour",
        "tours.nature_walk": "Naturwanderung",
        "tours.scenic_views": "Panoramablicke",
        "tours.book": "Jetzt Buchen",
        "videos.title": "Erlebe Jordanien Durch Unsere Augen",
        "videos.petra": "Petra Sonnenaufgang Magie",
        "videos.wadi": "Wadi Rum Abenteuer",
        "videos.deadsea": "Entspannung am Toten Meer",
        "booking.title": "Buche Deine Tour",
        "booking.name": "Vollständiger Name",
        "booking.email": "E-Mail",
        "booking.phone": "Telefonnummer",
        "booking.date": "Bevorzugtes Datum",
        "booking.travelers": "Anzahl der Reisenden",
        "booking.person1": "1 Person",
        "booking.person2": "2 Personen",
        "booking.person3": "3 Personen",
        "booking.person4": "4 Personen",
        "booking.person5+": "5+ Personen",
        "booking.requests": "Besondere Wünsche",
        "booking.tour": "Tour",
        "booking.price": "Preis",
        "booking.total": "Gesamt",
        "booking.payment": "Zahlungsmethode",
        "booking.cash": "Barzahlung bei Ankunft",
        "booking.accept": "Wir akzeptieren USD, JOD, EUR als Zahlungsmittel. Sie erhalten nach der Zahlung eine Quittung.",
        "booking.complete": "Buchung Abschließen",
        "whatsapp.service": "24 Stunden Kundenservice"
    },
    zh: {
        "header.title": "JoTour",
        "header.subtitle": "发现约旦的隐藏宝藏",
        "menu.home": "首页",
        "menu.language": "语言",
        "menu.reels": "Reels",
        "hero.title": "前所未有的约旦体验",
        "hero.subtitle": "正宗旅游 • 当地导游 • 难忘回忆",
        "hero.explore": "探索旅游",
        "tours.title": "热门旅游",
        "tours.petra": "佩特拉一日游",
        "tours.petra_desc": "雕刻在玫瑰色悬崖中的古城",
        "tours.wadi": "瓦迪拉姆沙漠",
        "tours.wadi_desc": "火星般的景观与贝都因文化",
        "tours.deadsea": "死海放松",
        "tours.deadsea_desc": "在地球上最咸的海中漂浮",
        "tours.amman": "安曼城市游",
        "tours.amman_desc": "探索约旦充满活力的首都",
        "tours.jerash": "杰拉什古城",
        "tours.jerash_desc": "漫步在古罗马遗址中",
        "tours.ajloun": "阿杰隆城堡",
        "tours.ajloun_desc": "探索历史悠久的阿杰隆城堡",
        "tours.guide": "私人导游",
        "tours.pickup": "酒店接送",
        "tours.lunch": "包含午餐",
        "tours.jeep": "吉普车 Safari",
        "tours.stars": "观星",
        "tours.dinner": "传统晚餐",
        "tours.spa": "水疗中心",
        "tours.mud": "泥浆治疗",
        "tours.resort": "海滩度假村",
        "tours.city_tour": "城市游",
        "tours.citadel": "城堡参观",
        "tours.local_lunch": "当地午餐",
        "tours.guided_tour": "导游陪同",
        "tours.entrance_fees": "门票",
        "tours.transportation": "交通",
        "tours.castle_tour": "城堡游",
        "tours.nature_walk": "自然漫步",
        "tours.scenic_views": "风景优美的景色",
        "tours.book": "立即预订",
        "videos.title": "通过我们的眼睛体验约旦",
        "videos.petra": "佩特拉日出魔法",
        "videos.wadi": "瓦迪拉姆冒险",
        "videos.deadsea": "死海放松",
        "booking.title": "预订您的旅游",
        "booking.name": "全名",
        "booking.email": "电子邮件",
        "booking.phone": "电话号码",
        "booking.date": "首选日期",
        "booking.travelers": "旅行者人数",
        "booking.person1": "1人",
        "booking.person2": "2人",
        "booking.person3": "3人",
        "booking.person4": "4人",
        "booking.person5+": "5+人",
        "booking.requests": "特殊要求",
        "booking.tour": "旅游",
        "booking.price": "价格",
        "booking.total": "总计",
        "booking.payment": "付款方式",
        "booking.cash": "抵达时现金支付",
        "booking.accept": "我们接受美元、约旦第纳尔、欧元作为支付方式。付款后您将收到收据。",
        "booking.complete": "完成预订",
        "whatsapp.service": "24小时客户服务"
    },
    ja: {
        "header.title": "JoTour",
        "header.subtitle": "ヨルダンの隠れた宝石を発見",
        "menu.home": "ホーム",
        "menu.language": "言語",
        "menu.reels": "リール",
        "hero.title": "これまでにないヨルダン体験",
        "hero.subtitle": "本格的なツアー • 地元のガイド • 忘れられない思い出",
        "hero.explore": "ツアーを探索",
        "tours.title": "人気のツアー",
        "tours.petra": "ペトラ一日ツアー",
        "tours.petra_desc": "バラ色の崖に彫られた古代都市",
        "tours.wadi": "ワディラム砂漠",
        "tours.wadi_desc": "火星のような風景とベドウィン文化",
        "tours.deadsea": "死海リラクゼーション",
        "tours.deadsea_desc": "地球上で最も塩分の多い海で浮く",
        "tours.amman": "アンマン市内ツアー",
        "tours.amman_desc": "ヨルダンの活気ある首都を探索",
        "tours.jerash": "ジェラシュ古代都市",
        "tours.jerash_desc": "古代ローマの遺跡を歩く",
        "tours.ajloun": "アジュルーン城",
        "tours.ajloun_desc": "歴史的なアジュルーン城を発見",
        "tours.guide": "プライベートガイド",
        "tours.pickup": "ホテル送迎",
        "tours.lunch": "昼食付き",
        "tours.jeep": "ジープサファリ",
        "tours.stars": "星観察",
        "tours.dinner": "伝統的な夕食",
        "tours.spa": "スパアクセス",
        "tours.mud": "泥治療",
        "tours.resort": "ビーチリゾート",
        "tours.city_tour": "市内ツアー",
        "tours.citadel": "城塞訪問",
        "tours.local_lunch": "地元の昼食",
        "tours.guided_tour": "ガイドツアー",
        "tours.entrance_fees": "入場料",
        "tours.transportation": "交通手段",
        "tours.castle_tour": "城ツアー",
        "tours.nature_walk": "自然散策",
        "tours.scenic_views": "絶景",
        "tours.book": "今すぐ予約",
        "videos.title": "私たちの目を通してヨルダンを体験",
        "videos.petra": "ペトラの日の出の魔法",
        "videos.wadi": "ワディラムアドベンチャー",
        "videos.deadsea": "死海リラクゼーション",
        "booking.title": "ツアーを予約",
        "booking.name": "氏名",
        "booking.email": "メールアドレス",
        "booking.phone": "電話番号",
        "booking.date": "希望日",
        "booking.travelers": "旅行者の人数",
        "booking.person1": "1名",
        "booking.person2": "2名",
        "booking.person3": "3名",
        "booking.person4": "4名",
        "booking.person5+": "5名以上",
        "booking.requests": "特別なリクエスト",
        "booking.tour": "ツアー",
        "booking.price": "価格",
        "booking.total": "合計",
        "booking.payment": "支払い方法",
        "booking.cash": "到着時現金払い",
        "booking.accept": "支払い方法としてUSD、JOD、EURを受け付けています。支払い後に領収書をお渡しします。",
        "booking.complete": "予約を完了",
        "whatsapp.service": "24時間カスタマーサービス"
    },
    ru: {
        "header.title": "JoTour",
        "header.subtitle": "Откройте Скрытые Сокровища Иордании",
        "menu.home": "Главная",
        "menu.language": "Язык",
        "menu.reels": "Reels",
        "hero.title": "Познакомьтесь с Иорданией Как Никогда Раньше",
        "hero.subtitle": "Аутентичные туры • Местные гиды • Незабываемые воспоминания",
        "hero.explore": "Исследовать Туры",
        "tours.title": "Популярные Туры",
        "tours.petra": "Петра Полный День",
        "tours.petra_desc": "Древний город, высеченный в розовых скалах",
        "tours.wadi": "Пустыня Вади-Рам",
        "tours.wadi_desc": "Пейзаж, похожий на Марс, с бедуинской культурой",
        "tours.deadsea": "Расслабление на Мертвом Море",
        "tours.deadsea_desc": "Плавайте в самом соленом море на Земле",
        "tours.amman": "Тур по городу Амман",
        "tours.amman_desc": "Исследуйте оживленную столицу Иордании",
        "tours.jerash": "Древний город Джераш",
        "tours.jerash_desc": "Прогуляйтесь по древним римским руинам",
        "tours.ajloun": "Замок Аджлун",
        "tours.ajloun_desc": "Откройте для себя исторический замок Аджлун",
        "tours.guide": "Личный гид",
        "tours.pickup": "Трансфер из отеля",
        "tours.lunch": "Включен обед",
        "tours.jeep": "Джип-сафари",
        "tours.stars": "Наблюдение за звездами",
        "tours.dinner": "Традиционный ужин",
        "tours.spa": "Доступ в спа",
        "tours.mud": "Грязевое лечение",
        "tours.resort": "Пляжный курорт",
        "tours.city_tour": "Городской тур",
        "tours.citadel": "Посещение цитадели",
        "tours.local_lunch": "Местный обед",
        "tours.guided_tour": "Экскурсия с гидом",
        "tours.entrance_fees": "Входные билеты",
        "tours.transportation": "Транспорт",
        "tours.castle_tour": "Тур по замку",
        "tours.nature_walk": "Прогулка на природе",
        "tours.scenic_views": "Живописные виды",
        "tours.book": "Забронировать Сейчас",
        "videos.title": "Познакомьтесь с Иорданией Через Наши Глаза",
        "videos.petra": "Волшебство Восхода Солнца в Петре",
        "videos.wadi": "Приключение в Вади-Рам",
        "videos.deadsea": "Расслабление на Мертвом Море",
        "booking.title": "Забронируйте Ваш Тур",
        "booking.name": "Полное Имя",
        "booking.email": "Электронная почта",
        "booking.phone": "Номер Телефона",
        "booking.date": "Предпочтительная Дата",
        "booking.travelers": "Количество Путешественников",
        "booking.person1": "1 Человек",
        "booking.person2": "2 Человека",
        "booking.person3": "3 Человека",
        "booking.person4": "4 Человека",
        "booking.person5+": "5+ Человек",
        "booking.requests": "Особые Запросы",
        "booking.tour": "Тур",
        "booking.price": "Цена",
        "booking.total": "Итого",
        "booking.payment": "Способ Оплаты",
        "booking.cash": "Наличными по прибытии",
        "booking.accept": "Мы принимаем USD, JOD, EUR в качестве способа оплаты. Вы получите квитанцию после оплаты.",
        "booking.complete": "Завершить Бронирование",
        "whatsapp.service": "Клиентская служба 24 часа"
    },
    ar: {
        "header.title": "جوتور",
        "header.subtitle": "اكتشف كنوز الأردن الخفية",
        "menu.home": "الرئيسية",
        "menu.language": "اللغة",
        "menu.reels": "رييلز",
        "hero.title": "اختبر الأردن كما لم تفعل من قبل",
        "hero.subtitle": "جولات أصيلة • مرشدون محليون • ذكريات لا تُنسى",
        "hero.explore": "استكشف الجولات",
        "tours.title": "جولات شعبية",
        "tours.petra": "البترا يوم كامل",
        "tours.petra_desc": "مدينة قديمة منحوتة في المنحدرات الوردية",
        "tours.wadi": "صحراء وادي رم",
        "tours.wadi_desc": "مناظر تشبه المريخ مع ثقافة البدو",
        "tours.deadsea": "الاسترخاء في البحر الميت",
        "tours.deadsea_desc": "تعوّم في أبحر ماء مالح على وجه الأرض",
        "tours.amman": "جولة في مدينة عمان",
        "tours.amman_desc": "استكشف عاصمة الأردن النابضة بالحياة",
        "tours.jerash": "مدينة جرش القديمة",
        "tours.jerash_desc": "تجول بين الآثار الرومانية القديمة",
        "tours.ajloun": "قلعة عجلون",
        "tours.ajloun_desc": "اكتشف قلعة عجلون التاريخية",
        "tours.guide": "مرشد خاص",
        "tours.pickup": "النقل من الفندق",
        "tours.lunch": "الغداء مشمول",
        "tours.jeep": "رحلة سفاري بالجيب",
        "tours.stars": "مراقبة النجوم",
        "tours.dinner": "عشاء تقليدي",
        "tours.spa": "الدخول إلى السبا",
        "tours.mud": "علاج الطين",
        "tours.resort": "منتجع شاطئي",
        "tours.city_tour": "جولة في المدينة",
        "tours.citadel": "زيارة القلعة",
        "tours.local_lunch": "غداء محلي",
        "tours.guided_tour": "جولة مرشدة",
        "tours.entrance_fees": "رسوم الدخول",
        "tours.transportation": "النقل",
        "tours.castle_tour": "جولة في القلعة",
        "tours.nature_walk": "نزهة في الطبيعة",
        "tours.scenic_views": "مناظر طبيعية خلابة",
        "tours.book": "احجز الآن",
        "videos.title": "اختبر الأردن من خلال أعيننا",
        "videos.petra": "سحر شروق الشمس في البتراء",
        "videos.wadi": "مغامرة وادي رم",
        "videos.deadsea": "الاسترخاء في البحر الميت",
        "booking.title": "احجز جولتك",
        "booking.name": "الاسم الكامل",
        "booking.email": "البريد الإلكتروني",
        "booking.phone": "رقم الهاتف",
        "booking.date": "التاريخ المفضل",
        "booking.travelers": "عدد المسافرين",
        "booking.person1": "شخص واحد",
        "booking.person2": "شخصان",
        "booking.person3": "3 أشخاص",
        "booking.person4": "4 أشخاص",
        "booking.person5+": "5+ أشخاص",
        "booking.requests": "طلبات خاصة",
        "booking.tour": "الجولة",
        "booking.price": "السعر",
        "booking.total": "المجموع",
        "booking.payment": "طريقة الدفع",
        "booking.cash": "الدفع نقدًا عند الوصول",
        "booking.accept": "نقبل الدولار الأمريكي والدينار الأردني واليورو كطريقة دفع. ستحصل على إيصال بعد الدفع.",
        "booking.complete": "إتمام الحجز",
        "whatsapp.service": "خدمة العملاء على مدار 24 ساعة"
    },
    pt: {
        "header.title": "JoTour",
        "header.subtitle": "Descubra os Tesouros Escondidos da Jordânia",
        "menu.home": "Início",
        "menu.language": "Idioma",
        "menu.reels": "Reels",
        "hero.title": "Experimente a Jordânia Como Nunca Antes",
        "hero.subtitle": "Tours autênticos • Guias locais • Memórias inesquecíveis",
        "hero.explore": "Explorar Tours",
        "tours.title": "Tours Populares",
        "tours.petra": "Petra Dia Inteiro",
        "tours.petra_desc": "Cidade antiga esculpida em penhascos cor-de-rosa",
        "tours.wadi": "Deserto de Wadi Rum",
        "tours.wadi_desc": "Paisagem marciana com cultura beduína",
        "tours.deadsea": "Relaxamento no Mar Morto",
        "tours.deadsea_desc": "Flutue no mar mais salgado da Terra",
        "tours.amman": "Tour da Cidade de Amã",
        "tours.amman_desc": "Explore a vibrante capital da Jordânia",
        "tours.jerash": "Cidade Antiga de Jerash",
        "tours.jerash_desc": "Caminhe pelas ruínas romanas antigas",
        "tours.ajloun": "Castelo de Ajloun",
        "tours.ajloun_desc": "Descubra o histórico Castelo de Ajloun",
        "tours.guide": "Guia particular",
        "tours.pickup": "Busca no hotel",
        "tours.lunch": "Almoço incluído",
        "tours.jeep": "Safari de jipe",
        "tours.stars": "Observação de estrelas",
        "tours.dinner": "Jantar tradicional",
        "tours.spa": "Acesso ao spa",
        "tours.mud": "Tratamento de lama",
        "tours.resort": "Resort à beira-mar",
        "tours.city_tour": "Passeio pela cidade",
        "tours.citadel": "Visita à Cidadela",
        "tours.local_lunch": "Almoço local",
        "tours.guided_tour": "Tour guiado",
        "tours.entrance_fees": "Taxas de entrada",
        "tours.transportation": "Transporte",
        "tours.castle_tour": "Tour do castelo",
        "tours.nature_walk": "Caminhada na natureza",
        "tours.scenic_views": "Vistas cênicas",
        "tours.book": "Reservar Agora",
        "videos.title": "Experimente a Jordânia Através dos Nossos Olhos",
        "videos.petra": "Mágica do Nascer do Sol em Petra",
        "videos.wadi": "Aventura em Wadi Rum",
        "videos.deadsea": "Relaxamento no Mar Morto",
        "booking.title": "Reserve o Seu Tour",
        "booking.name": "Nome Completo",
        "booking.email": "E-mail",
        "booking.phone": "Número de Telefone",
        "booking.date": "Data Preferida",
        "booking.travelers": "Número de Viajantes",
        "booking.person1": "1 Pessoa",
        "booking.person2": "2 Pessoas",
        "booking.person3": "3 Pessoas",
        "booking.person4": "4 Pessoas",
        "booking.person5+": "5+ Pessoas",
        "booking.requests": "Pedidos Especiais",
        "booking.tour": "Tour",
        "booking.price": "Preço",
        "booking.total": "Total",
        "booking.payment": "Método de Pagamento",
        "booking.cash": "Dinheiro na chegada",
        "booking.accept": "Aceitamos USD, JOD, EUR como forma de pagamento. Você receberá um recibo após o pagamento.",
        "booking.complete": "Concluir Reserva",
        "whatsapp.service": "Atendimento ao cliente 24 horas"
    },
    it: {
        "header.title": "JoTour",
        "header.subtitle": "Scopri i Tesori Nascosti della Giordania",
        "menu.home": "Home",
        "menu.language": "Lingua",
        "menu.reels": "Reels",
        "hero.title": "Sperimenta la Giordania Come Mai Prima",
        "hero.subtitle": "Tour autentici • Guide locali • Ricordi indimenticabili",
        "hero.explore": "Esplora Tour",
        "tours.title": "Tour Popolari",
        "tours.petra": "Petra Intera Giornata",
        "tours.petra_desc": "Città antica scolpita nelle scogliere color rosa",
        "tours.wadi": "Deserto di Wadi Rum",
        "tours.wadi_desc": "Paesaggio simile a Marte con cultura beduina",
        "tours.deadsea": "Relaxamento nel Mar Morto",
        "tours.deadsea_desc": "Galleggia nel mare più salato della Terra",
        "tours.amman": "Tour della Città di Amman",
        "tours.amman_desc": "Esplora la vibrante capitale della Giordania",
        "tours.jerash": "Città Antica di Jerash",
        "tours.jerash_desc": "Cammina tra le antiche rovine romane",
        "tours.ajloun": "Castello di Ajloun",
        "tours.ajloun_desc": "Scopri il storico Castello di Ajloun",
        "tours.guide": "Guida privata",
        "tours.pickup": "Ritiro dall'hotel",
        "tours.lunch": "Pranzo incluso",
        "tours.jeep": "Safari in jeep",
        "tours.stars": "Osservazione delle stelle",
        "tours.dinner": "Cena tradizionale",
        "tours.spa": "Accesso alla spa",
        "tours.mud": "Trattamento di fango",
        "tours.resort": "Resort sulla spiaggia",
        "tours.city_tour": "Tour della città",
        "tours.citadel": "Visita alla Cittadella",
        "tours.local_lunch": "Pranzo locale",
        "tours.guided_tour": "Tour guidato",
        "tours.entrance_fees": "Biglietti d'ingresso",
        "tours.transportation": "Trasporto",
        "tours.castle_tour": "Tour del castello",
        "tours.nature_walk": "Passeggiata nella natura",
        "tours.scenic_views": "Viste panoramiche",
        "tours.book": "Prenota Ora",
        "videos.title": "Sperimenta la Giordania Attraverso i Nostri Occhi",
        "videos.petra": "Magia dell'Alba a Petra",
        "videos.wadi": "Avventura a Wadi Rum",
        "videos.deadsea": "Relaxamento nel Mar Morto",
        "booking.title": "Prenota il Tuo Tour",
        "booking.name": "Nome Completo",
        "booking.email": "Email",
        "booking.phone": "Numero di Telefono",
        "booking.date": "Data Preferita",
        "booking.travelers": "Numero di Viaggiatori",
        "booking.person1": "1 Persona",
        "booking.person2": "2 Persone",
        "booking.person3": "3 Persone",
        "booking.person4": "4 Persone",
        "booking.person5+": "5+ Persone",
        "booking.requests": "Richieste Speciali",
        "booking.tour": "Tour",
        "booking.price": "Prezzo",
        "booking.total": "Totale",
        "booking.payment": "Metodo di Pagamento",
        "booking.cash": "Contanti all'arrivo",
        "booking.accept": "Accettiamo USD, JOD, EUR come metodo di pagamento. Riceverai una ricevuta dopo il pagamento.",
        "booking.complete": "Completa Prenotazione",
        "whatsapp.service": "Servizio clienti 24 ore su 24"
    }
};
// Modal functionality
const modal = document.getElementById("bookingModal");
const closeBtn = document.getElementsByClassName("close")[0];
// Menu functionality
const menuButton = document.getElementById("menuButton");
const menuDropdown = document.getElementById("menuDropdown");
// Toggle menu dropdown
menuButton.addEventListener("click", function() {
    menuDropdown.classList.toggle("show");
});
// Close menu when clicking outside
document.addEventListener("click", function(event) {
    if (!menuButton.contains(event.target) && !menuDropdown.contains(event.target)) {
        menuDropdown.classList.remove("show");
        // Also close the language submenu
        document.querySelector(".language-menu").classList.remove("active");
    }
});
// Home button functionality
document.querySelector(".menu-home").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    menuDropdown.classList.remove("show");
});
// Language menu click event
document.querySelector(".menu-language").addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation(); // Prevent the menu from closing
    this.parentElement.classList.toggle("active");
});
// Language selection functionality
document.querySelectorAll(".language-options a").forEach(langLink => {
    langLink.addEventListener("click", function(e) {
        e.preventDefault();
        const selectedLang = this.getAttribute("data-lang");
        changeLanguage(selectedLang);
        menuDropdown.classList.remove("show");
        document.querySelector(".language-menu").classList.remove("active");
    });
});
// Change language function
function changeLanguage(lang) {
    // Save language preference to localStorage
    localStorage.setItem("jotour-language", lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all translatable elements
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // For RTL languages like Arabic
    if (lang === "ar") {
        document.body.dir = "rtl";
    } else {
        document.body.dir = "ltr";
    }
    
    // Show notification
    showNotification(`Language changed to ${getLanguageName(lang)}`);
}
// Get language name from code
function getLanguageName(langCode) {
    const langNames = {
        en: "English",
        es: "Español",
        fr: "Français",
        de: "Deutsch",
        zh: "中文",
        ja: "日本語",
        ru: "Русский",
        ar: "العربية",
        pt: "Português",
        it: "Italiano"
    };
    return langNames[langCode] || langCode;
}
// Initialize language from localStorage or browser language
function initializeLanguage() {
    // Check if language is saved in localStorage
    const savedLang = localStorage.getItem("jotour-language");
    if (savedLang && translations[savedLang]) {
        changeLanguage(savedLang);
        return;
    }
    
    // Otherwise, try to detect browser language
    const browserLang = navigator.language.split("-")[0];
    if (translations[browserLang]) {
        changeLanguage(browserLang);
        return;
    }
    
    // Default to English if no match
    changeLanguage("en");
}
// Open booking modal
function openBooking(tourName, tourPrice) {
    document.getElementById("tourName").value = tourName;
    document.getElementById("tourPrice").value = tourPrice;
    document.getElementById("selectedTour").textContent = tourName;
    document.getElementById("selectedPrice").textContent = `$${tourPrice}`;
    document.getElementById("totalPriceDisplay").textContent = `$${tourPrice}`;
    
    modal.style.display = "block";
}
// Close modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}
// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Update total price when travelers change
document.getElementById("travelers").addEventListener("change", function() {
    const price = parseInt(document.getElementById("tourPrice").value);
    const travelers = this.value === "5+" ? 5 : parseInt(this.value);
    const total = price * travelers;
    document.getElementById("totalPriceDisplay").textContent = `$${total}`;
});
// Handle form submission with loading state and notification
document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const bookingData = {
        tourName: formData.get('tourName'),
        tourPrice: formData.get('tourPrice'),
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        tourDate: formData.get('tourDate'),
        travelers: formData.get('travelers'),
        message: formData.get('message')
    };
    
    // Calculate total price
    const price = parseInt(bookingData.tourPrice);
    const travelers = bookingData.travelers === "5+" ? 5 : parseInt(bookingData.travelers);
    const total = price * travelers;
    
    // Set total price in hidden field
    document.getElementById("totalPrice").value = total;
    
    // Update FormData with total price
    formData.set('totalPrice', total);
    
    // Show loading state
    const submitBtn = document.querySelector(".submit-btn");
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Processing...";
    submitBtn.disabled = true;
    
    // Submit to Formspree
    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.ok) {
            // Show success notification instead of alert
            showNotification(`Thank you ${bookingData.fullName}! Your booking for ${bookingData.tourName} has been received. Total: $${total}. Please pay in cash on arrival.`);
            modal.style.display = "none";
            this.reset();
        } else {
            // Show error notification
            showNotification('Oops! There was a problem. Please try again.', 'error');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Show error notification
        showNotification('Oops! There was a problem. Please try again.', 'error');
    })
    .finally(() => {
        // Reset button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
});
// Smooth scroll to tours section
function scrollToTours() {
    document.getElementById("tours").scrollIntoView({ behavior: 'smooth' });
}
// Lazy loading for tour card background images
document.addEventListener("DOMContentLoaded", function() {
    // Initialize language
    initializeLanguage();
    
    const tourImages = document.querySelectorAll('.tour-image[data-background]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const bgUrl = img.getAttribute('data-background');
                img.style.backgroundImage = `url('${bgUrl}')`;
                img.removeAttribute('data-background');
                imageObserver.unobserve(img);
            }
        });
    });
    
    tourImages.forEach(img => imageObserver.observe(img));
});
// Notification system
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = 'notification show';
    
    if (type === 'error') {
        notification.classList.add('error');
    }
    
    // Hide after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}
