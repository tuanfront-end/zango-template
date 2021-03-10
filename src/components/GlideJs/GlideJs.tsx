import React from "react";

export interface GlideJsProps {
  glideType?: "glide" | "glide-fade" | "glide-peek";
  containerClassName?: string;
}

const GlideJs: React.FC<GlideJsProps> = ({
  children,
  glideType = "glide",
  containerClassName = "",
}) => {
  return (
    <div className={`${glideType} ${containerClassName}`}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">{children}</ul>
      </div>
    </div>
  );
};

export default GlideJs;
