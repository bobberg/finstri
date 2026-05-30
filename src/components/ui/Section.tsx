import type { HTMLAttributes, ReactNode } from 'react';

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  innerClassName?: string;
};

function Section({ children, className = '', innerClassName = '', ...props }: SectionProps) {
  return (
    <section className={`scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28 ${className}`} {...props}>
      <div className={`mx-auto w-full max-w-7xl ${innerClassName}`}>{children}</div>
    </section>
  );
}

export default Section;