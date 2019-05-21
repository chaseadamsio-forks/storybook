import React from 'react';
import { styled } from '@storybook/theming';

import { getBlockBackgroundStyle } from './BlockBackgroundStyles';

const ItemLabel = styled.div({
  marginLeft: 10,
  lineHeight: 1.2,
});

const ItemSpecimen = styled.div(({ theme }) => ({
  ...getBlockBackgroundStyle(theme),
  overflow: 'hidden',
  height: 40,
  width: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 'none',

  '> img, > svg': {
    width: 20,
    height: 20,
  },
}));

const Item = styled.div({
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  flex: '0 1 calc(20% - 10px)',
  minWidth: 120,

  margin: '0px 10px 30px 0',
});

const List = styled.div({
  display: 'flex',
  flexFlow: 'row wrap',
});

interface IconItemProps {
  name: string;
}

export const IconItem: React.FunctionComponent<IconItemProps> = ({ name, children }) => {
  return (
    <Item>
      <ItemSpecimen>{children}</ItemSpecimen>
      <ItemLabel>{name}</ItemLabel>
    </Item>
  );
};

export const IconGallery: React.FunctionComponent = ({ children, ...props }) => {
  return <List {...props}>{children}</List>;
};