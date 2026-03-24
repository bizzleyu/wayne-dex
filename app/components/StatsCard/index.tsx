import React from "react";

interface StatsCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  valueColor: string;
  glowColor: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  icon,
  value,
  label,
  valueColor,
  glowColor,
}) => {
  return (
    <div className="glass-panel rounded-xl p-5 flex flex-col items-center justify-center text-center">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span
          className={`text-3xl font-black tracking-tighter`}
          style={{
            color: valueColor,
            filter: `drop-shadow(0 0 15px ${glowColor})`,
          }}
        >
          {value}
        </span>
      </div>
      <span className="text-slate-400 text-xs font-medium">{label}</span>
    </div>
  );
};

export default StatsCard;
