import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface NavItem {
  id: string;
  label: string;
  icon: string;
  route: string;
  badge: number;
  badgeColor: string;
  children?: NavItem[];
  expanded?: boolean;
}

interface User {
  name: string;
  role: string;
  avatar: string;
  email: string;
  department: string;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  isCollapsed = false;
  activeItem: string = '';

  @Output() sidebarCollapsed = new EventEmitter<boolean>();

  user: User = {
    name: 'Dr. Sarah Johnson',
    role: 'Chief of Cardiology',
    avatar: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
    email: 'sarah.johnson@hospital.com',
    department: 'Cardiology'
  };

  navItems: NavItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: 'chart-bar',
      route: '/dashboard',
      badge: 0,
      badgeColor: 'success'
    },
    {
      id: 'appointments',
      label: 'Appointments',
      icon: 'calendar',
      route: '/dashboard/appointment',
      badge: 3,
      badgeColor: 'primary'
    },
    {
      id: 'patients',
      label: 'Patients',
      icon: 'user-group',
      route: '/dashboard/patient',
      badge: 0,
      badgeColor: 'info'
    },
    {
      id: 'reports',
      label: 'Medical Reports',
      icon: 'document-text',
      route: '/dashboard/report',
      badge: 0,
      badgeColor: 'warning'
    },
    {
      id: 'doctors',
      label: 'Doctors',
      icon: 'user-md',
      route: '/dashboard', // Temporarily point to dashboard until doctors route is implemented
      badge: 0,
      badgeColor: 'secondary',
      children: [
        { id: 'doctor-list', label: 'All Doctors', icon: 'user-md', route: '/dashboard', badge: 0, badgeColor: 'secondary' },
        { id: 'doctor-schedule', label: 'Schedules', icon: 'clock', route: '/dashboard', badge: 0, badgeColor: 'secondary' },
        { id: 'doctor-specialties', label: 'Specialties', icon: 'award', route: '/dashboard', badge: 0, badgeColor: 'secondary' }
      ],
      expanded: false
    },
    {
      id: 'wards',
      label: 'Wards & Rooms',
      icon: 'building',
      route: '/dashboard', // Temporarily point to dashboard until wards route is implemented
      badge: 0,
      badgeColor: 'danger'
    },
    {
      id: 'pharmacy',
      label: 'Pharmacy',
      icon: 'pills',
      route: '/dashboard', // Temporarily point to dashboard until pharmacy route is implemented
      badge: 0,
      badgeColor: 'success'
    },
    {
      id: 'billing',
      label: 'Billing',
      icon: 'currency-dollar',
      route: '/dashboard', // Temporarily point to dashboard until billing route is implemented
      badge: 0,
      badgeColor: 'warning'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: 'cog',
      route: '/dashboard', // Temporarily point to dashboard until settings route is implemented
      badge: 0,
      badgeColor: 'secondary'
    }
  ];

  notifications = [
    { id: 1, type: 'appointment', message: 'New appointment request', time: '2 min ago', unread: true },
    { id: 2, type: 'patient', message: 'Patient discharge ready', time: '15 min ago', unread: true },
    { id: 3, type: 'report', message: 'Lab results available', time: '1 hour ago', unread: false }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    // Set active item based on current route
    this.activeItem = this.router.url.split('/')[1] || 'dashboard';
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.sidebarCollapsed.emit(this.isCollapsed);
  }

  toggleSubmenu(item: NavItem) {
    if (item.children) {
      item.expanded = !item.expanded;
    }
  }

  isActive(route: string): boolean {
    return this.router.url.includes(route);
  }

  getUnreadNotificationsCount(): number {
    return this.notifications.filter(n => n.unread).length;
  }

  toggleNotifications() {
    // Implement notifications toggle logic
    console.log('Notifications toggled');
  }

  logout() {
    // Clear authentication data
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    sessionStorage.clear();

    // Navigate to login page
    this.router.navigate(['/']);
  }

  getIconPath(iconName: string): string {
    const icons: { [key: string]: string } = {
      'chart-bar': 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      calendar: 'M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z',
      'user-group': 'M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z',
      'document-text': 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      'medical-cross': 'M12 6v6m0 0v6m0-6h6m-6 0H6',
      'doctor-avatar': 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      'medical-staff': 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
      'medical-bag': 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      'graduation-cap': 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l-6.16-3.422a12.083 12.083 0 01-.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 006.824-2.998 12.078 12.078 0 00-.665-6.479L12 14z M12 14l9-5-9-5-9 5 9 5z',
      'medical-shield': 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z M12 8v4m0 0v4m0-4h4m-4 0H8',
      stethoscope: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l.707.707A1 1 0 0012.414 11H13a2 2 0 012 2v.172a2 2 0 01-.586 1.414l-.707.707A1 1 0 0113.414 16H12a2 2 0 01-2-2v-.172a2 2 0 01.586-1.414l.707-.707A1 1 0 0111 11.586V11a2 2 0 012-2z',
      building: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      pills: 'M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5',
      'currency-dollar': 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
      cog: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
      'user-md': 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      clock: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      award: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
    };
    return icons[iconName] || icons['chart-bar'];
  }
}
