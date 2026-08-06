'use client';

import React, { useState } from 'react';
import { AdminLayout } from '../../../components/admin/AdminLayout';
import { SecurityView } from '../../../components/admin/views/SecurityView';
import { SettingsView } from '../../../components/admin/views/SettingsView';
import { AdminTab } from '../../../types/admin';

export default function SuperAdminPage() {
  const [activeTab, setActiveTab] = useState<AdminTab>('security');

  return (
    <AdminLayout
      activeTab={activeTab}
      onTabChange={setActiveTab}
      title="Super Admin Master Hub"
      subtitle="System Authority, RBAC Matrix & Security Control"
    >
      {activeTab === 'security' && <SecurityView />}
      {activeTab !== 'security' && <SecurityView />}
    </AdminLayout>
  );
}
