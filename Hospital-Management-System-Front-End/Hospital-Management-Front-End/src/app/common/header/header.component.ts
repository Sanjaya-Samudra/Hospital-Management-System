import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Notification {
  id: number;
  type: string;
  message: string;
  time: string;
  unread: boolean;
}

interface User {
  name: string;
  role: string;
  avatar: string;
  email: string;
  department: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Top Header Bar -->
    <header class="header-bar">
      <div class="header-content">
        <!-- Left Section - Mobile Menu & App Branding -->
        <div class="header-left">
          <!-- Mobile Menu Button -->
          <button class="mobile-menu-btn" (click)="toggleMobileMenu()" *ngIf="isMobileView">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 12h18M3 6h18M3 18h18"/>
            </svg>
          </button>

          <div class="app-title">
            <div class="app-logo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
            <span class="app-name">HealthWave</span>
            <span class="app-separator">•</span>
            <span class="page-title">{{ currentPageTitle }}</span>
          </div>
          <nav class="breadcrumb">
            <span class="breadcrumb-item">Home</span>
            <span class="breadcrumb-separator">/</span>
            <span class="breadcrumb-item active">{{ currentPageTitle }}</span>
          </nav>
        </div>

        <!-- Center Section - Search Bar -->
        <div class="header-center">
          <div class="search-container">
            <input type="text" placeholder="Search patients, appointments..." class="search-input">
            <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </div>
        </div>

        <!-- Right Section - Actions & User -->
        <div class="header-right">
          <!-- Notifications -->
          <div class="notification-container">
            <button class="notification-btn" (click)="toggleNotifications()" [class.active]="showNotifications">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="m13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              <span class="notification-badge" *ngIf="unreadCount > 0">{{ unreadCount }}</span>
            </button>

            <!-- Notification Dropdown -->
            <div class="notification-dropdown" [class.show]="showNotifications">
              <div class="notification-header">
                <h3>Notifications</h3>
                <button class="mark-read-btn" (click)="markAllRead()">Mark all read</button>
              </div>
              <div class="notification-list">
                <div *ngFor="let notification of notifications"
                     class="notification-item"
                     [class.unread]="notification.unread"
                     (click)="markAsRead(notification)">
                  <div class="notification-icon" [ngClass]="notification.type">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path [attr.d]="getNotificationIcon(notification.type)"></path>
                    </svg>
                  </div>
                  <div class="notification-content">
                    <p class="notification-message">{{ notification.message }}</p>
                    <span class="notification-time">{{ notification.time }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- User Menu -->
          <div class="user-menu-container">
            <button class="user-menu-btn" (click)="toggleUserMenu()" [class.active]="showUserMenu">
              <img [src]="user.avatar" [alt]="user.name" class="user-avatar">
              <div class="user-info">
                <span class="user-name">{{ user.name }}</span>
                <span class="user-role">{{ user.role }}</span>
              </div>
              <svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>

            <!-- User Dropdown -->
            <div class="user-dropdown" [class.show]="showUserMenu">
              <div class="user-profile-section">
                <img [src]="user.avatar" [alt]="user.name" class="dropdown-avatar">
                <div class="dropdown-user-info">
                  <h4>{{ user.name }}</h4>
                  <p>{{ user.email }}</p>
                  <span class="department-badge">{{ user.department }}</span>
                </div>
              </div>
              <div class="dropdown-divider"></div>
              <div class="dropdown-menu">
                <button class="dropdown-item" (click)="navigateToProfile()">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  Profile
                </button>
                <button class="dropdown-item" (click)="navigateToSettings()">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                  Settings
                </button>
                <div class="dropdown-divider"></div>
                <button class="dropdown-item logout" (click)="logout()">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16,17 21,12 16,7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showNotifications = false;
  showUserMenu = false;
  currentPageTitle = 'Dashboard';
  isMobileView = false;

  @Output() mobileMenuToggle = new EventEmitter<void>();

  user: User = {
    name: 'Dr. Sarah Johnson',
    role: 'Chief of Cardiology',
    avatar: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
    email: 'sarah.johnson@hospital.com',
    department: 'Cardiology'
  };

  notifications: Notification[] = [
    { id: 1, type: 'appointment', message: 'New appointment request from John Doe', time: '2 min ago', unread: true },
    { id: 2, type: 'patient', message: 'Patient discharge ready for Room 203', time: '15 min ago', unread: true },
    { id: 3, type: 'report', message: 'Lab results available for Patient #1234', time: '1 hour ago', unread: false },
    { id: 4, type: 'emergency', message: 'Emergency alert: Code Blue in ICU', time: '2 hours ago', unread: false }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    // Set current page title based on route
    this.updatePageTitle();
    this.checkMobileView();
    this.router.events.subscribe(() => {
      this.updatePageTitle();
    });

    // Listen for window resize
    window.addEventListener('resize', () => {
      this.checkMobileView();
    });
  }

  ngOnDestroy() {
    window.removeEventListener('resize', () => {
      this.checkMobileView();
    });
  }

  checkMobileView() {
    this.isMobileView = window.innerWidth <= 768;
  }

  toggleMobileMenu() {
    this.mobileMenuToggle.emit();
  }

  get unreadCount(): number {
    return this.notifications.filter(n => n.unread).length;
  }

  updatePageTitle() {
    const url = this.router.url;
    if (url.includes('/appointment')) {
      this.currentPageTitle = 'Appointment Management';
    } else if (url.includes('/patient')) {
      this.currentPageTitle = 'Patient Management';
    } else if (url.includes('/report')) {
      this.currentPageTitle = 'Medical Reports';
    } else {
      this.currentPageTitle = 'Dashboard';
    }
  }

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
    this.showUserMenu = false;
  }

  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
    this.showNotifications = false;
  }

  markAllRead() {
    this.notifications.forEach(n => n.unread = false);
  }

  markAsRead(notification: Notification) {
    notification.unread = false;
  }

  navigateToProfile() {
    // TODO: Implement profile navigation
    this.showUserMenu = false;
  }

  navigateToSettings() {
    // TODO: Implement settings navigation
    this.showUserMenu = false;
  }

  logout() {
    // TODO: Implement logout logic
    this.router.navigate(['/']);
  }

  getNotificationIcon(type: string): string {
    switch (type) {
      case 'appointment':
        return 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z';
      case 'patient':
        return 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z';
      case 'report':
        return 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z';
      case 'emergency':
        return 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z';
      default:
        return 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
    }
  }
}