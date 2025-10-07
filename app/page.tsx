'use client';

import Link from 'next/link';
import { Users, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatsCard from "@/components/StatsCard";
import SessionCard from "@/components/SessionCard";
import { useQuery } from "@tanstack/react-query";
import ScrollAnimation from "@/components/ScrollAnimation";

interface Session {
  connected: boolean;
  user: string;
  jid: string;
}

interface SessionsResponse {
  total: number;
  sessions: Record<string, Session>;
  server_uptime: number;
}

export default function Dashboard() {
  const { data, isLoading, error } = useQuery<SessionsResponse>({
    queryKey: ['/api/sessions'],
    queryFn: async () => {
      const response = await fetch('/api/sessions', { 
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch sessions');
      }
      return response.json();
    },
    refetchOnMount: true,
    staleTime: 0,
  });

  const sessionEntries = data?.sessions ? Object.entries(data.sessions) : [];

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ScrollAnimation direction="down" className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="w-full sm:w-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Dashboard</h2>
          </div>
        
          <Link href="/pair" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-500/50 smooth-transition hover:scale-105"
              data-testid="button-new-pair"
            >
              <Plus className="mr-2 h-5 w-5" />
              New Pair
            </Button>
          </Link>
        </ScrollAnimation>

        <ScrollAnimation direction="scale" delay={0.1} className="mb-8">
          <StatsCard
            title="Total Active Users"
            value={data?.total || 0}
            icon={<Users className="h-6 w-6 text-purple-400" />}
          />
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.2} className="mb-6 flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-semibold text-white bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Active Sessions</h3>
        </ScrollAnimation>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {sessionEntries.length > 0 ? (
            sessionEntries.map(([phoneNumber, session], index) => (
              <ScrollAnimation
                key={phoneNumber}
                direction="up"
                delay={0.3 + index * 0.1}
              >
                <SessionCard
                  phoneNumber={phoneNumber}
                  jid={session.jid}
                  connected={session.connected}
                />
              </ScrollAnimation>
            ))
          ) : (
            <ScrollAnimation direction="scale" delay={0.3} className="col-span-full">
              <div className="text-center py-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg">
                <p className="text-white/60">No active sessions. Click &quot;New Pair&quot; to get started!</p>
              </div>
            </ScrollAnimation>
          )}
        </div>

        <ScrollAnimation direction="up" delay={0.5} className="mt-16 pb-4">
          <footer className="text-center">
            <p className="text-xs text-white/50">
              create by 𝘴น𝚖𝔞ꪦ_𝗿ǿⲩ 🍉 ©2025
            </p>
          </footer>
        </ScrollAnimation>
      </div>
    </div>
  );
}
