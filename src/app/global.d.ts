declare module 'react-outside-click-handler' {
    import { ComponentType, ReactNode } from 'react';
  
    interface OutsideClickHandlerProps {
      children: ReactNode;
      onOutsideClick?: () => void;
      disabled?: boolean;
      display?: string;
    }
  
    const OutsideClickHandler: ComponentType<OutsideClickHandlerProps>;
    export default OutsideClickHandler;
  }
  