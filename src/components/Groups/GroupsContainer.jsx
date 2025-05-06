import React from "react";
import { useSelector } from "react-redux";
import Groups from "./Groups";

const GroupsContainer = () => {
  const groupsData = useSelector(state => state.groupsPage.groupsData);
  return <Groups groupsData={groupsData} />;
};

export default GroupsContainer;
