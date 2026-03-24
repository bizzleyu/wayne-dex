"use client";
import React from "react";
import Header from "@/app/components/Header";
import ParticleCanvas from "@/app/components/ParticleCanvas";
import BackgroundEffects from "@/app/components/BackgroundEffects";
import FeatureCard from "@/app/components/FeatureCard";
import StatsCard from "@/app/components/StatsCard";

/** 合约交易卡片 - 柱状图装饰 */
const TradingChart: React.FC = () => (
  <div className="w-24 h-16 rounded-lg bg-surface border border-white/5 flex items-end justify-center pb-2 px-2 gap-0.5">
    <div className="w-1.5 bg-brand-orange/60 rounded-t" style={{ height: "40%" }} />
    <div className="w-1.5 bg-brand-orange/80 rounded-t" style={{ height: "70%" }} />
    <div className="w-1.5 bg-brand-orange rounded-t" style={{ height: "55%" }} />
    <div className="w-1.5 bg-brand-orange/70 rounded-t" style={{ height: "85%" }} />
    <div className="w-1.5 bg-brand-orange/90 rounded-t" style={{ height: "60%" }} />
    <div className="w-1.5 bg-brand-orange/50 rounded-t" style={{ height: "45%" }} />
  </div>
);

/** 交易仓位卡片 - 折线图装饰 */
const PositionChart: React.FC = () => (
  <div className="w-24 h-16 rounded-lg bg-surface border border-white/5 p-2">
    <svg viewBox="0 0 80 40" className="w-full h-full">
      <polyline
        points="0,35 15,25 30,30 45,15 60,20 75,8 80,12"
        fill="none"
        stroke="#06b6d4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="75" cy="8" r="3" fill="#06b6d4" />
    </svg>
  </div>
);

/** 闪电图标 */
const LightningIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 256 256"
    fill="white"
  >
    <path d="M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17Z" />
  </svg>
);

/** 柱状图图标 */
const ChartBarIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 256 256"
    fill="white"
  >
    <path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z" />
  </svg>
);

/** 对勾圆形图标 */
const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 256 256"
    fill="currentColor"
    className={className}
  >
    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" />
  </svg>
);

/** 时钟图标 */
const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 256 256"
    fill="currentColor"
    className={className}
  >
    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z" />
  </svg>
);

/** 以太坊图标 */
const CurrencyEthIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 256 256"
    fill="currentColor"
    className={className}
  >
    <path d="M222.29,123.06l-88-112a8,8,0,0,0-12.58,0l-88,112a8,8,0,0,0-.1,9.19l88,120a8,8,0,0,0,12.78,0l88-120A8,8,0,0,0,222.29,123.06ZM136,39.57l67.42,85.82L136,156.28Zm-16,116.71L52.58,125.39,120,39.57Zm0,17.56v43.74L53.84,138.11Zm16,0,66.16-79.47L136,217.58Z" />
  </svg>
);

const HomePage: React.FC = () => {
  return (
    <>
      {/* Particle background */}
      <ParticleCanvas />

      {/* Gradient background effects */}
      <BackgroundEffects />

      {/* Main content */}
      <main className="relative z-10 w-full max-w-[1440px] px-8 flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Hero section */}
        <section className="flex flex-col items-center justify-center mt-8 mb-10 text-center">
          <h1 className="text-[6rem] font-black tracking-tight mb-4 flex items-center justify-center gap-5 leading-none">
            <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              CINA
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-purple via-[#d946ef] to-brand-pink text-glow">
              交易所
            </span>
          </h1>
          <p className="text-slate-400 text-base font-medium max-w-xl tracking-wide opacity-80">
            智能合约交易平台，支持杠杆交易、仓位管理
          </p>
        </section>

        {/* Feature cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-5xl mx-auto mb-6">
          {/* Trading card */}
          <FeatureCard
            themeColor="orange"
            icon={<LightningIcon />}
            title="合约交易"
            subtitle="智能合约交易平台"
            features={[
              { text: "多交易对支持" },
              { text: "实时价格更新" },
              { text: "低手续费" },
            ]}
            chart={<TradingChart />}
            action={
              <a
                href="#"
                className="px-5 py-2 rounded-lg bg-gradient-to-r from-brand-orange to-[#d97706] text-white font-semibold text-sm shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all hover:scale-105"
              >
                开始交易
              </a>
            }
            statValue="0.1%"
            statLabel="手续费"
          />

          {/* Position card */}
          <FeatureCard
            themeColor="cyan"
            icon={<ChartBarIcon />}
            title="交易仓位"
            subtitle="仓位管理系统"
            features={[
              { text: "实时盈亏监控" },
              { text: "仓位历史记录" },
              { text: "风险控制工具" },
            ]}
            chart={<PositionChart />}
            action={
              <a
                href="#"
                className="px-5 py-2 rounded-lg border border-brand-cyan/50 text-brand-cyan font-semibold text-sm hover:bg-brand-cyan/10 hover:border-brand-cyan transition-all"
              >
                查看仓位
              </a>
            }
            statValue="24/7"
            statLabel="监控"
          />
        </section>

        {/* Stats section */}
        <section className="w-full max-w-5xl mx-auto mb-6">
          <div className="grid grid-cols-3 gap-4">
            <StatsCard
              icon={<CheckCircleIcon className="text-brand-green text-xl" />}
              value="100%"
              label="交易成功率"
              valueColor="#10b981"
              glowColor="rgba(16,185,129,0.4)"
            />
            <StatsCard
              icon={<ClockIcon className="text-brand-cyan text-xl" />}
              value="24/7"
              label="全天候服务"
              valueColor="#06b6d4"
              glowColor="rgba(6,182,212,0.4)"
            />
            <StatsCard
              icon={<CurrencyEthIcon className="text-[#a855f7] text-xl" />}
              value="0.1%"
              label="交易手续费"
              valueColor="#a855f7"
              glowColor="rgba(168,85,247,0.4)"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
