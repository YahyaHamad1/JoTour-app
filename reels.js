/*
 * JoTour - Discover Jordan
 * Copyright (c) 2025 AlMa'ali group
 * All rights reserved.
*/

// Reels data - in a real application, this would come from a database
const reelsData = [
    {
        id: 1,
        videoSrc: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        author: "Sarah Johnson",
        authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
        description: "Amazing sunrise at Petra! The Treasury looks magical in the morning light. #Jordan #Petra #Travel",
        likes: 245,
        liked: false,
        comments: [
            { author: "MikeTraveler", text: "This is incredible! I want to visit!" },
            { author: "AdventureSeeker", text: "The colors are stunning!" }
        ]
    },
    {
        id: 2,
        videoSrc: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4",
        author: "Ahmed Hassan",
        authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
        description: "Jeep safari in Wadi Rum! The desert landscape is out of this world. #WadiRum #Desert #Adventure",
        likes: 189,
        liked: false,
        comments: [
            { author: "DesertLover", text: "I did this last year, it was amazing!" },
            { author: "TravelBuddy", text: "How long was the tour?" }
        ]
    },
    {
        id: 3,
        videoSrc: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4",
        author: "Emma Wilson",
        authorAvatar: "https://randomuser.me/api/portraits/women/68.jpg",
        description: "Floating in the Dead Sea! The mud treatment was so relaxing. #DeadSea #Jordan #Relaxation",
        likes: 312,
        liked: false,
        comments: [
            { author: "SpaLover", text: "I need to try this mud treatment!" },
            { author: "BeachFan", text: "Is it really that buoyant?" }
        ]
    }
];

// Translations for reels page
const reelsTranslations = {
    en: {
        "menu.home": "Home",
        "menu.language": "Language",
        "menu.reels": "Reels",
        "reels.title": "Tourist Reels",
        "reels.subtitle": "Experience Jordan through the eyes of our travelers",
        "share.title": "Share this reel",
        "share.instagram": "Instagram",
        "share.tiktok": "TikTok",
        "share.snapchat": "Snapchat",
        "share.whatsapp": "WhatsApp",
        "share.twitter": "Twitter",
        "actions.like": "Like",
        "actions.comment": "Comment",
        "actions.share": "Share",
        "comment.placeholder": "Add a comment..."
    },
    es: {
        "menu.home": "Inicio",
        "menu.language": "Idioma",
        "menu.reels": "Reels",
        "reels.title": "Reels de Turistas",
        "reels.subtitle": "Experimenta Jordania a través de los ojos de nuestros viajeros",
        "share.title": "Compartir este reel",
        "share.instagram": "Instagram",
        "share.tiktok": "TikTok",
        "share.snapchat": "Snapchat",
        "share.whatsapp": "WhatsApp",
        "share.twitter": "Twitter",
        "actions.like": "Me gusta",
        "actions.comment": "Comentario",
        "actions.share": "Compartir",
        "comment.placeholder": "Añadir un comentario..."
    },
    fr: {
        "menu.home": "Accueil",
        "menu.language": "Langue",
        "menu.reels": "Reels",
        "reels.title": "Reels de Touristes",
        "reels.subtitle": "Découvrez la Jordanie à travers les yeux de nos voyageurs",
        "share.title": "Partager ce reel",
        "share.instagram": "Instagram",
        "share.tiktok": "TikTok",
        "share.snapchat": "Snapchat",
        "share.whatsapp": "WhatsApp",
        "share.twitter": "Twitter",
        "actions.like": "J'aime",
        "actions.comment": "Commentaire",
        "actions.share": "Partager",
        "comment.placeholder": "Ajouter un commentaire..."
    },
    de: {
        "menu.home": "Startseite",
        "menu.language": "Sprache",
        "menu.reels": "Reels",
        "reels.title": "Touristen-Reels",
        "reels.subtitle": "Erleben Sie Jordanien durch die Augen unserer Reisenden",
        "share.title": "Diesen Reel teilen",
        "share.instagram": "Instagram",
        "share.tiktok": "TikTok",
        "share.snapchat": "Snapchat",
        "share.whatsapp": "WhatsApp",
        "share.twitter": "Twitter",
        "actions.like": "Gefällt mir",
        "actions.comment": "Kommentar",
        "actions.share": "Teilen",
        "comment.placeholder": "Kommentar hinzufügen..."
    },
    zh: {
        "menu.home": "首页",
        "menu.language": "语言",
        "menu.reels": "Reels",
        "reels.title": "游客Reels",
        "reels.subtitle": "通过我们旅行者的眼睛体验约旦",
        "share.title": "分享此Reel",
        "share.instagram": "Instagram",
        "share.tiktok": "TikTok",
        "share.snapchat": "Snapchat",
        "share.whatsapp": "WhatsApp",
        "share.twitter": "Twitter",
        "actions.like": "喜欢",
        "actions.comment": "评论",
        "actions.share": "分享",
        "comment.placeholder": "添加评论..."
    },
    ja: {
        "menu.home": "ホーム",
        "menu.language": "言語",
        "menu.reels": "リール",
        "reels.title": "観光客のリール",
        "reels.subtitle": "私たちの旅行者の目を通してヨルダンを体験",
        "share.title": "このリールを共有",
        "share.instagram": "Instagram",
        "share.tiktok": "TikTok",
        "share.snapchat": "Snapchat",
        "share.whatsapp": "WhatsApp",
        "share.twitter": "Twitter",
        "actions.like": "いいね",
        "actions.comment": "コメント",
        "actions.share": "共有",
        "comment.placeholder": "コメントを追加..."
    },
    ru: {
        "menu.home": "Главная",
        "menu.language": "Язык",
        "menu.reels": "Reels",
        "reels.title": "Туристические Reels",
        "reels.subtitle": "Познакомьтесь с Иорданией глазами наших путешественников",
        "share.title": "Поделиться этим reel",
        "share.instagram": "Instagram",
        "share.tiktok": "TikTok",
        "share.snapchat": "Snapchat",
        "share.whatsapp": "WhatsApp",
        "share.twitter": "Twitter",
        "actions.like": "Нравится",
        "actions.comment": "Комментарий",
        "actions.share": "Поделиться",
        "comment.placeholder": "Добавить комментарий..."
    },
    ar: {
        "menu.home": "الرئيسية",
        "menu.language": "اللغة",
        "menu.reels": "رييلز",
        "reels.title": "رييلز السياح",
        "reels.subtitle": "اختبر الأردن من خلال أعين المسافرين",
        "share.title": "مشاركة هذا الرييل",
        "share.instagram": "إنستغرام",
        "share.tiktok": "تيك توك",
        "share.snapchat": "سناب شات",
        "share.whatsapp": "واتساب",
        "share.twitter": "تويتر",
        "actions.like": "إعجاب",
        "actions.comment": "تعليق",
        "actions.share": "مشاركة",
        "comment.placeholder": "إضافة تعليق..."
    },
    pt: {
        "menu.home": "Início",
        "menu.language": "Idioma",
        "menu.reels": "Reels",
        "reels.title": "Reels de Turistas",
        "reels.subtitle": "Experimente a Jordânia através dos olhos de nossos viajantes",
        "share.title": "Compartilhar este reel",
        "share.instagram": "Instagram",
        "share.tiktok": "TikTok",
        "share.snapchat": "Snapchat",
        "share.whatsapp": "WhatsApp",
        "share.twitter": "Twitter",
        "actions.like": "Curtir",
        "actions.comment": "Comentar",
        "actions.share": "Compartilhar",
        "comment.placeholder": "Adicionar um comentário..."
    },
    it: {
        "menu.home": "Home",
        "menu.language": "Lingua",
        "menu.reels": "Reels",
        "reels.title": "Reels dei Turisti",
        "reels.subtitle": "Sperimenta la Giordania attraverso gli occhi dei nostri viaggiatori",
        "share.title": "Condividi questo reel",
        "share.instagram": "Instagram",
        "share.tiktok": "TikTok",
        "share.snapchat": "Snapchat",
        "share.whatsapp": "WhatsApp",
        "share.twitter": "Twitter",
        "actions.like": "Mi piace",
        "actions.comment": "Commento",
        "actions.share": "Condividi",
        "comment.placeholder": "Aggiungi un commento..."
    }
};

// DOM elements
const reelsFeed = document.getElementById("reelsFeed");
const shareModal = document.getElementById("shareModal");
const closeBtn = document.querySelector(".close");
const menuButton = document.getElementById("menuButton");
const menuDropdown = document.getElementById("menuDropdown");

// Current reel for sharing
let currentReelId = null;

// Initialize the page
document.addEventListener("DOMContentLoaded", function() {
    // Initialize language
    initializeReelsLanguage();
    
    // Load reels
    loadReels();
    
    // Set up menu functionality
    setupMenu();
    
    // Set up share modal
    setupShareModal();
});

// Load reels from data
function loadReels() {
    reelsFeed.innerHTML = "";
    
    reelsData.forEach(reel => {
        const reelElement = createReelElement(reel);
        reelsFeed.appendChild(reelElement);
    });
}

// Create a reel element
function createReelElement(reel) {
    const reelCard = document.createElement("div");
    reelCard.className = "reel-card";
    reelCard.dataset.id = reel.id;
    
    reelCard.innerHTML = `
        <video class="reel-video" src="${reel.videoSrc}" loop muted playsinline></video>
        <div class="reel-content">
            <div class="reel-info">
                <div class="reel-author">
                    <img src="${reel.authorAvatar}" alt="${reel.author}">
                    <h3>${reel.author}</h3>
                </div>
                <p class="reel-description">${reel.description}</p>
                <div class="comments-section">
                    ${reel.comments.map(comment => `
                        <div class="comment">
                            <div class="comment-avatar"></div>
                            <div class="comment-content">
                                <span class="comment-author">${comment.author}</span>
                                <span class="comment-text">${comment.text}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="add-comment">
                    <input type="text" placeholder="${getTranslation('comment.placeholder')}" class="comment-input">
                    <button class="comment-submit"><i class="fas fa-paper-plane"></i></button>
                </div>
            </div>
            <div class="reel-actions">
                <button class="action-btn like-btn ${reel.liked ? 'liked' : ''}" data-action="like">
                    <i class="fas fa-heart"></i>
                </button>
                <span class="action-count">${reel.likes}</span>
                <button class="action-btn comment-btn" data-action="comment">
                    <i class="fas fa-comment"></i>
                </button>
                <button class="action-btn share-btn" data-action="share">
                    <i class="fas fa-share"></i>
                </button>
            </div>
        </div>
    `;
    
    // Set up event listeners for the reel
    setupReelEventListeners(reelCard, reel);
    
    return reelCard;
}

// Set up event listeners for a reel
function setupReelEventListeners(reelCard, reel) {
    const video = reelCard.querySelector(".reel-video");
    const likeBtn = reelCard.querySelector(".like-btn");
    const shareBtn = reelCard.querySelector(".share-btn");
    const commentBtn = reelCard.querySelector(".comment-btn");
    const commentInput = reelCard.querySelector(".comment-input");
    const commentSubmit = reelCard.querySelector(".comment-submit");
    
    // Play/pause video on click
    video.addEventListener("click", function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
    
    // Like button
    likeBtn.addEventListener("click", function() {
        toggleLike(reel.id, likeBtn);
    });
    
    // Share button
    shareBtn.addEventListener("click", function() {
        openShareModal(reel.id);
    });
    
    // Comment button
    commentBtn.addEventListener("click", function() {
        commentInput.focus();
    });
    
    // Comment submission
    commentSubmit.addEventListener("click", function() {
        submitComment(reel.id, commentInput.value, reelCard);
        commentInput.value = "";
    });
    
    // Comment input enter key
    commentInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            submitComment(reel.id, commentInput.value, reelCard);
            commentInput.value = "";
        }
    });
    
    // Intersection Observer for auto-play
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.7 });
    
    observer.observe(reelCard);
}

// Toggle like status
function toggleLike(reelId, likeBtn) {
    const reel = reelsData.find(r => r.id === reelId);
    
    if (reel) {
        reel.liked = !reel.liked;
        
        if (reel.liked) {
            reel.likes++;
            likeBtn.classList.add("liked");
        } else {
            reel.likes--;
            likeBtn.classList.remove("liked");
        }
        
        // Update the like count
        const countElement = likeBtn.nextElementSibling;
        countElement.textContent = reel.likes;
    }
}

// Submit a comment
function submitComment(reelId, commentText, reelCard) {
    if (!commentText.trim()) return;
    
    const reel = reelsData.find(r => r.id === reelId);
    
    if (reel) {
        // Add comment to data
        reel.comments.push({
            author: "You",
            text: commentText
        });
        
        // Add comment to UI
        const commentsSection = reelCard.querySelector(".comments-section");
        const newComment = document.createElement("div");
        newComment.className = "comment";
        newComment.innerHTML = `
            <div class="comment-avatar"></div>
            <div class="comment-content">
                <span class="comment-author">You</span>
                <span class="comment-text">${commentText}</span>
            </div>
        `;
        
        commentsSection.appendChild(newComment);
        
        // Scroll to bottom of comments
        commentsSection.scrollTop = commentsSection.scrollHeight;
    }
}

// Set up menu functionality
function setupMenu() {
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
            changeReelsLanguage(selectedLang);
            menuDropdown.classList.remove("show");
            document.querySelector(".language-menu").classList.remove("active");
        });
    });
}

// Set up share modal
function setupShareModal() {
    // Close modal
    closeBtn.onclick = function() {
        shareModal.style.display = "none";
    }
    
    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target == shareModal) {
            shareModal.style.display = "none";
        }
    }
    
    // Share button event listeners
    document.querySelectorAll(".share-btn").forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            const platform = this.getAttribute("data-platform");
            shareReel(currentReelId, platform);
            shareModal.style.display = "none";
        });
    });
}

// Open share modal
function openShareModal(reelId) {
    currentReelId = reelId;
    shareModal.style.display = "block";
}

// Share a reel
function shareReel(reelId, platform) {
    const reel = reelsData.find(r => r.id === reelId);
    
    if (!reel) return;
    
    const shareUrl = window.location.href;
    const shareText = `Check out this amazing reel from ${reel.author} about their Jordan tour experience!`;
    
    let shareLink = "";
    
    switch(platform) {
        case "instagram":
            // Instagram doesn't support direct URL sharing, so we copy to clipboard
            navigator.clipboard.writeText(`${shareText} ${shareUrl}`).then(() => {
                showNotification("Link copied to clipboard! Paste it in your Instagram story.");
            });
            break;
        case "tiktok":
            // TikTok doesn't support direct URL sharing, so we copy to clipboard
            navigator.clipboard.writeText(`${shareText} ${shareUrl}`).then(() => {
                showNotification("Link copied to clipboard! Paste it in your TikTok.");
            });
            break;
        case "snapchat":
            // Snapchat doesn't support direct URL sharing, so we copy to clipboard
            navigator.clipboard.writeText(`${shareText} ${shareUrl}`).then(() => {
                showNotification("Link copied to clipboard! Paste it in your Snapchat.");
            });
            break;
        case "whatsapp":
            shareLink = `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
            window.open(shareLink, "_blank");
            break;
        case "twitter":
            shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
            window.open(shareLink, "_blank");
            break;
    }
}

// Initialize language for reels page
function initializeReelsLanguage() {
    // Check if language is saved in localStorage
    const savedLang = localStorage.getItem("jotour-language");
    if (savedLang && reelsTranslations[savedLang]) {
        changeReelsLanguage(savedLang);
        return;
    }
    
    // Otherwise, try to detect browser language
    const browserLang = navigator.language.split("-")[0];
    if (reelsTranslations[browserLang]) {
        changeReelsLanguage(browserLang);
        return;
    }
    
    // Default to English if no match
    changeReelsLanguage("en");
}

// Change language for reels page
function changeReelsLanguage(lang) {
    // Save language preference to localStorage
    localStorage.setItem("jotour-language", lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all translatable elements
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (reelsTranslations[lang] && reelsTranslations[lang][key]) {
            element.textContent = reelsTranslations[lang][key];
        }
    });
    
    // For RTL languages like Arabic
    if (lang === "ar") {
        document.body.dir = "rtl";
    } else {
        document.body.dir = "ltr";
    }
    
    // Reload reels to update placeholders
    loadReels();
}

// Get translation for reels page
function getTranslation(key) {
    const lang = localStorage.getItem("jotour-language") || "en";
    return reelsTranslations[lang] && reelsTranslations[lang][key] ? reelsTranslations[lang][key] : reelsTranslations["en"][key];
}

// Show notification
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
