import React from "react";
import s from "./Groups.module.css";
import type { Group } from '../../redux/groups-reducer';

interface GroupsProps {
  groupsData: Group[];
}

interface GroupItemProps {
  image: string;
  name: string;
  type: string;
  subsCount: string;
}

const GroupItem: React.FC<GroupItemProps> = ({ image, name, type, subsCount }) => (
  <div className={s.element}>
    <img src={image} alt="" />
    <div>
      <button className={s.btn} type="button">{name}</button>
      <p>{type}</p>
      <p>{subsCount} <span> подписчиков</span></p>
    </div>
  </div>
);

const Groups: React.FC<GroupsProps> = (props) => {
  const groupElements = props.groupsData.map((g) => (
    <GroupItem
      key={g.id}
      image={g.image}
      name={g.name}
      type={g.type}
      subsCount={g.subsCount}
    />
  ));
  return <div className={s.groups_wrapper}>{groupElements}</div>;
};

export default Groups;
