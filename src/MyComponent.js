import React from 'react';

const MyComponent = ({ name }) => {
  return (
    <div>
      <div>안녕하세요, 제 이름은 {name}입니다.</div>
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름',
};

export default MyComponent;
