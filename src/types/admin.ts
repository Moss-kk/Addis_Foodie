export type AdminTab = 
  | 'dashboard'
  | 'restaurants'
  | 'verification'
  | 'reservations'
  | 'reviews'
  | 'posts'
  | 'media'
  | 'marketing'
  | 'analytics'
  | 'security'
  | 'settings';

export interface AdminNavItem {
  id: AdminTab;
  label: string;
  icon: string;
  badge?: string | number;
  badgeColor?: string;
  shortcut?: string;
}

export interface NavGroup {
  title: string;
  items: AdminNavItem[];
}

export interface KpiMetric {
  id: string;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  period: string;
  sparkline: number[];
  status: 'healthy' | 'warning' | 'critical' | 'neutral';
  drilldownData?: any;
}

export interface RestaurantRecord {
  id: string;
  name: string;
  neighborhood: string;
  category: string;
  healthScore: number; // 0 - 100
  verificationStatus: 'VERIFIED' | 'PENDING_APPROVAL' | 'NEEDS_REVISION' | 'REJECTED';
  rating: number;
  totalReviews: number;
  monthlyBookings: number;
  ownerName: string;
  ownerPhone: string;
  ownerEmail: string;
  joinedDate: string;
  hasFastingMenu: boolean;
  featured: boolean;
  image: string;
  address: string;
  priceRange: string;
  taxId?: string;
  hygieneCertificate?: boolean;
}

export interface ApprovalItem {
  id: string;
  restaurantId: string;
  restaurantName: string;
  neighborhood: string;
  submittedDate: string;
  documentType: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  notes?: string;
}

export interface TableColumn<T> {
  key: keyof T | string;
  header: string;
  sortable?: boolean;
  filterable?: boolean;
  hidden?: boolean;
  width?: string;
  render?: (item: T) => React.ReactNode;
}

export interface TableState {
  sortKey: string;
  sortOrder: 'asc' | 'desc';
  searchQuery: string;
  selectedIds: string[];
  hiddenColumns: string[];
  page: number;
  pageSize: number;
}

export interface AiCopilotMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  actionable?: {
    type: 'APPLY_FILTER' | 'DRAFT_PROMO' | 'SUMMARIZE_REVIEWS' | 'FLAG_FAKES';
    payload?: any;
  };
}

export interface AuditLogRecord {
  id: string;
  timestamp: string;
  user: string;
  role: string;
  action: string;
  target: string;
  ipAddress: string;
  status: 'SUCCESS' | 'DENIED' | 'WARNING';
}

export interface UserRoleRecord {
  id: string;
  name: string;
  email: string;
  role: 'Super Admin' | 'Chief Food Editor' | 'Event Manager' | 'Delivery Admin' | 'Support Agent';
  status: 'ACTIVE' | 'SUSPENDED' | 'PENDING_2FA';
  lastLogin: string;
  permissions: {
    canEditRestaurants: boolean;
    canApproveReviews: boolean;
    canManageBilling: boolean;
    canAccessSecurity: boolean;
    canTriggerBroadcasts: boolean;
  };
}
