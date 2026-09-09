"use client";

import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import fitty from "fitty";

export interface FitProps {
  children: React.ReactNode;
  className?: string;
  glitch?: boolean;
  maxSize?: number;
}

export const Fit = ({
  children,
  className,
  glitch = true,
  maxSize = 500,
}: FitProps) => {
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (h1Ref.current) {
      const instance = fitty(h1Ref.current, { maxSize });
      return () => {
        instance.unsubscribe();
      };
    }
  }, [maxSize]);

  return (
    <div className={classNames("fit", className)}>
      <h1 className={glitch ? "glitch" : undefined} ref={h1Ref}>
        {children}
      </h1>
    </div>
  );
};
