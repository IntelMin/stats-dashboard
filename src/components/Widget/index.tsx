import React from 'react';

import { block, classnames } from 'utils/classname';

import './style.scss';

const b = block('widget')

type Props = {
  className?: string;
}

function SectionComponent({ children }: React.PropsWithChildren<{}>) {
  return (
    <section className={b('section')}>
      {children}
    </section>
  )
}

type SubSectionProps = {
  align?: 'start' | 'end' | 'center';
}

function SubSectionComponent({ children, align }: React.PropsWithChildren<SubSectionProps>) {
  return (
    <section className={b('sub-section', { align })}>
      {children}
    </section>
  )
}


function Widget({ className, children }: React.PropsWithChildren<Props>) {
  return (
    <div className={classnames(b(), className)}>
      {children}
    </div>
  );
}

export const Component = React.memo(Widget);
export const Section = React.memo(SectionComponent);
export const SubSection = React.memo(SubSectionComponent);

export { Component as Widget }
