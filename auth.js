// Authentication System for JoTour
// Store users in localStorage (for demo purposes)

// User database (in production, this would be on a server)
let users = JSON.parse(localStorage.getItem('jotour-users')) || [];

// Current user session
let currentUser = JSON.parse(localStorage.getItem('jotour-current-user')) || null;

// Signup function
function signup(name, email, password) {
    // Check if user already exists
    if (users.find(user => user.email === email)) {
        return { success: false, message: "Email already registered" };
    }
    
    // Create new user
    const newUser = {
        id: Date.now(),
        name,
        email,
        password: btoa(password), // Simple encoding (not secure for production)
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('jotour-users', JSON.stringify(users));
    
    return { success: true, message: "Account created successfully" };
}

// Login function
function login(email, password) {
    const user = users.find(u => u.email === email && u.password === btoa(password));
    
    if (user) {
        currentUser = {
            id: user.id,
            name: user.name,
            email: user.email
        };
        localStorage.setItem('jotour-current-user', JSON.stringify(currentUser));
        return { success: true, message: "Login successful" };
    } else {
        return { success: false, message: "Invalid email or password" };
    }
}

// Logout function
function logout() {
    currentUser = null;
    localStorage.removeItem('jotour-current-user');
}

// Check if user is logged in
function isLoggedIn() {
    return currentUser !== null;
}

// Get current user
function getCurrentUser() {
    return currentUser;
}

// Update UI based on authentication state
function updateAuthUI() {
    const authContainer = document.getElementById('authContainer');
    
    if (isLoggedIn()) {
        const user = getCurrentUser();
        authContainer.innerHTML = `
            <div class="user-menu">
                <span>Welcome, ${user.name}</span>
                <button id="logoutBtn" class="auth-btn">Logout</button>
            </div>
        `;
        
        document.getElementById('logoutBtn').addEventListener('click', function() {
            logout();
            updateAuthUI();
            showNotification('Logged out successfully');
        });
    } else {
        authContainer.innerHTML = `
            <button id="loginBtn" class="auth-btn">Login / Sign Up</button>
        `;
        
        document.getElementById('loginBtn').addEventListener('click', function() {
            showAuthModal();
        });
    }
}

// Show authentication modal
function showAuthModal() {
    const authModal = document.getElementById('authModal');
    authModal.style.display = 'block';
    
    // Reset forms
    document.getElementById('loginForm').reset();
    document.getElementById('signupForm').reset();
    
    // Show login tab by default
    showLoginTab();
}

// Hide authentication modal
function hideAuthModal() {
    const authModal = document.getElementById('authModal');
    authModal.style.display = 'none';
}

// Show login tab
function showLoginTab() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginTab').classList.add('active');
    document.getElementById('signupTab').classList.remove('active');
}

// Show signup tab
function showSignupTab() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('signupTab').classList.add('active');
    document.getElementById('loginTab').classList.remove('active');
}

// Initialize authentication when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateAuthUI();
    
    // Setup auth modal close button
    const closeAuthModal = document.querySelector('.close-auth');
    if (closeAuthModal) {
        closeAuthModal.addEventListener('click', hideAuthModal);
    }
    
    // Setup login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            const result = login(email, password);
            if (result.success) {
                hideAuthModal();
                updateAuthUI();
                showNotification('Login successful');
            } else {
                showNotification(result.message, 'error');
            }
        });
    }
    
    // Setup signup form
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;
            
            if (password !== confirmPassword) {
                showNotification('Passwords do not match', 'error');
                return;
            }
            
            const result = signup(name, email, password);
            if (result.success) {
                hideAuthModal();
                updateAuthUI();
                showNotification('Account created successfully');
            } else {
                showNotification(result.message, 'error');
            }
        });
    }
    
    // Setup tab switching
    const loginTab = document.getElementById('loginTab');
    const signupTab = document.getElementById('signupTab');
    
    if (loginTab && signupTab) {
        loginTab.addEventListener('click', showLoginTab);
        signupTab.addEventListener('click', showSignupTab);
    }
});
