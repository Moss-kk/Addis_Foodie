'use client';

import React, { useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { DashboardView } from '../../components/admin/views/DashboardView';
import { RestaurantManagementView } from '../../components/admin/views/RestaurantManagementView';
import { ContentManagementView } from '../../components/admin/views/ContentManagementView';
import { MarketingView } from '../../components/admin/views/MarketingView';
import { AnalyticsView } from '../../components/admin/views/AnalyticsView';
import { SecurityView } from '../../components/admin/views/SecurityView';
import { SettingsView } from '../../components/admin/views/SettingsView';
import { AdminTab } from '../../types/admin';

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');

  return (
    <AdminLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {(activeTab === 'dashboard' || activeTab === 'reservations' || activeTab === 'reviews') && (
        <DashboardView onNavigateTab={setActiveTab} />
      )}

      {(activeTab === 'restaurants' || activeTab === 'verification') && (
        <RestaurantManagementView />
      )}

      {(activeTab === 'posts' || activeTab === 'media') && (
        <ContentManagementView />
      )}

      {activeTab === 'marketing' && <MarketingView />}

      {activeTab === 'analytics' && <AnalyticsView />}

      {activeTab === 'security' && <SecurityView />}

      {activeTab === 'settings' && <SettingsView />}
    </AdminLayout>
  );
}
