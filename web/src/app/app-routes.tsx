import { lazy } from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import { UiLayout } from './ui/ui-layout';
import { RequireAuth } from './ui/required-auth';
import VaultplexCreatePage from './vaultplex/create';
import VaultplexListPage from './vaultplex/list';
import VaultplexManagePage from './vaultplex/manage';

const AccountListFeature = lazy(() => import('./account/account-list-feature'));
const AccountDetailFeature = lazy(
  () => import('./account/account-detail-feature')
);
const ClusterFeature = lazy(() => import('./cluster/cluster-feature'));
const DashboardFeature = lazy(() => import('./dashboard/dashboard-feature'));
const VaultplexDashboard = lazy(() => import('./vaultplex/dashboard'));

const links: { label: string; path: string }[] = [
  { label: 'Account', path: '/account' },
  { label: 'Clusters', path: '/clusters' },
];

const routes: RouteObject[] = [
  { path: '/account/', element: <AccountListFeature /> },
  { path: '/account/:address', element: <AccountDetailFeature /> },
  { path: '/clusters', element: <ClusterFeature /> },
  { path: '/dashboard/root', element: <RequireAuth><VaultplexDashboard /></RequireAuth> },
  { path: '/dashboard/create', element: <RequireAuth><VaultplexCreatePage /></RequireAuth> },
  { path: '/dashboard/list', element: <RequireAuth><VaultplexListPage /></RequireAuth> },
  { path: '/dashboard/manage', element: <RequireAuth><VaultplexManagePage /></RequireAuth> },
];

export function AppRoutes() {
  return (
    <UiLayout links={links}>
      {useRoutes([
        { index: true, element: <Navigate to={'/dashboard'} replace={true} /> },
        { path: '/dashboard', element: <DashboardFeature /> },
        ...routes,
        { path: '*', element: <Navigate to={'/dashboard'} replace={true} /> },
      ])}
    </UiLayout>
  );
}
