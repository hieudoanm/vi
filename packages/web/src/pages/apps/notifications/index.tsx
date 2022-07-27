import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import AppsContainer from '../../../components/templates/AppsTemplate';

export type Notification = {};

export type NotificationsPageProps = {
  notifications: Notification[];
};

const NotificationsPage: NextPage<NotificationsPageProps> = ({
  notifications,
}) => {
  return (
    <AppsContainer title="Notifications">
      <div className="border rounded shadow">
        {notifications.length === 0 && (
          <div className="text-center py-8">No Notifications</div>
        )}
        {notifications.length > 0 && <div></div>}
      </div>
    </AppsContainer>
  );
};

export const getServerSideProps = () => {
  return { props: { notifications: [] } };
};

export default NotificationsPage;
