import { NextPage } from 'next';
import React from 'react';
import AppContainer from '../../../components/templates/AppsTemplate';

export type Activity = {};

export type ActivitiesPageProps = {
  activities: Activity[];
};

const ActivitiesPage: NextPage<ActivitiesPageProps> = ({ activities = [] }) => {
  return (
    <AppContainer title="Activities">
      <div className="border rounded shadow">
        {activities.length === 0 && (
          <div className="text-center py-8">No Activities</div>
        )}
        {activities.length > 0 && <div></div>}
      </div>
    </AppContainer>
  );
};

export const getServerSideProps = () => {
  return { props: { activities: [] } };
};

export default ActivitiesPage;
