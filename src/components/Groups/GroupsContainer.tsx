import React from "react";
import { useSelector } from "react-redux";
import Groups from "./Groups";
import type { RootState } from '../../redux/redux-store';
import type { Group } from '../../redux/groups-reducer';

const GroupsContainer: React.FC = () => {
  const groupsData = useSelector((state: RootState) => state.groupsPage.groupsData as Group[]);
  return <Groups groupsData={groupsData} />;
};

export default GroupsContainer;
