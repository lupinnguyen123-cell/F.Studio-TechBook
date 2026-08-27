import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { Brand } from '../types';

export function usePresence(currentBrandId: Brand | null) {
  const [presence, setPresence] = useState<Record<string, number>>({});
  const [globalOnline, setGlobalOnline] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const socket = io();
    socketRef.current = socket;

    socket.on('connect', () => setIsConnected(true));
    socket.on('disconnect', () => setIsConnected(false));
    socket.on('connect_error', () => setIsConnected(false));

    socket.on('presence_update', (data: { brandPresence: Record<string, number>; globalOnline: number }) => {
      setPresence(data.brandPresence);
      setGlobalOnline(data.globalOnline);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    socketRef.current?.emit('join_brand', currentBrandId || 'Home');
  }, [currentBrandId]);

  return { presence, globalOnline, isConnected };
}
