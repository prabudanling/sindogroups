"use client";

import {
  Shield, Cpu, Leaf, Database, TrendingUp, Truck, Zap, Building2,
  ShieldCheck, Anchor, Plane, Building, Bot, Scale, Wallet, Lock,
  Handshake, AlertTriangle, Monitor, Box, Calendar, Plug, Fuel, Ship,
  Activity, Wifi, Network, Globe, MapPin, Phone, Mail, MessageCircle,
  Send, ArrowRight, Menu, X, CheckCircle2, Sparkles, Layers, Gauge,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  shield: Shield, cpu: Cpu, leaf: Leaf, database: Database,
  "trending-up": TrendingUp, truck: Truck, zap: Zap, "building-2": Building2,
  "shield-check": ShieldCheck, anchor: Anchor, plane: Plane, building: Building,
  bot: Bot, scale: Scale, wallet: Wallet, lock: Lock, handshake: Handshake,
  "alert-triangle": AlertTriangle, monitor: Monitor, box: Box, calendar: Calendar,
  plug: Plug, fuel: Fuel, ship: Ship, activity: Activity, wifi: Wifi,
  network: Network, globe: Globe, "map-pin": MapPin, phone: Phone, mail: Mail,
  "message-circle": MessageCircle, send: Send, "arrow-right": ArrowRight,
  menu: Menu, x: X, "check-circle": CheckCircle2, sparkles: Sparkles,
  layers: Layers, gauge: Gauge,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const C = map[name] ?? Sparkles;
  return <C className={className} />;
}
