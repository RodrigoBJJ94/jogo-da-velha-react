import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

export default function Winner() {
  const { whoIsWinner } = useContext(GameContext);

  if (!whoIsWinner) return <></>;
  return <p className="winner">Jogador {whoIsWinner} ganhou!</p>;
}
