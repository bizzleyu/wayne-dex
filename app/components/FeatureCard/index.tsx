import React from "react";

interface FeatureItem {
  text: string;
}

interface FeatureCardProps {
  /** 图标组件 */
  icon: React.ReactNode;
  /** 标题 */
  title: string;
  /** 副标题 */
  subtitle: string;
  /** 特性列表 */
  features: FeatureItem[];
  /** 图表/装饰区域 */
  chart: React.ReactNode;
  /** 操作按钮 */
  action: React.ReactNode;
  /** 右侧统计数字 */
  statValue: string;
  /** 统计标签 */
  statLabel: string;
  /** 主题色 (brand color) */
  themeColor: "orange" | "cyan";
}

const themeConfig = {
  orange: {
    dotColor: "bg-brand-orange",
    iconBg: "bg-gradient-to-br from-[#f59e0b] to-[#d97706]",
    iconShadow: "shadow-[0_0_20px_rgba(245,158,11,0.4)]",
    subtitleColor: "text-brand-orange",
    statColor: "text-brand-orange",
    statGlow: "drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]",
    hoverShadow:
      "hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.2)]",
    hoverBorder: "hover:border-brand-orange/40",
    overlayGradient: "bg-gradient-to-br from-brand-orange/[0.08] to-transparent",
  },
  cyan: {
    dotColor: "bg-brand-cyan",
    iconBg: "bg-gradient-to-br from-[#06b6d4] to-[#0284c7]",
    iconShadow: "shadow-[0_0_20px_rgba(6,182,212,0.4)]",
    subtitleColor: "text-brand-cyan",
    statColor: "text-brand-cyan",
    statGlow: "drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]",
    hoverShadow:
      "hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.2)]",
    hoverBorder: "hover:border-brand-cyan/40",
    overlayGradient: "bg-gradient-to-bl from-brand-cyan/[0.08] to-transparent",
  },
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  subtitle,
  features,
  chart,
  action,
  statValue,
  statLabel,
  themeColor,
}) => {
  const theme = themeConfig[themeColor];

  return (
    <div
      className={`glass-panel rounded-2xl p-5 flex flex-col relative overflow-hidden group transition-all duration-500 hover:-translate-y-1 ${theme.hoverShadow} ${theme.hoverBorder}`}
    >
      {/* Hover overlay */}
      <div
        className={`absolute inset-0 ${theme.overlayGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      {/* Header */}
      <div className="flex items-center gap-4 mb-4 relative z-10">
        <div
          className={`w-12 h-12 rounded-xl ${theme.iconBg} flex items-center justify-center ${theme.iconShadow} shrink-0`}
        >
          {icon}
        </div>
        <div>
          <h2 className="text-xl font-bold text-white tracking-wide">
            {title}
          </h2>
          <p className={`${theme.subtitleColor} text-xs font-medium`}>
            {subtitle}
          </p>
        </div>
      </div>

      {/* Features + Chart */}
      <div className="flex gap-3 mb-4 relative z-10">
        <ul className="flex-1 space-y-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-slate-400 text-xs"
            >
              <span
                className={`w-1 h-1 rounded-full ${theme.dotColor}`}
              />
              {feature.text}
            </li>
          ))}
        </ul>
        {chart}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between relative z-10 mt-auto pt-3 border-t border-white/5">
        {action}
        <div className="text-right">
          <span
            className={`text-2xl font-black ${theme.statColor} ${theme.statGlow}`}
          >
            {statValue}
          </span>
          <span className="text-slate-500 text-xs block">{statLabel}</span>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
