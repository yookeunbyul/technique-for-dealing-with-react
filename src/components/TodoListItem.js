import React from 'react';
import styled from 'styled-components';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;
  return (
    <ListItem>
      <CheckBox checked={checked} onClick={() => onToggle(id)}>
        {checked ? <StyledMdCheckBox /> : <StyledMdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </CheckBox>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </ListItem>
  );
};

const ListItem = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;

  &:nth-child(even) {
    background: #f8f9fa;
  }

  .remove {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #ff6b6b;
    cursor: pointer;
    &:hover {
      color: #ff8787;
    }
  }

  /* 엘리먼트 사이 */
  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

const CheckBox = styled.div`
  cursor: pointer;
  display: flex;
  flex: 1;
  align-items: center;

  .text {
    margin-left: 0.5rem;
    flex: 1;
    color: ${(props) => (props.checked ? '#adb5bd' : 'black')};
    text-decoration: ${(props) => props.checked && 'line-through'};
  }
`;

const StyledMdCheckBoxOutlineBlank = styled(MdCheckBoxOutlineBlank)`
  font-size: 1.5rem;
`;

const StyledMdCheckBox = styled(MdCheckBox)`
  font-size: 1.5rem;
  color: #22b8cf;
`;

export default TodoListItem;
