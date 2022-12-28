import { FC, ReactNode } from 'react';

interface EmptyLayoutProps {
  children: ReactNode;
}

const EmptyLayout: FC<EmptyLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default EmptyLayout;
