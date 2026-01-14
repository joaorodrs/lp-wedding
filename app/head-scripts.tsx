"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function HeadScripts() {
  const pathname = usePathname();

  useEffect(() => {
    // Meta Pixel PageView tracking
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "PageView");
    }
  }, [pathname]);

  return null;
}

// Funções auxiliares para eventos de conversão
export const trackAddToCart = () => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "AddToCart", {
      content_name: "Planner de Casamento 2026",
      content_category: "E-book",
      value: 97.0,
      currency: "BRL",
    });
  }
};

export const trackInitiateCheckout = () => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "InitiateCheckout", {
      content_name: "Planner de Casamento 2026",
      value: 97.0,
      currency: "BRL",
    });
  }
};

export const trackPurchase = () => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "Purchase", {
      content_name: "Planner de Casamento 2026",
      value: 97.0,
      currency: "BRL",
    });
  }
};
