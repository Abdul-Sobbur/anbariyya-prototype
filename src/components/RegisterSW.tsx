"use client";

import { useEffect } from "react";
import { BASE_PATH } from "@/lib/site";

export default function RegisterSW() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register(`${BASE_PATH}/sw.js`, { scope: `${BASE_PATH}/` }).catch(() => {});
    }
  }, []);
  return null;
}
