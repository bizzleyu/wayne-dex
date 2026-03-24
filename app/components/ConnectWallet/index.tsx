"use client";
import React, { useCallback, useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

const ConnectWallet: React.FC = () => {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleConnect = useCallback(() => {
    setErrorMsg(null);

    // 检查浏览器是否有钱包扩展
    const hasWalletExtension =
      typeof window !== "undefined" &&
      typeof (window as unknown as { ethereum?: unknown }).ethereum !==
        "undefined";

    if (!hasWalletExtension) {
      // 没有安装钱包，引导用户安装 MetaMask
      window.open("https://metamask.io/download/", "_blank");
      setErrorMsg("请先安装 MetaMask 钱包扩展");
      return;
    }

    // 查找可用的 injected connector
    const connector =
      connectors.find((c) => c.type === "injected") ?? connectors[0];
    if (!connector) {
      setErrorMsg("未检测到可用的连接器");
      return;
    }

    connect(
      { connector },
      {
        onError: (err) => {
          if (
            err.message.includes("rejected") ||
            err.message.includes("denied")
          ) {
            setErrorMsg("用户拒绝了连接请求");
          } else if (err.message.includes("Provider not found")) {
            setErrorMsg("未检测到钱包 Provider，请刷新页面后重试");
          } else {
            setErrorMsg(err.message);
          }
        },
      },
    );
  }, [connectors, connect]);

  if (isConnected) {
    return (
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#0d1a15] border border-[#1a3329] hover:bg-[#13261f] hover:border-[#234537] transition-all duration-300 group">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-40" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-green shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          </span>
          <span className="text-brand-green font-medium text-sm tracking-wide group-hover:text-emerald-300 transition-colors">
            {address?.slice(0, 6)}...{address?.slice(-4)}
          </span>
        </button>
        <button
          className="px-5 py-2 rounded-xl bg-red-950/30 border border-red-900/50 text-red-400 font-medium text-sm hover:bg-red-900/40 hover:text-red-300 hover:border-red-800/60 transition-all duration-300 shadow-[0_0_15px_rgba(220,38,38,0.1)] hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]"
          onClick={() => disconnect()}
        >
          断开
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <button
        className="px-5 py-2 rounded-xl bg-gradient-to-r from-brand-purple to-brand-pink text-white font-semibold text-sm hover:opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(181,88,246,0.3)] hover:shadow-[0_0_30px_rgba(181,88,246,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handleConnect}
        disabled={isPending}
      >
        {isPending ? "连接中..." : "连接钱包"}
      </button>
      {errorMsg && (
        <span className="text-red-400 text-xs max-w-[200px] leading-tight">
          {errorMsg}
        </span>
      )}
    </div>
  );
};

export default ConnectWallet;
