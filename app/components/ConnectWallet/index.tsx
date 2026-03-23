"use client";
import React from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

const ConnectWallet = () => {
  // useAccount：获取当前钱包账户信息（地址、连接状态等）
  const { address, isConnected } = useAccount();
  // useConnect：获取连接操作函数和可用连接器列表
  const { connect, connectors } = useConnect();
  // useDisconnect：获取断开连接的操作函数
  const { disconnect } = useDisconnect();

  // 已连接状态：显示地址 + 断开按钮
  if (isConnected) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm text-orange-200 border border-orange-200 p-2 rounded-md">
          {/* 地址太长，只显示前6位和后4位 */}
          {address?.slice(0, 6)}...{address?.slice(-4)}
        </span>
        <span
          className="text-sm text-red-400 cursor-pointer border border-red-400 p-2 rounded-md hover:bg-red-400 hover:text-black transition-colors"
          onClick={() => disconnect()}
        >
          Disconnect
        </span>
      </div>
    );
  }

  // 未连接状态：点击后使用第一个可用连接器（injected，即浏览器插件钱包）连接
  return (
    <div className="flex">
      <span
        className="text-lt text-orange-200 cursor-pointer border border-orange-200 p-2 rounded-md hover:bg-orange-200 hover:text-black transition-colors"
        onClick={() => connect({ connector: connectors[0] })}
      >
        Connect
      </span>
    </div>
  );
};

export default ConnectWallet;
